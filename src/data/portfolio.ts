// ─────────────────────────────────────────────────────────────
// Toda la información del portafolio vive en este archivo.
// Para actualizar tu sitio, solo edita los datos de aquí abajo.
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string; // Enlace de Vercel (u otro hosting)
  // Repositorios de GitHub. Si el proyecto tiene frontend y backend
  // separados, agrega uno por cada parte con su etiqueta.
  repos?: { label: string; href: string }[];
  // Los proyectos con placeholder: true solo se ven con `npm run dev`.
  // En producción (Vercel) se ocultan automáticamente.
  placeholder?: boolean;
  // Los destacados se muestran en grande; el resto, en una lista compacta.
  featured?: boolean;
  // Marca el proyecto como idea y desarrollo propios (no de un curso).
  personal?: boolean;
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

export const profile = {
  name: "Suemy Ivette Dzib Tzab",
  shortName: "Suemy Dzib",
  heroLines: ["Suemy", "Dzib Tzab"],
  role: "Desarrollo web full stack",
  headline:
    "Desarrollo aplicaciones web con PHP, JavaScript y TypeScript, desde la base de datos hasta la interfaz.",
  location: "Motul, Yucatán, México",
  email: "suemy.dzib.tzab@gmail.com",
  // Por privacidad, el teléfono no se muestra. Si quieres hacerlo público,
  // escríbelo aquí, por ejemplo: "+52 991 114 8805"
  phone: "",
  // Tu foto: guárdala en la carpeta public y escribe aquí su nombre,
  // por ejemplo "/foto.jpg". Si lo dejas vacío, no se muestra.
  photo: "/photo.png",
  photoAlt: "Fotografía de Suemy Dzib",
  links: {
    linkedin: "https://www.linkedin.com/in/suemy-ivette-dzib-tzab-b004783a9",
    github: "https://github.com/SuemyDzib",
    whatsapp: "https://wa.me/529911148805",
    cv: "/cv.pdf", // Enlace a tu CV en PDF (o "/cv.pdf" si lo pones en la carpeta public)
  },
  lookingFor:
    "Busco oportunidades en desarrollo web, ya sea frontend, backend o full stack, en modalidad remota o presencial en Mérida, Yucatán.",
  about: [
    "Llevo más de tres años creando y manteniendo módulos web para las áreas de marketing, recursos humanos, contabilidad, operaciones y cobranza de una empresa de seguros y fianzas.",
    "Me muevo por todo el stack: interfaces con React, Vue o HTML y CSS escritos a mano, lógica de negocio con PHP (Laravel y CodeIgniter) y Node.js (Nest.js), y bases de datos MySQL, PostgreSQL y MongoDB. También he conectado sistemas externos mediante APIs REST y servicios SOAP.",
    "Me formé en Ingeniería en Sistemas Computacionales en el TecNM Campus Motul y sigo aprendiendo de forma constante.",
  ],
  facts: [
    { label: "Ubicación", value: "Motul, Yucatán" },
    { label: "Experiencia", value: "Más de 3 años" },
    { label: "Modalidad", value: "Remoto o presencial en Mérida" },
    { label: "Idiomas", value: "Español nativo, inglés intermedio (B1)" },
  ],
};

export const experience: Job[] = [
  {
    role: "Desarrollo web",
    company: "Capital Seguros y Fianzas",
    location: "Yucatán",
    period: "Oct 2022 – Mar 2026",
    summary:
      "Creación y edición de módulos internos con PHP y JavaScript, interfaces con HTML, CSS y frameworks de estilos, y manejo de información en MySQL.",
    highlights: [
      "Integración con el software SICAS (SOAP y XML) para consultar y gestionar seguros, pólizas, fianzas y siniestros.",
      "Envío automatizado de correos electrónicos con PHPMailer y de mensajes a celulares con Mailjet.",
      "Importación y exportación de hojas de cálculo (xls, xlsx) con PhpSpreadsheet.",
      "Generación de códigos QR con PHP y consumo de APIs de terceros.",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "jQuery", "Axios", "SOAP/XML", "APIs REST"],
  },
  {
    role: "Atención al cliente y marketing digital",
    company: "Refaccionaria BICILUB",
    location: "Motul, Yucatán",
    period: "Ago 2021 – May 2022",
    summary:
      "Además de atender a clientes, me encargué de la presencia digital del negocio.",
    highlights: [
      "Creé la página de Facebook del negocio y diseñé carteles y paneles digitales para publicarla.",
      "Registré el negocio en Google como perfil de empresa para que apareciera en Google Maps.",
    ],
  },
];

export const projects: Project[] = [
  // ── Destacados (featured: true) ──────────────────────────────
  {
    title: "Importador de ventas desde Excel",
    description:
      "Carga archivos de ventas (xlsx, xls, ods o csv) y valida cada fila antes de guardarla: detecta correos inválidos, fechas imposibles o futuras, cantidades y precios incorrectos y filas duplicadas, y reconoce columnas en cualquier orden o con nombres parecidos. Muestra los errores celda por celda, permite descargarlos en Excel para corregirlos e incluye un tablero con ingresos por mes y por categoría, productos más vendidos y la calidad de cada archivo importado.",
    tech: ["Laravel", "PHP", "PhpSpreadsheet"],
    demo: "https://importador-ventas-laravel.onrender.com/importaciones",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/importador-ventas-laravel" }],
    featured: true,
    personal: true,
  },
  {
    title: "Punto de venta",
    description:
      "Sistema de punto de venta con catálogo por categorías, inventario disponible por producto, carrito de compras y un panel de administración para consultar las ventas. El frontend y la API están separados y desplegados en servicios distintos.",
    tech: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
    demo: "https://pos-frontend-wheat.vercel.app/1",
    repos: [
      { label: "Código frontend", href: "https://github.com/SuemyDzib/pos-frontend" },
      { label: "Código backend", href: "https://github.com/SuemyDzib/pos-backend" },
    ],
    featured: true,
  },
  {
    title: "AppSalon",
    description:
      "Sistema de reservación de citas para un salón de belleza: los clientes eligen servicios, fecha y hora desde su cuenta. Aplicación full stack con API propia y base de datos.",
    tech: ["Vue 3", "Pinia", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://suemydzib-appsalon.netlify.app/",
    repos: [
      { label: "Código frontend", href: "https://github.com/SuemyDzib/appsalon-frontend" },
      { label: "Código backend", href: "https://github.com/SuemyDzib/appsalon-backend" },
    ],
    featured: true,
  },
  {
    title: "DevTree",
    description:
      "Plataforma para que cada persona cree un perfil público con sus redes sociales y enlaces en un solo lugar, con registro de usuarios y edición del perfil.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    demo: "https://suemydzib-devtree.netlify.app/",
    repos: [
      { label: "Código frontend", href: "https://github.com/SuemyDzib/devtree_frontend" },
      { label: "Código backend", href: "https://github.com/SuemyDzib/devtree_backend" },
    ],
  },
  {
    title: "Buscador de bebidas con IA",
    description:
      "Buscador de recetas de bebidas por ingrediente y categoría que consume una API externa e incluye un asistente con inteligencia artificial, conectado a modelos gratuitos de OpenRouter, para que el usuario encuentre la receta que busca.",
    tech: ["Vue", "Pinia", "APIs REST", "OpenRouter (IA)"],
    demo: "https://suemydzib-bebidas-vue.netlify.app/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/bebidas-vue-ai" }],
    featured: true,
  },
  {
    title: "Agencia de viajes",
    description:
      "Sitio renderizado en el servidor con catálogo de viajes, páginas de detalle por destino y una sección de testimoniales donde los clientes dejan sus comentarios.",
    tech: ["Node.js", "Express", "Pug", "Sequelize"],
    demo: "https://agencia-viajes-node-4rvb.onrender.com/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/agencia-viajes-node" }],
  },
  {
    title: "Control de gastos",
    description:
      "Aplicación para definir un presupuesto, registrar gastos por categoría y ver en todo momento cuánto dinero queda disponible.",
    tech: ["Vue"],
    demo: "https://suemydzib-plan-gastos.netlify.app/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/admin-gastos" }],
  },

  // ── Otros proyectos ──────────────────────────────────────────
  {
    title: "CRM de clientes",
    description:
      "Gestión de clientes con alta, edición y eliminación de registros conectados a una API REST, con navegación entre vistas.",
    tech: ["Vue", "Vue Router", "Tailwind CSS", "APIs REST"],
    demo: "https://suemydzib-crm-vue.netlify.app/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/crm-vue" }],
  },
  {
    title: "Administrador de pacientes veterinarios",
    description: "Registro, edición y eliminación de pacientes y sus propietarios.",
    tech: ["Vue"],
    demo: "https://suemydzib-admin-vet.netlify.app/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/admin-pacientes" }],
  },
  {
    title: "Cotizador de criptomonedas",
    description: "Consulta el precio de criptomonedas en distintas monedas mediante una API.",
    tech: ["Vue", "APIs REST"],
    demo: "https://suemydzib-cripto-vue.netlify.app/",
  },
  {
    title: "Consulta del clima",
    description: "Muestra el clima actual de una ciudad usando una API de clima.",
    tech: ["Vue", "APIs REST"],
    demo: "https://app-clima-vue-rouge.vercel.app/",
    repos: [{ label: "Ver código", href: "https://github.com/SuemyDzib/app-clima-vue" }],
  },
  {
    title: "GuitarLA",
    description: "Tienda en línea de guitarras con carrito de compras.",
    tech: ["React"],
    demo: "https://suemydzib-guitarla.netlify.app/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue (Composition API)", "Pinia", "jQuery", "Axios"],
  },
  {
    group: "Estilos",
    items: ["Tailwind CSS", "Bootstrap", "Bulma", "Semantic UI", "Tachyons", "Diseño responsivo"],
  },
  {
    group: "Backend",
    items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express", "Nest.js", "Pug", "Sequelize", "APIs REST", "SOAP y XML", "Patrón MVC", "Async/Await"],
  },
  {
    group: "Datos y herramientas",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Administración de bases de datos", "Postman", "Claude (IA para desarrollo)", "OpenRouter (IA)", "HubSpot Content Hub", "PHPMailer", "PhpSpreadsheet", "Mailjet"],
  },
  {
    group: "También conozco",
    items: ["C#", "Java y Kotlin para móvil", "Python (básico)", "Photoshop", "Premiere Pro", "Lightroom", "Adobe XD"],
  },
];

export const education = [
  {
    title: "Ingeniería en Sistemas Computacionales",
    place: "Instituto Tecnológico Superior de Motul (TecNM Campus Motul)",
    period: "2016 – 2025",
  },
];

// Certificaciones. En "certificate" pega el enlace para verificarlas.
// Lo ideal es el enlace oficial de la plataforma (Udemy, Cisco, etc.);
// si no lo tienes, un PDF en la carpeta public o un enlace de Drive público.
export const certifications: {
  title: string;
  place: string;
  period: string;
  certificate?: string;
}[] = [
  {
    title: "Certificación de Content Hub para marketers",
    place: "HubSpot Academy",
    period: "",
    certificate:
      "https://app.hubspot.com/academy/achievements/zsc732yl/es/1/suemy-ivette-dzib-tzab/certificacion-de-content-hub-para-marketers",
  },
  {
    title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    place: "Udemy",
    period: "",
    certificate: "https://ude.my/UC-692ab547-cd4b-4374-a321-deea4c1ae27f",
  },
  {
    title: "Vue.js 3 - La Guía Completa - Composition Pinia MEVN 10 Apps",
    place: "Udemy",
    period: "",
    certificate: "https://ude.my/UC-d5b52dc0-4d7d-4e1a-9a10-a07ec51f8497",
  },
  {
    title: "Curso de iniciación al Desarrollo con IA",
    place: "BIG school, impartido por Brais Moure",
    period: "",
    certificate:
      "https://drive.google.com/file/d/1g-0N1F1s36B3OCpXkALPfCfQysedqjZi/view",
  },
  {
    title: "Inglés nivel B1",
    place: "TecNM Campus Motul",
    period: "",
    certificate:
      "https://drive.google.com/file/d/1iaUYigwdsc8STc_WfUXwcpGpUt55Pqzc/view",
  },
];
