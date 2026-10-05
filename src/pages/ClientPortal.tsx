import { useState } from 'react';
import { 
  UserCheck, FileText, Scale, Calendar, MessageSquare, Shield, Clock, 
  ChevronRight, ArrowLeft, Download, Send, AlertCircle, CheckCircle2, Lock 
} from 'lucide-react';
import { MOCK_CLIENT, MOCK_CASES, MOCK_PROCESSES, MOCK_DOCUMENTS, MOCK_APPOINTMENTS } from '../data/mockPlatformData';
import { getStoredMessages, sendClientMessage } from '../services/storageService';
import { FIRM_DETAILS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface ClientPortalProps {
  onNavigate: (path: string) => void;
  initialTab?: string;
  processIdParam?: string;
}

export default function ClientPortal({ onNavigate, initialTab = 'dashboard', processIdParam }: ClientPortalProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'processos' | 'documentos' | 'mensagens' | 'agenda' | 'perfil'>(
    (initialTab as any) || 'dashboard'
  );
  const [selectedProcessId, setSelectedProcessId] = useState<string | null>(processIdParam || null);
  const [messages, setMessages] = useState(getStoredMessages());
  const [newMessageText, setNewMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;
    const sent = sendClientMessage(MOCK_CLIENT.name, newMessageText);
    setMessages(prev => [...prev, sent]);
    setNewMessageText('');
  };

  const selectedProcess = MOCK_PROCESSES.find(p => p.id === selectedProcessId) || MOCK_PROCESSES[0];

  return (
    <div className="min-h-screen bg-[#090d14] text-[#cbd5e1]">
      <SEOHead
        title="Área do Cliente e Acompanhamento Processual | Nereu Lima Advogados"
        description="Portal seguro de acompanhamento de processos, prazos, audiências e documentos do escritório Nereu Lima Advogados Associados."
        canonicalPath="/cliente"
      />

      {/* Header do Portal */}
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
              <div className="w-6 h-6 rounded bg-[#162030] text-[#c5a059] flex items-center justify-center font-cinzel text-xs font-bold border border-[#c5a059]/40">
                NL
              </div>
              <span className="font-cinzel text-xs font-semibold text-white tracking-wider">
                Portal do Constituinte
              </span>
            </div>
          </div>

          {/* Identificação do Cliente */}
          <div className="flex items-center gap-3 text-xs">
            <div className="text-right">
              <div className="font-semibold text-white">{MOCK_CLIENT.name}</div>
              <div className="text-[10px] text-[#64748b]">CNPJ: {MOCK_CLIENT.documentNumber}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1b2536] border border-[#2b394e] flex items-center justify-center text-[#c5a059] font-bold text-xs">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Subnavegação da Área do Cliente */}
      <div className="border-b border-[#1c2434] bg-[#090d14] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 text-xs">
          <button
            onClick={() => { setActiveTab('dashboard'); setSelectedProcessId(null); }}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'dashboard' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Visão Geral (Dashboard)
          </button>
          <button
            onClick={() => setActiveTab('processos')}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'processos' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Processos & Movimentações ({MOCK_PROCESSES.length})
          </button>
          <button
            onClick={() => { setActiveTab('documentos'); setSelectedProcessId(null); }}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'documentos' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Documentos ({MOCK_DOCUMENTS.length})
          </button>
          <button
            onClick={() => { setActiveTab('mensagens'); setSelectedProcessId(null); }}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'mensagens' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Mensagens com a Banca
          </button>
          <button
            onClick={() => { setActiveTab('agenda'); setSelectedProcessId(null); }}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'agenda' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Agenda & Audiências ({MOCK_APPOINTMENTS.length})
          </button>
          <button
            onClick={() => { setActiveTab('perfil'); setSelectedProcessId(null); }}
            className={`px-3 py-1.5 rounded font-medium whitespace-nowrap transition-colors ${
              activeTab === 'perfil' ? 'bg-[#182333] text-[#c5a059] border border-[#c5a059]/40' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Dados & Sigilo
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Aviso de Sigilo */}
            <div className="p-4 rounded bg-[#101724] border border-[#212d40] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#c5a059] shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white">Ambiente Seguro de Acompanhamento:</span>
                  <span className="text-[#94a3b8] ml-1">
                    Todas as peças processuais e comunicações são protegidas pelo sigilo profissional (Lei 8.906/94).
                  </span>
                </div>
              </div>
              <div className="text-[11px] text-[#c5a059] font-mono shrink-0 hidden sm:block">
                Sessão Autenticada
              </div>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Casos sob Patrocínio</div>
                <div className="text-2xl font-cinzel font-bold text-white mt-1">{MOCK_CASES.length}</div>
                <div className="text-[11px] text-[#c5a059] mt-2">1 Inquérito • 1 Fase Recursal</div>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Processos Monitorados</div>
                <div className="text-2xl font-cinzel font-bold text-white mt-1">{MOCK_PROCESSES.length}</div>
                <div className="text-[11px] text-emerald-400 mt-2">TJRS / 4ª Câmara Criminal</div>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Próximo Compromisso</div>
                <div className="text-base font-cinzel font-bold text-white mt-1">18/10/2026</div>
                <div className="text-[11px] text-[#94a3b8] truncate mt-2">Sustentação Oral TJRS</div>
              </div>

              <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b]">
                <div className="text-xs text-[#94a3b8]">Advogado Responsável</div>
                <div className="text-base font-cinzel font-bold text-white mt-1">Dr. Nereu Lima Filho</div>
                <div className="text-[11px] text-[#c5a059] mt-2">OAB/RS 69.706</div>
              </div>
            </div>

            {/* Grid 2 colunas: Casos Ativos e Últimas Atualizações */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Casos sob Patrocínio */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#c5a059]" />
                    <span>Casos em Andamento</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('processos')}
                    className="text-xs text-[#c5a059] hover:underline"
                  >
                    Ver detalhes
                  </button>
                </div>

                <div className="space-y-3">
                  {MOCK_CASES.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => { setActiveTab('processos'); setSelectedProcessId('proc-01'); }}
                      className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b] hover:border-[#c5a059]/60 cursor-pointer transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-[#c5a059] font-semibold">{c.code}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-[#182333] text-[#c5a059] border border-[#283549]">
                          {c.status.replace('_', ' ')}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-snug">{c.title}</h4>
                      <p className="text-xs text-[#94a3b8] line-clamp-2">{c.summary}</p>
                      <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-2 border-t border-[#1a2332]">
                        <span>Início: {c.initialDate}</span>
                        <span className="text-[#cbd5e1] font-medium">Banca: Nereu Lima & Nereu Lima Filho</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Últimas Movimentações Processuais */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                  <span>Últimos Andamentos Notificados</span>
                </h3>

                <div className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4">
                  {MOCK_PROCESSES[0].movements.slice(0, 3).map((mov) => (
                    <div key={mov.id} className="border-l-2 border-[#c5a059] pl-3 space-y-1">
                      <div className="text-[11px] text-[#64748b]">{mov.date} • {mov.court}</div>
                      <div className="text-xs font-semibold text-white">{mov.title}</div>
                      <div className="text-xs text-[#94a3b8] line-clamp-2">{mov.description}</div>
                    </div>
                  ))}

                  <button
                    onClick={() => { setActiveTab('processos'); setSelectedProcessId('proc-01'); }}
                    className="w-full text-center text-xs text-[#c5a059] font-medium pt-2 block hover:underline"
                  >
                    Ver linha do tempo processual completa
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROCESSOS TAB */}
        {activeTab === 'processos' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1c2434] pb-4">
              <div>
                <h2 className="font-cinzel text-xl font-bold text-white">
                  Acompanhamento Processual Unificado
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Movimentações monitoradas junto ao sistema eproc do TJRS e Justiça Federal.
                </p>
              </div>
            </div>

            {/* Detalhes do Processo Selecionado */}
            <div className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c2434] pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a059] font-semibold">
                    Numeração Única CNJ
                  </span>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">
                    {selectedProcess.processNumber}
                  </div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">{selectedProcess.court}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-[#94a3b8]">Fase Atual:</div>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {selectedProcess.status}
                  </div>
                </div>
              </div>

              {/* Movimentações / Timeline */}
              <div className="space-y-4">
                <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#cbd5e1]">
                  Histórico de Movimentações Processuais
                </h4>

                <div className="relative border-l-2 border-[#202b3c] ml-3 space-y-6">
                  {selectedProcess.movements.map((mov) => (
                    <div key={mov.id} className="relative pl-6 space-y-1">
                      <div className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 ${
                        mov.isImportant ? 'bg-[#c5a059] border-white' : 'bg-[#0e1420] border-[#394860]'
                      }`} />
                      <div className="flex items-center gap-2 text-[11px] text-[#64748b]">
                        <span>{mov.date}</span>
                        <span>•</span>
                        <span>{mov.court}</span>
                        {mov.isImportant && (
                          <span className="px-1.5 py-0.2 rounded bg-[#c5a059]/20 text-[#c5a059] text-[10px] font-semibold">
                            Relevante
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-white">{mov.title}</div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">{mov.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTOS TAB */}
        {activeTab === 'documentos' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Repositório de Peças e Documentos
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Acesse petições, recursos, laudos periciais e instrumentos de procuração digitalizados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MOCK_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 rounded-lg bg-[#0e1420] border border-[#20293b] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#64748b]">
                      <span className="uppercase text-[10px] font-semibold px-2 py-0.5 rounded bg-[#162130] text-[#c5a059]">
                        {doc.category}
                      </span>
                      <span>{doc.fileSize}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {doc.title}
                    </h3>
                    <div className="text-[11px] text-[#94a3b8] font-mono truncate">
                      {doc.fileName}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1c2434] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#64748b]">Juntado por: {doc.uploadedBy}</span>
                    <button
                      onClick={() => alert(`Iniciando download seguro de: ${doc.fileName}`)}
                      className="inline-flex items-center gap-1 text-[#c5a059] hover:underline font-medium"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MENSAGENS TAB */}
        {activeTab === 'mensagens' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Comunicação com a Banca
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Canal direto e seguro para alinhamento com os advogados do escritório.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-6">
              {/* Lista de Mensagens */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-lg text-xs leading-relaxed max-w-xl ${
                      msg.senderRole === 'client'
                        ? 'ml-auto bg-[#182333] border border-[#2b3a50] text-[#cbd5e1]'
                        : 'mr-auto bg-[#121927] border border-[#202b3d] text-[#e2e8f0]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-1 text-[11px]">
                      <span className={`font-semibold ${msg.senderRole === 'client' ? 'text-white' : 'text-[#c5a059]'}`}>
                        {msg.senderName}
                      </span>
                      <span className="text-[#64748b]">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div>{msg.content}</div>
                  </div>
                ))}
              </div>

              {/* Formulário de Envio */}
              <form onSubmit={handleSendMessage} className="pt-4 border-t border-[#1c2434] flex gap-2">
                <input
                  type="text"
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  placeholder="Escreva uma mensagem para a banca jurídica..."
                  className="flex-1 px-4 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-semibold text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* AGENDA TAB */}
        {activeTab === 'agenda' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Audiências e Compromissos Forenses
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Prazos peremptórios, sessões plenárias e reuniões presenciais na sede da Praça da Matriz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_APPOINTMENTS.map((app) => (
                <div
                  key={app.id}
                  className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-[#162130] text-[#c5a059] font-medium border border-[#222e42] uppercase text-[10px]">
                      {app.type.replace('_', ' ')}
                    </span>
                    <span className="font-mono text-white font-semibold">{app.date} às {app.time}</span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white">
                    {app.title}
                  </h3>

                  <div className="space-y-1 text-xs text-[#94a3b8]">
                    <div><strong>Local:</strong> {app.location}</div>
                    <div><strong>Advogado Designado:</strong> {app.lawyerName}</div>
                    {app.notes && <div className="italic text-[#cbd5e1] pt-1">"{app.notes}"</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PERFIL TAB */}
        {activeTab === 'perfil' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Cadastro e Termo de Confidencialidade
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1">
                Dados cadastrais vinculados ao patrocínio judicial de Nereu Lima Advogados Associados.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#1c2434]">
                <div>
                  <span className="text-[#64748b]">Nome / Razão Social:</span>
                  <div className="font-semibold text-white text-sm">{MOCK_CLIENT.name}</div>
                </div>
                <div>
                  <span className="text-[#64748b]">Documento (CNPJ/CPF):</span>
                  <div className="font-semibold text-white text-sm">{MOCK_CLIENT.documentNumber}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#1c2434]">
                <div>
                  <span className="text-[#64748b]">E-mail de Contato:</span>
                  <div className="text-white">{MOCK_CLIENT.email}</div>
                </div>
                <div>
                  <span className="text-[#64748b]">Telefone:</span>
                  <div className="text-white">{MOCK_CLIENT.phone}</div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[#64748b]">Endereço Cadastrado:</span>
                <div className="text-white">{MOCK_CLIENT.address}</div>
              </div>

              <div className="pt-4 border-t border-[#1c2434] text-[11px] text-[#94a3b8] leading-relaxed">
                As comunicações e documentos mantidos neste portal atendem às disposições da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e ao sigilo incondicional preconizado pelo Estatuto da Advocacia e da OAB.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
