import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { systems } from "@/config/systems";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Connected Systems", "/connected-systems"],
  ["Logistics", "/logistics"],
  ["Track Shipment", "/track-shipment"],
  ["Why Priority", "/why-priority"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const saved = window.localStorage.getItem("phl-theme");
    const useDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", useDark);
    setDark(useDark);
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("phl-theme", next ? "dark" : "light");
  }
  const onHero = !scrolled;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur" : "border-b border-surface-dark-foreground/10 bg-surface-dark/25 text-surface-dark-foreground backdrop-blur-sm"}`}
    >
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link
          to="/"
          aria-label="Priority Handling Logistics home"
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src="/favicon.png"
            alt="Priority Handling Logistics logo"
            className="size-11 shrink-0 rounded-sm bg-background object-contain p-1"
          />
          <span className="hidden font-display text-[13px] font-extrabold leading-tight sm:block">
            PRIORITY HANDLING
            <br />
            <span className="font-sans text-[11px] font-semibold text-current/70">
              LOGISTICS, INC.
            </span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {nav.slice(0, -1).map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="text-[10px] font-extrabold uppercase tracking-[0.12em] transition hover:text-signal"
              activeProps={{ className: "text-signal" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            type="button"
            variant={onHero ? "heroGhost" : "ghost"}
            size="icon"
            className="min-h-10 min-w-10"
            onClick={toggleTheme}
            aria-label={dark ? "Use light theme" : "Use dark theme"}
            title={dark ? "Use light theme" : "Use dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <div className="hidden lg:block">
            <Button asChild variant={onHero ? "hero" : "default"}>
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={onHero ? "heroGhost" : "ghost"}
                size="icon"
                className="min-h-10 min-w-10 xl:hidden"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[88vw]">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="mt-12 grid gap-1">
                {nav.map(([label, to]) => (
                  <SheetClose key={to} asChild>
                    <Link
                      to={to}
                      className="rounded-md border-b border-border px-3 py-3 text-base font-semibold hover:bg-muted"
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Connect With Us</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const columns = [
    {
      title: "Company",
      links: [
        ["About", "/about"],
        ["Why Priority", "/why-priority"],
        ["Services", "/services"],
        ["Contact", "/contact"],
      ],
    },
    {
      title: "Services",
      links: [
        ["Courier", "/services"],
        ["Freight Forwarding", "/services"],
        ["Distribution", "/services"],
        ["Shipment Tracking", "/track-shipment"],
      ],
    },
    {
      title: "Connected Systems",
      links: [
        ["Human Resources", "/connected-systems"],
        ["Financial Management", "/connected-systems"],
        ["Logistic Management", "/connected-systems"],
        ["Core Transactions", "/connected-systems"],
      ],
    },
  ] as const;
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Priority Handling Logistics logo"
                className="size-12 rounded-sm bg-background object-contain p-1"
              />
              <p className="font-extrabold">
                PRIORITY HANDLING
                <br />
                <span className="font-medium">LOGISTICS, INC.</span>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-footer-muted">
              Courier, freight forwarding, distribution, and connected business systems designed to
              keep operations moving.
            </p>
            <div className="mt-6 space-y-3 text-sm text-footer-muted">
              <a
                href="mailto:cs@priority-ph.com"
                className="flex items-center gap-2 hover:text-footer-foreground"
              >
                <Mail className="size-4" />
                cs@priority-ph.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                1618-B Copernico Street, Bgy. San Isidro, Makati City, Philippines 1234
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-signal">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map(([label, to]) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-sm text-footer-muted hover:text-footer-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-footer-border pt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-signal">
            Systems Directory
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {systems.map((system) => (
              <li key={system.code}>
                {system.enabled ? (
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-footer-muted hover:text-footer-foreground"
                  >
                    <span className="font-mono font-bold text-footer-foreground">
                      {system.code}
                    </span>{" "}
                    {system.name}
                  </a>
                ) : (
                  <span className="text-sm text-footer-muted">
                    <span className="font-mono font-bold text-footer-foreground/80">
                      {system.code}
                    </span>{" "}
                    {system.name}{" "}
                    <span className="whitespace-nowrap text-[11px] uppercase tracking-wide">
                      (Coming Soon)
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-footer-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-bold text-footer-foreground">
              Explore the Priority Connected Ecosystem
            </p>
            <Button asChild variant="inverse">
              <Link to="/connected-systems">Explore Our Systems</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-footer-border pt-6 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Priority Handling Logistics, Inc.</p>
          <p>SEC Registration No. CS200502125</p>
        </div>
      </div>
    </footer>
  );
}
