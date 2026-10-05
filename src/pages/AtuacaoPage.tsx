import { useState } from 'react';
import { PRACTICE_AREAS, COURTS_OF_OPERATION } from '../data/firmData';
import { Scale, ChevronRight, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface AtuacaoPageProps {
  onNavigate: (path: string) => void;
}

export default function AtuacaoPage({ onNavigate }: AtuacaoPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const term = searchTerm.toLowerCase();
    return (
      area.title.toLowerCase().includes(term) ||
      area.shortDescription.toLowerCase().includes(term) ||
      area.keyTopics.some((t) => t.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Áreas de Atuação em Direito Penal e Processo Penal | Nereu Lima Advogados"
        description="Conheça as áreas de atuação criminal do escritório Nereu Lima Advogados Associados: Tribunal do Júri, Crimes Financeiros, Tributários, Lei de Drogas, Crimes Ambientais e Execução Penal."
        canonicalPath="/atuacao"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Advocacia Penal Estratégica</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Áreas de Atuação
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              O escritório Nereu Lima Advogados atua com exclusividade no âmbito do Direito Penal, com ênfase na defesa dos acusados e na assistência qualificada em favor da vítima, perante todas as instâncias judiciais e procedimentos administrativos.
            </p>
          </div>
        </div>
      </section>

      {/* Busca e Lista */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1f293b]">
          <div className="text-xs text-[#94a3b8]">
            Mostrando <strong className="text-white font-semibold">{filteredAreas.length}</strong> áreas de atuação especializadas
          </div>

          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por área, crime ou tema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#121926] border border-[#232e42] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a059]"
            />
          </div>
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => onNavigate(`/atuacao/${area.slug}`)}
              className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] hover:border-[#c5a059]/60 hover:bg-[#121927] transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-8 h-8 rounded bg-[#162130] text-[#c5a059] flex items-center justify-center font-cinzel text-xs font-bold mb-4 group-hover:scale-105 transition-transform">
                  §
                </div>
                <h2 className="font-cinzel text-lg font-bold text-white group-hover:text-[#c5a059] transition-colors">
                  {area.title}
                </h2>
                <div className="text-[11px] text-[#c5a059] font-medium mt-1">
                  {area.subtitle}
                </div>
                <p className="text-xs text-[#94a3b8] mt-3 line-clamp-3 leading-relaxed">
                  {area.shortDescription}
                </p>

                {/* Tags de temas */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.keyTopics.slice(0, 2).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#141d2a] text-[10px] text-[#cbd5e1] border border-[#232f42]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1b2332] flex items-center justify-between text-xs text-[#c5a059] font-semibold">
                <span>Ver atuação detalhada e jurisprudência</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-16 text-[#94a3b8]">
            <p>Nenhuma área de atuação encontrada para o termo pesquisado.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-xs text-[#c5a059] underline"
            >
              Limpar busca
            </button>
          </div>
        )}
      </section>

      {/* Instâncias */}
      <section className="py-16 bg-[#080c13] border-t border-[#1d2638]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="font-cinzel text-xl font-bold text-white">
              Instâncias e Cortes Judiciais
            </h3>
            <p className="text-xs text-[#94a3b8] mt-1">
              Todas as áreas contam com acompanhamento simultâneo nos seguintes foros e tribunais:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#cbd5e1]">
            {COURTS_OF_OPERATION.map((court, i) => (
              <div key={i} className="p-3 rounded bg-[#101623] border border-[#1e2739] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>{court}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
