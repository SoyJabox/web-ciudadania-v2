# Horizonte Digital (Astro) · Guía para desarrolladores

## 1. Arquitectura

Sitio estático generado con **Astro** (`build.format = 'file'`). Conserva las 46 rutas `.html` (45 páginas de contenido + `404.html`), los textos curriculares, las fichas descargables y el contrato de los cuestionarios (`public/js/quiz.js`), separando la estructura común en componentes de Astro:

- `src/layouts/Base.astro`: `<head>`, carga de fuentes locales (`@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/dm-sans`, `@fontsource-variable/newsreader`) y persistencia opcional de tema claro/nocturno (`hd-theme`).
- `src/components/Header.astro` y `Footer.astro`: cabecera y pie compartidos.
- `src/components/Logo.astro`: isotipo SVG inline adaptable mediante variables CSS (`--logo-sun`, `--logo-arc`, `--logo-inner`).
- `src/components/Contenido.astro`: envuelve las páginas de lectura (`.reading`) con el índice lateral automático *En esta lectura* generado en compilación a partir de los `<h2>`, sin requerir JavaScript en el cliente.
- `src/styles/site.css`: hoja de estilos única con variables para modo claro (`:root`) y modo nocturno (`:root[data-theme='dark']`).

## 2. Edición de contenidos

Los contenidos de cada página se encuentran en `src/content/<ruta>.html` y sus metadatos (título, descripción, tema de color) en `src/pages/<ruta>.astro`.

- Al editar una lectura, conservar la explicación, el ejemplo ficticio identificado, la actividad, la orientación desplegable (`.answer-guide`), las fuentes oficiales y la fecha de revisión.
- En cuestionarios (`src/content/actividades/*.html`), mantener `form[data-quiz]`, `fieldset[data-answer]`, los `input[type="radio"]` seguidos de `<span>`, `.quiz-feedback`, `.quiz-explanation` y el desplegable final de soluciones sin JavaScript.

## 3. Créditos y transparencia

En `src/content/proyecto/index.html` se mantienen los créditos acordados:

- Código y desarrollo visual: **Codex, de Open AI.**
- Identidad visual, idea principal y estructura del proyecto: **Javier Miranda.**
- Temario, pautas y docencia: **Prof. Paula Cano.**

## 4. Compilación y verificación

```bash
npm run build
```

El script `scripts/postbuild.mjs` se ejecuta automáticamente al finalizar `astro build` para renombrar cualquier `index.html.html` de subcarpetas a `index.html`, manteniendo intactas todas las rutas relativas.
