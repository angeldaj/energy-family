import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.72rem] font-semibold tracking-[0.22em] uppercase transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] border",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand)] border-[var(--brand)] px-6 py-3 text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[var(--brand)]",
        inverse:
          "bg-[#0a0a0a] border-[#0a0a0a] px-6 py-3 text-[var(--brand)] hover:bg-transparent hover:text-[#0a0a0a] hover:border-[#0a0a0a]",
        secondary:
          "border-[var(--foreground)] bg-transparent px-6 py-3 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[#0a0a0a]",
        outline:
          "border-[var(--border-strong,rgba(245,245,245,0.28))] bg-transparent px-6 py-3 text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
        ghost:
          "border-transparent px-4 py-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
      },
      size: {
        default: "min-h-12",
        lg: "min-h-14 px-8 text-[0.78rem]",
        sm: "min-h-10 px-4 text-[0.68rem]",
        icon: "size-11 !px-0 !py-0 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
