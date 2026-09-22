import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  Box,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  HeartHandshake,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";
import banner from "@/assets/hero-aircraft.jpg";
import { Button } from "@/components/ui/button";
import { ConnectedSystems } from "./connected-systems";
import { ShipmentTracker } from "./shipment-tracker";
import { ContactForm } from "./contact-form";

const services = [
  {
    n: "01",
    icon: PackageCheck,
    title: "Courier",
    copy: "Domestic and international document and parcel delivery designed around speed and care.",
  },
  {
    n: "02",
    icon: Plane,
    title: "Freight Forwarding",
    copy: "Reliable freight movement and forwarding solutions for time-sensitive business requirements.",
  },
  {
    n: "03",
    icon: Truck,
    title: "Distribution",
    copy: "Coordinated distribution for statements, e-commerce, promotional materials, and corporate items.",
  },
  {
    n: "04",
    icon: Route,
    title: "Shipment Management",
    copy: "Tracking, delivery coordination, documentation, and operational visibility across each handoff.",
  },
];
const advantages = [
  {
    icon: BadgeDollarSign,
    title: "Value for Money",
    copy: "No pickup charges and no minimum transaction requirement.",
  },
  {
    icon: Building2,
    title: "Credit Line",
    copy: "A credit line facility for qualified business clients.",
  },
  {
    icon: Route,
    title: "Routing",
    copy: "Service options matched to urgency, destination, and shipment requirements.",
  },
  {
    icon: Clock3,
    title: "Prompt Pickup",
    copy: "Responsive pickup coordination for business shipments.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    copy: "Dedicated account support and practical logistics guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance",
    copy: "Careful handling with documented freight and delivery processes.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    copy: "Accessible support through every shipment stage.",
  },
  {
    icon: CheckCircle2,
    title: "Customer Satisfaction",
    copy: "A service approach focused on dependable delivery outcomes.",
  },
];
const dashboards = [
  {
    title: "Workforce",
    icon: Users,
    metric: "94%",
    label: "Present today",
    delta: "+2.1% this week",
    bars: [42, 55, 48, 62, 58, 70, 66],
    stats: [
      ["Open requests", "12"],
      ["Reviews due", "08"],
    ],
  },
  {
    title: "Finance",
    icon: BadgeDollarSign,
    metric: "₱2.4M",
    label: "Receivables",
    delta: "+8.4% this month",
    bars: [35, 48, 44, 58, 52, 66, 74],
    stats: [
      ["Invoices issued", "186"],
      ["Items for review", "07"],
    ],
  },
  {
    title: "Logistics",
    icon: Warehouse,
    metric: "124",
    label: "Active loads",
    delta: "91% on schedule",
    bars: [50, 44, 60, 55, 68, 62, 76],
    stats: [
      ["At hub", "38"],
      ["On schedule", "91%"],
    ],
  },
  {
    title: "Freight",
    icon: Plane,
    metric: "68",
    label: "In transit",
    delta: "42 delivered today",
    bars: [60, 52, 66, 58, 72, 64, 70],
    stats: [
      ["Delivered", "42"],
      ["Exceptions", "03"],
    ],
  },
];
export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <img
          src={banner}
          alt="Priority Handling Logistics — international courier, freight forwarding and distribution"
          width={1920}
          height={1024}
          className="absolute inset-0 size-full object-cover object-[70%_center] opacity-80"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/20" />
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="site-container relative pb-32 pt-36">
          <div className="max-w-4xl">
            <p className="eyebrow text-signal">Logistics in motion. Systems in sync.</p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
              Moving business forward.
              <br />
              <span className="text-surface-dark-muted">Connecting every operation.</span>
            </h1>
            <p className="mt-7 max-w-2xl border-l-2 border-signal pl-5 text-base leading-7 text-surface-dark-muted sm:text-lg">
              Integrated courier, freight forwarding, distribution, and connected enterprise systems
              designed to keep business moving.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="hero">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroGhost">
                <Link to="/connected-systems">Explore Connected Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 -mt-20 pb-16">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-lg border border-surface-dark-foreground/10 bg-surface-dark shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ n, icon: Icon, title, copy }) => (
              <Link
                to="/services"
                key={title}
                className="group border-b border-r border-surface-dark-foreground/10 p-6 text-surface-dark-foreground transition hover:bg-surface-dark-panel"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-7 text-signal transition-transform group-hover:scale-110" />
                  <span className="font-mono text-[11px] font-bold text-signal">{n}</span>
                </div>
                <h2 className="mt-8 text-lg font-bold uppercase">{title}</h2>
                <p className="mt-2 text-xs leading-5 text-surface-dark-muted">{copy}</p>
                <span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase text-signal">
                  Explore{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Established February 14, 2005</p>
            <h2 className="section-title">Built around reliability. Designed for what’s next.</h2>
          </div>
          <div>
            <p className="text-xl leading-8 text-foreground">
              Priority Handling Logistics combines established courier, freight, and distribution
              experience with a forward-looking connected systems strategy.
            </p>
            <div className="mt-9 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
              {[
                ["2005", "Established"],
                ["Domestic + International", "Coverage"],
                ["Courier + Freight", "Integrated services"],
                ["Customer-centered", "Service approach"],
              ].map(([v, l]) => (
                <div key={l} className="border-b border-r border-border bg-card p-5">
                  <p className="font-display text-lg font-extrabold text-primary">{v}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-muted/50">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Strategic services</p>
              <h2 className="section-title">Logistics services that keep business moving.</h2>
            </div>
            <Button asChild variant="link" className="justify-start px-0">
              <Link to="/services">
                View all services
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ n, icon: Icon, title, copy }, index) => (
              <article
                key={title}
                className="industrial-panel group flex min-h-80 flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">MODE {n}</span>
                  <Icon className="size-7 text-primary transition-transform group-hover:scale-110" />
                </div>
                <div className="mt-auto">
                  <span className="mb-5 block h-px w-12 bg-primary transition-all group-hover:w-20" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link to="/services">
                      Explore Service
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-extrabold text-primary/[.04]">
                  {index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ConnectedSystems />
      <section className="section-pad bg-background">
        <div className="site-container">
          <div className="text-center">
            <p className="eyebrow">Connected data in motion</p>
            <h2 className="section-title mx-auto max-w-3xl">
              Connected data → connected operations → better visibility.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {["People", "Finance", "Supply Chain", "Freight", "Customers"].map((item, index) => (
              <div key={item} className="flow-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index < 4 && (
                  <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ShipmentTracker />
      <section className="section-pad bg-background">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Why Priority</p>
            <h2 className="section-title">Service beyond delivery.</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="bg-card p-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-5 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow text-signal">Global logistics network</p>
            <h2 className="section-title">Connecting business across borders.</h2>
            <p className="mt-5 text-surface-dark-muted">
              Domestic coverage across the Philippines, with international logistics reach spanning
              major business regions.
            </p>
            <Button asChild variant="heroGhost" className="mt-7">
              <Link to="/logistics">Explore Logistics</Link>
            </Button>
          </div>
          <div className="map-panel" aria-label="Stylized international logistics network">
            <Globe2 className="size-full stroke-[.5] opacity-25" />
            {[
              ["Philippines", "70%", "58%"],
              ["Asia", "54%", "42%"],
              ["North America", "17%", "40%"],
              ["Europe", "44%", "27%"],
              ["Middle East", "58%", "44%"],
              ["Australia", "72%", "76%"],
            ].map(([name, left, top]) => (
              <span key={name} className="map-point" style={{ left, top }}>
                <i />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="site-container">
          <p className="eyebrow">Digital transformation</p>
          <h2 className="section-title max-w-4xl">
            From logistics provider to connected logistics ecosystem.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {[
              "Traditional Operations",
              "Connected Systems",
              "Real-Time Visibility",
              "Data-Driven Decisions",
              "Integrated Business",
            ].map((item, index) => (
              <div key={item} className="border-t-2 border-primary pt-5">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-6 text-lg font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-muted/50">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">System previews</p>
              <h2 className="section-title">Operational clarity at a glance.</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Demonstration data
            </span>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboards.map(({ title, icon: Icon, metric, label, delta, bars, stats }) => (
              <article
                key={title}
                className="dashboard-card group transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-destructive/60" />
                    <span className="size-2 rounded-full bg-warning/80" />
                    <span className="size-2 rounded-full bg-primary/70" />
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <Icon className="size-3.5 text-primary" />
                    {title}
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight">{metric}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </div>
                  <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
                    {delta}
                  </span>
                </div>
                <div className="mt-5 flex h-16 items-end gap-1" aria-hidden="true">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm bg-primary/25 transition-colors group-hover:bg-primary/40"
                      style={{ height: `${h}%` }}
                    >
                      <span className="block h-1 rounded-sm bg-primary" />
                    </span>
                  ))}
                </div>
                <dl className="mt-5 space-y-2 border-t border-border pt-4">
                  {stats.map(([l, v]) => (
                    <div key={l} className="flex items-center justify-between text-sm">
                      <dt className="text-muted-foreground">{l}</dt>
                      <dd className="font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="site-container grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Track a shipment
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">Know where your shipment is.</h2>
            <Button asChild variant="inverse" className="mt-6">
              <Link to="/track-shipment">
                Track Shipment
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Connect your business
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Discover the connected systems ecosystem.
            </h2>
            <Button asChild variant="inverse" className="mt-6">
              <Link to="/connected-systems">
                Explore Connected Systems
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Connect with us</p>
            <h2 className="section-title">Let’s move your business forward.</h2>
            <p className="mt-5 text-muted-foreground">
              Priority Handling Logistics, Inc.
              <br />
              1618-B Copernico Street
              <br />
              Bgy. San Isidro, Makati City
              <br />
              Philippines 1234
            </p>
            <a
              href="mailto:cs@priority-ph.com"
              className="mt-5 inline-block font-bold text-primary"
            >
              cs@priority-ph.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
