import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-foreground">
            Lazy <span className="italic text-accent">Cake</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }} className="text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/menu" activeProps={{ className: "text-accent" }} className="text-muted-foreground transition-colors hover:text-foreground">Menu</Link>
          <Link to="/about" activeProps={{ className: "text-accent" }} className="text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link to="/contact" activeProps={{ className: "text-accent" }} className="text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <Link
          to="/menu"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Order
        </Link>
      </div>
    </header>
  );
}
