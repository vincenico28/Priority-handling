import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

const title = "Logistics | Priority Handling Logistics";
const description =
  "Domestic coverage across the Philippines with international logistics reach spanning major business regions.";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/logistics" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/logistics" }],
  }),
  component: LogisticsPage,
});

const regions = [
  ["Philippines", "70%", "58%"],
  ["Asia", "54%", "42%"],
  ["North America", "17%", "40%"],
  ["Europe", "44%", "27%"],
  ["Middle East", "58%", "44%"],
  ["Australia", "72%", "76%"],
] as const;

const capabilities = [
  ["Domestic coverage", "Nationwide courier and distribution movement across the Philippines."],
  [
    "International logistics",
    "Freight forwarding and courier reach across major business regions.",
  ],
  ["Operational coordination", "Pickup scheduling, routing options, and delivery coordination."],
  ["Documentation", "Freight and delivery documentation handled through each handoff."],
];

function LogisticsPage() {
  return (
    <>
      <PageHero eyebrow="Global logistics network" title="Connecting business across borders.">
        Domestic logistics across the Philippines, supported by international freight and courier
        capability for business shipments.
      </PageHero>
      <section className="section-pad bg-surface-dark text-surface-dark-foreground">
        <div className="site-container">
          <div className="map-panel" aria-label="Stylized international logistics network">
            <Globe2 className="size-full stroke-[.5] opacity-25" />
            {regions.map(([name, left, top]) => (
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
          <p className="eyebrow">Operational capability</p>
          <h2 className="section-title max-w-3xl">Coordinated movement, end to end.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {capabilities.map(([heading, copy]) => (
              <article key={heading} className="bg-card p-6">
                <h3 className="font-bold">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
