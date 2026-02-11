import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Wars Ships | Galeria Imperial",
  description: "Explore as naves mais icônicas da galáxia de Star Wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${exo2.variable} antialiased`}>
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <header className="glass-header">
          <div className="logo-text">STAR WARS</div>
          <nav>
            <Link href={"/"} className="nav-link">Início</Link>
            <Link href={"/spaceships"} className="nav-link">Naves</Link>
            <Link href={"/categories"} className="nav-link">Categorias</Link>
          </nav>
        </header>
        <main className="content-container">
          {children}
        </main>
      </body>
    </html>
  );
}
