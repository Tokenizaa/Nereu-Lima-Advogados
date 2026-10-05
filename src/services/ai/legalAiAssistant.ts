import { LegalDecision, Lead } from '../../types';
import { INDEXED_LEGAL_DECISIONS } from '../legalSources';

export const LEGAL_AI_ETHICAL_NOTICE = `
AVISO ÉTICO INSTITUCIONAL:
Esta ferramenta constitui um módulo interno de processamento analítico para auxílio dos advogados do escritório Nereu Lima Advogados Associados (OAB/RS 2828).
Em estrita observância ao Código de Ética e Disciplina da OAB (art. 5º) e à legislação brasileira:
1. Este sistema NÃO atua como advogado, juiz ou consultor autônomo.
2. NÃO emite aconselhamento jurídico vinculante nem previsões de ganho ou absolvição.
3. Todas as minutas, classificações e resumos gerados destinam-se exclusivamente à revisão humana de um advogado regularmente inscrito na OAB.
`;

export interface AiInternalBriefing {
  id: string;
  leadId?: string;
  generatedAt: string;
  primaryLegalBranch: string;
  suspectedPenalArticles: string[];
  suggestedUrgency: 'urgente' | 'alta' | 'normal';
  preliminaryChecks: string[];
  recommendedInitialSteps: string[];
  caveatNotice: string;
}

export interface AiDecisionSummary {
  decisionId: string;
  keyTakeaway: string;
  applicabilityToDefense: string;
  proceduralPhase: string;
  relevantPrecedents: string[];
}

/**
 * Análise de triagem interna exclusiva para revisão prévia do advogado responsável
 */
export function generateInternalCaseBriefing(lead: Partial<Lead>): AiInternalBriefing {
  const desc = (lead.description || '').toLowerCase();
  const situation = lead.situation || '';

  let branch = 'Direito Processual Penal — Fase Pré-Processual';
  const articles: string[] = [];
  let urgency: 'urgente' | 'alta' | 'normal' = 'normal';
  const checks: string[] = [];
  const steps: string[] = [];

  if (situation.includes('preso') || desc.includes('preso') || desc.includes('flagrante') || desc.includes('prisão')) {
    urgency = 'urgente';
    branch = 'Medidas Urgentes de Liberdade / Audiência de Custódia';
    articles.push('Arts. 310, 312 e 316 do Código de Processo Penal (Prisão e Liberdade Provisória)');
    checks.push('Verificar realização de audiência de custódia no prazo de 24 horas (art. 310, CPP)');
    checks.push('Verificar fundamentação contemporânea da decisão cautelar (art. 315, § 2º, CPP)');
    steps.push('Imediato contato com a família e verificação do estabelecimento prisional');
    steps.push('Avaliar impetração de Habeas Corpus perante o Tribunal competente');
  } else if (situation.includes('intimação') || desc.includes('intimação') || desc.includes('delegacia')) {
    urgency = 'alta';
    branch = 'Inquérito Policial e Procedimentos Investigatórios';
    articles.push('Art. 7º, XIV da Lei 8.906/94 (Estatuto da OAB — Vista prévia dos autos)');
    checks.push('Verificar data e delegacia de comparecimento designada');
    checks.push('Garantir acesso prévio à íntegra dos elementos de prova já documentados (Súmula Vinculante 14 do STF)');
    steps.push('Apresentar procuração e petição de habilitação antes da oitiva do cliente');
    steps.push('Orientação ao cliente sobre o direito constitucional ao silêncio (art. 5º, LXIII, CF)');
  } else {
    articles.push('Garantias Fundamentais da Defesa (Art. 5º, LIV e LV da CF/88)');
    checks.push('Conferir existência de número do processo ou auto de investigação');
    steps.push('Agendamento de conferência reservada com os advogados do escritório');
  }

  return {
    id: `brief-${Date.now()}`,
    leadId: lead.id,
    generatedAt: new Date().toISOString(),
    primaryLegalBranch: branch,
    suspectedPenalArticles: articles,
    suggestedUrgency: urgency,
    preliminaryChecks: checks,
    recommendedInitialSteps: steps,
    caveatNotice: 'Minuta técnica gerada para triagem interna do Nereu Lima Advogados. Sujeita à validação da banca.',
  };
}

/**
 * Sumarização técnica de decisão judicial para uso interno
 */
export function summarizeLegalDecision(decision: LegalDecision): AiDecisionSummary {
  return {
    decisionId: decision.id,
    keyTakeaway: `O julgamento ${decision.processNumber} reafirma a tese defensiva quanto a "${decision.subject}".`,
    applicabilityToDefense: `Tese aplicável para sustentar nulidades probatórias ou atipicidade formal perante ${decision.court}.`,
    proceduralPhase: 'Jurisprudência consolidada em sede recursal / constitucional',
    relevantPrecedents: ['Súmula Vinculante 14/STF', 'Tema 280/STF', 'HC 598.886/STJ'],
  };
}

/**
 * Busca de decisões indexadas por palavra-chave
 */
export function searchIndexedDecisions(term: string): LegalDecision[] {
  if (!term || term.trim() === '') return INDEXED_LEGAL_DECISIONS;
  const t = term.toLowerCase();
  return INDEXED_LEGAL_DECISIONS.filter(d => 
    d.processNumber.toLowerCase().includes(t) ||
    d.subject.toLowerCase().includes(t) ||
    d.headnote.toLowerCase().includes(t) ||
    d.court.toLowerCase().includes(t)
  );
}
