import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

const title = "About | Priority Handling Logistics";
const description =
  "Priority Handling Logistics, Inc. was established on February 14, 2005, providing courier, freight forwarding, distribution, and shipment management services.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  ["February 14, 2005", "Priority Handling Logistics, Inc. was established."],
  ["Courier services", "Domestic and international document and parcel delivery."],
  ["Freight forwarding", "Freight movement and forwarding for business requirements."],
  ["Distribution", "Coordinated distribution of statements, e-commerce, and corporate items."],
  ["Shipment management", "Tracking, delivery coordination, and documentation support."],
  ["Connected systems", "A connected business systems ecosystem in development."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="Built around reliability. Designed for what’s next."
      >
        Priority Handling Logistics, Inc. combines established courier, freight, and distribution
        experience with a forward-looking connected systems strategy.
      </PageHero>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Company profile</p>
            <h2 className="section-title">A logistics partner for business operations.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              The company supports businesses with courier, freight forwarding, distribution, and
              shipment management services across domestic and international routes.
            </p>
            <p>
              Alongside logistics operations, Priority is developing a connected systems ecosystem
              linking workforce, finance, supply chain, freight, and customer management.
            </p>
            <p className="text-sm">SEC Registration No. CS200502125</p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-muted/50">
        <div className="site-container">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title max-w-3xl">Service foundations.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map(([heading, copy]) => (
              <article key={heading} className="bg-card p-6">
                <h3 className="font-bold text-primary">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
