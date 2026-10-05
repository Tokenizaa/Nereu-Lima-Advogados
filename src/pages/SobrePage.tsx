import { Scale, Shield, Building2, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { FIRM_DETAILS, LAWYERS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface SobrePageProps {
  onNavigate: (path: string) => void;
}

export default function SobrePage({ onNavigate }: SobrePageProps) {
  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Sobre a Instituição | Nereu Lima Advogados Associados"
        description="Informações institucionais complementares sobre a sociedade Nereu Lima Advogados Associados (OAB/RS 2828), estrutura física e princípios deontológicos."
        canonicalPath="/sobre"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institucional Complementar</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              A Instituição Nereu Lima
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Estrutura, valores inegociáveis e compromisso com o exercício ético da advocacia criminal há mais de 50 anos em Porto Alegre e nos Tribunais de Brasília.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares Institucionais */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded bg-[#162030] text-[#c5a059] flex items-center justify-center font-cinzel font-bold text-lg">
              I
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white">Tradição & Combate</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-lora leading-relaxed">
              Uma história que remonta a 1969, construída pela presença assídua nos tribunais de júri, cortes de apelação e assembleias representativas da classe jurídica.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded bg-[#162030] text-[#c5a059] flex items-center justify-center font-cinzel font-bold text-lg">
              II
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white">Discrição Absoluta</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-lora leading-relaxed">
              Tratamento sigiloso e austero de todas as informações confiadas ao escritório, com respeito rigoroso à privacidade, honra e prerrogativas do constituinte.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded bg-[#162030] text-[#c5a059] flex items-center justify-center font-cinzel font-bold text-lg">
              III
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white">Rigor Dogmático</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-lora leading-relaxed">
              Cada defesa é elaborada de forma artesanal com base na mais alta doutrina penal e nos precedentes mais recentes do STF, STJ e Tribunais Regionais.
            </p>
          </div>
        </div>

        {/* Localização e Estrutura */}
        <div className="p-8 sm:p-12 rounded-lg bg-[#0e1420] border border-[#20293b] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#cbd5e1] font-lora leading-relaxed">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block">
              Sede e Localização Cívica
            </span>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              No Coração Histórico de Porto Alegre
            </h2>
            <p>
              Instalado no 10º andar do edifício na <strong>Praça Marechal Deodoro (Praça da Matriz), nº 130</strong>, o escritório desfruta de vista panorâmica para os símbolos cívicos e históricos da capital gaúcha: o Palácio Piratini (sede do Governo Estadual), a Catedral Metropolitana e o Theatro São Pedro.
            </p>
            <p>
              A sede abriga gabinetes privativos de atendimento, sala de conferências e biblioteca própria especializada, proporcionando um ambiente de recolhimento, segurança e alta concentração intelectual para a defesa das causas confiadas à banca.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#c5a059]" />
                <span>Praça Mal. Deodoro, 130, cj. 1001 — CEP 90010-300 — Porto Alegre / RS</span>
              </div>
              <div>Sociedade registrada na OAB/RS sob nº 2828</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded overflow-hidden border border-[#232e42]">
              <img
                src={FIRM_DETAILS.images.viewPracaMatriz}
                alt="Vista da Praça da Matriz"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded overflow-hidden border border-[#232e42]">
                <img
                  src={FIRM_DETAILS.images.library}
                  alt="Acervo doutrinário"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded overflow-hidden border border-[#232e42]">
                <img
                  src={FIRM_DETAILS.images.entrance}
                  alt="Entrada do escritório"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
