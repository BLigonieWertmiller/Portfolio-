/**
 * Los fragmentos de React que estaban aquí están reorganizados en:
 *
 * - `data/projects.js`     → array `projects` (cada item tiene `section`)
 * - `components/ProjectGallery.jsx` → secciones + navegación sticky
 * - `components/ProjectCard.jsx`    → tarjeta de proyecto
 *
 * En tu página Next.js, importa la galería:
 *
 *   import ProjectGallery from '@/components/ProjectGallery';
 *   // o: import ProjectGallery from '../components/ProjectGallery';
 *
 * y coloca <ProjectGallery /> donde quieras mostrar el bloque.
 *
 * Secciones (`section` en cada proyecto): paginasWeb | fullStack | ciberseguridad | aplicaciones
 *
 * Enlaces: usa `links: [{ label, url }]` para GitHub, PDF (en public/documentos/), demo, etc.
 */

export { projects } from "./data/projects";
