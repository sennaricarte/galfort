import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{webp,png,jpg,jpeg,avif}', { eager: true });

/** Retorna a imagem de src/assets/<path> ou undefined se o arquivo ainda não foi baixado. */
export function asset(path: string): ImageMetadata | undefined {
  return all[`/src/assets/${path}`]?.default;
}
