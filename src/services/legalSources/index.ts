import { LegalDecision, LegislationItem, RadarEvent, LegalSource } from '../../types';

export interface ConnectorResponse<T> {
  success: boolean;
  data: T[];
  sourceCode: string;
  sourceUrl: string;
  timestamp: string;
  message?: string;
}

export interface LegalQueryFilters {
  searchTerm?: string;
  court?: string;
  dateStart?: string;
  dateEnd?: string;
  subject?: string;
}

/**
 * Registro oficial de fontes públicas homologadas pelo escritório
 */
export const OFFICIAL_LEGAL_SOURCES: LegalSource[] = [
  {
    id: 'src-cnj-datajud',
    code: 'datajud',
    name: 'CNJ / DataJud — Base Nacional de Dados do Poder Judiciário',
    jurisdiction: 'Nacional (Todos os Tribunais)',
    description: 'API Pública instituída pela Resolução CNJ nº 331/2020 para consulta unificada de metadados processuais e movimentações judiciais.',
    officialPortalUrl: 'https://datajud.cnj.jus.br/',
    apiType: 'REST',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T09:30:00Z',
  },
  {
    id: 'src-stf',
    code: 'stf',
    name: 'STF — Supremo Tribunal Federal',
    jurisdiction: 'Constitucional / Nacional',
    description: 'Jurisprudência unificada, Teses de Repercussão Geral, Súmulas Vinculantes e Acórdãos do Plenário e Turmas.',
    officialPortalUrl: 'https://portal.stf.jus.br/jurisprudencia/',
    apiType: 'OpenData',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T09:15:00Z',
  },
  {
    id: 'src-stj',
    code: 'stj',
    name: 'STJ — Superior Tribunal de Justiça',
    jurisdiction: 'Infraconstitucional / Nacional',
    description: 'Repositório de Recursos Especiais Repetitivos, Habeas Corpus das 5ª e 6ª Turmas (3ª Seção Penal) e Informativos de Jurisprudência.',
    officialPortalUrl: 'https://www.stj.jus.br/jurisprudencia/',
    apiType: 'REST',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T09:45:00Z',
  },
  {
    id: 'src-tjrs',
    code: 'tjrs',
    name: 'TJRS — Tribunal de Justiça do Estado do Rio Grande do Sul',
    jurisdiction: 'Justiça Estadual do RS',
    description: 'Decisões colegiadas das Câmaras Criminais do TJRS, Incidentes de Resolução de Demandas Repetitivas (IRDR) e jurisprudência criminal gaúcha.',
    officialPortalUrl: 'https://www.tjrs.jus.br/novo/jurisprudencia/',
    apiType: 'OpenData',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T08:50:00Z',
  },
  {
    id: 'src-trf4',
    code: 'trf4',
    name: 'TRF4 — Tribunal Regional Federal da 4ª Região',
    jurisdiction: 'Justiça Federal da 4ª Região (RS, SC, PR)',
    description: 'Ementário de decisões penais das 7ª e 8ª Turmas (especializadas em Direito Penal Econômico, Lavagem de Capitais e Sistema Financeiro).',
    officialPortalUrl: 'https://www.trf4.jus.br/trf4/controlador.php?acao=jurisprudencia_pesquisa',
    apiType: 'OpenData',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T09:10:00Z',
  },
  {
    id: 'src-planalto',
    code: 'planalto',
    name: 'Portal da Legislação da Presidência da República (Planalto)',
    jurisdiction: 'Legislação Federal',
    description: 'Repositório fidedigno de Códigos (CP, CPP), Leis Ordinárias e Complementares vigentes com texto compilado oficial.',
    officialPortalUrl: 'https://www.planalto.gov.br/ccivil_03/legisla%C3%A7%C3%A3o.htm',
    apiType: 'PublicGazette',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T06:00:00Z',
  },
  {
    id: 'src-diario-oficial',
    code: 'diario_oficial',
    name: 'Diário Oficial da União (DOU) & DJE-RS',
    jurisdiction: 'Publicações Oficiais',
    description: 'Atos normativos e publicações judiciais com certificação digital ICP-Brasil.',
    officialPortalUrl: 'https://www.in.gov.br/',
    apiType: 'PublicGazette',
    status: 'sincronizado',
    lastSyncAt: '2026-10-05T07:20:00Z',
  }
];

/**
 * Base de decisões judiciais oficiais indexadas com metadados estritos de proveniência
 */
export const INDEXED_LEGAL_DECISIONS: LegalDecision[] = [
  {
    id: 'dec-stj-598886',
    processNumber: 'HC 598.886/SC',
    court: 'STJ — Superior Tribunal de Justiça',
    judgingBody: 'Sexta Turma',
    rapporteur: 'Min. Rogerio Schietti Cruz',
    decisionDate: '27/10/2020',
    subject: 'Direito Processual Penal — Reconhecimento de pessoas e estrita observância do art. 226 do CPP',
    headnote: 'HABEAS CORPUS. ROUBO CIRCUNSTANCIADO. RECONHECIMENTO FOTOGRÁFICO DE PESSOA REALIZADO NA FASE DO INQUÉRITO POLICIAL. INOBSERVÂNCIA DO PROCEDIMENTO PREVISTO NO ART. 226 DO CPP. IMPOSSIBILIDADE DE UTILIZAÇÃO COMO FUNDAMENTO EXCLUSIVO PARA CONDENAÇÃO. 1. O reconhecimento de pessoa realizado pela via fotográfica na delegacia não pode ter eficácia probatória plena se não observadas as garantias formais do art. 226 do CPP. 2. A epistemologia e a psicologia do testemunho alertam para o risco grave de indução e de falsas memórias.',
    content: 'O procedimento preconizado pelo legislador no art. 226 do Código de Processo Penal não é mera recomendação programática, mas norma cogente que tutela a higidez da apuração probatória e a liberdade individual.',
    source: 'Repositório Oficial do Superior Tribunal de Justiça',
    source_url: 'https://processo.stj.jus.br/processo/julgados/jurisprudencia/',
    source_type: 'stj',
    collected_at: '2026-10-05T08:00:00Z',
    published_at: '18/12/2020',
  },
  {
    id: 'dec-stf-re-603616',
    processNumber: 'RE 603.616/RO (Tema 280)',
    court: 'STF — Supremo Tribunal Federal',
    judgingBody: 'Tribunal Pleno',
    rapporteur: 'Min. Gilmar Mendes',
    decisionDate: '05/11/2015',
    subject: 'Inviolabilidade de domicílio (art. 5º, XI, CF) — Controle judicial a posteriori das fundadas razões',
    headnote: 'REPERCUSSÃO GERAL. DIREITO CONSTITUCIONAL E PROCESSUAL PENAL. INGRESSO FORÇADO EM DOMICÍLIO SEM MANDADO JUDICIAL. CRIMES DE NATUREZA PERMANENTE (TRÁFICO DE DROGAS). EXIGÊNCIA DE FUNDADAS RAZÕES PRÉVIAS. A entrada forçada em domicílio sem mandado judicial só é lícita quando amparada em fundadas razões, devidamente justificadas pelas circunstâncias do caso concreto a posteriori.',
    content: 'Fixação de tese com repercussão geral: A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito.',
    source: 'Portal Oficial do Supremo Tribunal Federal — Repercussão Geral',
    source_url: 'https://portal.stf.jus.br/jurisprudencia/repercussao/tema.asp?num=280',
    source_type: 'stf',
    collected_at: '2026-10-05T08:15:00Z',
    published_at: '10/05/2016',
  },
  {
    id: 'dec-tjrs-7008543',
    processNumber: 'Apelação Crime 70085432190',
    court: 'TJRS — Tribunal de Justiça do Rio Grande do Sul',
    judgingBody: '3ª Câmara Criminal',
    rapporteur: 'Des. Diógenes Vicente Hassan Ribeiro',
    decisionDate: '14/09/2023',
    subject: 'Direito Penal e Processual Penal — Tribunal do Júri — Nulidade por ausência de correlação entre denúncia e quesitação',
    headnote: 'APELAÇÃO CRIMINAL. TRIBUNAL DO JÚRI. HOMICÍDIO. QUESITAÇÃO. CONTRADIÇÃO NAS RESPOSTAS DOS JURADOS. ART. 490 DO CPP. NULIDADE DO JULGAMENTO DECLARADA. NECESSIDADE DE SUBMISSÃO DO RÉU A NOVO PLENÁRIO. Havendo contradição manifesta nos quesitos submetidos ao Conselho de Sentença que afete o veredicto popular, impõe-se a anulação do julgamento com determinação de nova sessão plenária.',
    content: 'Garantia constitucional da plenitude de defesa no âmbito do Tribunal do Júri que veda prejuízos decorrentes de redação ambígua ou defeituosa na quesitação formulada aos jurados leigos.',
    source: 'Sistema Themis Jurisprudência — TJRS',
    source_url: 'https://www.tjrs.jus.br/site_php/consulta/consulta_processo.php',
    source_type: 'tjrs',
    collected_at: '2026-10-05T08:30:00Z',
    published_at: '22/09/2023',
  },
  {
    id: 'dec-trf4-5001298',
    processNumber: 'ACR 5001298-44.2021.4.04.7100/RS',
    court: 'TRF4 — Tribunal Regional Federal da 4ª Região',
    judgingBody: '8ª Turma',
    rapporteur: 'Des. Federal João Pedro Gebran Neto',
    decisionDate: '26/04/2023',
    subject: 'Direito Penal Econômico — Crimes contra o Sistema Financeiro Nacional (Lei 7.492/86) — Evasão de divisas e dolo específico',
    headnote: 'PENAL. PROCESSUAL PENAL. EVASÃO DE DIVISAS (ART. 22 DA LEI 7.492/86). MANUTENÇÃO DE DEPÓSITO NO EXTERIOR. AUSÊNCIA DE DECLARAÇÃO FORMAL. PATAMAR DE EXIGIBILIDADE DO BANCO CENTRAL DO BRASIL. TIPICIDADE RESTRITA. ABSOLVIÇÃO. Para a configuração típica da conduta de manter depósitos não declarados no exterior, é imperioso que o saldo supere os limites normativos regulamentares estipulados pelo Banco Central na data de apuração.',
    content: 'O Direito Penal rege-se pelos princípios da intervenção mínima e da subsidiariedade, não cabendo transmudar infração cambial-administrativa de pequena monta em ilícito criminal gravoso.',
    source: 'Portal de Jurisprudência do Tribunal Regional Federal da 4ª Região',
    source_url: 'https://jurisprudencia.trf4.jus.br/',
    source_type: 'trf4',
    collected_at: '2026-10-05T08:45:00Z',
    published_at: '05/05/2023',
  }
];

/**
 * Legislações federais catalogadas com links ao Planalto
 */
export const INDEXED_LEGISLATION: LegislationItem[] = [
  {
    id: 'leg-pacote-anticrime',
    lawNumber: 'Lei nº 13.964/2019',
    year: 2019,
    officialTitle: 'Aperfeiçoamento da Legislação Penal e Processual Penal (Pacote Anticrime)',
    summary: 'Promoveu reformas estruturantes no Código Penal, Código de Processo Penal e Lei de Execução Penal, incluindo a figura do Juiz das Garantias, o Acordo de Não Persecução Penal (ANPP, art. 28-A do CPP) e nova disciplina de representação no estelionato.',
    relevantPenalImpact: 'Criação do ANPP para crimes sem violência com pena mínima inferior a 4 anos; necessidade de representação da vítima no art. 171 do CP; parâmetros estritos para decretação e renovação nonagesimal de prisões preventivas (art. 316, p. único).',
    source: 'Subchefia para Assuntos Jurídicos da Casa Civil — Presidência da República',
    source_url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13964.htm',
    source_type: 'planalto',
    collected_at: '2026-10-05T06:30:00Z',
    published_at: '24/12/2019',
  },
  {
    id: 'leg-nova-lei-licitacoes',
    lawNumber: 'Lei nº 14.133/2021',
    year: 2021,
    officialTitle: 'Nova Lei de Licitações e Contratos Administrativos (Capítulo Penal)',
    summary: 'Revogou os tipos penais da antiga Lei 8.666/93 e inseriu os artigos 337-E a 337-P no Código Penal brasileiro, endurecendo as penas de crimes em licitações e contratações públicas.',
    relevantPenalImpact: 'Modificação de tipos penais, novas exigências probatórias de sobrepreço e efetivo prejuízo ao erário nas contratações públicas.',
    source: 'Planalto Legislação Federal',
    source_url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm',
    source_type: 'planalto',
    collected_at: '2026-10-05T06:30:00Z',
    published_at: '01/04/2021',
  },
  {
    id: 'leg-estatuto-desarmamento',
    lawNumber: 'Lei nº 10.826/2003',
    year: 2003,
    officialTitle: 'Estatuto do Desarmamento (Posse e Porte de Arma de Fogo)',
    summary: 'Dispõe sobre registro, posse e comercialização de armas de fogo e munição, sobre o Sistema Nacional de Armas – Sinarm e define crimes.',
    relevantPenalImpact: 'Diferenciação dogmática entre posse irregular de arma de uso permitido (art. 12), porte ilegal (art. 14) e porte de arma de uso restrito/proibido (art. 16).',
    source: 'Planalto Legislação Federal',
    source_url: 'https://www.planalto.gov.br/ccivil_03/leis/2003/l10.826.htm',
    source_type: 'planalto',
    collected_at: '2026-10-05T06:30:00Z',
    published_at: '23/12/2003',
  }
];

/**
 * Radar Jurídico: Monitoramento de movimentações nos Tribunais Superiores
 */
export const RADAR_EVENTS: RadarEvent[] = [
  {
    id: 'radar-1',
    title: 'STF define parâmetros de busca pessoal e veicular sem mandado (RHC 158.580)',
    type: 'jurisprudencia_relevante',
    courtOrAgency: 'STF — Supremo Tribunal Federal',
    summary: 'A 2ª Turma do STF reiterou que a fundada suspeita para revista pessoal (art. 244 do CPP) deve basear-se em fatos concretos e objetivos, sendo vedada busca fundada unicamente em elementos subjetivos ou impressões policiais.',
    date: '28/09/2026',
    importance: 'urgente',
    source_url: 'https://portal.stf.jus.br/',
    source_name: 'STF Notícias Oficiais',
    collected_at: '2026-09-29T10:00:00Z',
  },
  {
    id: 'radar-2',
    title: 'STJ consolida tese repetitiva sobre Acordo de Não Persecução Penal (ANPP)',
    type: 'recurso_repetitivo',
    courtOrAgency: 'STJ — 3ª Seção Penal',
    summary: 'Fixação de entendimento sobre a aplicação retroativa do ANPP para processos em curso antes da vigência do Pacote Anticrime, quando ainda não proferida sentença condenatória.',
    date: '15/09/2026',
    importance: 'alta',
    source_url: 'https://www.stj.jus.br/repetitivos/',
    source_name: 'STJ Precedentes Qualificados',
    collected_at: '2026-09-16T11:30:00Z',
  },
  {
    id: 'radar-3',
    title: 'TJRS publica novo enunciado sobre celeridade nas progressões de regime prisional',
    type: 'sumula',
    courtOrAgency: 'TJRS — Grupo de Câmaras Criminais',
    summary: 'Orientação pacificando a desnecessidade de exame criminológico generalizado, exigindo fundamentação concreta e contemporânea para sua realização excepcional.',
    date: '02/09/2026',
    importance: 'media',
    source_url: 'https://www.tjrs.jus.br/',
    source_name: 'DJE-RS',
    collected_at: '2026-09-03T08:15:00Z',
  }
];
