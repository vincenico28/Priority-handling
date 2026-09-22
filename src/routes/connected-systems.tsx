import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ConnectedSystems } from "@/components/site/connected-systems";

const title = "Connected Systems | Priority Handling Logistics";
const description =
  "One connected ecosystem for human resources, financial management, logistic management, and core freight transactions.";

export const Route = createFileRoute("/connected-systems")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/connected-systems" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/connected-systems" }],
  }),
  component: ConnectedSystemsPage,
});

function ConnectedSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Connected systems"
        title="One connected ecosystem. Every critical operation."
      >
        Ten systems across people, finance, logistics, and core freight transactions — each prepared
        for activation as deployment is confirmed.
      </PageHero>
      <ConnectedSystems full />
    </>
  );
}
