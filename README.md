# Landing — Mariano González | Automatización & IA

Landing page en React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

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

Los archivos finales quedan en `dist/`. Podés subir esa carpeta a Vercel, Netlify, Cloudflare Pages, etc. (arrastrar y soltar la carpeta `dist` alcanza en Netlify).

## Antes de publicar: datos a completar

Editá `src/components/Contact.tsx` y reemplazá:

- `WHATSAPP_NUMBER` → tu número real con código de país, sin espacios ni el "+" (ej: `5493810000000`).
- `EMAIL` → tu email real.
- `LINKEDIN_URL` → tu perfil de LinkedIn.
- `CALENDLY_URL` → tu link de Calendly o el que uses para agendar reuniones.

En `index.html`:

- Reemplazá `https://marianogonzalez.dev/` por tu dominio real (og:url, canonical).
- Agregá una imagen `public/og-cover.png` (1200x630px) para que se vea bien al compartir el link en WhatsApp/redes.

## Estructura del proyecto

```
src/
  components/     → un componente por sección (Hero, Services, Contact, etc.)
  data/content.ts → todo el copy y contenido en un solo lugar, fácil de editar
  index.css       → paleta de colores, tipografías y tokens de diseño (@theme)
  App.tsx         → arma todas las secciones en orden
```

## Editar contenido

Casi todo el texto (problemas, servicios, rubros, pasos, ideas, FAQ) vive en
`src/data/content.ts` como arrays de objetos. Para agregar o cambiar algo, no hace
falta tocar los componentes — solo editar ese archivo.

## Paleta y tipografía

Definidos en `src/index.css` dentro del bloque `@theme`:

- Fondo: `#050608` / superficie `#0b0d12`
- Acentos: azul `#3d5afe`, celeste `#4fd1ff`, violeta `#8b5cf6`
- Tipografías: Space Grotesk (títulos), Inter (texto), JetBrains Mono (etiquetas)

## Notas de accesibilidad y performance

- Respeta `prefers-reduced-motion`.
- Foco visible con `:focus-visible`.
- El formulario de contacto arma un link de WhatsApp con los datos cargados (no requiere backend).
