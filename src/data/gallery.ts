// Fotos de obras: src/assets/trabalhos/<n>.webp
// ALT: não consegui descrever cada foto com precisão. Preencha ALT_OVERRIDES com o que a foto mostra
// (tipo de obra, cobertura, cor, local). Alt descritivo e verdadeiro ajuda em Google Imagens e em acessibilidade.
// Exemplo: 12: 'Galpão metálico com cobertura em arco e pilares vermelhos em obra'
export const ALT_OVERRIDES: Record<number, string> = {};

export const GALLERY_COUNT = 51; // galeria do site original: 1..51
export const HOME_PHOTOS = [49, 50, 51, 52, 53, 46]; // fotos usadas na home original (52 e 53 só aparecem na home)

export function photoAlt(n: number) {
  return ALT_OVERRIDES[n] ?? `Estrutura metálica pré-fabricada em obra da Galfort (projeto ${n})`;
}

export const GALLERY = Array.from({ length: GALLERY_COUNT }, (_, i) => ({ n: i + 1, alt: photoAlt(i + 1) }));
