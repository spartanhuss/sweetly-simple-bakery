import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <a
        href="https://yahya-doueik.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Open Cookbook
      </a>
    </div>
  );
}
