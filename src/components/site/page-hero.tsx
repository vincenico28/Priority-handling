import type { ReactNode } from "react";
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-20 pt-36 text-surface-dark-foreground">
      <div className="absolute inset-0 network-grid opacity-25" />
      <div className="site-container relative">
        <p className="eyebrow text-signal">{eyebrow}</p>
        <h1 className="max-w-5xl font-display text-4xl font-extrabold leading-[1.03] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mt-7 max-w-2xl border-l-2 border-signal pl-5 text-lg leading-8 text-surface-dark-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
