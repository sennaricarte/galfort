// Portão de indexação (zero fabricação).
// Páginas novas nascem com `false`: ficam noindex e fora do sitemap.
// Depois que a Galfort revisar o texto, troque para `true` e faça o deploy.
// Home, galeria e contato refletem conteúdo já publicado em galfort.com.br e nascem indexáveis.
export const REVIEWED = {
  '/': true,
  '/galeria/': true,
  '/contato/': true,
  '/estrutura-metalica-pre-fabricada/': false,
  '/estruturas-metalicas/': false,
  '/estruturas-metalicas/galpoes/': false,
  '/estruturas-metalicas/mezaninos/': false,
  '/estruturas-metalicas/ginasios/': false,
  '/estruturas-metalicas/edificios/': false,
  '/estruturas-metalicas/industrial/': false,
  '/estruturas-metalicas/logistica/': false,
  '/estruturas-metalicas/comercial/': false,
};

export const SITE_URL = 'https://galfort.com.br';

export function isIndexable(path) {
  return REVIEWED[path] === true;
}
