import { defineConfig } from 'astro/config';

// Páginas como archivos .html (misma estructura de rutas que el sitio estático original).
export default defineConfig({
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
