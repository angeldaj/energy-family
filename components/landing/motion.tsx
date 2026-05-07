"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const ease: Transition["ease"] = [0.2, 0.8, 0.2, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

type Common = {
  children: ReactNode;
  className?: string;
  /** if true, animate on mount (no scroll trigger) */
  immediate?: boolean;
  /** delay before start (s) */
  delay?: number;
};

type RevealProps = Common & {
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  as?: "div" | "section" | "article" | "li";
};

const variantsMap = { fadeUp, fadeIn, scaleIn };

export function Reveal({
  children,
  className,
  immediate = false,
  delay = 0,
  variant = "fadeUp",
  as = "div",
}: RevealProps) {
  const Comp = motion[as];
  const baseVariants = variantsMap[variant];

  const visibleTransition = {
    ...baseVariants.visible,
    transition: {
      ...(baseVariants.visible as { transition?: Transition })?.transition,
      delay,
    },
  };

  return (
    <Comp
      className={className}
      variants={{ hidden: baseVariants.hidden, visible: visibleTransition }}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once: true, amount: 0.25 }}
    >
      {children}
    </Comp>
  );
}

type StaggerProps = Common & {
  as?: "div" | "ul" | "section";
  /** custom stagger gap (s) */
  stagger?: number;
};

export function Stagger({
  children,
  className,
  immediate = false,
  delay = 0,
  as = "div",
  stagger = 0.08,
}: StaggerProps) {
  const Comp = motion[as];

  const parent: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay + 0.05 },
    },
  };

  return (
    <Comp
      className={className}
      variants={parent}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once: true, amount: 0.2 }}
    >
      {children}
    </Comp>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  as?: "div" | "li" | "article" | "section";
};

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
  as = "div",
}: ItemProps) {
  const Comp = motion[as];

  return (
    <Comp className={className} variants={variantsMap[variant]}>
      {children}
    </Comp>
  );
}
