import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";

const title = "Priority Handling Logistics | Connected Logistics & Freight Solutions";
const description =
  "Priority Handling Logistics, Inc. delivers courier, freight forwarding, distribution, and shipment management with a connected enterprise systems ecosystem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Priority Handling Logistics, Inc.",
          foundingDate: "2005-02-14",
          email: "cs@priority-ph.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1618-B Copernico Street, Bgy. San Isidro",
            addressLocality: "Makati City",
            addressCountry: "PH",
            postalCode: "1234",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});
