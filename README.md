# Landing — Mariano González | Automatización & IA

Landing page en React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lenis + Phosphor Icons.

## Instalar y correr en local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
```

Los archivos finales quedan en `dist/`. Podés subir esa carpeta a Vercel, Netlify, Cloudflare Pages, etc.

## Datos de contacto

Editá `src/data/contact.ts`:

- `WHATSAPP_NUMBER` → número con código de país, sin espacios ni el "+" (ej: `5493810000000`).
- `EMAIL` → email.
- `LINKEDIN_URL` → perfil de LinkedIn.
- `CALENDLY_URL` → link de Calendly o el que uses para agendar reuniones.

En `index.html`:

- Revisá el dominio en `og:url` y `canonical`.
- Agregá una imagen `public/og-cover.png` (1200x630px) para que se vea bien al compartir el link en WhatsApp/redes.

## Estructura del proyecto

```
src/
  components/
    Nav, Hero, IndustriesMarquee, Projects, Services, FAQ, FinalCTA, Footer → una sección por archivo
    hero/LiveConsole.tsx    → consola animada del hero
    projects/               → marco fijo de capturas y lightbox
    ui/                     → piezas reutilizables (LineReveal, ScrambleText, SpotlightCard, GrainOverlay, Monogram)
    SmoothScroll.tsx        → scroll suave con Lenis
  data/
    content.ts   → servicios, rubros y preguntas frecuentes
    projects.ts  → proyectos y sus capturas
    contact.ts   → datos de contacto
  lib/motion.ts  → curvas, springs y variantes compartidas
  index.css      → paleta, tipografías y tokens de diseño (@theme)
  App.tsx        → arma todas las secciones en orden
```

## Editar contenido

Todo el texto vive en `src/data/` como arrays de objetos. Para agregar o cambiar algo
(un servicio, un rubro, una pregunta o un proyecto) no hace falta tocar los componentes.

## Paleta y tipografía

Definidos en `src/index.css` dentro del bloque `@theme`:

- Fondo `#09090b`, superficie `#111113`, bordes `#1f1f23`
- Acento único: verde lima `#c6f432`
- Tipografías: Geist (títulos y texto) y Geist Mono (etiquetas y datos), servidas localmente con Fontsource

## Notas de accesibilidad y performance

- Respeta `prefers-reduced-motion`: se desactivan Lenis, la consola, la cinta y los efectos de texto.
- Las animaciones continuas se pausan cuando salen de pantalla.
- Foco visible con `:focus-visible`, acordeones con `aria-expanded` y lightbox con cierre por Escape y flechas.
