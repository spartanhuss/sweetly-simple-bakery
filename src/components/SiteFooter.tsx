export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-foreground">Lazy <span className="italic text-accent">Cake</span></p>
          <p className="mt-2 text-sm text-muted-foreground">No-bake cakes, slowly made with great chocolate.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Visit</p>
          <p>14 Linden Lane</p>
          <p>Mon–Sat · 9am–7pm</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Contact</p>
          <p>hello@lazycake.shop</p>
          <p>+1 (555) 010-2244</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lazy Cake Co. Made with cocoa.
      </div>
    </footer>
  );
}
