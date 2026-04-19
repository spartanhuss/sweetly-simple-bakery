import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cake.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CakeCard } from "@/components/CakeCard";
import { cakes } from "@/data/cakes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lazy Cake — Slow-made no-bake cakes" },
      { name: "description", content: "Hand-finished no-bake chocolate cakes, made slowly with great ingredients. Order online for pickup or local delivery." },
      { property: "og:title", content: "Lazy Cake — Slow-made no-bake cakes" },
      { property: "og:description", content: "Hand-finished no-bake chocolate cakes from our small kitchen." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = cakes.slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">No-bake · Hand-finished</p>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              Slow cakes for <span className="italic">unhurried</span> days.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              We fold great chocolate through buttery biscuits and let time do the rest. No oven. No rush. Just dense, fudgy slices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:translate-y-[-2px]"
              >
                Browse the menu
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-foreground/20 px-7 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Our story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-warm)] blur-2xl opacity-70" />
            <img
              src={heroImg}
              alt="Sliced chocolate lazy cake on parchment"
              width={1600}
              height={1200}
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Marquee values */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center md:grid-cols-3">
          {[
            ["72hr", "rest before slicing"],
            ["3", "ingredients you'd recognise"],
            ["0", "ovens harmed"],
          ].map(([k, v]) => (
            <div key={k as string}>
              <p className="font-display text-4xl text-foreground">{k}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">This week</p>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">A small, considered menu</h2>
          </div>
          <Link to="/menu" className="hidden text-sm font-medium text-foreground underline underline-offset-4 md:block">
            See all cakes →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((c) => (
            <CakeCard key={c.id} cake={c} />
          ))}
        </div>
      </section>

      {/* Story strip */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Lazy by design</p>
        <p className="mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl">
          “The best cakes don't need heat — they need patience, real chocolate, and a cold afternoon.”
        </p>
        <p className="mt-6 text-sm text-muted-foreground">— Mira, founder</p>
      </section>

      <SiteFooter />
    </div>
  );
}
