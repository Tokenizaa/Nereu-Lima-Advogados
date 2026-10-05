import { MapPin, Phone, Mail, Scale, Shield, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, LAWYERS } from '../data/firmData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a0f] text-[#94a3b8] border-t border-[#1c2432] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1b2330]">
          {/* Coluna 1: O Escritório */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#151d2a] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <span className="font-cinzel text-lg font-bold">NL</span>
              </div>
              <div>
                <div className="font-cinzel text-base font-bold text-white tracking-wider">
                  NEREU LIMA
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#c5a059]">
                  Advogados Associados
                </div>
              </div>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Sociedade de advogados constituída sob a {FIRM_DETAILS.oabSociety}, com mais de meio século de atuação contínua e dedicada com exclusividade ao Direito Penal, Processo Penal e Tribunais Superiores.
            </p>
            <div className="text-xs space-y-1 text-[#cbd5e1]">
              <div className="font-semibold text-white">Fundador:</div>
              <div>Dr. Nereu Lima — OAB/RS 5.315</div>
              <div className="text-[11px] text-[#64748b]">Ex-Presidente da OAB/RS | Fundador da ACRIERGS</div>
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold text-[#f8fafc] tracking-wider uppercase border-b border-[#222c3d] pb-2">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/escritorio')} className="hover:text-[#c5a059] transition-colors">
                  O Escritório e História
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/profissionais')} className="hover:text-[#c5a059] transition-colors">
                  Corpo de Advogados
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/atuacao')} className="hover:text-[#c5a059] transition-colors">
                  Áreas de Atuação Penal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/biblioteca')} className="hover:text-[#c5a059] transition-colors">
                  Biblioteca & Doutrina
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/artigos')} className="hover:text-[#c5a059] transition-colors">
                  Artigos & Publicações
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/sobre')} className="hover:text-[#c5a059] transition-colors">
                  Informações Institucionais
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/atendimento')} className="hover:text-[#c5a059] transition-colors font-medium text-[#c5a059]">
                  Solicitar Atendimento
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Advogados e Prática */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold text-[#f8fafc] tracking-wider uppercase border-b border-[#222c3d] pb-2">
              Profissionais
            </h4>
            <ul className="space-y-2 text-xs">
              {LAWYERS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleNav(`/profissionais/${l.slug}`)}
                    className="text-left hover:text-[#c5a059] transition-colors"
                  >
                    <span className="font-medium text-white block">{l.name}</span>
                    <span className="text-[11px] text-[#64748b]">{l.oab} • {l.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <h5 className="text-[11px] uppercase tracking-wider text-[#64748b] font-semibold">
                Sistemas Digitais
              </h5>
              <div className="flex gap-2 mt-1.5">
                <button
                  onClick={() => handleNav('/cliente')}
                  className="px-2.5 py-1 text-[11px] bg-[#121824] hover:bg-[#1a2333] text-[#cbd5e1] border border-[#232e40] rounded transition-colors"
                >
                  Área do Cliente
                </button>
                <button
                  onClick={() => handleNav('/admin')}
                  className="px-2.5 py-1 text-[11px] bg-[#121824] hover:bg-[#1a2333] text-[#cbd5e1] border border-[#232e40] rounded transition-colors"
                >
                  Painel da Banca
                </button>
              </div>
            </div>
          </div>

          {/* Coluna 4: Localização e Contato Oficial */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold text-[#f8fafc] tracking-wider uppercase border-b border-[#222c3d] pb-2">
              Sede e Contatos
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">{FIRM_DETAILS.address.street}, {FIRM_DETAILS.address.suite}</div>
                  <div>{FIRM_DETAILS.address.neighborhood} — {FIRM_DETAILS.address.city}/{FIRM_DETAILS.address.state}</div>
                  <div className="text-[11px] text-[#64748b]">CEP {FIRM_DETAILS.address.postalCode}</div>
                  <div className="text-[10px] text-[#c5a059] mt-0.5">{FIRM_DETAILS.address.landmark}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <div>
                  <a href={`tel:${FIRM_DETAILS.phones.main.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                    {FIRM_DETAILS.phones.main}
                  </a>
                  <span className="text-[11px] text-[#64748b] ml-1">(Telefone e WhatsApp)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-white transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Ético OAB & Direitos */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#c5a059]" />
            <span>
              {FIRM_DETAILS.name} — Inscrito na OAB/RS sob o nº 2828. Todos os direitos reservados.
            </span>
          </div>
          <div className="text-center sm:text-right text-[10px] max-w-xl">
            Este site tem finalidade estritamente institucional e informativa, em consonância com o Provimento nº 205/2021 do Conselho Federal da OAB e com o Código de Ética e Disciplina da Advocacia.
          </div>
        </div>
      </div>
    </footer>
  );
}
