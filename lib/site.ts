export const site = {
  name: "GRD MAD",
  description:
    "Fábrica de móveis planejados em São Paulo. Você projeta no Promob, nós cortamos em CNC, fitamos com cola PUR e entregamos caixas e gavetas montadas em 25 a 30 dias.",
  phoneDisplay: "(11) 97898-6350",
  phoneE164: "5511978986350",
  email: "contato@grdmad.com.br",
  cnpj: "07.222.560/0001-30",
  address: {
    street: "Rua Frei Liberato de Gries, 501",
    district: "Jardim Arpoador, São Paulo – SP",
    city: "São Paulo",
    cep: "05572-210",
    mapsQuery: "Rua Frei Liberato de Gries, 501, Jardim Arpoador, São Paulo - SP, 05572-210",
  },
  hours: "Segunda a sexta, 08h às 17h30",
  instagram: "https://www.instagram.com/grdmad/",
  catalog: "https://grdmad.com.br/catalogo_novo_2026.pdf",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#fabrica", label: "A fábrica" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#duvidas", label: "Dúvidas" },
];

export const steps = [
  {
    n: "01",
    title: "Cadastro",
    text: "Envie a ficha: razão social, CNPJ, IE, contato e logo da sua loja.",
  },
  {
    n: "02",
    title: "Projeto no Promob",
    text: "Use a biblioteca GRD MAD com nossas cores, puxadores e ferragens.",
  },
  {
    n: "03",
    title: "Envio do pedido",
    text: "Mande o arquivo ou o número do projeto por e-mail, com valores por ambiente.",
  },
  {
    n: "04",
    title: "Produção",
    text: "Corte CNC, fita 0,45 mm com cola PUR e peças etiquetadas por ambiente.",
  },
  {
    n: "05",
    title: "Retirada ou entrega",
    text: "Caixas e gavetas montadas e embaladas. Montagem no cliente opcional.",
  },
];

export const differentials = [
  {
    title: "Prazo e logística",
    icon: "clock" as const,
    items: [
      "Entrega em 25 a 30 dias",
      "Express em 15 dias para cores padrão",
      "Frete para Grande SP, interior e litoral",
      "Entrega com montagem, se você preferir",
      "Assistência técnica em até 7 dias",
    ],
  },
  {
    title: "Qualidade do móvel",
    icon: "cube" as const,
    items: [
      "100% MDF Arauco, Duratex, Eucatex e Guararapes",
      "Fita 0,45 mm com cola PUR",
      "Amortecedor em todas as dobradiças",
      "Corrediça oculta com amortecedor",
      "Corte 45° em portas e frentes",
    ],
  },
  {
    title: "Suporte ao lojista",
    icon: "people" as const,
    items: [
      "Promob próprio com opção de cor curinga",
      "Salas de atendimento para receber seus clientes",
      "Mostruário físico e pasta de cores",
      "Treinamento de técnica de vendas",
      "Peças etiquetadas por ambiente, cor e número",
    ],
  },
];

export const novelties = [
  "Cavilha + girofix",
  "Porta perfil Y usinada",
  "Puxador cava reta",
  "Metalon na linha",
  "Porta-tempero de madeira",
];

export const projects = [
  {
    title: "Sala integrada com marcenaria clara",
    meta: "Sala · referência de ambiente",
    category: "Salas",
    image: "/images/pex-living.jpg",
    alt: "Sala integrada com marcenaria clara, escada e iluminação embutida",
  },
  {
    title: "Recepção com marcenaria escura",
    meta: "Corporativo · referência de ambiente",
    category: "Corporativo",
    image: "/images/office.jpg",
    alt: "Ambiente corporativo com marcenaria escura e nichos",
  },
  {
    title: "Banheiro com espelho",
    meta: "Banheiro · referência de ambiente",
    category: "Banheiros",
    image: "/images/bath.jpg",
    alt: "Banheiro com espelho e marcenaria",
  },
  {
    title: "Sala com rack suspenso",
    meta: "Sala · referência de ambiente",
    category: "Salas",
    image: "/images/pex-bath.jpg",
    alt: "Sala com painel escuro, televisão e rack suspenso",
  },
  {
    title: "Cozinha com ilha",
    meta: "Cozinha · referência de ambiente",
    category: "Cozinhas",
    image: "/images/pex-hero.jpg",
    alt: "Cozinha planejada branca com ilha central",
  },
  {
    title: "Dormitório casal",
    meta: "Dormitório · referência de ambiente",
    category: "Dormitórios",
    image: "/images/bed.jpg",
    alt: "Dormitório de casal com cabeceira e criados",
  },
];

export const categories = [
  "Todos",
  "Cozinhas",
  "Salas",
  "Dormitórios",
  "Banheiros",
  "Corporativo",
] as const;

export const partners = [
  { name: "Arauco", logo: "/partners/arauco.svg" },
  { name: "Duratex", logo: "/partners/duratex.svg" },
  { name: "Eucatex", logo: "/partners/eucatex.svg" },
  { name: "Guararapes", logo: "/partners/guararapes.svg" },
  { name: "FGVTN", logo: "/partners/fgvtn.svg" },
  { name: "Rometal", logo: "/partners/rometal.svg" },
  { name: "RFC Alumínios", logo: "/partners/rfc.svg" },
  { name: "Jomarca", logo: "/partners/jomarca.png" },
];

export const faqs = [
  {
    q: "Qual é o prazo de entrega?",
    a: "De 25 a 30 dias, conforme a complexidade do projeto. Para cores padrão, há a opção Express em 15 dias (consulte condições).",
  },
  {
    q: "Como envio meu primeiro pedido?",
    a: "Por e-mail para contato@grdmad.com.br, com o arquivo Promob ou o número do projeto e os valores separados por ambiente.",
  },
  {
    q: "Quais regiões vocês atendem?",
    a: "Toda a região metropolitana de São Paulo, além de interior e litoral conforme a viabilidade logística.",
  },
  {
    q: "Qual é a garantia?",
    a: "5 anos contra defeitos de fabricação.",
  },
  {
    q: "As caixas já vão montadas?",
    a: "Sim. Caixas e gavetas saem montadas, embaladas com cantoneiras e plástico stretch.",
  },
];
