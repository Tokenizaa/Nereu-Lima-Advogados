import { LAWYERS, FIRM_DETAILS } from '../data/firmData';
import { ArrowLeft, CheckCircle2, GraduationCap, Scale, Award, Mail, Phone, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ProfissionalDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ProfissionalDetailPage({ slug, onNavigate }: ProfissionalDetailPageProps) {
  const lawyer = LAWYERS.find((l) => l.slug === slug) || LAWYERS[0];

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title={`${lawyer.name} (${lawyer.oab}) — ${lawyer.role} | Nereu Lima Advogados`}
        description={`${lawyer.name}, ${lawyer.title} do escritório Nereu Lima Advogados Associados em Porto Alegre. ${lawyer.bio.slice(0, 150)}...`}
        canonicalPath={`/profissionais/${lawyer.slug}`}
        ogImage={lawyer.photoUrl}
      />

      {/* Breadcrumb e Top */}
      <div className="bg-[#090d14] border-b border-[#1c2434] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate('/profissionais')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] hover:text-[#c5a059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para lista de profissionais</span>
          </button>
          <div className="text-xs text-[#c5a059] font-medium">{lawyer.oab}</div>
        </div>
      </div>

      {/* Perfil Principal */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Foto e Card Lateral */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-lg overflow-hidden border border-[#222c3e] bg-[#121824] shadow-2xl">
              <div className="h-96 relative">
                <img
                  src={lawyer.photoUrl}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/80 to-transparent p-4">
                  <div className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider">{lawyer.title}</div>
                  <h1 className="font-cinzel text-xl font-bold text-white mt-0.5">{lawyer.name}</h1>
                </div>
              </div>

              <div className="p-5 space-y-4 text-xs text-[#cbd5e1] border-t border-[#1e2738]">
                <div className="flex items-center justify-between pb-2 border-b border-[#1c2432]">
                  <span className="text-[#94a3b8]">Inscrição OAB:</span>
                  <span className="font-semibold text-white">{lawyer.oab}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#1c2432]">
                  <span className="text-[#94a3b8]">Sociedade:</span>
                  <span className="font-semibold text-white">{FIRM_DETAILS.oabSociety}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8]">Sede:</span>
                  <span className="font-semibold text-white">Praça da Matriz / Porto Alegre</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded bg-[#101724] border border-[#202b3d] space-y-3">
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white">
                Atendimento com {lawyer.name.split(' ')[0]} {lawyer.name.split(' ')[1]}
              </h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Consultas presenciais na sede do escritório em Porto Alegre ou remotas por videoconferência com segurança e sigilo.
              </p>
              <button
                onClick={() => onNavigate('/atendimento')}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded"
              >
                <span>Solicitar Consulta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Conteúdo Detalhado */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-[#152030] text-[#c5a059] text-xs font-semibold tracking-wider uppercase">
                {lawyer.role}
              </span>
              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white">
                {lawyer.name}
              </h2>
              <p className="text-base text-[#cbd5e1] font-lora leading-relaxed">
                {lawyer.bio}
              </p>
            </div>

            {lawyer.quote && (
              <div className="p-6 rounded-lg bg-[#0e1522] border-l-4 border-[#c5a059] italic text-sm text-[#cbd5e1] font-lora leading-relaxed shadow-lg">
                "{lawyer.quote}"
              </div>
            )}

            {/* Credenciais e Qualificações */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2 border-b border-[#222c3e] pb-2">
                <GraduationCap className="w-5 h-5 text-[#c5a059]" />
                <span>Credenciais e Formação Acadêmica</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#94a3b8]">
                {lawyer.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaques Históricos (quando houver) */}
            {lawyer.historicalHighlights && lawyer.historicalHighlights.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2 border-b border-[#222c3e] pb-2">
                  <Award className="w-5 h-5 text-[#c5a059]" />
                  <span>Marcos e Atuação Histórica</span>
                </h3>
                <div className="space-y-3">
                  {lawyer.historicalHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="p-4 rounded bg-[#111724] border border-[#212c3e] text-xs text-[#cbd5e1] leading-relaxed">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
