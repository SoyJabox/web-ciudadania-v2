// Con build.format='file', las páginas index de subcarpetas se emiten como index.html.html.
// Se renombran a index.html para conservar las rutas del sitio original.
import { readdirSync, renameSync, statSync } from 'node:fs';
import { join } from 'node:path';
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n === 'index.html.html') renameSync(p, join(d, 'index.html'));
  }
})('dist');
