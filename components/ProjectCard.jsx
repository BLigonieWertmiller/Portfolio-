import Link from "next/link";

const SECTION_STYLE = {
  paginasWeb: {
    topBar: "via-violet-500/60",
    titleHover: "group-hover:text-violet-300",
  },
  fullStack: {
    topBar: "via-cyan-500/60",
    titleHover: "group-hover:text-cyan-300",
  },
  ciberseguridad: {
    topBar: "via-emerald-500/60",
    titleHover: "group-hover:text-emerald-300",
  },
  aplicaciones: {
    topBar: "via-amber-500/60",
    titleHover: "group-hover:text-amber-300",
  },
};

function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;
  const t = url.trim();
  if (!t || t.includes("...")) return false;
  return true;
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
  const style = SECTION_STYLE[sectionKey] || SECTION_STYLE.fullStack;
  const links = getLinks(project);

  return (
    <article className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/70 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.65)]">
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${style.topBar} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`}
      />
      <div className="p-6 md:p-7 flex flex-col h-full min-h-[220px]">
        <h3
          className={`text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight transition-colors ${style.titleHover}`}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-slate-950/80 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-800/60">
          {links.map(({ label, url }) => (
            <Link
              key={`${label}-${url}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
            >
              {label}
              <span aria-hidden>↗</span>
            </Link>
          ))}
          {links.length === 0 && (
            <span className="text-xs text-slate-500">
              Añade enlaces en <code className="text-slate-600">links</code> o quita
              placeholders del código
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
