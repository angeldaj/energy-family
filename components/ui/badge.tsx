import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.28em]",
  {
    variants: {
      variant: {
        default:
          "border-[var(--brand)] bg-transparent text-[var(--brand)]",
        solid:
          "border-[var(--brand)] bg-[var(--brand)] text-[#0a0a0a]",
        outline:
          "border-[var(--border)] bg-transparent text-[var(--muted-foreground)]",
        danger:
          "border-[#ff5f3b] bg-[#ff5f3b]/10 text-[#ff5f3b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
