/**
 * `section`: paginasWeb | fullStack | ciberseguridad | aplicaciones
 *
 * Enlaces:
 * - Usa `links` cuando quieras varios botones (GitHub, PDF, demo, etc.).
 *   Cada uno: { label: "Texto del botón", url: "..." }
 * - PDF en local: coloca el archivo en `public/documentos/` y usa
 *   url: "/documentos/nombre-archivo.pdf"
 * Si no usas `links`, se muestran `githubUrl` y `liveUrl` como antes.
 */
export const projects = [
  {
    id: 1,
    title: "Pala Match",
    section: "fullStack",
    description:
      "Aplicación web con backend y frontend integrados: experiencia completa de usuario y API.",
    tech: ["Next.js", "Spring Boot", "React"],
    links: [
      { label: "Código", url: "https://github.com/BLigonieWertmiller/pala-match" },
      // Descomenta cuando subas el PDF a public/documentos/
      // { label: "Memoria (PDF)", url: "/documentos/pala-match-memoria.pdf" },
    ],
  },
  {
    id: 2,
    title: "Mejora de seguridad para LexCorp (ficticio)",
    section: "ciberseguridad",
    description:
      "Auditoria a LexCorp sobre ataque de malware, las acciones llevadas a cabo y la seguridad de la empresa.",
    tech: ["VirusTotal", "KaliLinux", "WireShark", "Powershell"],
    links: [
      {
        label: "Informe de auditoria",
        url: "/documentos/PF%20%2B%20Ligonie%20Wertmiller%20Benjamin.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Capacitación de ciberseguridad",
    section: "ciberseguridad",
    description:
      "Capacitación de ciberseguridad para la consultoria STRATIO orientada a Phishing e IA utilizada para Phishing.",
    tech: ["Phishing", "IA"],
    links: [
      {
        label: "Informe",
        url: "/documentos/Informe%20Ciberseguridad%20final.pdf",
      },
    ],
  },
  {
    id: 4,
    title: "Página web para IUSVG",
    section: "paginasWeb",
    description:
      "Página web informativa que cuenta con los servicios que ofrecen, los miembros y un boton de whatsapp para tener un contacto directo.",
    tech: ["HTML", "CSS"],
    links: [{ label: "Página", url: "https://ius-vg.vercel.app/" }],
  },
  {
    id: 5,
    title: "Escobar Propiedades y Arte",
    section: "fullStack",
    description:
      "Plataforma para inmobiliaria y galería de arte: publicación y gestión de propiedades y obras, panel de administración con login y carga de imágenes.",
    tech: ["React", "Vite", "Node.js", "Express", "Supabase"],
    links: [
      { label: "Página", url: "https://escobar-propiedades-y-arte.vercel.app/" },
      {
        label: "Código",
        url: "https://github.com/BLigonieWertmiller/Escobar-Propiedades-y-Arte",
      },
    ],
  },
  {
    id: 6,
    title: "Celébrame",
    section: "fullStack",
    description:
      "Plataforma de invitaciones digitales: plantillas personalizables con fotos, colores, música y secciones a gusto, con cobro por invitación vía Mercado Pago y creación de tarjetas sin necesidad de registro.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Mercado Pago"],
    links: [
      { label: "Página", url: "https://celebrame.com.ar/" },
      { label: "Código", url: "https://github.com/BLigonieWertmiller/sobrecito" },
    ],
  },
];
