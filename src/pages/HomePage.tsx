import { Shield, Scale, BookOpen, Clock, MapPin, ArrowRight, Award, ChevronRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { FIRM_DETAILS, LAWYERS, PRACTICE_AREAS, COURTS_OF_OPERATION } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Nereu Lima Advogados Associados — Advocacia Criminal e Tribunais Superiores"
        description="Sociedade de Advogados especializada exclusivamente em Direito Penal há mais de 50 anos em Porto Alegre/RS. Fundado pelo Dr. Nereu Lima, ex-presidente da OAB/RS."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#1e2738] bg-gradient-to-b from-[#090d14] via-[#0c111a] to-[#0f1522]">
        {/* Subtle background image overlay with high visual dignity */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: `url(${FIRM_DETAILS.images.viewPracaMatriz})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-[#070a0f]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#182232] border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>{FIRM_DETAILS.slogan}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-[#f8fafc] leading-tight tracking-tight">
              Tradição, autoridade e coragem na advocacia criminal.
            </h1>

            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Desde 1969, o escritório <strong className="text-white font-medium">Nereu Lima Advogados Associados</strong> ({FIRM_DETAILS.oabSociety}) dedica-se com rigor técnico e combatividade irrestrita à defesa dos direitos e garantias fundamentais perante a Justiça Estadual, Justiça Federal e os Tribunais Superiores em Brasília.
            </p>

            {/* Chamadas de Ação */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('/atendimento')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] active:bg-[#b08e48] transition-all rounded shadow-lg shadow-[#c5a059]/10 group"
              >
                <span>Solicitar Atendimento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('/escritorio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#cbd5e1] hover:text-white bg-[#151d2a] hover:bg-[#1c2738] border border-[#2d3748] rounded transition-all"
              >
                <span>Conheça o Escritório</span>
              </button>
            </div>

            {/* Selo institucional de localização */}
            <div className="pt-4 flex items-center gap-2 text-xs text-[#94a3b8]">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>
                Praça Marechal Deodoro (Praça da Matriz), nº 130, Cj. 1001 — Centro Histórico, Porto Alegre / RS
              </span>
            </div>
          </div>
        </div>

        {/* Faixa com Marcos de Autoridade */}
        <div className="border-t border-[#1e2738] bg-[#080c13]/90 py-6 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#c5a059]">1969</div>
              <div className="text-xs text-[#94a3b8] uppercase tracking-wider font-medium">Ano de Fundação</div>
            </div>
            <div className="space-y-1">
              <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#c5a059]">+50 Anos</div>
              <div className="text-xs text-[#94a3b8] uppercase tracking-wider font-medium">De Dedicação Penal</div>
            </div>
            <div className="space-y-1">
              <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#c5a059]">OAB/RS 5.315</div>
              <div className="text-xs text-[#94a3b8] uppercase tracking-wider font-medium">Ex-Pres. OAB/RS & Fundador ACRIERGS</div>
            </div>
            <div className="space-y-1">
              <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#c5a059]">STF & STJ</div>
              <div className="text-xs text-[#94a3b8] uppercase tracking-wider font-medium">Tribunais Superiores e TJRS/TRF4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Escritório: História & Filosofia */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059] flex items-center gap-2">
              <span className="w-6 h-px bg-[#c5a059]" />
              Posicionamento Institucional
            </div>

            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white leading-tight">
              Uma trajetória forjada na defesa das garantias e da dignidade humana.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] font-lora leading-relaxed">
              <p>
                O escritório nasceu no 5º andar do histórico edifício Sulacap, na Esquina Democrática de Porto Alegre, e há mais de duas décadas transferiu-se para a Praça da Matriz, em frente aos centros do poder e da memória cívica do Rio Grande do Sul.
              </p>
              <p>
                A advocacia criminal exercida por nossa banca compreende que a liberdade é o bem mais precioso do cidadão. Sob a inspiração de Francesco Carnelutti, entendemos que o defensor criminal não é movido pela pecúnia, mas por solidariedade humana e compromisso inarredável com o Estado Democrático de Direito.
              </p>
            </div>

            {/* Citação Oficial */}
            <div className="p-5 rounded border-l-2 border-[#c5a059] bg-[#111723]">
              <blockquote className="italic text-sm text-[#cbd5e1] font-lora">
                "{LAWYERS[0].quote}"
              </blockquote>
              <div className="mt-3 text-xs font-semibold text-[#c5a059]">
                — Dr. Nereu Lima, Sócio Fundador (Ex-Presidente da OAB/RS)
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/escritorio')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:text-[#e0bc75] transition-colors"
              >
                <span>Ler a história completa do escritório e linha do tempo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded overflow-hidden border border-[#222c3d] shadow-2xl">
              <img
                src={FIRM_DETAILS.images.entrance}
                alt="Entrada do Escritório Nereu Lima Advogados Associados"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/80 to-transparent p-4">
                <span className="text-xs font-medium text-white block">
                  Sede própria na Praça da Matriz, Porto Alegre
                </span>
                <span className="text-[11px] text-[#94a3b8]">
                  Praça Marechal Deodoro, 130, cj. 1001 — Centro Histórico
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded overflow-hidden border border-[#222c3d] relative">
                <img
                  src={FIRM_DETAILS.images.library}
                  alt="Biblioteca especializada de Direito Penal"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-[#0a0e16]/60 p-3 flex flex-col justify-end">
                  <span className="text-xs font-medium text-white">Biblioteca Própria</span>
                  <span className="text-[10px] text-[#94a3b8]">Acervo criminal exclusivo</span>
                </div>
              </div>

              <div className="rounded overflow-hidden border border-[#222c3d] relative">
                <img
                  src={FIRM_DETAILS.images.viewPracaMatriz}
                  alt="Vista para a Praça da Matriz"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-[#0a0e16]/60 p-3 flex flex-col justify-end">
                  <span className="text-xs font-medium text-white">Vista Histórica</span>
                  <span className="text-[10px] text-[#94a3b8]">Cartão postal de Porto Alegre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Especializadas */}
      <section className="py-20 bg-[#080c13] border-y border-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059] flex items-center gap-2">
              <span className="w-6 h-px bg-[#c5a059]" />
              Especialização Estrita
            </div>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white mt-2">
              Áreas de Atuação Penal
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] font-lora mt-3">
              Atuação artesanal e dedicada no âmbito do Direito Penal e Processual Penal, tanto na defesa técnica intransigente dos acusados quanto na representação e assistência qualificada em favor da vítima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.slice(0, 9).map((area) => (
              <div
                key={area.id}
                onClick={() => onNavigate(`/atuacao/${area.slug}`)}
                className="p-6 rounded bg-[#0e1420] border border-[#20293a] hover:border-[#c5a059]/50 hover:bg-[#121927] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-[#162030] text-[#c5a059] flex items-center justify-center font-cinzel text-sm font-bold mb-4 group-hover:scale-105 transition-transform">
                    §
                  </div>
                  <h3 className="font-cinzel text-base font-semibold text-white group-hover:text-[#c5a059] transition-colors mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] line-clamp-3 leading-relaxed">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1b2332] flex items-center justify-between text-xs text-[#c5a059] font-medium">
                  <span>Conhecer atuação</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/atuacao')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#151e2c] hover:bg-[#1f2b3e] border border-[#2d3a4e] rounded transition-all"
            >
              <span>Ver todas as 18 áreas de atuação criminal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Corpo de Advogados */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059] flex items-center gap-2">
            <span className="w-6 h-px bg-[#c5a059]" />
            Corpo Profissional
          </div>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white mt-2">
            Advogados Criminalistas
          </h2>
          <p className="text-sm text-[#94a3b8] font-lora mt-2">
            A união entre mais de cinco décadas de vivência histórica e o aprimoramento acadêmico e dogmático contemporâneo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAWYERS.map((lawyer) => (
            <div
              key={lawyer.id}
              onClick={() => onNavigate(`/profissionais/${lawyer.slug}`)}
              className="bg-[#0f1420] border border-[#222c3e] rounded overflow-hidden hover:border-[#c5a059]/60 transition-all cursor-pointer group flex flex-col"
            >
              <div className="h-72 overflow-hidden bg-[#161f2e] relative">
                <img
                  src={lawyer.photoUrl}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#090d14]/80 backdrop-blur-sm border border-[#263143] text-[11px] font-semibold text-[#c5a059] rounded">
                  {lawyer.oab}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold block">
                    {lawyer.title}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white mt-1 group-hover:text-[#c5a059] transition-colors">
                    {lawyer.name}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-2 line-clamp-3 leading-relaxed">
                    {lawyer.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e2738] flex items-center justify-between text-xs text-[#c5a059] font-medium">
                  <span>Ver trajetória e credenciais</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instâncias de Atuação */}
      <section className="py-16 bg-[#090d14] border-t border-[#1e2738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Instâncias e Tribunais de Atuação
            </h2>
            <p className="text-xs text-[#94a3b8] mt-2">
              Patrocínio de causas em todas as fases da persecução penal, desde a fase investigativa até cortes superiores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs text-[#cbd5e1]">
            {COURTS_OF_OPERATION.map((court, index) => (
              <div
                key={index}
                className="p-3 rounded bg-[#111724] border border-[#1e283a] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{court}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Sóbrio para Atendimento */}
      <section className="py-20 bg-gradient-to-b from-[#0f1522] to-[#070a0f] border-t border-[#1e2738]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded bg-[#1a2434] border border-[#c5a059]/40 text-[#c5a059] mx-auto flex items-center justify-center font-cinzel text-xl font-bold">
            NL
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
            Orientação técnica e atendimento imediato.
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-lora max-w-2xl mx-auto leading-relaxed">
            Se você ou sua empresa enfrenta uma investigação, intimação policial ou ação penal, inicie o fluxo reservado de solicitação de atendimento. Nossos criminalistas realizam a triagem com absoluto sigilo profissional.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/atendimento')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded shadow-xl"
            >
              <span>Solicitar Atendimento Sigiloso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phones.main.replace(/\D/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold text-white bg-[#151e2c] hover:bg-[#1f2b3e] border border-[#2b374a] rounded"
            >
              <PhoneCall className="w-4 h-4 text-[#c5a059]" />
              <span>Plantão: {FIRM_DETAILS.phones.main}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
