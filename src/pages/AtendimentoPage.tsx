import { useState } from 'react';
import { Shield, CheckCircle2, ArrowRight, ArrowLeft, Upload, FileText, Lock, AlertCircle, Phone } from 'lucide-react';
import { saveLead } from '../services/storageService';
import { FIRM_DETAILS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface AtendimentoPageProps {
  onNavigate: (path: string) => void;
}

export default function AtendimentoPage({ onNavigate }: AtendimentoPageProps) {
  const [step, setStep] = useState(1);

  // Form states
  const [situation, setSituation] = useState('');
  const [description, setDescription] = useState('');
  const [locationStateCity, setLocationStateCity] = useState('');
  const [courtOrPoliceStation, setCourtOrPoliceStation] = useState('');
  const [hasDocuments, setHasDocuments] = useState<boolean | null>(null);
  const [documentFiles, setDocumentFiles] = useState<{ name: string; size: string; type: string }[]>([]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'whatsapp' | 'telefone' | 'email'>('whatsapp');
  const [preferredTime, setPreferredTime] = useState<'manha' | 'tarde' | 'urgente'>('manha');

  // Protocol state upon completion
  const [completedProtocol, setCompletedProtocol] = useState<string | null>(null);

  const SITUATION_OPTIONS = [
    { id: 'investigado', label: 'Estou sendo investigado', desc: 'Inquérito policial ou procedimento preliminar em andamento.' },
    { id: 'intimacao', label: 'Recebi uma intimação', desc: 'Notificação policial, judicial ou ministerial para comparecimento.' },
    { id: 'processo', label: 'Estou respondendo a um processo', desc: 'Citação ou denúncia já recebida na Justiça Estadual ou Federal.' },
    { id: 'preso', label: 'Fui preso / Um familiar foi detido', desc: 'Situação de flagrante delito ou mandado de prisão cumprido (urgente).' },
    { id: 'audiencia', label: 'Tenho uma audiência designada', desc: 'Audiência de custódia, instrução e julgamento ou júri marcada.' },
    { id: 'orientacao', label: 'Preciso de orientação preventiva', desc: 'Consulta técnica preventiva sobre riscos ou atos negociais.' },
    { id: 'outra', label: 'Outra situação criminal', desc: 'Demais matérias atinentes ao Direito Penal e Processual Penal.' },
  ];

  const handleFileUploadSimulated = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
        type: f.type || 'documento/pdf',
      }));
      setDocumentFiles(prev => [...prev, ...filesArray]);
    }
  };

  const handleSubmit = () => {
    if (!situation || !description || !contactName || !contactPhone) return;

    const saved = saveLead({
      situation,
      description,
      locationStateCity,
      courtOrPoliceStation,
      hasDocuments: !!(hasDocuments && documentFiles.length > 0),
      documentFiles,
      contactName,
      contactEmail,
      contactPhone,
      preferredContactMethod,
      preferredTime,
    });

    setCompletedProtocol(saved.protocolNumber);
    setStep(6);
  };

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Solicitar Atendimento Sigiloso | Nereu Lima Advogados"
        description="Fluxo confidencial e seguro de solicitação de atendimento criminal do escritório Nereu Lima Advogados Associados."
        canonicalPath="/atendimento"
      />

      {/* Header */}
      <section className="py-12 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Atendimento Restrito & Sigilo Profissional OAB</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-cinzel font-bold text-white tracking-tight">
            Solicitação de Atendimento
          </h1>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Responda às etapas abaixo para que nossos advogados criminalistas compreendam o contexto factual e realizem a triagem do caso com discrição absoluta.
          </p>

          {/* Stepper Progress */}
          {!completedProtocol && (
            <div className="pt-6 max-w-md mx-auto flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                      step === s
                        ? 'bg-[#c5a059] text-[#0a0e16]'
                        : step > s
                        ? 'bg-[#1e293b] text-[#c5a059] border border-[#c5a059]'
                        : 'bg-[#131b26] text-[#64748b] border border-[#212b3a]'
                    }`}
                  >
                    {step > s ? '✓' : s}
                  </div>
                  {s < 5 && (
                    <div
                      className={`w-8 sm:w-12 h-0.5 mx-1 ${
                        step > s ? 'bg-[#c5a059]' : 'bg-[#1f2937]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Conteúdo do Fluxo */}
      <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-lg bg-[#0e1420] border border-[#20293b] shadow-2xl space-y-8">
          {/* ETAPA 1: Qual é a situação? */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Etapa 1 de 5</span>
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                  Qual é a situação atual?
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Selecione a opção que melhor retrata o momento em que se encontra a sua demanda.
                </p>
              </div>

              <div className="space-y-3">
                {SITUATION_OPTIONS.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setSituation(opt.label)}
                    className={`flex items-start gap-3.5 p-4 rounded border cursor-pointer transition-all ${
                      situation === opt.label
                        ? 'bg-[#172233] border-[#c5a059] text-white shadow-md'
                        : 'bg-[#111724] border-[#222c3e] text-[#cbd5e1] hover:border-[#334155]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="situation"
                      checked={situation === opt.label}
                      onChange={() => setSituation(opt.label)}
                      className="mt-1 accent-[#c5a059]"
                    />
                    <div>
                      <div className="font-semibold text-sm">{opt.label}</div>
                      <div className="text-xs text-[#94a3b8] mt-0.5">{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!situation}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] disabled:opacity-40 disabled:cursor-not-allowed rounded shadow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ETAPA 2: Relato factual */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Etapa 2 de 5</span>
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                  Conte brevemente o que aconteceu
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Apresente um resumo factual sucinto dos fatos, datas aproximadas ou circunstâncias relevantes.
                </p>
              </div>

              <div>
                <textarea
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva aqui os fatos de forma objetiva..."
                  className="w-full p-4 bg-[#121926] border border-[#232e42] rounded text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                />
                <div className="text-[11px] text-[#64748b] mt-2">
                  * Não emitimos pareceres automáticos. Suas informações serão examinadas exclusivamente por advogados do escritório.
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#94a3b8] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  disabled={!description || description.trim().length < 10}
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] disabled:opacity-40 disabled:cursor-not-allowed rounded shadow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ETAPA 3: Localidade e Vara / Delegacia */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Etapa 3 de 5</span>
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                  Onde está tramitando o procedimento?
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Se você souber a comarca, cidade, delegacia de polícia ou vara judicial, informe abaixo. Se não souber, pode deixar em branco.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    value={locationStateCity}
                    onChange={(e) => setLocationStateCity(e.target.value)}
                    placeholder="Ex: Porto Alegre / RS"
                    className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Órgão ou Delegacia / Número do Processo (se houver)
                  </label>
                  <input
                    type="text"
                    value={courtOrPoliceStation}
                    onChange={(e) => setCourtOrPoliceStation(e.target.value)}
                    placeholder="Ex: 2ª Vara Criminal do Foro Central / Delegacia de Homicídios / Não sei"
                    className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#94a3b8] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded shadow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ETAPA 4: Documentos */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Etapa 4 de 5</span>
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                  Você possui algum documento?
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Intimação, mandado, cópia de inquérito, boletim de ocorrência ou notificação formal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setHasDocuments(true)}
                  className={`p-4 rounded border text-center transition-all ${
                    hasDocuments === true
                      ? 'bg-[#182333] border-[#c5a059] text-white'
                      : 'bg-[#111724] border-[#222c3e] text-[#cbd5e1]'
                  }`}
                >
                  <div className="font-semibold text-sm">Sim, possuo documentos</div>
                  <div className="text-[11px] text-[#94a3b8] mt-1">Posso anexar agora ou enviar depois</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setHasDocuments(false);
                    setDocumentFiles([]);
                  }}
                  className={`p-4 rounded border text-center transition-all ${
                    hasDocuments === false
                      ? 'bg-[#182333] border-[#c5a059] text-white'
                      : 'bg-[#111724] border-[#222c3e] text-[#cbd5e1]'
                  }`}
                >
                  <div className="font-semibold text-sm">Não possuo no momento</div>
                  <div className="text-[11px] text-[#94a3b8] mt-1">Prosseguir sem anexos</div>
                </button>
              </div>

              {hasDocuments && (
                <div className="p-5 rounded border border-dashed border-[#2d3a50] bg-[#101724] text-center space-y-3">
                  <Upload className="w-8 h-8 text-[#c5a059] mx-auto" />
                  <div className="text-xs text-[#cbd5e1]">
                    Selecione arquivos PDF, imagens ou documentos para envio seguro
                  </div>
                  <label className="inline-block px-4 py-2 bg-[#1b2536] hover:bg-[#243144] border border-[#2f3d54] text-xs font-semibold text-white rounded cursor-pointer transition-colors">
                    <span>Selecionar Arquivo</span>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUploadSimulated}
                      className="hidden"
                    />
                  </label>

                  {documentFiles.length > 0 && (
                    <div className="mt-4 text-left space-y-2">
                      <div className="text-xs font-semibold text-white">Arquivos anexados:</div>
                      {documentFiles.map((file, fIdx) => (
                        <div key={fIdx} className="p-2 rounded bg-[#151e2c] border border-[#232f42] flex items-center justify-between text-xs text-[#cbd5e1]">
                          <span className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#c5a059]" />
                            <span>{file.name}</span>
                          </span>
                          <span className="text-[11px] text-[#64748b]">{file.size}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#94a3b8] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  disabled={hasDocuments === null}
                  onClick={() => setStep(5)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] disabled:opacity-40 disabled:cursor-not-allowed rounded shadow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ETAPA 5: Contato e Confirmação */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">Etapa 5 de 5</span>
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                  Dados para Contato Confidencial
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Como nossa equipe deve retornar com a avaliação preliminar?
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo Silveira"
                    className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="(51) 99999-9999"
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Endereço de E-mail
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Canal de preferência
                    </label>
                    <select
                      value={preferredContactMethod}
                      onChange={(e: any) => setPreferredContactMethod(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121926] border border-[#222c3e] rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="telefone">Ligação Telefônica</option>
                      <option value="email">E-mail</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Horário preferencial
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e: any) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121926] border border-[#222c3e] rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="manha">Manhã (09h às 12h)</option>
                      <option value="tarde">Tarde (14h às 18h)</option>
                      <option value="urgente">Urgência Imediata (Plantão)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Termo Ético Obrigatório */}
              <div className="p-4 rounded bg-[#111825] border border-[#212d40] text-xs text-[#94a3b8] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Shield className="w-4 h-4 text-[#c5a059]" />
                  <span>Aviso Ético e de Confidencialidade (OAB/RS 2828)</span>
                </div>
                <p className="leading-relaxed">
                  Este formulário destina-se unicamente à triagem de atendimento inicial. O escritório Nereu Lima Advogados Associados não emite aconselhamento automático nem promete resultados processuais prévios. Todas as informações recebidas são resguardadas pelo sigilo profissional garantido pela Lei nº 8.906/1994 e pela LGPD.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#94a3b8] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  disabled={!contactName || !contactPhone}
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] disabled:opacity-40 disabled:cursor-not-allowed rounded shadow-xl"
                >
                  <span>Concluir Solicitação de Atendimento</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SUCESSO: Protocolo Gerado */}
          {completedProtocol && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#182333] border-2 border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                  Solicitação Registrada com Sigilo
                </span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                  Atendimento Protocolado
                </h2>
                <div className="inline-block px-4 py-2 mt-2 rounded bg-[#131c2a] border border-[#c5a059]/40 text-[#c5a059] font-mono text-base font-bold">
                  Protocolo: {completedProtocol}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#cbd5e1] font-lora max-w-lg mx-auto leading-relaxed">
                Prezado(a) <strong className="text-white">{contactName}</strong>, sua solicitação foi encaminhada aos advogados criminalistas do Nereu Lima Advogados Associados. Retornaremos via <strong className="text-[#c5a059]">{preferredContactMethod}</strong> no período indicado.
              </p>

              <div className="p-4 rounded bg-[#111724] border border-[#212b3c] max-w-md mx-auto text-xs text-[#94a3b8] text-left space-y-2">
                <div className="font-semibold text-white">Em caso de urgência extrema de prisão em flagrante:</div>
                <div className="flex items-center gap-2 text-[#c5a059]">
                  <Phone className="w-4 h-4" />
                  <span>Plantão Penal: {FIRM_DETAILS.phones.main}</span>
                </div>
                <div className="text-[11px] text-[#64748b]">Sede na Praça Marechal Deodoro (Praça da Matriz), 130, cj. 1001 — Porto Alegre / RS</div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('/')}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#151e2c] hover:bg-[#1f2b3e] border border-[#283548] rounded"
                >
                  Voltar à Página Inicial
                </button>
                <button
                  onClick={() => onNavigate('/admin')}
                  className="px-6 py-2.5 text-xs font-semibold text-[#c5a059] border border-[#c5a059]/40 hover:bg-[#182232] rounded"
                >
                  Visualizar no Painel Interno (Banca)
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
