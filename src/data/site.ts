export const SITE = {
  name: 'Galfort',
  legalTagline: 'Estrutura metálica pré-fabricada',
  url: 'https://galfort.com.br',
  locale: 'pt-BR',
  years: 40,
  maxSpanMeters: 50,
  phoneDisplay: '(11) 94071-9907',
  phoneE164: '+5511940719907',
  whatsappNumber: '5511940719907',
  address: {
    street: 'Av. da Aclimação, 385, 6º andar',
    neighborhood: 'Aclimação',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '01531-001',
    country: 'BR',
  },
  sectors: ['Industrial', 'Logística', 'Comercial', 'Ginásios', 'Mezaninos', 'Edifícios'],
} as const;

export function whatsappLink(message = 'Olá! Vim pelo site da Galfort e gostaria de solicitar um orçamento de estrutura metálica.') {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Sobre nós', href: '/#sobre-nos' },
  { label: 'Estrutura metálica', href: '/estrutura-metalica-pre-fabricada/' },
  { label: 'Aplicações', href: '/estruturas-metalicas/' },
  { label: 'Galeria', href: '/galeria/' },
  { label: 'Contato', href: '/contato/' },
] as const;
