import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, isIndexable } from './seo.config.mjs';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      // Só entram no sitemap as páginas marcadas como revisadas em seo.config.mjs.
      filter: (page) => isIndexable(new URL(page).pathname),
    }),
  ],
});
