"use client";

import { useEffect, useMemo, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export const SECTIONS = [
  {
    id: "paginas-web",
    key: "paginasWeb",
    title: "Páginas web",
    subtitle: "Sitios, landings y experiencias enfocadas en contenido y presentación.",
  },
  {
    id: "full-stack",
    key: "fullStack",
    title: "Desarrollo full stack",
    subtitle: "Aplicaciones con frontend, backend y despliegue integrados.",
  },
  {
    id: "ciberseguridad",
    key: "ciberseguridad",
    title: "Ciberseguridad",
    subtitle: "Auditorías, pruebas controladas y concienciación.",
  },
  {
    id: "aplicaciones",
    key: "aplicaciones",
    title: "Aplicaciones",
    subtitle: "Herramientas, automatizaciones y apps orientadas a tareas concretas.",
  },
];

function EmptySection({ label }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-stone border border-dashed border-ink/20 rounded-md px-6 py-10 text-center bg-surface/60">
      Sin proyectos publicados en «{label}» todavía
    </p>
  );
}

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({ section, list }) {
  const ref = useReveal();

  return (
    <div id={section.id} className="scroll-mt-24 reveal" ref={ref}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-ink/15 pb-5 mb-9">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-seal mb-2">
            {section.title}
          </p>
          <p className="text-ink/60 text-sm md:text-base max-w-xl leading-relaxed">
            {section.subtitle}
          </p>
        </div>
        <span className="font-mono text-xs text-stone shrink-0">
          {list.length.toString().padStart(2, "0")} proyecto{list.length !== 1 ? "s" : ""}
        </span>
      </div>

      {list.length === 0 ? (
        <EmptySection label={section.title} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} sectionKey={section.key} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery() {
  const bySection = useMemo(() => {
    const map = {
      paginasWeb: [],
      fullStack: [],
      ciberseguridad: [],
      aplicaciones: [],
    };
    for (const p of projects) {
      if (map[p.section]) map[p.section].push(p);
    }
    return map;
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="proyectos" className="relative py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <nav
          aria-label="Secciones del portfolio"
          className="flex flex-wrap gap-x-6 gap-y-2 mb-14 md:mb-16 sticky top-0 z-10 py-4 bg-paper/95 border-b border-ink/12"
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className="font-mono text-xs uppercase tracking-[0.1em] text-ink/70 pb-1 border-b-2 border-transparent hover:text-seal hover:border-seal transition-colors duration-200"
            >
              {s.title}
            </button>
          ))}
        </nav>

        <div className="space-y-20 md:space-y-24">
          {SECTIONS.map((section) => (
            <Section key={section.id} section={section} list={bySection[section.key] || []} />
          ))}
        </div>
      </div>
    </section>
  );
}
