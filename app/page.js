import ProjectGallery from "../components/ProjectGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <p className="text-cyan-500/90 text-xs font-mono tracking-[0.2em] uppercase mb-2">
            Vista previa
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Portfolio
          </h1>
          <p className="text-slate-400 mt-2 max-w-lg text-sm md:text-base">
            Guarda los cambios y el navegador se actualizará solo al usar{" "}
            <code className="text-slate-500 text-xs">npm run dev</code>.
          </p>
        </div>
      </header>
      <ProjectGallery />
    </main>
  );
}
