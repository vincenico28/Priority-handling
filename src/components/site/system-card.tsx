import { ArrowUpRight, Check, UsersRound, WalletCards, Warehouse, Waypoints } from "lucide-react";
import type { ConnectedSystem, SystemCategory } from "@/config/systems";
import { Button } from "@/components/ui/button";

const categoryIcons: Record<SystemCategory, typeof UsersRound> = {
  hr: UsersRound,
  finance: WalletCards,
  logistics: Warehouse,
  core: Waypoints,
};

export function SystemCard({ system }: { system: ConnectedSystem }) {
  const Icon = categoryIcons[system.category];
  const host = system.url.replace("https://", "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-5" />
        </span>
        <span className="border-l-2 border-primary bg-primary/5 px-2.5 py-1 font-mono text-[11px] font-bold tracking-widest text-primary">
          {system.code}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-card-foreground">{system.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{system.description}</p>
      <ul className="mt-5 grid gap-x-4 gap-y-2 text-sm text-foreground/80 sm:grid-cols-2">
        {system.features.slice(0, 6).map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="size-3.5 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Button asChild variant="hero" className="w-full justify-between">
          <a
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${system.code} — ${system.name} (opens in a new tab)`}
          >
            Open System
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
        <p className="mt-2.5 flex items-center gap-1.5 truncate font-mono text-[11px] text-muted-foreground">
          <ArrowUpRight className="size-3 shrink-0" />
          {host}
        </p>
      </div>
    </article>
  );
}
