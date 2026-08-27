import Link from "next/link";

const SECTION_LABEL = {
  paginasWeb: "Página web",
  fullStack: "Full stack",
  ciberseguridad: "Ciberseguridad",
  aplicaciones: "Aplicación",
};

function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;
  const t = url.trim();
  if (!t || t.includes("...")) return false;
  return true;
}

/** `next/link` no conviene para http(s) ni PDFs estáticos: usar <a> nativo. */
function shouldUseNativeAnchor(url) {
  if (!url) return true;
  const u = url.trim();
  if (/^https?:\/\//i.test(u)) return true;
  if (/\.pdf(\?|#|$)/i.test(u)) return true;
  return false;
}

/** Prioridad: array `links`; si no hay, `githubUrl` + `liveUrl` legacy. */
function getLinks(project) {
  if (Array.isArray(project.links) && project.links.length > 0) {
    return project.links.filter(
      (item) => item && isValidUrl(item.url) && item.label
    );
  }
  const out = [];
  if (isValidUrl(project.githubUrl)) {
    out.push({ label: "Código", url: project.githubUrl });
  }
  if (isValidUrl(project.liveUrl)) {
    out.push({ label: "Demo", url: project.liveUrl });
  }
  return out;
}

export default function ProjectCard({ project, sectionKey }) {
  const links = getLinks(project);
  const label = SECTION_LABEL[sectionKey] || "Proyecto";

  return (
    <article className="group relative bg-surface border border-ink/15 rounded-md transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-raised">
      <div className="p-6 flex flex-col h-full min-h-[220px]">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-seal shrink-0" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
            {label}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink mb-3 leading-snug tracking-tight transition-colors duration-200 group-hover:text-seal">
          {project.title}
        </h3>
        <p className="text-ink/70 text-sm leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] uppercase tracking-wide text-ink/70 px-2 py-1 rounded-xs border border-ink/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-auto pt-4 border-t border-ink/12">
          {links.map(({ label, url }) => {
            const className =
              "font-mono text-xs uppercase tracking-wide text-ink/70 border-b border-transparent hover:text-seal hover:border-seal transition-colors duration-200 inline-flex items-center gap-1";
            const inner = (
              <>
                {label}
                <span aria-hidden>↗</span>
              </>
            );
            return shouldUseNativeAnchor(url) ? (
              <a
                key={`${label}-${url}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link
                key={`${label}-${url}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </Link>
            );
          })}
          {links.length === 0 && (
            <span className="text-xs text-stone">
              Añade enlaces en <code className="text-ink/60">links</code> o quita
              placeholders del código
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

