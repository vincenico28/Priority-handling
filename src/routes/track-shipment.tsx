import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ShipmentTracker } from "@/components/site/shipment-tracker";

const title = "Track Shipment | Priority Handling Logistics";
const description =
  "Preview the Priority Handling Logistics shipment tracking experience, from shipment creation through delivery.";

export const Route = createFileRoute("/track-shipment")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/track-shipment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/track-shipment" }],
  }),
  component: TrackShipmentPage,
});

function TrackShipmentPage() {
  return (
    <>
      <PageHero eyebrow="Track your shipment" title="Know where your shipment is.">
        This tracking interface is a demonstration. Live shipment data will appear once the tracking
        service is connected.
      </PageHero>
      <ShipmentTracker />
    </>
  );
}
