import { Shield, Scale, MapPin, Award, BookOpen, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { FIRM_DETAILS, TIMELINE_EVENTS, LAWYERS } from '../data/firmData';
import SEOHead from '../components/SEOHead';

interface EscritorioPageProps {
  onNavigate: (path: string) => void;
}

export default function EscritorioPage({ onNavigate }: EscritorioPageProps) {
  return (
    <div className="min-h-screen bg-[#0c1017]">
      <SEOHead
        title="O Escritório — Mais de 50 Anos de História e Tradição | Nereu Lima Advogados"
        description="Conheça a história e o posicionamento do escritório Nereu Lima Advogados Associados. Fundado em 1969 em Porto Alegre por Dr. Nereu Lima, ex-presidente da OAB/RS."
        canonicalPath="/escritorio"
      />

      {/* Header Institucional */}
      <section className="relative py-20 bg-[#090d14] border-b border-[#1d2636]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162130] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Memória e Tradição Forense</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              O Escritório Nereu Lima Advogados Associados
            </h1>
            <p className="text-base sm:text-lg text-[#94a3b8] font-lora leading-relaxed">
              Mais de meio século dedicado com retidão, coragem e conhecimento técnico apurado à advocacia penal no Rio Grande do Sul e perante os Tribunais Superiores da República.
            </p>
          </div>
        </div>
      </section>

      {/* Origens e Posicionamento */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-[#cbd5e1] font-lora text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              Do Edifício Sulacap à Praça da Matriz
            </h2>

            <p>
              Em 1969, recém-formado pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), o advogado Nereu Lima montou, junto com os colegas de faculdade e amigos Manoel da Rocha e Eduardo Aranha, seu próprio escritório no 5º andar do Edifício Sulacap, na hoje histórica Esquina Democrática de Porto Alegre.
            </p>

            <blockquote className="p-5 border-l-2 border-[#c5a059] bg-[#101724] italic text-[#e2e8f0]">
              “No início da carreira, como todo advogado, atendia a todas as demandas, todas as causas, mas já fazia mais criminal, que era o projeto inicial. Depois, fui só advogando nessa área.”
              <span className="block mt-2 text-xs font-bold text-[#c5a059] not-italic">— Dr. Nereu Lima</span>
            </blockquote>

            <h3 className="text-xl font-cinzel font-bold text-white pt-4">
              Por que o Direito Penal? O Encontro com Francesco Carnelutti
            </h3>

            <p>
              Indagado sobre a razão de ter dedicado sua vida inteira ao Direito Penal, Dr. Nereu Lima resgata os fundamentos mais nobres da profissão:
            </p>

            <blockquote className="p-5 border-l-2 border-[#c5a059] bg-[#101724] italic text-[#e2e8f0]">
              “Porque são os dramas humanos. Após ler o livro <em>'As Misérias do Processo Penal'</em>, do Francesco Carnelutti, eu vi que ele tinha razão num dos aspectos mais importantes: o réu que está preso, às vezes ele não precisa nem de advogado, de juiz ou de promotor; ele precisa de afeto, ele é um carente. Ele está precisando de uma palavra de conforto, de um bálsamo para a vida dele, que já é uma tortura.
              <br /><br />
              Então, advocacia criminal não deixa de ser uma solidariedade. Ao mesmo tempo que é um conforto para o advogado criminalista que entende o seu papel, é uma responsabilidade muito grande, porque, assim como o médico tem a vida do paciente nas mãos durante uma cirurgia, o advogado também, em uma defesa final, ele tem a vida do réu nas mãos. Se tirarem o bem mais importante dele, a liberdade, o resto não existe.
              <br /><br />
              Como afirma Carnelutti, <em>'a vida do réu preso é contar os dias'</em>. Para ser advogado criminalista, tem que ter vocação. Tem que gostar muito e ter solidariedade. Advogado não pode ser movido só pela pecúnia, precisa entender que o trabalho dele é social. Assim como existe um promotor para acusar e o juiz para julgar, no Estado Democrático de Direito, precisa de um advogado para defender.”
            </blockquote>

            <h3 className="text-xl font-cinzel font-bold text-white pt-4">
              A Mensagem Ética aos Novos Advogados
            </h3>

            <p>
              Ao longo de seus vinte anos como professor na Unisinos e de suas preleções na Assembleia Legislativa do Estado do RS, Dr. Nereu Lima sempre deixou uma advertência indispensável:
            </p>

            <div className="p-4 rounded bg-[#131b29] border border-[#232f42] text-sm text-[#cbd5e1]">
              <p className="italic">
                "Permaneçam sempre alertas em relação às tentações que aparecem. Muitas delas podem se transformar em armadilha altamente perigosa, principalmente quando envolve a ultrapassagem dos limites éticos do exercício da profissão. Uma vez eu afirmei, no auditório da ALERGS, para centenas de advogados que recebiam a sua carteira: <strong>a tentação bate 7 vezes por dia na porta do advogado</strong>. Ele deve ter muito cuidado. Na dúvida, jamais deve deixar de seguir sua consciência ética."
              </p>
            </div>
          </div>

          {/* Coluna Visual e Sede */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded overflow-hidden border border-[#222c3e] shadow-xl">
              <img
                src={FIRM_DETAILS.images.viewPracaMatriz}
                alt="Vista da Praça da Matriz a partir do escritório"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#101622] border-t border-[#1d2637]">
                <div className="text-xs font-semibold text-white">Sede na Praça da Matriz</div>
                <div className="text-[11px] text-[#94a3b8] mt-1">
                  Localização estratégica no Centro Histórico de Porto Alegre, de frente para a Praça Marechal Deodoro, Palácio Piratini e Theatro São Pedro.
                </div>
              </div>
            </div>

            <div className="rounded overflow-hidden border border-[#222c3e] shadow-xl">
              <img
                src={FIRM_DETAILS.images.library}
                alt="Acervo e biblioteca criminalista"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-[#101622] border-t border-[#1d2637]">
                <div className="text-xs font-semibold text-white">Biblioteca & Acervo Especializado</div>
                <div className="text-[11px] text-[#94a3b8] mt-1">
                  {FIRM_DETAILS.librarySummary}
                </div>
              </div>
            </div>

            <div className="p-5 rounded bg-[#101724] border border-[#222d40] space-y-3">
              <h4 className="font-cinzel text-sm font-semibold text-[#c5a059] uppercase tracking-wider">
                Missão da Banca
              </h4>
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Nereu Lima atua ao lado de seu filho e advogado criminalista Nereu Lima Filho, e de Cristiano Kruel. A missão da equipe é o aprofundamento contínuo no estudo do Direito Penal e do Processo Penal, aperfeiçoando os conhecimentos para prestar atendimento artesanal e de excelência a cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo Institucional */}
      <section className="py-20 bg-[#080c13] border-t border-[#1c2534]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Cronologia Documentada
            </span>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
              Linha do Tempo Institucional
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Fatos históricos extraídos diretamente da memória institucional do Dr. Nereu Lima e da advocacia brasileira.
            </p>
          </div>

          <div className="relative border-l-2 border-[#222e42] ml-4 md:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Node icon */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0c1017] border-2 border-[#c5a059] group-hover:scale-125 transition-transform" />

                {/* Ano */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-[#152030] text-[#c5a059] text-xs font-cinzel font-bold tracking-wider mb-1">
                  {event.year}
                </div>

                {/* Título e Descrição */}
                <h3 className="text-lg font-cinzel font-bold text-white mt-1">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] font-lora leading-relaxed mt-2 max-w-3xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 bg-[#0a0e16] border-t border-[#1d2637]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold text-white">
            Conheça os profissionais que compõem a banca
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-xl mx-auto">
            Uma advocacia séria, atenta às garantias processuais e com atendimento presencial ou remoto para clientes em todo o território nacional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/profissionais')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] rounded transition-all"
            >
              Ver Equipe de Advogados
            </button>
            <button
              onClick={() => onNavigate('/atendimento')}
              className="px-6 py-3 text-xs font-semibold text-white bg-[#151e2c] hover:bg-[#1f2b3e] border border-[#2c3749] rounded transition-all"
            >
              Solicitar Atendimento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
