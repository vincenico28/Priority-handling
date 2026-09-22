import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";

const title = "Contact | Priority Handling Logistics";
const description =
  "Contact Priority Handling Logistics, Inc. at 1618-B Copernico Street, Bgy. San Isidro, Makati City, Philippines 1234 or cs@priority-ph.com.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Connect with us" title="Let’s move your business forward.">
        Send an inquiry about courier, freight forwarding, distribution, or the connected systems
        ecosystem.
      </PageHero>
      <section className="section-pad bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Head office</p>
            <h2 className="section-title">Priority Handling Logistics, Inc.</h2>
            <p className="mt-6 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              1618-B Copernico Street
              <br />
              Bgy. San Isidro, Makati City
              <br />
              Philippines 1234
            </p>
            <a
              href="mailto:cs@priority-ph.com"
              className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:underline"
            >
              <Mail className="size-4" />
              cs@priority-ph.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
