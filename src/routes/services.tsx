import { createFileRoute } from "@tanstack/react-router";
import { PackageCheck, Plane, Route as RouteIcon, Truck } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

const title = "Services | Priority Handling Logistics";
const description =
  "Courier, freight forwarding, distribution, and shipment management services from Priority Handling Logistics, Inc.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    icon: PackageCheck,
    title: "Courier",
    copy: "Domestic and international document and parcel delivery designed around speed and care.",
    points: ["Document delivery", "Parcel delivery", "Domestic coverage", "International coverage"],
  },
  {
    n: "02",
    icon: Plane,
    title: "Freight Forwarding",
    copy: "Reliable freight movement and forwarding solutions for time-sensitive business requirements.",
    points: [
      "Air freight coordination",
      "Sea freight coordination",
      "Documentation support",
      "Route options",
    ],
  },
  {
    n: "03",
    icon: Truck,
    title: "Distribution",
    copy: "Coordinated distribution for statements, e-commerce, promotional materials, and corporate items.",
    points: [
      "Statement distribution",
      "E-commerce deliveries",
      "Promotional materials",
      "Corporate items",
    ],
  },
  {
    n: "04",
    icon: RouteIcon,
    title: "Shipment Management",
    copy: "Tracking, delivery coordination, documentation, and operational visibility across each handoff.",
    points: [
      "Shipment tracking",
      "Delivery coordination",
      "Documentation",
      "Operational visibility",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Logistics services that keep business moving.">
        Integrated courier, freight forwarding, distribution, and shipment management delivered with
        dedicated account support.
      </PageHero>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-4 md:grid-cols-2">
          {services.map(({ n, icon: Icon, title: heading, copy, points }) => (
            <article key={heading} className="service-card">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary">{n}</span>
                <Icon className="size-6 text-primary" />
              </div>
              <h2 className="mt-10 text-2xl font-bold">{heading}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
