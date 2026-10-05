import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EscritorioPage from './pages/EscritorioPage';
import ProfissionaisPage from './pages/ProfissionaisPage';
import ProfissionalDetailPage from './pages/ProfissionalDetailPage';
import AtuacaoPage from './pages/AtuacaoPage';
import AtuacaoDetailPage from './pages/AtuacaoDetailPage';
import BibliotecaPage from './pages/BibliotecaPage';
import ArtigosPage from './pages/ArtigosPage';
import ArtigoDetailPage from './pages/ArtigoDetailPage';
import ContatoPage from './pages/ContatoPage';
import AtendimentoPage from './pages/AtendimentoPage';
import SobrePage from './pages/SobrePage';
import ClientPortal from './pages/ClientPortal';
import AdminPortal from './pages/AdminPortal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
  };

  // Parsing da rota
  const renderRoute = () => {
    // Rotas de Plataforma Autenticada / Interna
    if (currentPath.startsWith('/cliente')) {
      const subTab = currentPath.split('/')[2] || 'dashboard';
      const processId = currentPath.split('/')[3] || undefined;
      return <ClientPortal onNavigate={navigate} initialTab={subTab} processIdParam={processId} />;
    }

    if (currentPath.startsWith('/admin')) {
      const subTab = currentPath.split('/')[2] || 'dashboard';
      return <AdminPortal onNavigate={navigate} initialTab={subTab} />;
    }

    // Rotas Públicas Individuais
    if (currentPath.startsWith('/profissionais/')) {
      const slug = currentPath.replace('/profissionais/', '');
      return <ProfissionalDetailPage slug={slug} onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/atuacao/')) {
      const slug = currentPath.replace('/atuacao/', '');
      return <AtuacaoDetailPage slug={slug} onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/artigos/')) {
      const slug = currentPath.replace('/artigos/', '');
      return <ArtigoDetailPage slug={slug} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/escritorio':
        return <EscritorioPage onNavigate={navigate} />;
      case '/profissionais':
        return <ProfissionaisPage onNavigate={navigate} />;
      case '/atuacao':
        return <AtuacaoPage onNavigate={navigate} />;
      case '/biblioteca':
        return <BibliotecaPage onNavigate={navigate} />;
      case '/artigos':
        return <ArtigosPage onNavigate={navigate} />;
      case '/contato':
        return <ContatoPage onNavigate={navigate} />;
      case '/atendimento':
        return <AtendimentoPage onNavigate={navigate} />;
      case '/sobre':
        return <SobrePage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  const isPortalArea = currentPath.startsWith('/cliente') || currentPath.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#0c1017] text-[#e2e8f0]">
      {!isPortalArea && <Navbar currentPath={currentPath} onNavigate={navigate} />}
      <main className="flex-grow">
        {renderRoute()}
      </main>
      {!isPortalArea && <Footer onNavigate={navigate} />}
    </div>
  );
}
