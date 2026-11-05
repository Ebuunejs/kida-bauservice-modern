import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SiteLayout } from "@/components/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – KIDA Bauservice AG" },
      { name: "description", content: "Kontaktieren Sie KIDA Bauservice AG für eine unverbindliche Offerte." },
      { property: "og:title", content: "Kontakt – KIDA Bauservice AG" },
      { property: "og:description", content: "Jetzt unverbindliche Offerte anfragen." },
    ],
  }),
  component: Page,
});

const field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-primary";

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Kontakt" title="Sprechen wir über Ihr Projekt." text="Wir melden uns innert 24 Stunden mit einer ersten Einschätzung." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6 text-lg">
          <div><p className="text-sm font-bold uppercase tracking-widest text-primary">Adresse</p><p>Musterstrasse 1, 8000 Zürich</p></div>
          <div><p className="text-sm font-bold uppercase tracking-widest text-primary">Telefon</p><p>+41 44 000 00 00</p></div>
          <div><p className="text-sm font-bold uppercase tracking-widest text-primary">E-Mail</p><p>info@kida-bauservice.ch</p></div>
        </div>
        {sent ? (
          <div className="bg-card p-10 font-display text-2xl font-bold">Danke! Wir melden uns in Kürze.</div>
        ) : (
          <form className="grid gap-4 bg-card p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Name" className={field} />
            <input required type="email" placeholder="E-Mail" className={field} />
            <input placeholder="Telefon" className={field} />
            <textarea required rows={5} placeholder="Ihr Projekt" className={field} />
            <button className="bg-primary px-6 py-4 font-bold text-primary-foreground hover:brightness-110">Anfrage senden</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
