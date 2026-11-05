import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/kida-logo.png.asset.json";

const nav = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo.url} alt="Kida Bauservice AG" width={277} height={78} className="h-10 w-auto md:h-12" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/kontakt" className="bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            Offerte anfragen
          </Link>
        </div>
        <nav className="flex justify-around border-t border-border py-2 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-xs font-semibold uppercase text-muted-foreground data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="Kida Bauservice AG" width={277} height={78} loading="lazy" className="h-12 w-auto" />
            <p className="mt-2 text-sm text-muted-foreground">Ihr zuverlässiger Partner für Bau, Umbau und Renovation in der Schweiz.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2 font-semibold text-foreground">Kontakt</p>
            <p>Musterstrasse 1, 8000 Zürich</p>
            <p>+41 44 000 00 00</p>
            <p>info@kida-bauservice.ch</p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>© {new Date().getFullYear()} KIDA Bauservice AG</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export const services = [
  { n: "01", t: "Hochbau", d: "Neubauten von Einfamilienhäusern bis zu Gewerbeobjekten – präzise geplant und termingerecht realisiert." },
  { n: "02", t: "Umbau & Renovation", d: "Wir modernisieren Bestandsbauten und bringen neues Leben in bestehende Räume." },
  { n: "03", t: "Maurer- & Betonarbeiten", d: "Fundamente, Mauerwerk und Sichtbeton in Schweizer Qualität." },
  { n: "04", t: "Fassaden & Isolation", d: "Energieeffiziente Gebäudehüllen, die Wert und Komfort steigern." },
  { n: "05", t: "Plattenarbeiten", d: "Boden- und Wandbeläge für Bad, Küche und Aussenbereich." },
  { n: "06", t: "Kundenarbeiten", d: "Kleinere Reparaturen und Unterhalt – schnell, sauber und unkompliziert." },
];
