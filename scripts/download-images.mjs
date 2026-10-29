// Uso: npm run images:download
// Baixa as imagens do site original para src/assets/ (pula as que já existem).
// Requer Node 18+. Rode na sua máquina.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { IMAGES, ORIGIN } from './image-manifest.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const exists = (p) => access(p).then(() => true, () => false);

async function get(rel) {
  const dest = join(root, rel);
  if (await exists(dest)) return 'skip';
  const res = await fetch(`${ORIGIN}/${rel}`, { headers: { 'user-agent': 'galfort-migration/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return 'ok';
}

const queue = [...IMAGES];
const stats = { ok: 0, skip: 0, fail: [] };
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const rel = queue.shift();
      try { stats[await get(rel)]++; }
      catch (e) { stats.fail.push(`${rel} (${e.message})`); }
    }
  })
);
console.log(`Baixadas: ${stats.ok} | já existiam: ${stats.skip} | falhas: ${stats.fail.length}`);
if (stats.fail.length) { console.log(stats.fail.join('\n')); process.exitCode = 1; }
