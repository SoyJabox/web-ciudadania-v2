# Horizonte Digital (Astro)

Recurso educativo de **Ciudadanía y Sociedad del Conocimiento** para Educación Media Superior (DGETP, tramo 7). Esta versión utiliza **Astro** como generador estático e implementa el sistema visual moderno con soporte de modo claro y modo nocturno.

## Requisitos y comandos

Desde esta carpeta:

```bash
npm install
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run build    # Genera la salida estática en dist/
npm run preview  # Vista previa local de la carpeta dist/
```

## Estructura del proyecto

```text
src/
  layouts/Base.astro          # Documento base, fuentes locales y selector claro/oscuro
  components/
    Header.astro              # Cabecera y navegación principal
    Footer.astro              # Pie de página institucional
    Logo.astro                # Isotipo vectorial adaptable a claro/oscuro
    Contenido.astro           # Inyección de contenido e índice lateral automático en lecturas
  content/                    # Contenido HTML de las 45 páginas + 404
  pages/                      # Rutas .astro equivalentes a las 46 páginas .html
  styles/site.css             # Hoja de estilos única (modo claro y modo nocturno)
public/
  assets/                     # Ilustraciones, identidad visual y fuentes con licencia
  js/quiz.js                  # Corrección local de cuestionarios
  recursos/                   # Fichas descargables en Markdown
scripts/
  postbuild.mjs               # Normaliza index.html en subcarpetas tras astro build
DESIGN.md                     # Especificación de diseño de referencia (Google Stitch)
CONTEXTO_CURRICULAR.md        # Mapa curricular del programa DGETP
DESARROLLO.md                 # Guía técnica y de mantenimiento
AGENTS.md                     # Contexto y pautas para agentes de IA
```

## Publicación (Netlify u otro alojamiento estático)

- **Comando de compilación**: `npm run build`
- **Directorio de publicación**: `dist`
- Para entrega manual sin CI, ejecutar `npm run build` y subir el contenido de la carpeta `dist/`.
# web-ciudadania-v2
