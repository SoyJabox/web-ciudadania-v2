# Horizonte Digital (Astro) · Contexto y pautas para agentes de IA

Este repositorio contiene la versión en **Astro** de Horizonte Digital, separada como proyecto independiente de la versión estática previa.

## Pautas principales

1. Leer este archivo, `DESARROLLO.md`, `README.md` y `DESIGN.md` antes de realizar cambios estructurales o visuales. Consultar `CONTEXTO_CURRICULAR.md` si se tocan contenidos.
2. Preservar los textos curriculares, el voseo, la identificación de ejemplos/casos ficticios, los enlaces oficiales (incluida la URL de ANEP para el programa) y los créditos exactos en `src/content/proyecto/index.html`.
3. Mantener el funcionamiento local de los cuestionarios (`public/js/quiz.js`) y las soluciones desplegables sin JavaScript.
4. Todos los estilos viven en `src/styles/site.css` con soporte para modo claro y modo nocturno (`:root[data-theme='dark']`). El logo vectorial se sirve desde `src/components/Logo.astro`.
5. Comprobar siempre con `npm run build` que las 46 páginas compilen sin errores.
