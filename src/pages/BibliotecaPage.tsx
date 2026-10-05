import { useState } from 'react';
import { BookOpen, Scale, Search, Bookmark, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { FIRM_DETAILS, ARTICLES } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface BibliotecaPageProps {
  onNavigate: (path: string) => void;
}

export default function BibliotecaPage({ onNavigate }: BibliotecaPageProps) {
  const [activeTab, setActiveTab] = useState<'acervo' | 'doutrina' | 'historico'>('acervo');

  const ACERVO_ITEMS = [
    {
      title: 'As Misérias do Processo Penal (Le Miserie del Processo Penale)',
      author: 'Francesco Carnelutti',
      year: 'Edição Histórica',
      category: 'Filosofia e Processo Penal',
      description: 'Obra basilar que fundamenta o posicionamento do Dr. Nereu Lima sobre a solidariedade humana na advocacia criminal e a condição de vulnerabilidade do réu preso.',
      tags: ['Clássico', 'Doutrina Estrangeira', 'Humanização']
    },
    {
      title: 'Comentários ao Código Penal (Coleção Completa)',
      author: 'Nelson Hungria',
      year: 'Coleção Forense',
      category: 'Direito Penal Substantivo',
      description: 'Referência clássica para a dogmática dos crimes contra a vida, patrimônio e administração pública utilizada na elaboração de teses recursais nos Tribunais Superiores.',
      tags: ['Dogmática', 'Código Penal', 'Parte Especial']
    },
    {
      title: 'Lições de Direito Penal',
      author: 'Heleno Cláudio Fragoso',
      year: 'Tratado Clássico',
      category: 'Garantismo e Teoria do Crime',
      description: 'Marco doutrinário do garantismo penal no Brasil e da defesa das liberdades públicas fundamentais.',
      tags: ['Teoria do Delito', 'Garantismo']
    },
    {
      title: 'Direito Penal — Parte Geral e Especial',
      author: 'Aníbal Bruno',
      year: 'Acervo Histórico',
      category: 'Doutrina Penal Brasileira',
      description: 'Fundamentos da culpabilidade, do dolo e da imputabilidade penal.',
      tags: ['Culpabilidade', 'Dolo', 'Imputabilidade']
    },
    {
      title: 'Revista dos Advogados Criminalistas do RS (ACRIERGS)',
      author: 'Publicação da Associação / Fundada por Dr. Nereu Lima',
      year: 'Desde 1984',
      category: 'História Institucional & Artigos',
      description: 'Coleção histórica de artigos, memórias de plenários do Júri e teses forenses da advocacia criminal gaúcha.',
      tags: ['ACRIERGS', 'História', 'Tribunal do Júri']
    },
    {
      title: 'Estatuto da Criança e do Adolescente (Documentos da Elaboração)',
      author: 'Comissão OAB/RS & Nereu Lima',
      year: '1990',
      category: 'Memória Legislativa',
      description: 'Registros das conferências, debates e palestras ministradas em todo o país sobre as diretrizes protetivas do ECA.',
      tags: ['ECA', 'OAB/RS', 'Legislação']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="Biblioteca e Acervo Especializado | Nereu Lima Advogados"
        description="Conheça a biblioteca e acervo especializado em Direito Penal e Criminologia do escritório Nereu Lima Advogados Associados na Praça da Matriz em Porto Alegre."
        canonicalPath="/biblioteca"
      />

      {/* Header */}
      <section className="py-20 bg-[#090d14] border-b border-[#1c2534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Conhecimento e Doutrina</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Biblioteca & Acervo Especializado
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Instalada na sede do escritório na Praça da Matriz, nossa biblioteca reúne clássicos indispensáveis da dogmática penal nacional e internacional, construída ao longo de mais de 50 anos de estudo contínuo.
            </p>
          </div>
        </div>
      </section>

      {/* Banner da Biblioteca Real */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg overflow-hidden border border-[#222c3e] bg-[#0e1420] grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-6 h-80 lg:h-auto relative">
            <img
              src={FIRM_DETAILS.images.library}
              alt="Biblioteca física do escritório Nereu Lima Advogados"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
              Acervo Próprio & Exclusivo
            </span>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              O Rigor Dogmático no Centro da Defesa Criminal
            </h2>
            <p className="text-sm text-[#cbd5e1] font-lora leading-relaxed">
              {FIRM_DETAILS.librarySummary}
            </p>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              O estudo aprofundado dos institutos penais é o alicerce para a construção de teses sólidas perante os Tribunais de Justiça e os Tribunais Superiores.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/artigos')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a059] hover:text-[#dcb66c] uppercase tracking-wider"
              >
                <span>Acessar artigos e publicações da banca</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Obras em Destaque no Acervo */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Obras e Coleções Referenciais
          </h3>
          <p className="text-xs text-[#94a3b8] mt-1">
            Títulos que orientam a fundamentação das peças processuais e a formação humanística da banca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACERVO_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#0e1420] border border-[#20293b] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
                  <span className="text-[#c5a059] font-medium">{item.category}</span>
                  <span>{item.year}</span>
                </div>
                <h4 className="font-cinzel text-base font-bold text-white mb-1">
                  {item.title}
                </h4>
                <div className="text-xs font-semibold text-[#94a3b8] mb-3">
                  {item.author}
                </div>
                <p className="text-xs text-[#cbd5e1] font-lora leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b2332] flex flex-wrap gap-1">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#131b28] text-[10px] text-[#94a3b8] border border-[#1e2738]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
