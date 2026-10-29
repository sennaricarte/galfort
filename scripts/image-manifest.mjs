// Lista de imagens do site original (galfort.com.br) usadas no novo projeto.
// Ícones (WhatsApp, redes, diferenciais) viraram SVG inline e não entram aqui.
export const ORIGIN = 'https://galfort.com.br/assets/img';

const empresas = [
  'eletrica_brasil', 'carrefour', 'assai', 'shibata', 'condominio_wembley', 'cristal', 'ford',
  'memorial_necropole', 'prefeitura_santos', 'osmos', 'marina_asturias', 'odebrecht',
  'wz_hotel_jardins', 'sherwin_williams', 'fazenda_cafelandia', 'usiminas', 'emplatec', 'placo', 'imerys',
].map((n) => `empresas/${n}.png`);

const trabalhos = Array.from({ length: 53 }, (_, i) => `trabalhos/${i + 1}.webp`);

export const IMAGES = [
  'logo/logo_galfort.webp',
  'backgrounds/inicio.webp',
  'images/estrutura_metalica.webp',
  ...trabalhos,
  ...empresas,
];
