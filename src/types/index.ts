/**
 * Modelos de dados para a plataforma Nereu Lima Advogados Associados
 * OAB/RS 2828 — Sociedade de Advogados
 */

export type UserRole = 'client' | 'lawyer' | 'admin' | 'staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface Lawyer {
  id: string;
  name: string;
  slug: string;
  title: string;
  role: string;
  oab: string;
  photoUrl: string;
  bio: string;
  credentials: string[];
  historicalHighlights?: string[];
  quote?: string;
  email?: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  keyTopics: string[];
  applicableCourts: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedArticleSlugs?: string[];
}

export type LeadStatus = 'novo' | 'em_analise' | 'contatado' | 'convertido' | 'arquivado';

export interface Lead {
  id: string;
  protocolNumber: string;
  createdAt: string;
  updatedAt: string;
  status: LeadStatus;
  situation: string; // ex: 'Estou sendo investigado', 'Recebi uma intimação', etc.
  description: string;
  locationStateCity?: string;
  courtOrPoliceStation?: string;
  hasDocuments: boolean;
  documentFiles?: {
    name: string;
    size: string;
    type: string;
  }[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  preferredContactMethod: 'whatsapp' | 'telefone' | 'email';
  preferredTime?: 'manha' | 'tarde' | 'urgente';
  notes?: string;
  assignedLawyerId?: string;
}

export interface Client {
  id: string;
  userId?: string;
  name: string;
  documentNumber: string; // CPF / CNPJ
  email: string;
  phone: string;
  address?: string;
  casesCount: number;
  status: 'ativo' | 'concluido' | 'suspenso';
  createdAt: string;
}

export type CaseStatus = 'em_andamento' | 'fase_recursal' | 'inquerito' | 'audiencia' | 'julgado' | 'arquivado';

export interface Case {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  code: string; // identificador interno
  nature: string; // ex: "Ação Penal", "Inquérito Policial", "Habeas Corpus"
  status: CaseStatus;
  practiceAreaId: string;
  leadLawyerId: string;
  coLawyerIds?: string[];
  initialDate: string;
  summary: string;
  confidentiality: 'sigiloso' | 'padrao';
}

export interface ProcessMovement {
  id: string;
  processId: string;
  date: string;
  title: string;
  description: string;
  court: string;
  sourceUrl?: string;
  isImportant?: boolean;
}

export interface Process {
  id: string;
  caseId: string;
  processNumber: string; // Numeração CNJ: 0000000-00.0000.0.00.0000
  court: string; // ex: TJRS - 1ª Vara do Júri de Porto Alegre / TRF4 / STJ / STF
  branch: 'Estadual' | 'Federal' | 'Superior';
  judgeOrRapporteur?: string;
  status: string;
  distributionDate: string;
  lastMovementDate: string;
  movements: ProcessMovement[];
}

export interface LegalDocument {
  id: string;
  caseId?: string;
  processId?: string;
  title: string;
  category: 'peticao' | 'sentenca' | 'acordao' | 'procuracao' | 'laudo' | 'despacho' | 'outro';
  fileName: string;
  fileSize: string;
  uploadedAt: string;
  uploadedBy: string;
  fileUrl?: string;
  isConfidential: boolean;
}

export interface Appointment {
  id: string;
  caseId?: string;
  title: string;
  type: 'audiencia' | 'sustentacao_oral' | 'juri' | 'reuniao_cliente' | 'prazo_fatal' | 'visita_carceraria';
  date: string;
  time: string;
  location: string;
  lawyerName: string;
  clientName?: string;
  notes?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  recipientId: string;
  caseId?: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
  summary: string;
  sourceCitation?: string;
  sourceUrl?: string;
}

/**
 * Procedência e Rastreabilidade de Dados Externos (Data Provenance)
 */
export type LegalSourceType = 'datajud' | 'stf' | 'stj' | 'tjrs' | 'trf4' | 'planalto' | 'diario_oficial';

export interface LegalSource {
  id: string;
  code: LegalSourceType;
  name: string;
  jurisdiction: string;
  description: string;
  officialPortalUrl: string;
  apiType: 'REST' | 'OData' | 'OpenData' | 'PublicGazette';
  status: 'ativo' | 'homologacao' | 'sincronizado';
  lastSyncAt: string;
}

export interface LegalDecision {
  id: string;
  processNumber: string;
  court: string; // STF, STJ, TJRS, TRF4
  judgingBody: string; // ex: 2ª Turma, 5ª Câmara Criminal
  rapporteur?: string; // Relator
  decisionDate: string;
  subject: string;
  headnote: string; // Ementa oficial
  content: string; // Íntegra ou trecho principal
  // Metadados estritos de proveniência:
  source: string;
  source_url: string;
  source_type: LegalSourceType;
  collected_at: string;
  published_at?: string;
}

export interface LegislationItem {
  id: string;
  lawNumber: string; // Ex: Lei 13.964/2019 (Pacote Anticrime)
  year: number;
  officialTitle: string;
  summary: string;
  relevantPenalImpact: string;
  source: string;
  source_url: string;
  source_type: 'planalto' | 'diario_oficial';
  collected_at: string;
  published_at: string;
}

export interface RadarEvent {
  id: string;
  title: string;
  type: 'sumula' | 'repercussao_geral' | 'recurso_repetitivo' | 'mudanca_legislativa' | 'jurisprudencia_relevante';
  courtOrAgency: string;
  summary: string;
  date: string;
  importance: 'alta' | 'media' | 'urgente';
  source_url: string;
  source_name: string;
  collected_at: string;
}
