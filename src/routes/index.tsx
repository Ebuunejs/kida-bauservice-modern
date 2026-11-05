import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-bau.jpg";
import { SiteLayout, services } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KIDA Bauservice AG – Bau, Umbau & Renovation" },
      { name: "description", content: "KIDA Bauservice AG: Ihr Schweizer Partner für Hochbau, Umbau, Renovation und Kundenarbeiten." },
      { property: "og:title", content: "KIDA Bauservice AG – Bau, Umbau & Renovation" },
      { property: "og:description", content: "Schweizer Bauqualität – termingerecht und zuverlässig." },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "15+", l: "Jahre Erfahrung" },
  { v: "300+", l: "Projekte realisiert" },
  { v: "100%", l: "Schweizer Qualität" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Baustelle der KIDA Bauservice AG" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10" />
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Bauservice · Schweiz</p>
          <h1 className="mt-6 max-w-3xl font-display text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Wir bauen <span className="text-primary">Zukunft.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Hochbau, Umbau und Renovation – präzise, termingerecht und mit Leidenschaft für gutes Handwerk.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="bg-primary px-7 py-4 font-bold text-primary-foreground hover:brightness-110">Offerte anfragen</Link>
            <Link to="/leistungen" className="border border-foreground/30 px-7 py-4 font-bold hover:border-primary hover:text-primary">Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 py-10">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl font-black text-primary md:text-5xl">{s.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-4xl font-black tracking-tight md:text-5xl">Unsere Kernleistungen</h2>
          <Link to="/leistungen" className="font-bold text-primary">Alle Leistungen →</Link>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <div key={s.n} className="group bg-background p-8 transition hover:bg-card">
              <span className="font-display text-sm font-bold text-primary">{s.n}</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="font-display text-3xl font-black md:text-4xl">Bereit für Ihr nächstes Bauprojekt?</h2>
          <Link to="/kontakt" className="bg-background px-7 py-4 font-bold text-foreground hover:brightness-110">Jetzt Kontakt aufnehmen</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
