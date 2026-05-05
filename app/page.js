import ProjectGallery from "../components/ProjectGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <p className="text-cyan-500/90 text-xs font-mono tracking-[0.2em] uppercase mb-2">
            Benjamin Ligonie Wertmiller
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Portfolio
          </h1>
        </div>
      </header>
      <ProjectGallery />
    </main>
  );
}
