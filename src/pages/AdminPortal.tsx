import { useState, useEffect } from 'react';
import { 
  Shield, Scale, Users, FileText, Calendar, Inbox, Search, 
  ExternalLink, CheckCircle2, AlertTriangle, ArrowLeft, RefreshCw,
  Sparkles, Filter, Lock, BookOpen, Clock, ChevronRight
} from 'lucide-react';
import { getStoredLeads, updateLeadStatus } from '../services/storageService';
import { Lead } from '../types';
import { LAWYERS, FIRM_DETAILS } from '../data/firmData';
import { MOCK_CASES, MOCK_PROCESSES, MOCK_APPOINTMENTS } from '../data/mockPlatformData';
import { 
  OFFICIAL_LEGAL_SOURCES, 
  INDEXED_LEGAL_DECISIONS, 
  INDEXED_LEGISLATION, 
  RADAR_EVENTS 
} from '../services/legalSources';
import { 
  generateInternalCaseBriefing, 
  summarizeLegalDecision, 
  searchIndexedDecisions,
  LEGAL_AI_ETHICAL_NOTICE, 
  AiInternalBriefing 
} from '../services/ai/legalAiAssistant';
import SEOHead from '../components/SEOHead';

interface AdminPortalProps {
  onNavigate: (path: string) => void;
  initialTab?: string;
}

export default function AdminPortal({ onNavigate, initialTab = 'dashboard' }: AdminPortalProps) {
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'atendimento' | 'casos' | 'jurisprudencia' | 'radar' | 'legislacao' | 'fontes'
  >((initialTab as any) || 'dashboard');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [aiBriefing, setAiBriefing] = useState<AiInternalBriefing | null>(null);

  // Jurisprudência state
  const [jurisSearchTerm, setJurisSearchTerm] = useState('');
  const [selectedCourtFilter, setSelectedCourtFilter] = useState('todos');

  useEffect(() => {
    const loaded = getStoredLeads();
    setLeads(loaded);
    if (loaded.length > 0 && !selectedLead) {
      setSelectedLead(loaded[0]);
    }
  }, []);

  const handleStatusChange = (leadId: string, newStatus: Lead['status']) => {
    const updated = updateLeadStatus(leadId, newStatus);
    setLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const handleAssignLawyer = (leadId: string, lawyerId: string) => {
    const updated = updateLeadStatus(leadId, selectedLead?.status || 'novo', lawyerId);
    setLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(prev => prev ? { ...prev, assignedLawyerId: lawyerId } : null);
    }
  };

  const handleGenerateAiBriefing = (lead: Lead) => {
    const briefing = generateInternalCaseBriefing(lead);
    setAiBriefing(briefing);
  };

  const filteredDecisions = searchIndexedDecisions(jurisSearchTerm).filter(d => {
    if (selectedCourtFilter === 'todos') return true;
    return d.source_type === selectedCourtFilter;
  });

  return (
    <div className="min-h-screen bg-[#080c13] text-[#cbd5e1]">
      <SEOHead
        title="Painel Interno da Banca | Nereu Lima Advogados"
        description="Sistema de gestão processual, triagem de atendimentos e inteligência jurídica do escritório Nereu Lima Advogados Associados."
        canonicalPath="/admin"
      />

      {/* Header Admin */}
      <div className="border-b border-[#1c2434] bg-[#0c111a] px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao Site Público</span>
            </button>
            <span className="text-[#334155]">•</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#1e293b] text-[#c5a059] flex items-center justify-center font-cinzel text-xs font-bold border border-[#c5a059]">
                NL
              </div>
              <span className="font-cinzel text-xs font-bold text-white tracking-wider">
                Painel da Banca Jurídica — {FIRM_DETAILS.oabSociety}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-[11px] font-semibold">
              Banca Ativa: Porto Alegre / Sede Matriz
            </span>
          </div>
        </div>
      </div>

      {/* Subnavegação de Módulos */}
      <div className="border-b border-[#1c2434] bg-[#090d14] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 text-xs">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'dashboard' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Visão Geral (Painel)
          </button>
          <button
            onClick={() => setActiveTab('atendimento')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'atendimento' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Triagem de Atendimentos ({leads.filter(l => l.status === 'novo').length} novos)</span>
          </button>
          <button
            onClick={() => setActiveTab('casos')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'casos' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Casos & Processos ({MOCK_CASES.length})
          </button>
          <button
            onClick={() => setActiveTab('jurisprudencia')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'jurisprudencia' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Jurisprudência dos Tribunais</span>
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'radar' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Radar Jurídico ({RADAR_EVENTS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('legislacao')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'legislacao' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Legislação Federal
          </button>
          <button
            onClick={() => setActiveTab('fontes')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'fontes' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Fontes & Conectores ({OFFICIAL_LEGAL_SOURCES.length})
          </button>
        </div>
      </div>

      {/* Conteúdo do Painel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Novos Atendimentos (Triagem)</div>
                <div className="text-2xl font-cinzel font-bold text-white mt-1">
                  {leads.filter(l => l.status === 'novo').length}
                </div>
                <button
                  onClick={() => setActiveTab('atendimento')}
                  className="text-[11px] text-[#c5a059] mt-2 block hover:underline"
                >
                  Abrir fila de triagem →
                </button>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Casos Ativos da Banca</div>
                <div className="text-2xl font-cinzel font-bold text-white mt-1">{MOCK_CASES.length}</div>
                <div className="text-[11px] text-[#94a3b8] mt-2">DEMA & TJRS 4ª Câmara</div>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Próxima Sustentação Oral</div>
                <div className="text-base font-cinzel font-bold text-white mt-1">18/10 — TJRS</div>
                <div className="text-[11px] text-emerald-400 mt-2">Dr. Nereu Lima</div>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Fontes Oficiais Conectadas</div>
                <div className="text-2xl font-cinzel font-bold text-white mt-1">{OFFICIAL_LEGAL_SOURCES.length}</div>
                <div className="text-[11px] text-[#94a3b8] mt-2">CNJ, STF, STJ, TJRS, TRF4</div>
              </div>
            </div>

            {/* Painel de Duas Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Atendimentos Recentes */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                    <Inbox className="w-4 h-4 text-[#c5a059]" />
                    <span>Últimos Atendimentos Recebidos</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('atendimento')}
                    className="text-xs text-[#c5a059] hover:underline"
                  >
                    Ver todos
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.slice(0, 3).map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => { setSelectedLead(lead); setActiveTab('atendimento'); }}
                      className="p-4 rounded-lg bg-[#0e1420] border border-[#20293b] hover:border-[#c5a059]/60 cursor-pointer transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[#c5a059] font-bold">{lead.protocolNumber}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                          lead.status === 'novo' ? 'bg-amber-950/40 text-amber-400 border border-amber-800/40' : 'bg-[#152030] text-[#94a3b8]'
                        }`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white">{lead.contactName}</div>
                      <div className="text-xs text-[#94a3b8] line-clamp-2">{lead.situation} — {lead.description}</div>
                      <div className="text-[11px] text-[#64748b]">
                        Contato: {lead.contactPhone} ({lead.preferredContactMethod})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radar Jurídico dos Tribunais */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c5a059]" />
                    <span>Radar dos Tribunais Superiores</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('radar')}
                    className="text-xs text-[#c5a059] hover:underline"
                  >
                    Ver radar
                  </button>
                </div>

                <div className="space-y-3">
                  {RADAR_EVENTS.map((item) => (
                    <div key={item.id} className="p-4 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#c5a059] font-semibold">{item.courtOrAgency}</span>
                        <span className="text-[#64748b]">{item.date}</span>
                      </div>
                      <div className="text-xs font-semibold text-white leading-snug">{item.title}</div>
                      <p className="text-[11px] text-[#94a3b8] line-clamp-2">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATENDIMENTO TAB (TRIAGEM DE LEADS) */}
        {activeTab === 'atendimento' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Fila de Triagem de Atendimento Sigiloso
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Avaliação de novos contatos recebidos através do portal institucional de atendimento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Lista Lateral de Leads */}
              <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => { setSelectedLead(lead); setAiBriefing(null); }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedLead?.id === lead.id
                        ? 'bg-[#152030] border-[#c5a059]'
                        : 'bg-[#0e1420] border-[#20293b] hover:border-[#334155]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-[#c5a059] font-semibold">{lead.protocolNumber}</span>
                      <span className="text-[10px] text-[#64748b]">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white">{lead.contactName}</div>
                    <div className="text-xs text-[#94a3b8] truncate mt-0.5">{lead.situation}</div>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-[#cbd5e1]">{lead.contactPhone}</span>
                      <span className={`px-2 py-0.2 rounded text-[10px] uppercase font-semibold ${
                        lead.status === 'novo' ? 'bg-amber-950/40 text-amber-400' : 'bg-[#101926] text-[#94a3b8]'
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detalhes do Lead Selecionado e Triagem com IA */}
              <div className="lg:col-span-7 space-y-6">
                {selectedLead ? (
                  <div className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c2434] pb-4">
                      <div>
                        <span className="text-xs text-[#c5a059] font-mono font-bold block">
                          Protocolo {selectedLead.protocolNumber}
                        </span>
                        <h3 className="text-lg font-cinzel font-bold text-white">
                          {selectedLead.contactName}
                        </h3>
                        <div className="text-xs text-[#94a3b8]">
                          {selectedLead.contactPhone} • {selectedLead.contactEmail || 'E-mail não informado'}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={selectedLead.status}
                          onChange={(e: any) => handleStatusChange(selectedLead.id, e.target.value)}
                          className="px-2.5 py-1.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                        >
                          <option value="novo">Status: Novo</option>
                          <option value="em_analise">Status: Em Análise</option>
                          <option value="contatado">Status: Contatado</option>
                          <option value="convertido">Status: Convertido em Caso</option>
                          <option value="arquivado">Status: Arquivado</option>
                        </select>
                      </div>
                    </div>

                    {/* Dados Fatuais do Lead */}
                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="text-[#64748b] block font-semibold">Situação Informada:</span>
                        <span className="text-white font-medium text-sm">{selectedLead.situation}</span>
                      </div>

                      <div>
                        <span className="text-[#64748b] block font-semibold">Relato do Cliente:</span>
                        <p className="text-[#cbd5e1] font-lora text-sm bg-[#121926] p-3 rounded border border-[#1e2738] mt-1 leading-relaxed">
                          {selectedLead.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[#64748b] block">Comarca / Estado:</span>
                          <span className="text-white">{selectedLead.locationStateCity || 'Não especificado'}</span>
                        </div>
                        <div>
                          <span className="text-[#64748b] block">Órgão / Delegacia / Juízo:</span>
                          <span className="text-white">{selectedLead.courtOrPoliceStation || 'Não especificado'}</span>
                        </div>
                      </div>

                      {selectedLead.hasDocuments && (
                        <div className="pt-2">
                          <span className="text-[#64748b] block font-semibold mb-1">Documentos Anexados:</span>
                          <div className="flex flex-wrap gap-2">
                            {selectedLead.documentFiles?.map((f, i) => (
                              <span key={i} className="px-2.5 py-1 rounded bg-[#162130] text-xs text-[#cbd5e1] border border-[#243144] flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
                                <span>{f.name} ({f.size})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-2 border-t border-[#1c2434] flex items-center justify-between">
                        <div>
                          <span className="text-[#64748b] block">Advogado Designado:</span>
                          <select
                            value={selectedLead.assignedLawyerId || ''}
                            onChange={(e) => handleAssignLawyer(selectedLead.id, e.target.value)}
                            className="mt-1 px-2.5 py-1 bg-[#121926] border border-[#222c3e] rounded text-xs text-white"
                          >
                            <option value="">Não atribuído</option>
                            {LAWYERS.map(l => (
                              <option key={l.id} value={l.id}>{l.name} ({l.oab})</option>
                            ))}
                          </select>
                        </div>

                        <button
                          onClick={() => handleGenerateAiBriefing(selectedLead)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#182333] hover:bg-[#202d42] border border-[#c5a059]/40 text-xs font-semibold text-[#c5a059] transition-colors"
                        >
                          <Sparkles className="w-4 h-4 text-[#c5a059]" />
                          <span>Gerar Minuta Analítica Interna</span>
                        </button>
                      </div>
                    </div>

                    {/* Módulo de Minuta de IA (Para uso interno exclusivo do advogado) */}
                    {aiBriefing && (
                      <div className="p-5 rounded-lg bg-[#101724] border border-[#2b3a50] space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-[#212d40] pb-2">
                          <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Subsídio Preliminar para Revisão do Advogado</span>
                          </span>
                          <span className="text-[10px] text-amber-400 uppercase font-semibold">
                            Urgência: {aiBriefing.suggestedUrgency}
                          </span>
                        </div>

                        <div>
                          <span className="text-[#64748b] block font-semibold">Enquadramento Inicial Sugerido:</span>
                          <span className="text-white font-medium">{aiBriefing.primaryLegalBranch}</span>
                        </div>

                        <div>
                          <span className="text-[#64748b] block font-semibold mb-1">Dispositivos Penais Pertinentes:</span>
                          <ul className="list-disc list-inside text-[#cbd5e1] space-y-0.5">
                            {aiBriefing.suspectedPenalArticles.map((art, aIdx) => (
                              <li key={aIdx}>{art}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[#64748b] block font-semibold mb-1">Diligências Preliminares Sugeridas à Equipe:</span>
                          <ul className="list-disc list-inside text-[#cbd5e1] space-y-0.5">
                            {aiBriefing.recommendedInitialSteps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="text-[10px] text-[#64748b] italic border-t border-[#1c2434] pt-2">
                          {aiBriefing.caveatNotice}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-12 text-center text-[#64748b] bg-[#0e1420] rounded-lg border border-[#20293b]">
                    Selecione um atendimento na lista lateral para analisar os dados.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CASOS & PROCESSOS TAB */}
        {activeTab === 'casos' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Controle de Casos e Ações Penais
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Acompanhamento interno dos procedimentos investigatórios e processos judiciais em trâmite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_CASES.map((c) => (
                <div key={c.id} className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#c5a059] font-bold">{c.code}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-[#162130] text-[#cbd5e1]">
                      {c.nature}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white">{c.title}</h3>
                  <div className="text-xs text-[#cbd5e1]">{c.summary}</div>
                  <div className="pt-3 border-t border-[#1c2434] text-xs text-[#94a3b8] space-y-1">
                    <div><strong>Cliente:</strong> {c.clientName}</div>
                    <div><strong>Advogado Líder:</strong> Dr. Nereu Lima Filho</div>
                    <div><strong>Sigilo:</strong> Estrito (Segredo de Justiça)</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JURISPRUDÊNCIA DOS TRIBUNAIS TAB */}
        {activeTab === 'jurisprudencia' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-cinzel text-xl font-bold text-white">
                  Jurisprudência Selecionada com Proveniência Estrita
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Precedentes de Tribunais Superiores indexados com rastreabilidade formal à fonte original.
                </p>
              </div>

              {/* Filtro de Tribunal */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedCourtFilter}
                  onChange={(e) => setSelectedCourtFilter(e.target.value)}
                  className="px-3 py-1.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="todos">Todos os Tribunais</option>
                  <option value="stf">STF (Supremo Tribunal Federal)</option>
                  <option value="stj">STJ (Superior Tribunal de Justiça)</option>
                  <option value="tjrs">TJRS (Tribunal de Justiça do RS)</option>
                  <option value="trf4">TRF4 (Tribunal Regional Federal)</option>
                </select>
              </div>
            </div>

            {/* Input de Busca */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por assunto, processo (ex: HC 598.886) ou termos da ementa..."
                value={jurisSearchTerm}
                onChange={(e) => setJurisSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#0e1420] border border-[#20293b] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            {/* Lista de Decisões */}
            <div className="space-y-4">
              {filteredDecisions.map((dec) => (
                <div key={dec.id} className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1c2434] pb-3">
                    <div>
                      <span className="font-mono text-sm font-bold text-[#c5a059]">{dec.processNumber}</span>
                      <span className="text-xs text-[#94a3b8] ml-2">({dec.court} — {dec.judgingBody})</span>
                    </div>
                    <div className="text-xs text-[#64748b]">
                      Julgamento: {dec.decisionDate} {dec.rapporteur && `• Rel: ${dec.rapporteur}`}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                      {dec.subject}
                    </h3>
                    <p className="text-xs font-lora text-[#cbd5e1] leading-relaxed bg-[#111724] p-3.5 rounded border border-[#1d2737]">
                      {dec.headnote}
                    </p>
                  </div>

                  {/* Proveniência Estrita */}
                  <div className="pt-3 border-t border-[#1c2434] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#64748b]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#94a3b8]">Fonte Oficial:</span>
                      <span>{dec.source}</span>
                      <span>•</span>
                      <span>Coleta: {new Date(dec.collected_at).toLocaleDateString()}</span>
                    </div>

                    <a
                      href={dec.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#c5a059] hover:underline font-semibold"
                    >
                      <span>Acessar Fonte Original no Tribunal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RADAR JURÍDICO TAB */}
        {activeTab === 'radar' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Radar de Precedentes e Movimentos Legislativos
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Monitoramento contínuo de súmulas, teses de repercussão geral e recursos repetitivos com impacto penal.
              </p>
            </div>

            <div className="space-y-4">
              {RADAR_EVENTS.map((event) => (
                <div key={event.id} className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-[#162130] text-[#c5a059] font-medium border border-[#232f42] uppercase text-[10px]">
                      {event.type.replace('_', ' ')}
                    </span>
                    <span className="text-[#64748b]">{event.date}</span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-lora leading-relaxed">
                    {event.summary}
                  </p>

                  <div className="pt-3 border-t border-[#1c2434] flex items-center justify-between text-[11px] text-[#64748b]">
                    <div>Origem: {event.courtOrAgency} ({event.source_name})</div>
                    <a
                      href={event.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#c5a059] hover:underline"
                    >
                      <span>Consultar Órgão Oficial</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEGISLAÇÃO FEDERAL TAB */}
        {activeTab === 'legislacao' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Legislação Federal Compilada (Planalto)
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Estatutos e Leis Penais Estruturantes com texto oficial mantido pela Presidência da República.
              </p>
            </div>

            <div className="space-y-4">
              {INDEXED_LEGISLATION.map((leg) => (
                <div key={leg.id} className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-[#1c2434] pb-2">
                    <span className="font-mono text-sm font-bold text-[#c5a059]">{leg.lawNumber}</span>
                    <span className="text-[#64748b]">Ano: {leg.year}</span>
                  </div>

                  <h3 className="font-cinzel text-sm font-bold text-white">
                    {leg.officialTitle}
                  </h3>

                  <p className="text-xs text-[#94a3b8] font-lora leading-relaxed">
                    {leg.summary}
                  </p>

                  <div className="p-3 rounded bg-[#101724] border border-[#1e2738] text-xs text-[#cbd5e1]">
                    <strong className="text-white">Impacto na Defesa Criminal:</strong> {leg.relevantPenalImpact}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#64748b]">
                    <span>Fonte: {leg.source}</span>
                    <a
                      href={leg.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#c5a059] hover:underline"
                    >
                      <span>Abrir Texto Integral no Planalto</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FONTES & CONECTORES TAB */}
        {activeTab === 'fontes' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Fontes Públicas Oficiais e Conectores de Dados
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Estrutura de coletores dedicados e APIs governamentais homologadas para preservação da rastreabilidade jurídica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OFFICIAL_LEGAL_SOURCES.map((source) => (
                <div key={source.id} className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-xs text-[#c5a059] font-bold uppercase">{source.code}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                      {source.status}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white">
                    {source.name}
                  </h3>

                  <div className="text-xs text-[#94a3b8] leading-relaxed">
                    {source.description}
                  </div>

                  <div className="space-y-1 text-[11px] text-[#64748b] border-t border-[#1c2434] pt-3">
                    <div><strong>Jurisdição:</strong> {source.jurisdiction}</div>
                    <div><strong>Tipo de Interface:</strong> {source.apiType}</div>
                    <div><strong>Última Sincronização:</strong> {new Date(source.lastSyncAt).toLocaleString()}</div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={source.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline font-semibold"
                    >
                      <span>Acessar Portal Oficial Governamental</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
