import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – KIDA Bauservice AG" },
      { name: "description", content: "Lernen Sie KIDA Bauservice AG kennen: Werte, Team und Arbeitsweise." },
      { property: "og:title", content: "Über uns – KIDA Bauservice AG" },
      { property: "og:description", content: "Schweizer Bauqualität mit Herz und Handschlag." },
    ],
  }),
  component: Page,
});

const values = [
  { t: "Qualität", d: "Saubere Arbeit nach Schweizer Normen – bis ins Detail." },
  { t: "Verlässlichkeit", d: "Wir halten, was wir versprechen: Termine, Budget und Absprachen." },
  { t: "Partnerschaft", d: "Ein fester Ansprechpartner von Anfang bis Ende." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Über uns" title="Bauen mit Handschlagqualität." text="KIDA Bauservice AG steht für ehrliches Handwerk, kurze Wege und ein Team, das mitdenkt." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.t} className="border-t-4 border-primary bg-card p-8">
            <h2 className="font-display text-2xl font-extrabold">{v.t}</h2>
            <p className="mt-3 text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
