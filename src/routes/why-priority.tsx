import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Clock3,
  Headphones,
  HeartHandshake,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

const title = "Why Priority | Priority Handling Logistics";
const description =
  "Value for money, credit line facility, routing options, prompt pickup, personalized service, assurance, and customer support.";

export const Route = createFileRoute("/why-priority")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-priority" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-priority" }],
  }),
  component: WhyPriorityPage,
});

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
    icon: RouteIcon,
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

function WhyPriorityPage() {
  return (
    <>
      <PageHero eyebrow="Why Priority" title="Service beyond delivery.">
        Practical commercial terms, responsive coordination, and dedicated support behind every
        shipment.
      </PageHero>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title: heading, copy }) => (
            <article key={heading} className="bg-card p-6">
              <Icon className="size-6 text-primary" />
              <h2 className="mt-5 font-bold">{heading}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
