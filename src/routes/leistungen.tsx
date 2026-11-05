import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout, services } from "@/components/site";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – KIDA Bauservice AG" },
      { name: "description", content: "Hochbau, Umbau, Renovation, Maurer-, Beton-, Fassaden- und Plattenarbeiten von KIDA Bauservice AG." },
      { property: "og:title", content: "Leistungen – KIDA Bauservice AG" },
      { property: "og:description", content: "Alle Bauleistungen aus einer Hand." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Leistungen" title="Alles rund um den Bau – aus einer Hand." text="Von der ersten Idee bis zur Schlüsselübergabe begleiten wir Ihr Projekt mit Erfahrung und Sorgfalt." />
      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.n} className="bg-background p-10">
            <span className="font-display text-sm font-bold text-primary">{s.n}</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold">{s.t}</h2>
            <p className="mt-3 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
