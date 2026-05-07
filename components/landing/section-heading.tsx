import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  number?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  number,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-head reveal",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {number && <div className="section-number">{number}</div>}
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="headline headline-lg">{title}</h2>
      {description && (
        <p className="max-w-xl text-[var(--muted-foreground)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
