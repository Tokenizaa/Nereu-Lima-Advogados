import { ARTICLES } from '../data/firmData';
import { BookOpen, Calendar, User, Clock, ChevronRight, Scale } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ArtigosPageProps {
  onNavigate: (path: string) => void;
}

export default function ArtigosPage({ onNavigate }: ArtigosPageProps) {
  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Artigos e Publicações Jurídicas | Nereu Lima Advogados"
        description="Artigos, pareceres e estudos em Direito Penal e Processo Penal redigidos pelos advogados do escritório Nereu Lima Advogados Associados."
        canonicalPath="/artigos"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Doutrina & Produção Intelectual</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Artigos e Publicações
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Reflexões doutrinárias, análises de precedentes dos Tribunais Superiores e textos institucionais produzidos pelos advogados da banca.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => onNavigate(`/artigos/${article.slug}`)}
            className="p-8 rounded-lg bg-[#0e1420] border border-[#20293b] hover:border-[#c5a059]/60 hover:bg-[#121927] transition-all cursor-pointer group shadow-xl"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748b] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#162130] text-[#c5a059] font-medium border border-[#243144]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white group-hover:text-[#c5a059] transition-colors">
              {article.title}
            </h2>

            {article.subtitle && (
              <div className="text-xs sm:text-sm text-[#94a3b8] font-lora italic mt-1">
                {article.subtitle}
              </div>
            )}

            <p className="text-xs sm:text-sm text-[#cbd5e1] font-lora leading-relaxed mt-4">
              {article.summary}
            </p>

            <div className="mt-6 pt-4 border-t border-[#1b2332] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
                <User className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="font-semibold text-white">{article.author}</span>
                <span className="text-[11px] text-[#64748b]">({article.authorRole})</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#c5a059] font-semibold">
                <span>Ler artigo completo</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
