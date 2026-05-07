import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  accent: string;
  name: string;
  price: string;
  unit?: string;
  detail: string;
  features: readonly string[];
  featured?: boolean;
  whatsappUrl: string;
};

export function PricingCard({
  accent,
  name,
  price,
  unit,
  detail,
  features,
  featured = false,
  whatsappUrl,
}: PricingCardProps) {
  return (
    <article
      className={cn("brut-card plan-card", featured && "brut-card-gold")}
    >
      <div className="flex items-center justify-between">
        <span className="plan-name">{accent}</span>
        {featured && <span className="chip-full">Destacado</span>}
      </div>

      <div>
        <h3
          className={cn(
            "font-display text-3xl uppercase mb-3",
            featured ? "text-[#0a0a0a]" : "text-[var(--foreground)]"
          )}
        >
          {name}
        </h3>
        <div className="plan-price">
          <span>{price}</span>
          {unit && <span className="plan-price-cents">{unit}</span>}
        </div>
        <p
          className={cn(
            "text-sm mt-2",
            featured
              ? "text-[rgba(10,10,10,0.75)]"
              : "text-[var(--muted-foreground)]"
          )}
        >
          {detail}
        </p>
      </div>

      <ul className="flex flex-col gap-0 flex-1">
        {features.map((feature) => (
          <li key={feature} className="plan-feature">
            <Check className="plan-feature-check" strokeWidth={3} />
            <span
              className={
                featured ? "text-[#0a0a0a]" : "text-[var(--foreground)]"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto"
      >
        <Button
          className="w-full"
          variant={featured ? "inverse" : "outline"}
          size="lg"
          asChild
        >
          <span>
            Reservar ahora
            <ArrowUpRight />
          </span>
        </Button>
      </a>
    </article>
  );
}
