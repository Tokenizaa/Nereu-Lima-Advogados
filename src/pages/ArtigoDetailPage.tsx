import { ARTICLES } from '../data/firmData';
import { ArrowLeft, Calendar, User, Clock, Bookmark, Share2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ArtigoDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ArtigoDetailPage({ slug, onNavigate }: ArtigoDetailPageProps) {
  const article = ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title={`${article.title} — ${article.author} | Nereu Lima Advogados`}
        description={article.summary}
        canonicalPath={`/artigos/${article.slug}`}
        ogType="article"
        publishedTime={article.date}
        author={article.author}
      />

      {/* Top Breadcrumb */}
      <div className="bg-[#090d14] border-b border-[#1c2434] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate('/artigos')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] hover:text-[#c5a059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para lista de artigos</span>
          </button>
          <div className="text-xs text-[#c5a059] font-medium">{article.category}</div>
        </div>
      </div>

      {/* Artigo */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="space-y-4 border-b border-[#1f293b] pb-8">
          <span className="inline-block px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold tracking-wider uppercase">
            {article.category}
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white leading-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-base sm:text-xl text-[#94a3b8] font-lora italic leading-relaxed">
              {article.subtitle}
            </p>
          )}

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#182333] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-cinzel font-bold">
                NL
              </div>
              <div>
                <div className="font-semibold text-white">{article.author}</div>
                <div className="text-[11px] text-[#64748b]">{article.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Corpo do Artigo */}
        <div className="py-10 space-y-6 text-[#cbd5e1] font-lora text-base sm:text-lg leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Fonte / Citação */}
        {article.sourceCitation && (
          <div className="mt-8 p-4 rounded bg-[#101724] border border-[#202b3d] text-xs text-[#94a3b8]">
            <div className="font-semibold text-[#cbd5e1] mb-1">Fonte / Referência da Publicação:</div>
            <div>{article.sourceCitation}</div>
          </div>
        )}

        {/* Box do Autor */}
        <div className="mt-12 p-6 rounded-lg bg-[#0e1420] border border-[#1f293b] flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-[#162130] border border-[#c5a059] flex items-center justify-center text-[#c5a059] font-cinzel text-lg font-bold shrink-0">
            NL
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cinzel text-base font-bold text-white">{article.author}</h4>
            <p className="text-xs text-[#c5a059]">{article.authorRole}</p>
            <p className="text-xs text-[#94a3b8] leading-relaxed pt-1">
              Atuação exclusiva em Direito Penal e Processual Penal perante a Justiça Estadual, Federal e Tribunais Superiores. Sede na Praça da Matriz, Porto Alegre.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
