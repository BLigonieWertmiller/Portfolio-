import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-label",
  display: "swap",
});

export const metadata = {
  title: "Benjamin Ligonie Wertmiller — Portfolio",
  description:
    "Portfolio de proyectos: desarrollo full stack, páginas web y auditorías de ciberseguridad.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased bg-grain min-h-screen">
        {children}
      </body>
    </html>
  );
}
