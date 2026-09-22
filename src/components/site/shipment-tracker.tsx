import { useState, type FormEvent } from "react";
import { Check, Circle, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  "Shipment Created",
  "Picked Up",
  "In Transit",
  "Arrived at Hub",
  "Out for Delivery",
  "Delivered",
];
export function ShipmentTracker() {
  const [submitted, setSubmitted] = useState(false);
  const [tracking, setTracking] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    if (tracking.trim()) setSubmitted(true);
  }
  return (
    <section className="section-pad bg-muted/60" aria-labelledby="track-title">
      <div className="site-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div>
          <p className="eyebrow">Track your shipment</p>
          <h2 id="track-title" className="section-title">
            Visibility at every handoff.
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Enter a tracking number to preview the tracking experience. Live shipment data is not
            yet connected.
          </p>
          <form
            onSubmit={submit}
            className="mt-8 flex max-w-xl flex-col gap-2 rounded-lg border border-border bg-card p-2 shadow-lg sm:flex-row"
          >
            <label htmlFor="tracking" className="sr-only">
              Tracking number
            </label>
            <Input
              id="tracking"
              required
              value={tracking}
              onChange={(e) => {
                setTracking(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter tracking number"
              className="h-12 border-0 bg-transparent shadow-none"
            />
            <Button size="lg" className="h-12">
              Track Shipment
              <PackageSearch />
            </Button>
          </form>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-xl">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Tracking timeline
              </p>
              <p className="mt-1 font-mono text-sm text-foreground">
                {submitted ? tracking : "DEMO-PHL-2026"}
              </p>
            </div>
            <span className="border-l-2 border-warning bg-warning/10 px-3 py-1 text-xs font-semibold text-warning-foreground">
              Demonstration
            </span>
          </div>
          <ol className="mt-7 grid gap-0 sm:grid-cols-6">
            {steps.map((step, index) => (
              <li key={step} className="relative flex gap-3 pb-5 sm:flex-col sm:pb-0">
                <span
                  className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full border ${index < 3 && submitted ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`}
                >
                  {index < 3 && submitted ? (
                    <Check className="size-4" />
                  ) : (
                    <Circle className="size-3" />
                  )}
                </span>
                <span className="text-xs font-semibold sm:max-w-20">{step}</span>
                {index < steps.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-full w-px bg-border sm:left-8 sm:top-[15px] sm:h-px sm:w-full" />
                )}
              </li>
            ))}
          </ol>
          {submitted && (
            <p className="mt-6 rounded-md bg-muted p-3 text-sm text-muted-foreground">
              Demo only — no live shipment record was requested.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
