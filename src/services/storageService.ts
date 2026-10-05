import { Lead, Message } from '../types';
import { INITIAL_LEADS, MOCK_MESSAGES } from '../data/mockPlatformData';

const LEADS_KEY = 'nereu_lima_leads_v1';
const MESSAGES_KEY = 'nereu_lima_messages_v1';

export function getStoredLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_LEADS;
  }
}

export function saveLead(lead: Omit<Lead, 'id' | 'protocolNumber' | 'createdAt' | 'updatedAt' | 'status'>): Lead {
  const existing = getStoredLeads();
  const year = new Date().getFullYear();
  const randomSeq = Math.floor(1000 + Math.random() * 9000);
  const protocol = `NL-${year}-${randomSeq}`;
  
  const newLead: Lead = {
    ...lead,
    id: `lead-${Date.now()}`,
    protocolNumber: protocol,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'novo',
  };

  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(LEADS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save lead in localStorage', err);
  }
  return newLead;
}

export function updateLeadStatus(leadId: string, status: Lead['status'], assignedLawyerId?: string): Lead[] {
  const existing = getStoredLeads();
  const updated = existing.map(item => {
    if (item.id === leadId) {
      return {
        ...item,
        status,
        assignedLawyerId: assignedLawyerId || item.assignedLawyerId,
        updatedAt: new Date().toISOString(),
      };
    }
    return item;
  });
  try {
    localStorage.setItem(LEADS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update lead', err);
  }
  return updated;
}

export function getStoredMessages(): Message[] {
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    if (!raw) {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(MOCK_MESSAGES));
      return MOCK_MESSAGES;
    }
    return JSON.parse(raw);
  } catch {
    return MOCK_MESSAGES;
  }
}

export function sendClientMessage(senderName: string, content: string): Message {
  const existing = getStoredMessages();
  const newMsg: Message = {
    id: `msg-${Date.now()}`,
    senderId: 'cli-001',
    senderName,
    senderRole: 'client',
    recipientId: 'dr-nereu-lima-filho',
    caseId: 'case-02',
    content,
    timestamp: new Date().toISOString(),
    read: false,
  };
  const updated = [...existing, newMsg];
  try {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to store message', err);
  }
  return newMsg;
}
