import { Shield, Scale, ChevronRight, Award, GraduationCap, CheckCircle2, PhoneCall } from 'lucide-react';
import { LAWYERS, FIRM_DETAILS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface ProfissionaisPageProps {
  onNavigate: (path: string) => void;
}

export default function ProfissionaisPage({ onNavigate }: ProfissionaisPageProps) {
  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Profissionais e Advogados Criminalistas | Nereu Lima Advogados"
        description="Corpo jurídico do escritório Nereu Lima Advogados Associados: Dr. Nereu Lima (OAB/RS 5.315), Dr. Nereu Lima Filho (OAB/RS 69.706) e Dr. Cristiano Kruel (OAB/RS 91.083)."
        canonicalPath="/profissionais"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Corpo Jurídico Especializado</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Advogados
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Profissionais dedicados com exclusividade ao Direito Penal e Processual Penal, reunindo tradição de liderança institucional e contínuo aprimoramento acadêmico.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Advogados */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {LAWYERS.map((lawyer, index) => (
          <div
            key={lawyer.id}
            id={lawyer.slug}
            className="rounded-lg bg-[#0e1420] border border-[#222c3e] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Foto e badge */}
            <div className="lg:col-span-4 bg-[#141b27] relative min-h-[360px] lg:min-h-full">
              <img
                src={lawyer.photoUrl}
                alt={lawyer.name}
                className="w-full h-full object-cover object-top filter grayscale contrast-105"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#090d14]/90 backdrop-blur-md border border-[#273347] text-xs font-semibold text-[#c5a059] rounded">
                {lawyer.oab}
              </div>
            </div>

            {/* Conteúdo e Credenciais */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f293b] pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                      {lawyer.title}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mt-1">
                      {lawyer.name}
                    </h2>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#172130] text-xs text-[#cbd5e1] font-medium border border-[#2b374d]">
                    {lawyer.role}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] font-lora leading-relaxed">
                  {lawyer.bio}
                </p>

                {lawyer.quote && (
                  <div className="p-4 rounded border-l-2 border-[#c5a059] bg-[#121926] italic text-xs sm:text-sm text-[#cbd5e1] font-lora">
                    "{lawyer.quote}"
                  </div>
                )}

                {/* Qualificações e títulos */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-cinzel font-semibold uppercase tracking-wider text-[#94a3b8] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#c5a059]" />
                    <span>Qualificações e Destaques Institucionais</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#94a3b8]">
                    {lawyer.credentials.map((cred, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-6 border-t border-[#1f293b] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate(`/profissionais/${lawyer.slug}`)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a059] hover:text-[#dcb66c] uppercase tracking-wider"
                >
                  <span>Ver perfil e atuação detalhada</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/atendimento')}
                  className="px-4 py-2 text-xs font-semibold text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded transition-all"
                >
                  Solicitar Consulta com a Banca
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
