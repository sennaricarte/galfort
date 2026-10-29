// Páginas de aplicação (uma URL por tipo de obra). Nascem noindex (ver seo.config.mjs).
// Regra: nada de preço, prazo, número de obras ou norma sem confirmação. Textos genéricos e verdadeiros.
// Antes de liberar para indexação: a Galfort revisa cada texto e acrescenta dados reais (obras, vãos, áreas).

export interface Faq { q: string; a: string }
export interface Section { h2: string; p: string[] }
export interface Application {
  slug: string;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  sections: Section[];
  faq: Faq[];
  related: string[];
}

const faqProjeto: Faq = {
  q: 'Preciso de projeto antes de pedir o orçamento?',
  a: 'Não. Você pode enviar o que tem: tipo de uso, medidas aproximadas e cidade. A equipe da Galfort orienta os próximos passos pelo WhatsApp.',
};

const faqPrazo: Faq = {
  q: 'Qual é o prazo e o valor da obra?',
  a: 'Depende do tamanho, do vão, do uso e do local. Por isso o orçamento é feito sob medida. Solicite pelo WhatsApp para receber uma estimativa.',
};

export const APPLICATIONS: Application[] = [
  {
    slug: 'galpoes',
    label: 'Galpões',
    h1: 'Galpões em estrutura metálica pré-fabricada',
    metaTitle: 'Galpão em Estrutura Metálica Pré-Fabricada | Galfort',
    metaDescription: 'Galpões em estrutura metálica pré-fabricada, com vãos livres de até 50 metros e projeto sob medida. Fale com a Galfort e peça orçamento.',
    lead: 'Galpões metálicos pré-fabricados unem agilidade de montagem, vãos livres amplos e projeto sob medida para indústrias, comércio e armazenagem.',
    sections: [
      {
        h2: 'Por que escolher galpão em estrutura metálica',
        p: [
          'Os componentes de aço são fabricados previamente e montados no local da obra. Isso traz precisão e agilidade ao processo.',
          'A Galfort trabalha com vãos livres de até 50 metros. O espaço interno fica livre de pilares intermediários e mais fácil de ocupar.',
          'O aço é reciclável. Essa característica torna a solução mais sustentável do que muitas alternativas.',
        ],
      },
      {
        h2: 'Onde o galpão metálico é usado',
        p: [
          'Indústrias, centros logísticos, depósitos, oficinas, comércio de grande área e áreas de produção. Cada uso pede um projeto diferente.',
          'Pé-direito, cargas, tipo de cobertura e fechamentos mudam conforme a operação. Por isso o projeto é personalizado.',
        ],
      },
    ],
    faq: [
      { q: 'Qual o maior vão livre possível?', a: 'A Galfort atende projetos com vãos livres de até 50 metros. O vão ideal depende do uso e do projeto.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['industrial', 'logistica', 'mezaninos'],
  },
  {
    slug: 'mezaninos',
    label: 'Mezaninos',
    h1: 'Mezaninos em estrutura metálica',
    metaTitle: 'Mezanino Metálico sob Medida | Galfort',
    metaDescription: 'Mezaninos em estrutura metálica para ampliar a área útil de galpões, lojas e indústrias. Projeto personalizado. Solicite orçamento à Galfort.',
    lead: 'O mezanino metálico cria um novo pavimento dentro do espaço existente. Você amplia a área útil sem aumentar o terreno.',
    sections: [
      {
        h2: 'Quando um mezanino faz sentido',
        p: [
          'Quando o galpão ou a loja tem pé-direito sobrando e falta área para estoque, escritório ou produção.',
          'A estrutura metálica é montada com componentes pré-fabricados. A montagem tende a ser mais limpa e organizada do que a de obras tradicionais.',
        ],
      },
      {
        h2: 'O que define o projeto',
        p: [
          'A carga prevista é o ponto central: pessoas, mercadorias, máquinas ou empilhadeiras. Cada caso exige dimensionamento próprio.',
          'Acessos, escadas e a integração com a estrutura existente também entram na conversa. A Galfort avalia o cenário e propõe a solução.',
        ],
      },
    ],
    faq: [
      { q: 'O mezanino precisa de projeto estrutural?', a: 'Sim. Toda estrutura metálica deve ser dimensionada por profissional habilitado, de acordo com a carga e o uso.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['galpoes', 'comercial', 'industrial'],
  },
  {
    slug: 'ginasios',
    label: 'Ginásios',
    h1: 'Ginásios e coberturas esportivas em estrutura metálica',
    metaTitle: 'Estrutura Metálica para Ginásios e Quadras | Galfort',
    metaDescription: 'Estruturas metálicas pré-fabricadas para ginásios e coberturas de quadras, com grandes vãos livres e projeto sob medida. Peça orçamento à Galfort.',
    lead: 'Ginásios e quadras cobertas precisam de grandes áreas livres, sem pilares no meio do jogo. A estrutura metálica resolve esse desafio.',
    sections: [
      {
        h2: 'Grandes vãos para esporte e eventos',
        p: [
          'Com vãos livres de até 50 metros, a estrutura metálica deixa a área de jogo desimpedida.',
          'A pré-fabricação reduz o tempo de montagem no local. Isso ajuda escolas, clubes e condomínios a retomarem o uso do espaço mais cedo.',
        ],
      },
      {
        h2: 'Cobertura de quadras existentes',
        p: [
          'Coberturas metálicas também atendem quadras que já existem. Veja exemplos de obras na galeria do site.',
        ],
      },
    ],
    faq: [
      { q: 'É possível cobrir uma quadra que já existe?', a: 'Depende das medidas e das condições do terreno. Envie fotos e dimensões pelo WhatsApp para uma avaliação inicial.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['galpoes', 'comercial', 'edificios'],
  },
  {
    slug: 'edificios',
    label: 'Edifícios',
    h1: 'Edifícios em estrutura metálica',
    metaTitle: 'Edifícios em Estrutura Metálica | Galfort',
    metaDescription: 'Estrutura metálica para edifícios comerciais e corporativos, com precisão de fábrica e montagem ágil. Projeto sob medida. Fale com a Galfort.',
    lead: 'A estrutura metálica permite construir edifícios com precisão de fábrica e montagem ágil. O projeto é feito sob medida para cada obra.',
    sections: [
      {
        h2: 'Vantagens do aço na construção de edifícios',
        p: [
          'Os elementos chegam prontos para montar. A obra ganha organização e previsibilidade.',
          'A estrutura é leve em relação à resistência. Isso favorece projetos com áreas amplas e menos pilares.',
          'O aço é reciclável e pode reduzir desperdícios no canteiro.',
        ],
      },
      {
        h2: 'Integração com o restante da obra',
        p: [
          'A estrutura metálica convive com lajes, fechamentos e acabamentos. A compatibilização com os outros projetos é parte essencial do trabalho.',
        ],
      },
    ],
    faq: [
      { q: 'A Galfort faz o projeto arquitetônico?', a: 'Confirme com a Galfort pelo WhatsApp o escopo de cada obra: projeto, fabricação e montagem.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['comercial', 'mezaninos', 'galpoes'],
  },
  {
    slug: 'industrial',
    label: 'Industrial',
    h1: 'Estruturas metálicas industriais',
    metaTitle: 'Estruturas Metálicas Industriais | Galfort',
    metaDescription: 'Estruturas metálicas pré-fabricadas para indústrias: galpões, coberturas e mezaninos com vãos livres de até 50 m. Solicite orçamento à Galfort.',
    lead: 'Indústrias precisam de estruturas duráveis, com espaço livre para máquinas e fluxo de produção. O aço pré-fabricado atende essa demanda.',
    sections: [
      {
        h2: 'Estrutura pensada para a operação',
        p: [
          'O projeto parte da rotina da fábrica: layout, cargas, altura livre e futuras ampliações.',
          'Os vãos livres de até 50 metros ajudam a organizar linhas de produção e áreas de estoque sem interferência de pilares.',
        ],
      },
      {
        h2: 'Durabilidade e qualidade',
        p: [
          'As estruturas são projetadas para garantir qualidade e resistência. A fabricação em ambiente controlado ajuda na precisão das peças.',
        ],
      },
    ],
    faq: [
      { q: 'A estrutura pode ser ampliada depois?', a: 'Em geral sim, desde que a ampliação seja prevista no projeto. Informe seus planos já na solicitação do orçamento.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['galpoes', 'logistica', 'mezaninos'],
  },
  {
    slug: 'logistica',
    label: 'Logística',
    h1: 'Estruturas metálicas para logística e armazenagem',
    metaTitle: 'Estrutura Metálica para Logística e Armazenagem | Galfort',
    metaDescription: 'Galpões e estruturas metálicas pré-fabricadas para centros logísticos e armazenagem, com grandes vãos livres. Peça orçamento à Galfort.',
    lead: 'Centros logísticos dependem de áreas livres para circulação, armazenagem e expedição. Os grandes vãos da estrutura metálica ajudam nesse fluxo.',
    sections: [
      {
        h2: 'Espaço livre para movimentar e armazenar',
        p: [
          'Sem pilares intermediários, o layout interno fica mais flexível. Corredores, docas e áreas de estoque podem ser organizados com mais liberdade.',
        ],
      },
      {
        h2: 'Agilidade para entrar em operação',
        p: [
          'Os componentes são fabricados previamente e montados no local. A pré-fabricação contribui para uma obra mais ágil.',
          'Cada projeto é personalizado conforme carga, altura e tipo de operação.',
        ],
      },
    ],
    faq: [
      { q: 'Quais informações devo enviar?', a: 'Área aproximada, altura desejada, tipo de carga e cidade da obra. Com isso a Galfort inicia a conversa.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['galpoes', 'industrial', 'mezaninos'],
  },
  {
    slug: 'comercial',
    label: 'Comercial',
    h1: 'Estruturas metálicas para obras comerciais',
    metaTitle: 'Estrutura Metálica para Obras Comerciais | Galfort',
    metaDescription: 'Estruturas metálicas pré-fabricadas para supermercados, lojas e obras comerciais, com projeto sob medida. Solicite orçamento à Galfort.',
    lead: 'Supermercados, lojas e centros comerciais precisam de áreas amplas e obras ágeis. A estrutura metálica pré-fabricada responde a essas necessidades.',
    sections: [
      {
        h2: 'Áreas amplas e livres',
        p: [
          'Os grandes vãos permitem salões de venda abertos e layouts flexíveis.',
          'A montagem de componentes pré-fabricados ajuda a organizar a obra e a planejar a abertura do espaço.',
        ],
      },
      {
        h2: 'Projeto sob medida',
        p: [
          'Cada ponto comercial tem exigências próprias de fachada, cobertura e instalações. O projeto da Galfort é personalizado para o seu caso.',
        ],
      },
    ],
    faq: [
      { q: 'A estrutura serve para reformas e ampliações?', a: 'Pode servir, conforme o caso. Envie fotos e medidas pelo WhatsApp para uma avaliação inicial.' },
      faqProjeto,
      faqPrazo,
    ],
    related: ['edificios', 'mezaninos', 'ginasios'],
  },
];

export const bySlug = (slug: string) => APPLICATIONS.find((a) => a.slug === slug)!;
