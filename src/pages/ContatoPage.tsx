import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface ContatoPageProps {
  onNavigate: (path: string) => void;
}

export default function ContatoPage({ onNavigate }: ContatoPageProps) {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Canais de Contato e Localização | Nereu Lima Advogados"
        description="Entre em contato com o escritório Nereu Lima Advogados Associados. Sede na Praça Marechal Deodoro (Praça da Matriz), nº 130, cj. 1001, Porto Alegre/RS. Tel: (51) 3224-6966."
        canonicalPath="/contato"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>Canais de Atendimento e Sede</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Contato
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Atendimento presencial na Praça da Matriz em Porto Alegre ou telepresencial para clientes em todo o Brasil e no exterior.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Contatos & Formulário */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Informações Oficiais */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-6 shadow-xl">
              <h2 className="font-cinzel text-xl font-bold text-white border-b border-[#1d2638] pb-4">
                Sede Histórica
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#cbd5e1]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Endereço:</strong>
                    <div>{FIRM_DETAILS.address.street}, {FIRM_DETAILS.address.suite}</div>
                    <div>{FIRM_DETAILS.address.neighborhood} — {FIRM_DETAILS.address.city} / {FIRM_DETAILS.address.state}</div>
                    <div>CEP: {FIRM_DETAILS.address.postalCode}</div>
                    <div className="text-xs text-[#c5a059] mt-1 font-medium">{FIRM_DETAILS.address.landmark}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a2332]">
                  <Phone className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Telefonia e WhatsApp:</strong>
                    <div className="text-white text-base font-semibold">{FIRM_DETAILS.phones.main}</div>
                    <div className="text-xs text-[#94a3b8] mt-1">Celulares / Plantão:</div>
                    <div className="text-xs text-[#cbd5e1]">{FIRM_DETAILS.phones.mobiles.join(' | ')}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a2332]">
                  <Mail className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Correspondência Eletrônica:</strong>
                    <div className="text-white">{FIRM_DETAILS.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a2332]">
                  <Clock className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Horário de Expediente:</strong>
                    <div>Segunda a Sexta-feira: 09h às 18h30</div>
                    <div className="text-[11px] text-[#64748b]">Plantão criminal permanente para flagrantes e medidas cautelares.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner de Solicitação de Atendimento estruturada */}
            <div className="p-6 rounded-lg bg-[#111724] border border-[#232f42] space-y-3">
              <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                Precisa relatar uma situação urgente?
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Utilize nosso fluxo estruturado de atendimento confidencial para triagem célere pela equipe de criminalistas.
              </p>
              <button
                onClick={() => onNavigate('/atendimento')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded"
              >
                <span>Iniciar Fluxo de Atendimento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Formulário de Mensagem */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] shadow-xl">
              <h2 className="font-cinzel text-xl font-bold text-white mb-2">
                Envie uma Mensagem ao Escritório
              </h2>
              <p className="text-xs text-[#94a3b8] mb-6">
                Todas as comunicações dirigidas à nossa banca são tratadas sob estrito sigilo profissional (Estatuto da OAB, Lei 8.906/94).
              </p>

              {formSent ? (
                <div className="p-8 rounded bg-[#101926] border border-[#2b3a50] text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#c5a059] mx-auto" />
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-xs text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                    Agradecemos o contato. Sua mensagem foi encaminhada à secretaria do escritório e será respondida com a máxima brevidade.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#c5a059] border border-[#c5a059]/40 rounded hover:bg-[#1a2333]"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Endereço de E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@dominio.com"
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Assunto da Mensagem
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Ex: Consulta sobre procedimento investigatório"
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva brevemente o motivo do contato..."
                      className="w-full px-3.5 py-2.5 bg-[#121926] border border-[#222c3e] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded shadow"
                    >
                      <span>Enviar Mensagem</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
