import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  index: string;
  title: string;
  description: string;
  Icon?: LucideIcon;
};

export function FeatureCard({
  index,
  title,
  description,
  Icon,
}: FeatureCardProps) {
  return (
    <article className="brut-card pillar-card">
      <div className="flex items-start justify-between gap-4">
        <span className="pillar-number">{index}</span>
        {Icon && <Icon className="size-8 text-[var(--brand)]" strokeWidth={1.5} />}
      </div>
      <h3 className="pillar-title">{title}</h3>
      <p className="pillar-body">{description}</p>
    </article>
  );
}
