# Portafolio de Suemy Dzib

Sitio personal hecho con **Next.js 15, TypeScript y Tailwind CSS 4**.

## Cómo correrlo en tu computadora

Necesitas Node.js 18.18 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Cómo editar tu información

Todo el contenido está en **`src/data/portfolio.ts`**: datos personales, experiencia,
proyectos, habilidades, formación y enlaces. No necesitas tocar los componentes.

### Agregar tus proyectos

1. En `projects`, cambia el título, la descripción y las tecnologías.
2. Pega tus enlaces en `demo` (Vercel) y `repo` (GitHub).
3. Borra la línea `placeholder: true`.

Los proyectos que aún tengan `placeholder: true` solo se ven con `npm run dev`.
En el sitio publicado se ocultan solos, así que nunca verán ejemplos sin terminar.
Si no hay ningún proyecto real, la sección completa se oculta.

Los proyectos con `featured: true` se muestran en grande; los demás aparecen en la lista compacta "Otros proyectos".

### Agregar tu foto

1. Guarda tu foto en la carpeta `public`, por ejemplo `public/foto.jpg`.
   Cuadrada o vertical, de unos 800 px de ancho y menos de 300 KB.
2. En `profile.photo` escribe `"/foto.jpg"`.

La foto aparece en "Sobre mí" con un marco amarillo. Next.js la optimiza automáticamente.
Si dejas el campo vacío, no se muestra.

### Enlaces opcionales

En `profile.links` agrega tu LinkedIn, GitHub y un enlace a tu CV.
Para el CV puedes poner tu PDF en la carpeta `public` como `cv.pdf` y escribir `"/cv.pdf"`.
Los enlaces vacíos no se muestran.

## Publicarlo en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En https://vercel.com, elige "Add New Project" e importa el repositorio.
3. Vercel detecta Next.js automáticamente; solo da clic en "Deploy".

Cada vez que hagas `git push`, el sitio se actualiza solo.

## Estructura

```
src/
  app/
    layout.tsx      Fuentes, metadatos y estructura HTML
    page.tsx        Todas las secciones de la página
    globals.css     Paleta de colores (modo claro y oscuro) y animación
  components/
    Section.tsx     Contenedor de cada sección
    StitchBand.tsx  Banda en punto de cruz inspirada en el hipil yucateco
  data/
    portfolio.ts    Todo tu contenido
```

## Estadísticas de visitas (Vercel Analytics)

El proyecto ya incluye Vercel Analytics. Para activarlo, entra a tu proyecto en Vercel,
abre la pestaña **Analytics** y da clic en **Enable**. A partir del siguiente despliegue
verás cuántas personas visitan tu portafolio y desde dónde llegan.
