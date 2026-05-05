import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Proyectos por área",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 min-h-screen">
        {children}
      </body>
    </html>
  );
}
