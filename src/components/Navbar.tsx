import { useState } from 'react';
import { Phone, Shield, Menu, X, ChevronDown, UserCheck, Lock, Scale, BookOpen } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'O Escritório', path: '/escritorio' },
    { label: 'Profissionais', path: '/profissionais' },
    { label: 'Áreas de Atuação', path: '/atuacao' },
    { label: 'Biblioteca', path: '/biblioteca' },
    { label: 'Artigos', path: '/artigos' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setPlatformMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e16]/95 backdrop-blur-md border-b border-[#222b3b] shadow-xl">
      {/* Top Bar institucional */}
      <div className="bg-[#070a0f] border-b border-[#1b2330] py-1.5 px-4 text-xs text-[#94a3b8]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#c5a059] font-medium tracking-wide">
              <Scale className="w-3.5 h-3.5 text-[#c5a059]" />
              {FIRM_DETAILS.oabSociety}
            </span>
            <span className="hidden sm:inline-block text-[#64748b]">•</span>
            <span className="hidden sm:inline-block">
              Sede na Praça da Matriz — Porto Alegre / RS
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${FIRM_DETAILS.phones.main.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span>{FIRM_DETAILS.phones.main}</span>
            </a>
            <span className="text-[#64748b]">•</span>
            <span className="text-[#cbd5e1] font-medium">Plantão / WhatsApp: {FIRM_DETAILS.phones.mobiles[0]}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Nome do Escritório */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shadow-inner group-hover:border-[#c5a059] transition-colors">
              <span className="font-cinzel text-xl font-bold tracking-wider">NL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-[#f8fafc] group-hover:text-[#c5a059] transition-colors">
                NEREU LIMA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-medium">
                Advogados Associados
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`px-3 py-2 text-sm font-medium transition-colors tracking-wide rounded-sm ${
                  isActive(link.path)
                    ? 'text-[#c5a059] bg-[#1e293b]/50 border-b-2 border-[#c5a059]'
                    : 'text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-[#151c28]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dropdown Acesso Plataforma */}
            <div className="relative">
              <button
                onClick={() => setPlatformMenuOpen(!platformMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#cbd5e1] hover:text-[#f8fafc] bg-[#151d2a] hover:bg-[#1e293b] border border-[#2d3748] rounded transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Plataforma</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8]" />
              </button>

              {platformMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0f1520] border border-[#2d3748] rounded-md shadow-2xl py-1 z-50">
                  <div className="px-3 py-2 border-b border-[#1f2937] text-[11px] font-semibold text-[#64748b] uppercase tracking-wider">
                    Sistemas do Escritório
                  </div>
                  <button
                    onClick={() => handleLinkClick('/cliente')}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-left text-[#e2e8f0] hover:bg-[#1a2333] hover:text-[#c5a059] transition-colors"
                  >
                    <UserCheck className="w-4 h-4 text-[#c5a059]" />
                    <div>
                      <div className="font-medium">Área do Cliente</div>
                      <div className="text-[10px] text-[#64748b]">Acompanhamento de processos</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/admin')}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-left text-[#e2e8f0] hover:bg-[#1a2333] hover:text-[#c5a059] transition-colors"
                  >
                    <Shield className="w-4 h-4 text-[#c5a059]" />
                    <div>
                      <div className="font-medium">Painel da Banca</div>
                      <div className="text-[10px] text-[#64748b]">Gestão interna e triagem</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Botão Solicitar Atendimento */}
            <button
              onClick={() => handleLinkClick('/atendimento')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0e16] bg-[#c5a059] hover:bg-[#d6b26b] active:bg-[#b08e48] transition-all rounded shadow-md"
            >
              <span>Solicitar Atendimento</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('/atendimento')}
              className="px-3 py-1.5 text-xs font-semibold text-[#0a0e16] bg-[#c5a059] rounded"
            >
              Atendimento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94a3b8] hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1f2937] bg-[#0c111a] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded ${
                isActive(link.path)
                  ? 'text-[#c5a059] bg-[#1a2333]'
                  : 'text-[#e2e8f0] hover:bg-[#161e2c]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#1f2937] space-y-2">
            <button
              onClick={() => handleLinkClick('/cliente')}
              className="flex items-center gap-2.5 w-full text-left px-3 py-2 text-sm text-[#cbd5e1] hover:text-white"
            >
              <UserCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Área do Cliente</span>
            </button>
            <button
              onClick={() => handleLinkClick('/admin')}
              className="flex items-center gap-2.5 w-full text-left px-3 py-2 text-sm text-[#cbd5e1] hover:text-white"
            >
              <Shield className="w-4 h-4 text-[#c5a059]" />
              <span>Painel do Escritório (Banca)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
