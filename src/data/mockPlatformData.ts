import { Case, Process, LegalDocument, Appointment, Lead, Client, Message } from '../types';

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-101',
    protocolNumber: 'NL-2026-0891',
    createdAt: '2026-10-04T14:22:00Z',
    updatedAt: '2026-10-04T15:10:00Z',
    status: 'em_analise',
    situation: 'Recebi uma intimação para depor na Delegacia',
    description: 'Fui intimado como testemunha em investigação da Polícia Civil sobre suposta fraude em fornecimento de peças industriais. Gostaria de orientação e acompanhamento na oitiva.',
    locationStateCity: 'Porto Alegre / RS',
    courtOrPoliceStation: '14ª Delegacia de Polícia de Porto Alegre',
    hasDocuments: true,
    documentFiles: [{ name: 'intimacao_policial_14dp.pdf', size: '1.2 MB', type: 'application/pdf' }],
    contactName: 'Carlos Eduardo Silveira',
    contactEmail: 'carlos.silveira@exemplo.com.br',
    contactPhone: '(51) 98122-4433',
    preferredContactMethod: 'whatsapp',
    preferredTime: 'manha',
    notes: 'Recomendado agendamento com Dr. Cristiano Kruel antes da data da oitiva.',
    assignedLawyerId: 'dr-cristiano-kruel'
  },
  {
    id: 'lead-102',
    protocolNumber: 'NL-2026-0892',
    createdAt: '2026-10-05T07:45:00Z',
    updatedAt: '2026-10-05T07:45:00Z',
    status: 'novo',
    situation: 'Estou respondendo a um processo',
    description: 'Recebi citação de denúncia na Vara Criminal de Porto Alegre por crime contra a ordem tributária (suposta omissão de ICMS em 2021). Prazo de 10 dias para resposta à acusação.',
    locationStateCity: 'Porto Alegre / RS',
    courtOrPoliceStation: '2ª Vara Criminal do Foro Central de Porto Alegre',
    hasDocuments: true,
    documentFiles: [{ name: 'mandado_e_denuncia_crime_tributario.pdf', size: '3.8 MB', type: 'application/pdf' }],
    contactName: 'Mariana Duarte Fontoura',
    contactEmail: 'm.fontoura@comercialduarte.com.br',
    contactPhone: '(51) 99981-1122',
    preferredContactMethod: 'telefone',
    preferredTime: 'urgente',
    notes: 'Prazo peremptório de defesa. Encaminhar triagem a Dr. Nereu Lima Filho.',
    assignedLawyerId: 'dr-nereu-lima-filho'
  }
];

export const MOCK_CLIENT: Client = {
  id: 'cli-001',
  name: 'Empresarial Sul Transportes & Logística Ltda (Representante: Rogério Becker)',
  documentNumber: '08.452.912/0001-44',
  email: 'diretoria@sultransportes.com.br',
  phone: '(51) 3345-8800',
  address: 'Av. Carlos Gomes, Porto Alegre - RS',
  casesCount: 2,
  status: 'ativo',
  createdAt: '2024-02-10'
};

export const MOCK_CASES: Case[] = [
  {
    id: 'case-01',
    clientId: 'cli-001',
    clientName: 'Empresarial Sul Transportes & Logística Ltda',
    title: 'Defesa Técnica em Inquérito Policial — Suposta Infração Ambiental de Transporte',
    code: 'NL-PEN-2024/042',
    nature: 'Procedimento Investigatório Criminal',
    status: 'inquerito',
    practiceAreaId: 'crimes-ambientais',
    leadLawyerId: 'dr-nereu-lima-filho',
    coLawyerIds: ['dr-nereu-lima', 'dr-cristiano-kruel'],
    initialDate: '18/03/2024',
    summary: 'Acompanhamento de inquérito instaurado perante a Delegacia Especializada de Proteção ao Meio Ambiente (DEMA). Demonstração da conformidade técnica das licenças e ausência de derramamento ilícito.',
    confidentiality: 'sigiloso'
  },
  {
    id: 'case-02',
    clientId: 'cli-001',
    clientName: 'Empresarial Sul Transportes & Logística Ltda',
    title: 'Recurso em Sentido Estrito e Apelação — Foro Central de Porto Alegre',
    code: 'NL-PEN-2023/118',
    nature: 'Ação Penal Pública — Tribunal de Justiça (TJRS)',
    status: 'fase_recursal',
    practiceAreaId: 'crimes-ordem-economica-tributaria',
    leadLawyerId: 'dr-nereu-lima',
    coLawyerIds: ['dr-nereu-lima-filho'],
    initialDate: '11/08/2023',
    summary: 'Interposição de recurso defensivo perante a 4ª Câmara Criminal do TJRS visando à reforma da dosimetria e reconhecimento de atipicidade material com base na jurisprudência do STJ.',
    confidentiality: 'sigiloso'
  }
];

export const MOCK_PROCESSES: Process[] = [
  {
    id: 'proc-01',
    caseId: 'case-02',
    processNumber: '5014892-77.2023.8.21.0001',
    court: 'Tribunal de Justiça do Estado do Rio Grande do Sul (TJRS)',
    branch: 'Estadual',
    judgeOrRapporteur: 'Desembargador Relator da 4ª Câmara Criminal',
    status: 'Autos conclusos para elaboração de voto pelo Relator',
    distributionDate: '14/08/2023',
    lastMovementDate: '02/10/2026',
    movements: [
      {
        id: 'mov-05',
        processId: 'proc-01',
        date: '02/10/2026 15:42',
        title: 'Conclusão ao Desembargador Relator',
        description: 'Autos conclusos para inclusão em pauta de julgamento e deliberação do recurso de apelação criminal.',
        court: '4ª Câmara Criminal — TJRS',
        isImportant: true,
      },
      {
        id: 'mov-04',
        processId: 'proc-01',
        date: '18/09/2026 11:20',
        title: 'Juntada de Memoriais Defensivos da Banca',
        description: 'Petição protocolada por Nereu Lima Advogados Associados reiterando precedentes do STJ e requerendo sustentação oral em sessão presencial.',
        court: '4ª Câmara Criminal — TJRS',
        isImportant: true,
      },
      {
        id: 'mov-03',
        processId: 'proc-01',
        date: '25/08/2026 09:14',
        title: 'Parecer Ministerial da Procuradoria de Justiça',
        description: 'Manifestação do Ministério Público de 2º Grau juntada aos autos eletrônicos.',
        court: 'TJRS / PGJ',
      },
      {
        id: 'mov-02',
        processId: 'proc-01',
        date: '10/05/2026 16:30',
        title: 'Distribuição por Sorteio',
        description: 'Processo distribuído à 4ª Câmara Criminal do Tribunal de Justiça do Rio Grande do Sul.',
        court: 'TJRS — Distribuição de Recursos',
      },
      {
        id: 'mov-01',
        processId: 'proc-01',
        date: '14/08/2023 10:00',
        title: 'Distribuição Originária em 1º Grau',
        description: 'Ajuizamento na Vara Criminal da Comarca de Porto Alegre.',
        court: 'Comarca de Porto Alegre',
      }
    ]
  }
];

export const MOCK_DOCUMENTS: LegalDocument[] = [
  {
    id: 'doc-01',
    caseId: 'case-02',
    title: 'Razões de Apelação Criminal — Tese de Atipicidade e Redução de Pena',
    category: 'peticao',
    fileName: 'recurso_apelacao_quarta_camara_tjrs.pdf',
    fileSize: '2.4 MB',
    uploadedAt: '18/09/2026',
    uploadedBy: 'Dr. Nereu Lima',
    isConfidential: true,
  },
  {
    id: 'doc-02',
    caseId: 'case-02',
    title: 'Procuração com Cláusula Ad Judicia e Poderes Especiais Penais',
    category: 'procuracao',
    fileName: 'procuracao_instrumento_nereulima_assinado.pdf',
    fileSize: '480 KB',
    uploadedAt: '12/08/2023',
    uploadedBy: 'Nereu Lima Advogados',
    isConfidential: true,
  },
  {
    id: 'doc-03',
    caseId: 'case-01',
    title: 'Laudo Pericial de Engenharia Ambiental e Ausência de Contaminação',
    category: 'laudo',
    fileName: 'laudo_pericial_contraprova_ambiental.pdf',
    fileSize: '5.1 MB',
    uploadedAt: '04/04/2024',
    uploadedBy: 'Dr. Nereu Lima Filho',
    isConfidential: true,
  }
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-01',
    caseId: 'case-02',
    title: 'Sustentação Oral Presencial perante a 4ª Câmara Criminal',
    type: 'sustentacao_oral',
    date: '2026-10-18',
    time: '14:00',
    location: 'Tribunal de Justiça do RS — Av. Borges de Medeiros, 1565, Porto Alegre',
    lawyerName: 'Dr. Nereu Lima',
    clientName: 'Rogério Becker',
    notes: 'Sessão de julgamento da Apelação Criminal com pedido de sustentação oral presencial tempestivamente formulado.'
  },
  {
    id: 'app-02',
    caseId: 'case-01',
    title: 'Reunião de Alinhamento de Defesa com Diretoria',
    type: 'reuniao_cliente',
    date: '2026-10-12',
    time: '10:30',
    location: 'Sede Nereu Lima Advogados — Praça Mal. Deodoro 130, cj. 1001 (Praça da Matriz)',
    lawyerName: 'Dr. Nereu Lima Filho',
    clientName: 'Rogério Becker',
    notes: 'Análise conjunta dos quesitos periciais e revisão documental.'
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'msg-01',
    senderId: 'dr-nereu-lima-filho',
    senderName: 'Dr. Nereu Lima Filho',
    senderRole: 'lawyer',
    recipientId: 'cli-001',
    caseId: 'case-02',
    content: 'Prezado Rogério, protocolamos os memoriais com os novos precedentes do STJ na secretaria da 4ª Câmara Criminal. Estamos com a sustentação oral plenamente preparada.',
    timestamp: '2026-10-02T16:10:00Z',
    read: true,
  },
  {
    id: 'msg-02',
    senderId: 'cli-001',
    senderName: 'Rogério Becker',
    senderRole: 'client',
    recipientId: 'dr-nereu-lima-filho',
    caseId: 'case-02',
    content: 'Excelente, doutor. Agradecemos o acompanhamento detalhado e estaremos na reunião presencial na Praça da Matriz na data agendada.',
    timestamp: '2026-10-02T16:45:00Z',
    read: true,
  }
];
