import { Network, UsersRound, WalletCards, Warehouse, Waypoints } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryDetails, systems, type SystemCategory } from "@/config/systems";
import { SystemCard } from "./system-card";

const categories: { id: SystemCategory; icon: typeof UsersRound }[] = [
  { id: "hr", icon: UsersRound },
  { id: "finance", icon: WalletCards },
  { id: "logistics", icon: Warehouse },
  { id: "core", icon: Waypoints },
];

export function ConnectedSystems({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`bg-surface-dark text-surface-dark-foreground ${full ? "pb-24" : "section-pad"}`}
      aria-labelledby="systems-title"
    >
      <div className="site-container">
        {full ? (
          <p className="max-w-3xl text-base leading-7 text-surface-dark-muted">
            A unified environment designed to connect workforce, finance, logistics, freight
            operations, service providers, and customer management.
          </p>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-signal">Connected systems</p>
              <h2 id="systems-title" className="section-title max-w-xl">
                One connected ecosystem. Every critical operation.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-surface-dark-muted">
              A unified environment designed to connect workforce, finance, logistics, freight
              operations, service providers, and customer management.
            </p>
          </div>
        )}
        <div className="network-strip mt-10" aria-label="Connected operations flow">
          {["People", "Finance", "Logistics", "Freight", "Customers", "Visibility"].map(
            (item, index) => (
              <div key={item} className="network-node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ),
          )}
        </div>
        <Tabs defaultValue="hr" className="mt-10">
          <TabsList className="h-auto w-full justify-start gap-0 overflow-x-auto rounded-md border border-surface-dark-foreground/10 bg-surface-dark-panel p-1">
            {categories.map(({ id, icon: Icon }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="min-h-12 flex-1 gap-2 rounded-sm px-4 text-surface-dark-muted data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Icon />
                {categoryDetails[id].label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map(({ id }) => {
            const categorySystems = systems.filter((system) => system.category === id);
            return (
              <TabsContent key={id} value={id} className="mt-8">
                <div className="mb-6 flex max-w-3xl gap-3">
                  <Network className="mt-1 size-5 shrink-0 text-signal" />
                  <p className="text-sm leading-6 text-surface-dark-muted">
                    {categoryDetails[id].description}
                  </p>
                </div>
                <div
                  className={`grid gap-4 ${categorySystems.length === 1 ? "max-w-xl" : categorySystems.length === 2 ? "md:grid-cols-2" : full ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-4"}`}
                >
                  {categorySystems.map((system) => (
                    <SystemCard key={system.code} system={system} />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
