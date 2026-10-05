import { Lawyer, PracticeArea, Article } from '../types';

export const FIRM_DETAILS = {
  name: 'Nereu Lima Advogados Associados',
  shortName: 'Nereu Lima Advogados',
  slogan: 'Mais de 50 anos de advocacia criminal honesta e combativa',
  subheading: 'Sociedade de Advogados especializada com dedicação exclusiva ao Direito Penal e Processo Penal',
  oabSociety: 'OAB/RS 2828',
  address: {
    street: 'Praça Mal. Deodoro, 130',
    suite: 'Conjunto 1001',
    neighborhood: 'Centro Histórico',
    city: 'Porto Alegre',
    state: 'RS',
    postalCode: '90010-300',
    landmark: 'Praça da Matriz — Em frente ao Palácio Piratini, Theatro São Pedro e Catedral Metropolitana',
  },
  phones: {
    main: '(51) 3224-6966',
    whatsapp: '(51) 3224-6966',
    mobiles: ['(51) 99236-7769', '(51) 99443-6769'],
  },
  email: 'contato@nereulima.com.br',
  website: 'https://nereulima.com.br',
  foundationYear: 1969,
  yearsOfExcellence: 'Mais de 50 anos',
  librarySummary: 'Acervo exclusivo e especializado em Direito Penal, Criminologia e Processo Penal, com clássicos da doutrina nacional e estrangeira (Carnelutti, Nelson Hungria, Aníbal Bruno, Heleno Fragoso) e periódicos de jurisprudência dos Tribunais Superiores.',
  images: {
    entrance: '/assets/official/entrada-escritorio.jpg',
    library: '/assets/official/biblioteca.jpg',
    viewPracaMatriz: '/assets/official/banner_vistaescritorionereulima_principal.jpg',
    pracaMatrizInternal: '/assets/official/banner_pracadamatriz_interno.jpg',
    timelineBanner: '/assets/official/banner_linhadotempo_pq.jpg',
    historicOffice: '/assets/official/20190130_152302.jpg',
    bg: '/assets/official/bg06.jpg',
  }
};

export const LAWYERS: Lawyer[] = [
  {
    id: 'dr-nereu-lima',
    slug: 'dr-nereu-lima',
    name: 'Dr. Nereu Lima',
    title: 'Sócio Fundador',
    role: 'Advogado Criminalista',
    oab: 'OAB/RS 5.315',
    photoUrl: '/assets/official/y20190130_152228.jpg',
    bio: 'Formado em Ciências Jurídicas e Sociais no ano de 1969 pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Com mais de cinco décadas de atuação ininterrupta na advocacia criminal, construiu uma trajetória ímpar marcada pela intransigente defesa das garantias constitucionais, da dignidade humana e do Estado Democrático de Direito.',
    credentials: [
      'Ex-Presidente da Ordem dos Advogados do Brasil — Seccional do Rio Grande do Sul (OAB/RS)',
      'Ex-Conselheiro Federal da Ordem dos Advogados do Brasil (dois mandatos: 1998-2001 e 2001-2003)',
      'Fundador e 1º Presidente da Associação dos Advogados Criminalistas do Estado do Rio Grande do Sul (ACRIERGS)',
      'Ex-Professor Titular Licenciado de Direito Processual Penal e Direito Constitucional da Faculdade de Direito da Unisinos (1971 a 1991)',
      'Co-fundador da Superintendência dos Serviços Penitenciários (Susepe) e da Escola Penitenciária do RS',
      'Agraciado com o Prêmio Jurídico Otávio Francisco Caruso da Rocha (Câmara de Vereadores de Porto Alegre, 2002)',
      'Título de Cidadão Emérito de Porto Alegre (2003)',
    ],
    historicalHighlights: [
      'Relator da histórica Comissão Especial da OAB-RS durante a ditadura militar no caso do sequestro internacional do casal uruguaio Lilián Celiberti e Universindo Díaz (Operação Condor), apontando a participação policial.',
      'Atuação conjunta com o Dr. Raymundo Faoro perante o governo federal para a vitória histórica que restabeleceu o Habeas Corpus no Brasil, revogando restrições do AI-5.',
      'Protocolou, como Presidente da OAB/RS perante o Conselho Federal em Brasília, o pedido formal de abertura do processo de impeachment presidencial em 1992, liderando a marcha cívica até a Câmara dos Deputados entregue ao Presidente Ibsen Pinheiro.',
      'Liderança institucional para o veto no Palácio Piratini ao projeto que afastava advogados dos Juizados de Pequenas Causas.',
      'Criação da Defensoria Pública do Estado do Rio Grande do Sul durante sua gestão na OAB/RS.',
      'Participação ativa na elaboração e difusão nacional do Estatuto da Criança e do Adolescente (ECA, 1990).',
    ],
    quote: 'Ao mesmo tempo que é um conforto para o advogado criminalista que entende o seu papel, é uma responsabilidade muito grande. Assim como o médico tem a vida do paciente nas mãos durante uma cirurgia, o advogado, em uma defesa final, tem a vida do réu nas mãos. Se tirarem o bem mais importante dele, a liberdade, o resto não existe. Para ser advogado criminalista, tem que ter vocação, solidariedade e coragem.',
  },
  {
    id: 'dr-nereu-lima-filho',
    slug: 'dr-nereu-lima-filho',
    name: 'Dr. Nereu Lima Filho',
    title: 'Sócio',
    role: 'Advogado Criminalista',
    oab: 'OAB/RS 69.706',
    photoUrl: '/assets/official/20190130_153144.jpg',
    bio: 'Advogado criminalista com sólida formação acadêmica e prática forense especializada na esfera penal e processual penal contemporânea, dedicando-se a defesas complexas em inquéritos policiais, procedimentos investigatórios e ações penais perante a Justiça Estadual, Justiça Federal e Tribunais Superiores.',
    credentials: [
      'Mestre em Ciências Criminais pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
      'Especialista em Ciências Penais pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
      'Membro do Instituto de Criminologia e Alteridade — ICA',
      'Atuação especializada em Direito Penal Econômico, Crimes Financeiros e Tribunal do Júri',
      'Membro da Associação dos Advogados Criminalistas do Estado do Rio Grande do Sul (ACRIERGS)',
    ],
    quote: 'A técnica dogmática apurada e a vigilância contra o arbítrio estatal constituem os pilares de uma defesa criminal séria, combativa e intransigente.',
  },
  {
    id: 'dr-cristiano-kruel',
    slug: 'dr-cristiano-kruel',
    name: 'Dr. Cristiano Kruel',
    title: 'Sócio',
    role: 'Advogado Criminalista',
    oab: 'OAB/RS 91.083',
    photoUrl: '/assets/official/20190130_142911.jpg',
    bio: 'Advogado criminalista com ampla vivência em contencioso penal estratégico e diligências periciais, atuando diretamente em audiências criminais, sustentações orais perante os Tribunais e acompanhamento de procedimentos policiais e cautelares.',
    credentials: [
      'Graduado em Direito pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
      'Especialista em Direito Penal e Processo Penal pela UniRitter',
      'Atuação intensiva em defesas perante a Justiça Estadual, Federal e Juizados Especiais Criminais',
      'Vasta experiência em medidas urgentes de liberdade (Habeas Corpus, Revogação de Prisão Preventiva, Pedidos de Relaxamento)',
    ],
    quote: 'A liberdade e o direito de defesa não admitem concessões. Cada caso exige escuta humanizada, rigor técnico e resposta imediata perante as autoridades.',
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1969',
    title: 'Formação e Fundação do Escritório',
    description: 'Dr. Nereu Lima conclui o curso de Ciências Jurídicas e Sociais pela PUCRS e instala seu primeiro escritório no 5º andar do histórico Edifício Sulacap, na Esquina Democrática de Porto Alegre, iniciando sua trajetória com vocação imediata ao Direito Penal.',
  },
  {
    year: '1971',
    title: 'Duas Décadas de Docência Universitária',
    description: 'Ingressa no corpo docente da Faculdade de Direito da Unisinos, ministrando por vinte anos as disciplinas de Direito Constitucional e Direito Processual Penal, formando gerações de operadores jurídicos no Rio Grande do Sul.',
  },
  {
    year: '1978',
    title: 'Caso Condor e Restauração do Habeas Corpus',
    description: 'Durante os anos da ditadura militar, atua como relator da Comissão Especial da OAB-RS que investigou o sequestro do casal uruguaio Lilián Celiberti e Universindo Díaz. Ao lado do eminente Raymundo Faoro, participa da articulação histórica que restabeleceu a garantia do Habeas Corpus.',
  },
  {
    year: '1979 - 1980',
    title: 'Diretoria do IARGS',
    description: 'Integra a diretoria do Instituto dos Advogados do Rio Grande do Sul (IARGS), participando dos debates mais expressivos da comunidade jurídica sul-rio-grandense.',
  },
  {
    year: '1984',
    title: 'Fundação da ACRIERGS e Inovação Penitenciária',
    description: 'Funda e é empossado como 1º Presidente da Associação dos Advogados Criminalistas do Estado do Rio Grande do Sul (ACRIERGS). Participa da criação da Superintendência dos Serviços Penitenciários (Susepe) e da pioneira Escola Penitenciária, visando à humanização da execução penal.',
  },
  {
    year: '1990',
    title: 'Presidência da OAB/RS, ECA e Defensoria Pública',
    description: 'Eleito Presidente da Ordem dos Advogados do Brasil — Seccional RS. Lidera a criação da Defensoria Pública do RS, atua na formulação do Estatuto da Criança e do Adolescente (ECA) e defende com êxito prerrogativas profissionais no Palácio Piratini.',
  },
  {
    year: '1992',
    title: 'Momento Histórico Cívico em Brasília',
    description: 'Protocolou pelo Conselho Federal da OAB em Brasília a histórica moção que requereu a abertura do processo de impeachment do então presidente da República, liderando marcha cívica que culminou na entrega do documento ao presidente da Câmara, Ibsen Pinheiro.',
  },
  {
    year: '1998 - 2003',
    title: 'Conselheiro Federal da OAB e Homenagens',
    description: 'Eleito Conselheiro Federal da OAB por dois mandatos consecutivos. Em 2002 recebe o Prêmio Jurídico Otávio Francisco Caruso da Rocha e, em 2003, é laureado com o título de Cidadão de Porto Alegre.',
  },
  {
    year: 'Anos 2000 - Atualidade',
    title: 'Sede na Praça da Matriz e Consolidação Intergeracional',
    description: 'Instalação da sede na Praça Marechal Deodoro (Praça da Matriz), com vista para o centro cívico e acervo especializado. O escritório consolida-se com a união entre a experiência de Dr. Nereu Lima e a atuação de Dr. Nereu Lima Filho e Dr. Cristiano Kruel.',
  },
];

export const COURTS_OF_OPERATION = [
  'Inquéritos Policiais junto à Polícia Civil e Polícia Federal',
  'Investigações no âmbito do Ministério Público (MP Estadual e MPF)',
  'Justiça Estadual do Rio Grande do Sul (Varas Criminais e Júri)',
  'Justiça Federal (Subseções Judiciárias da 4ª Região)',
  'Tribunal de Justiça do Rio Grande do Sul (TJRS)',
  'Tribunal Regional Federal da 4ª Região (TRF4)',
  'Superior Tribunal de Justiça (STJ — Brasília/DF)',
  'Supremo Tribunal Federal (STF — Brasília/DF)',
  'Juizados Especiais Criminais (JECRIM) e Turmas Recursais',
  'Justiça Eleitoral (TRE-RS e TSE)',
  'Conselho Regional de Medicina (CREMERS) em Processos Ético-Profissionais',
  'Comissões Parlamentares de Inquérito (CPIs)',
  'Justiça Militar Estadual e Superior Tribunal Militar (STM)',
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'crimes-contra-a-vida',
    slug: 'crimes-contra-a-vida',
    title: 'Crimes contra a Vida e Tribunal do Júri',
    subtitle: 'Defesa técnica especializada em plenário e em todas as fases do procedimento do Júri',
    shortDescription: 'Atuação artesanal e combativa em acusações de homicídio tentado e consumado, feminicídio, infanticídio e demais crimes dolosos contra a vida.',
    fullDescription: [
      'A defesa perante o Tribunal do Júri é o berço da advocacia criminal. Exige oratória precisa, domínio irrestrito dos autos, reconstrução minuciosa das provas periciais e firmeza para defender a dignidade e a liberdade do cidadão perante os jurados.',
      'O escritório Nereu Lima Advogados possui meio século de história em sustentações orais perante conselhos de sentença, atuando desde o inquérito policial, na audiência de instrução preliminar, pronúncia, recursos aos Tribunais e na sessão solene de julgamento.',
      'Atuamos também na assistência de acusação em favor de famílias de vítimas, garantindo que a justiça seja alcançada com estrito respeito à legalidade.'
    ],
    keyTopics: [
      'Homicídio simples, qualificado e privilegiado',
      'Tribunal do Júri (sustentação em plenário)',
      'Recursos de Pronúncia (RESE, Apelação, Embargos)',
      'Anulação de julgamentos contrários à prova dos autos',
      'Assistência à acusação em favor da vítima'
    ],
    applicableCourts: ['Varas do Júri', 'Tribunal de Justiça (TJRS)', 'STJ', 'STF'],
    faqs: [
      {
        question: 'O que acontece após a denúncia por crime contra a vida?',
        answer: 'O rito do Júri é bifásico. Na primeira fase (sumário da culpa), a acusação e a defesa produzem provas para que o juiz decida se o réu deve ser levado a júri popular (pronúncia), absolvido sumariamente ou impronunciado.'
      },
      {
        question: 'O escritório atua fora de Porto Alegre em plenários do Júri?',
        answer: 'Sim, a equipe atua em comarcas de todo o Rio Grande do Sul e em outros estados da federação mediante análise prévia do caso.'
      }
    ]
  },
  {
    id: 'crimes-sistema-financeiro',
    slug: 'crimes-sistema-financeiro',
    title: 'Crimes contra o Sistema Financeiro Nacional',
    subtitle: 'Defesa especializada perante a Justiça Federal e Tribunais Superiores (Lei 7.492/1986)',
    shortDescription: 'Defesa técnica em acusações de evasão de divisas, gestão fraudulenta ou temerária, operações de câmbio não autorizadas e fraudes financeiras.',
    fullDescription: [
      'Os crimes contra o Sistema Financeiro Nacional exigem compreensão aprofundada da regulamentação do Banco Central, da Comissão de Valores Mobiliários (CVM) e da jurisprudência firmada no STJ e TRF4.',
      'Nossa banca patrocina a defesa de gestores, empresários e profissionais do mercado perante investigações da Polícia Federal, inquéritos civis, procedimentos do Ministério Público Federal e ações penais federais.'
    ],
    keyTopics: [
      'Gestão fraudulenta e gestão temerária de instituição financeira',
      'Evasão de divisas e manutenção de depósitos não declarados',
      'Operações de instituição financeira sem autorização',
      'Crimes em operações de câmbio e criptoativos'
    ],
    applicableCourts: ['Varas Federais Especializadas', 'TRF4', 'STJ', 'STF'],
    faqs: [
      {
        question: 'Qual é o tribunal competente para julgar crimes contra o sistema financeiro?',
        answer: 'A competência é da Justiça Federal, uma vez que a ordem econômica e o sistema financeiro nacional são bens jurídicos tutelados pela União.'
      }
    ]
  },
  {
    id: 'crimes-ordem-economica-tributaria',
    slug: 'crimes-ordem-economica-tributaria',
    title: 'Crimes contra a Ordem Tributária e Econômica',
    subtitle: 'Defesa em imputações de sonegação fiscal, apropriação indébita previdenciária e cartel',
    shortDescription: 'Atuação jurídica estratégica na defesa de empresários e administradores em crimes fiscais previstos na Lei 8.137/90 e no Código Penal.',
    fullDescription: [
      'O direito penal tributário deve ser manejado com extremo cuidado para impedir a criminalização indevida da atividade empresarial e do mero inadimplemento financeiro.',
      'O escritório tem histórico na demonstração de causas de extinção da punibilidade, ausência de dolo específico, teses de inexigibilidade de conduta diversa e trancamento de ações penais prematuras antes do exaurimento do processo administrativo-fiscal (Súmula Vinculante 24 do STF).'
    ],
    keyTopics: [
      'Sonegação fiscal (Lei 8.137/1990)',
      'Apropriação indébita tributária e previdenciária',
      'Crimes contra a concorrência e cartel',
      'Aplicação da Súmula Vinculante nº 24 do STF'
    ],
    applicableCourts: ['Justiça Estadual', 'Justiça Federal', 'TRF4', 'TJRS', 'STJ', 'STF'],
    faqs: [
      {
        question: 'Uma dívida fiscal pode virar processo criminal?',
        answer: 'Para os crimes materiais contra a ordem tributária, a Súmula Vinculante 24 do STF exige o esgotamento da via administrativa para constituição definitiva do crédito antes do início da ação penal. A mera inadimplência sem fraude ou dolo não configura crime.'
      }
    ]
  },
  {
    id: 'crimes-lei-de-drogas',
    slug: 'crimes-lei-de-drogas',
    title: 'Crimes da Lei de Drogas',
    subtitle: 'Defesa técnica, análise pericial de substâncias e nulidades de apreensão (Lei 11.343/2006)',
    shortDescription: 'Defesa em acusações de tráfico de drogas, associação para o tráfico, desclassificação para uso próprio e combate a invasões ilegais de domicílio.',
    fullDescription: [
      'As imputações na Lei de Drogas frequentemente decorrem de abordagens policiais que demandam minucioso escrutínio constitucional. O Superior Tribunal de Justiça e o Supremo Tribunal Federal estabeleceram critérios rigorosos quanto à ilicitude de busca domiciliar sem fundadas razões prévias.',
      'O escritório atua na verificação das cadeias de custódia, laudos toxicológicos definitivos, pedidos de liberdade provisória, desclassificação delitiva e aplicação da causa especial de diminuição de pena (tráfico privilegiado).'
    ],
    keyTopics: [
      'Tráfico de entorpecentes e associação para o tráfico',
      'Ilicitude de prova por invasão de domicílio sem mandado judicial',
      'Desclassificação para porte para consumo pessoal',
      'Tráfico privilegiado (art. 33, § 4º) e afastamento de hediondez',
      'Habeas Corpus para revogação de prisão cautelar'
    ],
    applicableCourts: ['Varas Criminais Estaduais e Federais', 'TJRS', 'TRF4', 'STJ', 'STF'],
    faqs: [
      {
        question: 'A polícia pode invadir uma residência por suspeita de drogas sem mandado?',
        answer: 'Não. O STJ e o STF pacificaram o entendimento de que a mera intuição policial, fuga ao avistar a guarnição ou denúncia anônima sem prévia investigação não autorizam o ingresso forçado em domicílio.'
      }
    ]
  },
  {
    id: 'crimes-ambientais',
    slug: 'crimes-ambientais',
    title: 'Crimes Ambientais',
    subtitle: 'Defesa de pessoas físicas e pessoas jurídicas perante órgãos ambientais e o Judiciário (Lei 9.605/1998)',
    shortDescription: 'Defesa técnica em autuações, inquéritos e ações penais por alegado dano à flora, fauna, poluição, mineração e ordenamento urbano.',
    fullDescription: [
      'A responsabilidade penal ambiental abrange pessoas físicas e pessoas jurídicas, exigindo perícias técnicas apuradas e harmonização entre normas administrativas e o direito penal.',
      'Trabalhamos na elaboração de defesas preliminares, perícias contraprobatórias e celebração de acordos quando cabíveis, resguardando a continuidade das atividades empresariais sustentáveis.'
    ],
    keyTopics: [
      'Poluição hídrica, do solo e atmosférica',
      'Crimes contra a flora e áreas de preservação permanente (APP)',
      'Responsabilidade penal da pessoa jurídica e dos administradores',
      'Perícias ambientais e desconstituição de nexo causal'
    ],
    applicableCourts: ['Justiça Estadual', 'Justiça Federal', 'IBAMA', 'FEPAM', 'TRF4', 'TJRS'],
    faqs: [
      {
        question: 'A empresa pode ser ré em ação penal por crime ambiental?',
        answer: 'Sim, a Lei 9.605/98 prevê a responsabilidade penal de pessoas jurídicas por crimes ambientais, ressalvada a necessidade de comprovação de que a infração foi cometida no interesse da entidade.'
      }
    ]
  },
  {
    id: 'crimes-administracao-publica',
    slug: 'crimes-administracao-publica',
    title: 'Crimes contra a Administração Pública',
    subtitle: 'Defesa de agentes públicos, prefeitos, secretários e empresários em imputações de improbidade e crimes funcionais',
    shortDescription: 'Representação em investigações de corrupção, peculato, concussão, fraudes a licitações e desvios de verbas públicas.',
    fullDescription: [
      'Acusações contra agentes públicos e gestores causam reflexos devastadores na reputação pessoal e profissional. Exigem uma postura defensiva serena, técnica e inflexível perante juízos de primeira instância e Tribunais de Justiça.',
      'O histórico de Dr. Nereu Lima na liderança da advocacia gaúcha confere ao escritório autoridade singular na condução de causas de alta repercussão política e institucional.'
    ],
    keyTopics: [
      'Peculato, concussão e corrupção passiva/ativa',
      'Crimes na Nova Lei de Licitações (Lei 14.133/2021)',
      'Prefeitos e autoridades com foro por prerrogativa de função',
      'Comissões Parlamentares de Inquérito (CPIs) e procedimentos do MP'
    ],
    applicableCourts: ['Tribunal de Justiça (Competência Originária)', 'TRF4', 'STJ', 'STF'],
    faqs: [
      {
        question: 'Quem possui foro especial por prerrogativa de função?',
        answer: 'Prefeitos, magistrados, membros do Ministério Público e deputados possuem regras específicas de competência originária nos Tribunais de Justiça ou Tribunais Regionais Federais, consoante jurisprudência do STF.'
      }
    ]
  },
  {
    id: 'crimes-patrimonio',
    slug: 'crimes-patrimonio',
    title: 'Crimes contra o Patrimônio',
    subtitle: 'Defesa técnica em acusações patrimoniais com rigor probatório',
    shortDescription: 'Defesa em casos de apropriação indébita, roubo, furto, extorsão, dano e receptação.',
    fullDescription: [
      'A defesa em crimes patrimoniais exige a verificação meticulosa do reconhecimento pessoal (art. 226 do CPP), da tipicidade estrita e da comprovação da autoria e materialidade.',
      'Buscamos a aplicação de princípios garantistas, tais como insignificância, desclassificação delitiva e adequação da dosimetria penal.'
    ],
    keyTopics: [
      'Apropriação indébita e furto qualificado',
      'Nulidade de reconhecimento fotográfico sem observância do art. 226 do CPP',
      'Receptação culposa e dolo no crime de receptação',
      'Extorsão e ameaça patrimonial'
    ],
    applicableCourts: ['Varas Criminais Estaduais e Federais', 'TJRS', 'STJ'],
    faqs: [
      {
        question: 'O reconhecimento por foto na delegacia é suficiente para condenar?',
        answer: 'Não. O STJ e o STF pacificaram o entendimento de que o reconhecimento fotográfico ou sem as formalidades do artigo 226 do CPP não pode servir como elemento exclusivo para condenação criminal.'
      }
    ]
  },
  {
    id: 'falsidades-estelionatos-fraudes',
    slug: 'falsidades-estelionatos-fraudes',
    title: 'Falsidades, Estelionatos e outras Fraudes',
    subtitle: 'Defesa especializada em fraudes documentais, eletrônicas e delitos de falsidade ideológica',
    shortDescription: 'Atuação em apurações de estelionato comum e digital, falsificação de documento público e particular e falsidade ideológica.',
    fullDescription: [
      'Com a transformação digital e a introdução de novos tipos penais, disputas contratuais e desacordos comerciais frequentemente são levados indevidamente à esfera criminal sob a rotulagem de estelionato.',
      'O escritório atua na descaracterização do dolo pré-ordenado de fraudar, demonstrando a natureza estritamente civil ou mercantil da controvérsia, bem como na representação e exigência de representação legal da vítima após o Pacote Anticrime.'
    ],
    keyTopics: [
      'Estelionato eletrônico e golpes virtuais',
      'Falsidade ideológica e falsificação de documentos',
      'Descaracterização de ilícito penal em desacordo comercial',
      'Condição de procedibilidade (necessidade de representação penal da vítima)'
    ],
    applicableCourts: ['Varas Criminais', 'Juizados Especiais', 'TJRS', 'TRF4', 'STJ'],
    faqs: [
      {
        question: 'O estelionato ainda é de ação penal pública incondicionada?',
        answer: 'Com a vigência do Pacote Anticrime (Lei 13.964/2019), o estelionato passou a ser, em regra, crime de ação penal pública condicionada à representação da vítima, salvo hipóteses específicas (vítima vulnerável, administração pública, etc.).'
      }
    ]
  },
  {
    id: 'direito-penal-medico',
    slug: 'direito-penal-medico',
    title: 'Direito Penal Médico e da Saúde',
    subtitle: 'Defesa de médicos, profissionais da saúde e hospitais em acusações criminais e processos éticos',
    shortDescription: 'Defesa especializada em imputações de erro médico, homicídio culposo, lesão corporal e processos ético-disciplinares no CREMERS e CFM.',
    fullDescription: [
      'A prática médica envolve riscos inerentes e decisões em fração de segundos. A imputação de crime culposo (imperícia, negligência ou imprudência) causa profundo abalo à honra do médico.',
      'Nosso escritório analisa minuciosamente prontuários médicos, laudos de necropsia e diretrizes de sociedades de especialidades para demonstrar a adequação aos protocolos científicos (lex artis).'
    ],
    keyTopics: [
      'Erro médico sob a ótica penal (homicídio culposo e lesão corporal culposa)',
      'Defesa perante o CREMERS e Conselho Federal de Medicina (CFM)',
      'Omissão de socorro e violação de segredo profissional',
      'Crimes contra a saúde pública'
    ],
    applicableCourts: ['Varas Criminais', 'CREMERS', 'CFM', 'TJRS', 'STJ'],
    faqs: [
      {
        question: 'O processo no CREMERS corre junto com o processo criminal?',
        answer: 'São esferas independentes, porém o conteúdo probatório de uma reflete fortemente na outra. Uma defesa penal integrada resguarda tanto a liberdade quanto o registro profissional do médico.'
      }
    ]
  },
  {
    id: 'crimes-de-informatica',
    slug: 'crimes-de-informatica',
    title: 'Crimes de Informática e Cibernéticos',
    subtitle: 'Defesa em invasão de dispositivo, fraudes digitais e crimes em ambiente telemático (Lei Carolina Dieckmann e correlatas)',
    shortDescription: 'Defesa técnica perante delegacias especializadas em crimes virtuais, interceptações telemáticas e perícias digitais forenses.',
    fullDescription: [
      'A persecução penal em ambiente digital requer compreensão técnica sobre extração de dados, endereços IP, custódia de vestígios digitais e quebra de sigilo telemático.',
      'Atuamos na impugnação de provas obtidas sem a devida autorização judicial e na verificação da idoneidade da cadeia de custódia das evidências digitais.'
    ],
    keyTopics: [
      'Invasão de dispositivo informático (art. 154-A do CP)',
      'Fraudes eletrônicas e phishing',
      'Perícia em smartphones, servidores e cadeia de custódia da prova digital',
      'Impugnação de quebra indevida de sigilo telefônico e de dados'
    ],
    applicableCourts: ['Delegacias Especializadas (DRCI)', 'Justiça Estadual e Federal', 'STJ'],
    faqs: [
      {
        question: 'A polícia pode acessar o celular sem ordem judicial durante a prisão?',
        answer: 'Não. O STJ e o STF exigem autorização judicial expressa para acesso aos dados, mensagens e aplicativos de celular apreendido, sob pena de nulidade absoluta da prova.'
      }
    ]
  },
  {
    id: 'crimes-contra-a-honra',
    slug: 'crimes-contra-a-honra',
    title: 'Crimes contra a Honra',
    subtitle: 'Defesa e patrocínio em queixas-crime de calúnia, difamação e injúria',
    shortDescription: 'Atuação tanto na defesa de acusados quanto na propositura de Queixa-Crime para reparação da dignidade e reparação dos danos à honra.',
    fullDescription: [
      'A honra subjetiva e objetiva é patrimônio moral inalienável. A proliferação de ofensas e imputações caluniosas em redes sociais e na imprensa exige pronta resposta forense.',
      'Defendemos clientes acusados injustamente, sustentando imunidades profissionais, ausência de animus difamandi ou caluniandi, bem como propomos ações penais privadas para responsabilização dos detratores.'
    ],
    keyTopics: [
      'Calúnia, difamação e injúria (comum e qualificada)',
      'Ofensas perpetradas em redes sociais e meios de comunicação em massa',
      'Exceção da verdade e causas de exclusão do crime',
      'Queixa-Crime e audiência de conciliação'
    ],
    applicableCourts: ['Juizados Especiais Criminais (JECRIM)', 'Varas Criminais', 'TJRS'],
    faqs: [
      {
        question: 'Qual é o prazo para entrar com queixa-crime por crime contra a honra?',
        answer: 'O prazo decadencial é de 6 meses contados do dia em que a vítima toma conhecimento de quem é o autor do crime (art. 38 do CPP).'
      }
    ]
  },
  {
    id: 'crimes-de-genero',
    slug: 'crimes-de-genero',
    title: 'Crimes no Âmbito Doméstico (Lei Maria da Penha)',
    subtitle: 'Atuação discreta e equilibrada em acusações no contexto da Lei 11.340/2006',
    shortDescription: 'Defesa e assistência jurídica em medidas protetivas de urgência, lesões corporais, ameaças e crimes conexos no âmbito familiar.',
    fullDescription: [
      'As controvérsias no âmbito familiar exigem prudência, discrição absoluta e apuração cuidadosa da realidade dos fatos para evitar abusos processuais e injustiças.',
      'O escritório assessora o cliente desde o momento da notificação de medidas protetivas, postulando revogações quando incabíveis ou acompanhando a instrução probatória.'
    ],
    keyTopics: [
      'Medidas protetivas de urgência (contestação e revogação)',
      'Ameaça, perseguição (stalking) e violência psicológica',
      'Lesão corporal e crimes conexos no âmbito doméstico',
      'Acompanhamento de audiências perante o Juizado de Violência Doméstica'
    ],
    applicableCourts: ['Juizados de Violência Doméstica e Familiar', 'Varas Criminais', 'TJRS'],
    faqs: [
      {
        question: 'Como funciona a audiência de justificação em medidas protetivas?',
        answer: 'Permite que a defesa apresente contraprovas e elementos factuais para demonstrar desnecessidade ou desproporcionalidade da medida imposta, resguardando o convívio e o patrimônio.'
      }
    ]
  },
  {
    id: 'crimes-estatuto-desarmamento',
    slug: 'crimes-estatuto-desarmamento',
    title: 'Crimes do Estatuto do Desarmamento',
    subtitle: 'Defesa em posse, porte ilegal, disparo de arma de fogo e regularidade de CACs (Lei 10.826/2003)',
    shortDescription: 'Defesa técnica de atiradores, caçadores, colecionadores (CACs) e cidadãos em autuações relacionadas ao porte e transporte de armas de fogo.',
    fullDescription: [
      'As recentes alterações normativas e decretos federais geraram frequentes inseguranças jurídicas em abordagens policiais. O escritório atua para demonstrar a atipicidade da conduta, regularidade documental e ausência de lesividade ao bem jurídico tutelado.'
    ],
    keyTopics: [
      'Posse irregular e porte ilegal de arma de fogo (de uso permitido e restrito)',
      'Situação jurídica de Colecionadores, Atiradores e Caçadores (CACs)',
      'Disparo de arma de fogo e comércio ilegal',
      'Perícia técnica de eficiência e prestabilidade balística'
    ],
    applicableCourts: ['Varas Criminais Estaduais e Federais', 'TJRS', 'TRF4', 'STJ'],
    faqs: [
      {
        question: 'Se a arma estava sem munição ou com defeito, ainda é crime?',
        answer: 'A perícia de prestabilidade e eficiência da arma de fogo é indispensável. Em determinados casos, a absoluta inaptidão para disparo conduz à atipicidade da conduta.'
      }
    ]
  },
  {
    id: 'crimes-eleitorais',
    slug: 'crimes-eleitorais',
    title: 'Direito Penal Eleitoral',
    subtitle: 'Defesa de candidatos, partidos e dirigentes em apurações de crimes eleitorais',
    shortDescription: 'Representação em inquéritos policiais eleitorais, acusações de falsidade ideológica eleitoral (caixa dois), compra de votos e calúnia eleitoral.',
    fullDescription: [
      'O direito penal eleitoral envolve prazos exíguos e enorme repercussão pública. Nossos advogados possuem experiência perante a Justiça Eleitoral, Tribunais Regionais Eleitorais e o Tribunal Superior Eleitoral (TSE).'
    ],
    keyTopics: [
      'Artigo 350 do Código Eleitoral (Caixa dois / falsidade eleitoral)',
      'Corrupção eleitoral e captação ilícita de sufrágio',
      'Crimes contra a honra eleitorais e fake news em período eleitoral',
      'Atuação perante o TRE-RS e TSE em Brasília'
    ],
    applicableCourts: ['Zonas Eleitorais', 'TRE-RS', 'Tribunal Superior Eleitoral (TSE)'],
    faqs: [
      {
        question: 'Processo criminal eleitoral pode causar cassação de mandato ou inelegibilidade?',
        answer: 'Sim, condenações colegiadas por determinados crimes eleitorais podem atrair os efeitos da Lei da Ficha Limpa (LC 135/2010), tornando indispensável a defesa técnica especializada desde a primeira notificação.'
      }
    ]
  },
  {
    id: 'crimes-de-transito',
    slug: 'crimes-de-transito',
    title: 'Crimes de Trânsito',
    subtitle: 'Defesa em acidentes com vítimas fatais, embriaguez ao volante e imputações do CTB',
    shortDescription: 'Atuação especializada em homicídio culposo no trânsito, dolo eventual (racha e embriaguez), fuga do local e omissão de socorro.',
    fullDescription: [
      'A linha divisória entre culpa consciente e dolo eventual em acidentes de trânsito é uma das mais complexas do Direito Penal brasileiro. O escritório combate a banalização de imputações dolosas perante o Tribunal do Júri em acidentes automobilísticos.'
    ],
    keyTopics: [
      'Homicídio culposo e homicídio com dolo eventual no trânsito',
      'Embriaguez ao volante (art. 306 do CTB) e recusa ao bafômetro',
      'Perícias dinâmicas de velocidade, freada e visibilidade',
      'Desclassificação de crime doloso para a modalidade culposa'
    ],
    applicableCourts: ['Varas do Júri', 'Varas de Trânsito', 'TJRS', 'STJ'],
    faqs: [
      {
        question: 'A recusa ao teste do etilômetro (bafômetro) gera crime de trânsito?',
        answer: 'A recusa em soprar o bafômetro constitui infração administrativa, mas não configura crime de embriaguez ao volante por si só. Para haver crime, deve haver constatação inequívoca de alteração da capacidade psicomotora por sinais clínicos ou testemunhais.'
      }
    ]
  },
  {
    id: 'execucao-penal',
    slug: 'execucao-penal',
    title: 'Execução Penal e Direitos do Apenado',
    subtitle: 'Acompanhamento processual rigoroso para cumprimento digno da pena e benefícios da LEP (Lei 7.210/1984)',
    shortDescription: 'Atuação perante as Varas de Execuções Criminais (VEC) para progressão de regime, livramento condicional, remição de pena e saídas temporárias.',
    fullDescription: [
      'Dr. Nereu Lima foi um dos fundadores da Susepe e da Escola Penitenciária do RS, consagrando na história do escritório o compromisso com a dignidade da pessoa humana e a legalidade na execução da pena.',
      'Acompanhamos de forma permanente o cálculo de pena dos clientes, impedindo que permaneçam em regime mais gravoso do que o determinado por lei.'
    ],
    keyTopics: [
      'Progressão de regime (fechado, semiaberto, aberto)',
      'Livramento condicional e indulto/comutação',
      'Remição de pena por trabalho, estudo e leitura',
      'Transferência de estabelecimento penal e aproximação familiar',
      'Combate a faltas graves ilegais e procedimentos disciplinares (PAD)'
    ],
    applicableCourts: ['Varas de Execuções Criminais (VEC)', 'Susepe', 'TJRS', 'STJ'],
    faqs: [
      {
        question: 'O que fazer quando o apenado atinge o lapso temporal e não progride de regime?',
        answer: 'O advogado deve protocolar imediatamente pedido de progressão com a juntada do atestado de conduta carcerária, e se houver demora excessiva, impetrar Habeas Corpus por excesso de prazo.'
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'solidariedade-e-vocacao-na-advocacia-criminal',
    title: 'A Vocação da Defesa e as Misérias do Processo Penal',
    subtitle: 'Reflexões sobre a solidariedade humana e o papel social do advogado criminalista',
    author: 'Dr. Nereu Lima',
    authorRole: 'Sócio Fundador — Ex-Presidente da OAB/RS',
    date: '15 de Março de 2024',
    category: 'Filosofia Penal & Deontologia',
    readTime: '6 min de leitura',
    summary: 'Inspirado na lição imorredoura de Francesco Carnelutti, Dr. Nereu Lima discorre sobre o sacerdócio da advocacia penal, onde o defensor lida com os dramas mais profundos da alma e da liberdade humana.',
    content: [
      'Após ler o clássico "As Misérias do Processo Penal", do jurista italiano Francesco Carnelutti, compreendi com absoluta clareza um dos aspectos fundamentais da nossa missão: o réu que está privado de sua liberdade, muitas vezes, não precisa apenas de advogados, juízes e promotores; ele precisa de solidariedade, de um bálsamo para a sua existência, que já é uma tortura cotidiana.',
      'A advocacia criminal não pode ser compreendida apenas como uma profissão técnica orientada pela pecúnia. Ela é um múnus social indispensável. Assim como o cirurgião tem a vida do paciente em suas mãos na mesa de operações, o advogado criminalista tem a vida e a liberdade do cidadão em suas mãos na sustentação de uma defesa.',
      'Se retirarem a liberdade de um ser humano, o resto deixa de existir. Como advertia Carnelutti, "a vida do réu preso é contar os dias". Por essa razão, alerto sempre os novos advogados: a tentação bate sete vezes por dia na porta do defensor. Na dúvida, jamais deixe de seguir a sua consciência ética.'
    ],
    sourceCitation: 'Revista dos Advogados Criminalistas do RS / Publicação Institucional Nereu Lima Advogados'
  },
  {
    id: 'art-2',
    slug: 'a-luta-pelo-habeas-corpus-e-as-garantias-constitucionais',
    title: 'A Memória Histórica da Luta pelo Habeas Corpus no Brasil',
    subtitle: 'Do AI-5 à consolidação da Constituição Cidadã de 1988',
    author: 'Dr. Nereu Lima',
    authorRole: 'Sócio Fundador — Ex-Presidente da OAB/RS',
    date: '02 de Novembro de 2023',
    category: 'História do Direito & Garantismo',
    readTime: '8 min de leitura',
    summary: 'Um relato em primeira pessoa sobre os bastidores da OAB durante a ditadura militar, o resgate da garantia máxima contra prisões arbitrárias e a criação da Defensoria Pública.',
    content: [
      'A história da democracia brasileira confunde-se com a história da advocacia criminal. Durante os anos de chumbo, sob a égide do Ato Institucional nº 5, o Habeas Corpus esteve suspenso para os chamados crimes políticos. Aquela foi a noite mais escura do nosso ordenamento.',
      'Tivemos a honra de vivenciar, sob a liderança ímpar de Raymundo Faoro no Conselho Federal da OAB, os diálogos e a pressão cívica que resultaram no restabelecimento do Habeas Corpus. Sem o remédio heroico, não há cidadania viável.',
      'Anos depois, ao assumirmos a presidência da OAB/RS em 1990, tivemos a oportunidade de conduzir a mobilização pela criação da Defensoria Pública do Estado e pela redação do Estatuto da Criança e do Adolescente. As garantias fundamentais não são concessões estatais; são conquistas permanentes que exigem sentinelas alertas.'
    ],
    sourceCitation: 'Acervo Histórico Nereu Lima Advogados / OAB Seccional Rio Grande do Sul'
  },
  {
    id: 'art-3',
    slug: 'standards-probatorios-e-o-reconhecimento-no-processo-penal',
    title: 'A Virada Jurisprudencial no Reconhecimento de Pessoas',
    subtitle: 'A exigência de estrita observância ao artigo 226 do CPP nos Tribunais Superiores',
    author: 'Dr. Nereu Lima Filho',
    authorRole: 'Sócio — Mestre em Ciências Criminais pela PUCRS',
    date: '28 de Fevereiro de 2024',
    category: 'Direito Processual Penal',
    readTime: '7 min de leitura',
    summary: 'Análise aprofundada dos precedentes do STJ (HC 598.886/SC e correlatos) que baniram a condenação baseada exclusivamente em reconhecimento fotográfico informal.',
    content: [
      'Por décadas, a praxe policial brasileira flexibilizou indevidamente as formalidades do artigo 226 do Código de Processo Penal, transformando reconhecimentos fotográficos precários no único esteio de acusações criminais gravíssimas.',
      'O julgamento histórico do Habeas Corpus 598.886/SC pela 6ª Turma do STJ inaugurou um novo marco probatório na jurisdição brasileira. Demonstrou-se, com base na epistemologia jurídica e na psicologia do testemunho, a extrema falibilidade da memória e o risco das falsas memórias induzidas.',
      'A defesa técnica contemporânea deve exercer uma vigilância implacável perante qualquer tentativa de validar indiciamentos ou decisões condenatórias que desrespeitem as garantias do contraditório e do devido processo penal.'
    ],
    sourceCitation: 'Jurisprudência Penal Comentada / Nereu Lima Advogados'
  }
];
