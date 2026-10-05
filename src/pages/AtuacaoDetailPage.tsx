import { PRACTICE_AREAS, ARTICLES } from '../data/firmData';
import { ArrowLeft, CheckCircle2, HelpCircle, ArrowRight, BookOpen, Scale, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface AtuacaoDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function AtuacaoDetailPage({ slug, onNavigate }: AtuacaoDetailPageProps) {
  const area = PRACTICE_AREAS.find((a) => a.slug === slug) || PRACTICE_AREAS[0];

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title={`${area.title} — Advocacia Criminal Especializada | Nereu Lima Advogados`}
        description={area.shortDescription}
        canonicalPath={`/atuacao/${area.slug}`}
      />

      {/* Top Header */}
      <div className="bg-[#090d14] border-b border-[#1c2434] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate('/atuacao')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] hover:text-[#c5a059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todas as áreas</span>
          </button>
          <div className="text-xs text-[#c5a059] font-medium font-cinzel">Direito Penal Especializado</div>
        </div>
      </div>

      {/* Hero da Área */}
      <section className="py-16 bg-[#0a0e16] border-b border-[#1e2738]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Atuação Técnica em {area.title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
            {area.title}
          </h1>

          <p className="text-base sm:text-lg text-[#cbd5e1] font-lora max-w-3xl leading-relaxed">
            {area.subtitle}
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coluna Principal */}
          <div className="lg:col-span-8 space-y-10">
            {/* Apresentação dogmática */}
            <div className="space-y-4 text-sm sm:text-base text-[#cbd5e1] font-lora leading-relaxed">
              {area.fullDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tópicos Chave */}
            <div className="p-6 rounded-lg bg-[#0e1420] border border-[#222c3e] space-y-4 shadow-lg">
              <h3 className="font-cinzel text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Aspectos Práticos e Hipóteses de Defesa</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#94a3b8]">
                {area.keyTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#c5a059] font-bold mt-0.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tribunais e Foros Aplicáveis */}
            <div className="space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                Jurisdições e Tribunais Competentes
              </h4>
              <div className="flex flex-wrap gap-2">
                {area.applicableCourts.map((court, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded bg-[#131b28] border border-[#232f42] text-xs text-[#cbd5e1]"
                  >
                    {court}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ da Área */}
            {area.faqs && area.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#1f293b]">
                <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#c5a059]" />
                  <span>Dúvidas Frequentes sobre {area.title}</span>
                </h3>

                <div className="space-y-4">
                  {area.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-5 rounded bg-[#101724] border border-[#202b3d] space-y-2">
                      <h4 className="font-semibold text-sm text-[#f8fafc] font-cinzel">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94a3b8] font-lora leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar de Ação e Artigos */}
          <div className="lg:col-span-4 space-y-6">
            {/* Box Solicitar Atendimento */}
            <div className="p-6 rounded-lg bg-[#111723] border border-[#232f42] space-y-4 shadow-xl">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#c5a059]">
                Defesa Técnica Qualificada
              </div>
              <h3 className="font-cinzel text-base font-bold text-white">
                Precisa de orientação em {area.title}?
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Nossos criminalistas examinam inquéritos policiais, procedimentos investigatórios e processos com discrição absoluta e presteza.
              </p>
              <button
                onClick={() => onNavigate('/atendimento')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded shadow"
              >
                <span>Solicitar Atendimento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Artigos Relacionados */}
            <div className="p-6 rounded-lg bg-[#0e1420] border border-[#1e2738] space-y-4">
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#c5a059]" />
                <span>Textos e Doutrina Relacionada</span>
              </h4>
              <div className="space-y-3">
                {ARTICLES.slice(0, 2).map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onNavigate(`/artigos/${art.slug}`)}
                    className="p-3 rounded bg-[#131b28] hover:bg-[#182334] border border-[#202b3d] cursor-pointer transition-colors"
                  >
                    <div className="text-xs font-semibold text-white hover:text-[#c5a059]">
                      {art.title}
                    </div>
                    <div className="text-[10px] text-[#64748b] mt-1">{art.author}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
