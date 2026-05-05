"use client";

import { useMemo } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export const SECTIONS = [
  {
    id: "paginas-web",
    key: "paginasWeb",
    title: "Páginas web",
    subtitle: "Sitios, landings y experiencias enfocadas en contenido y presentación.",
    icon: "◇",
  },
  {
    id: "full-stack",
    key: "fullStack",
    title: "Desarrollo full stack",
    subtitle: "Aplicaciones con frontend, backend y despliegue integrados.",
    icon: "◈",
  },
  {
    id: "ciberseguridad",
    key: "ciberseguridad",
    title: "Ciberseguridad",
    subtitle: "Auditorías, pruebas controladas y concienciación.",
    icon: "◎",
  },
  {
    id: "aplicaciones",
    key: "aplicaciones",
    title: "Aplicaciones",
    subtitle: "Herramientas, automatizaciones y apps orientadas a tareas concretas.",
    icon: "⬡",
  },
];

function EmptySection({ label }) {
  return (
    <p className="text-slate-500 text-sm italic border border-dashed border-slate-800 rounded-xl px-6 py-10 text-center bg-slate-900/40">
      Aún no hay proyectos en «{label}». Añade uno en{" "}
      <code className="text-slate-400 text-xs">data/projects.js</code>.
    </p>
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
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="proyectos" className="relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 md:mb-16">
          <p className="text-cyan-500/90 text-xs font-mono tracking-[0.2em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Proyectos por área
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Explora el trabajo organizado en cuatro bloques. Usa el menú para saltar a cada
            sección.
          </p>
        </header>

        <nav
          aria-label="Secciones del portfolio"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 md:mb-16 sticky top-4 z-10 py-3 px-2 -mx-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-lg shadow-black/20"
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className="px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium text-slate-300 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:text-white hover:bg-slate-800/90 transition-colors"
            >
              {s.title}
            </button>
          ))}
        </nav>

        <div className="space-y-20 md:space-y-24">
          {SECTIONS.map((section) => {
            const list = bySection[section.key] || [];
            return (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-lg text-cyan-400/90"
                      aria-hidden
                    >
                      {section.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {section.title}
                      </h3>
                      <p className="text-slate-500 text-sm md:text-base mt-1 max-w-xl leading-relaxed">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-slate-600 text-xs font-mono hidden sm:block">
                    {list.length} proyecto{list.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {list.length === 0 ? (
                  <EmptySection label={section.title} />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                    {list.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        sectionKey={section.key}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
