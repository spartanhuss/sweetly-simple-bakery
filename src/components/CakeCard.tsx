import type { Cake } from "@/data/cakes";

export function CakeCard({ cake }: { cake: Cake }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          width={900}
          height={1100}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {cake.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur">
            {cake.tag}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-foreground">{cake.name}</h3>
            <p className="text-sm italic text-muted-foreground">{cake.tagline}</p>
          </div>
          <span className="font-display text-xl text-accent">${cake.price}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cake.description}</p>
        <button className="mt-4 self-start rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background">
          Add to box
        </button>
      </div>
    </article>
  );
}
