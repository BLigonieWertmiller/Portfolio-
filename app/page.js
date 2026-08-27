import ProjectGallery from "../components/ProjectGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-ink/12">
        <div className="max-w-content mx-auto px-6 sm:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-seal" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
              Desarrollo Full Stack &amp; Ciberseguridad
            </p>
          </div>

          <h1 className="font-display font-semibold text-ink tracking-tight leading-[0.98] text-[clamp(2.75rem,2rem+4vw,5.5rem)]">
            Benjamin Ligonie
            <br />
            Wertmiller
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-ink/80 leading-relaxed">
            Construyo aplicaciones full stack y páginas a medida, y después las audito con la
            misma rigurosidad con la que las armé. Estos son esos proyectos, organizados por
            área.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-seal text-surface font-mono text-xs uppercase tracking-[0.1em] px-5 py-3 rounded-sm hover:bg-seal-dark transition-colors duration-200"
            >
              Ver proyectos ↓
            </a>
            <a
              href="https://github.com/BLigonieWertmiller"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.1em] text-ink/70 border-b border-ink/30 pb-0.5 hover:text-seal hover:border-seal transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>
      <ProjectGallery />
    </main>
  );
}
