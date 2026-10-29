// Roda antes do build. Avisa (não falha) se faltarem imagens em src/assets/.
import { access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { IMAGES } from './image-manifest.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const missing = [];
for (const rel of IMAGES) {
  try { await access(join(root, rel)); } catch { missing.push(rel); }
}
if (missing.length) {
  console.warn(`\n⚠ Faltam ${missing.length} de ${IMAGES.length} imagens em src/assets/. Rode: npm run images:download\n`);
  if (process.env.CI || process.env.VERCEL) {
    console.warn('Build seguirá com placeholders. Commite as imagens em src/assets/ antes do deploy.\n');
  }
}
