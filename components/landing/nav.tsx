"use client";

import { useState } from "react";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavProps = {
  whatsappUrl: string;
};

const links = [
  { href: "#codigo", label: "Código" },
  { href: "#pilares", label: "Pilares" },
  { href: "#clases", label: "Clases" },
  { href: "#horarios", label: "Horarios" },
  { href: "#planes", label: "Planes" },
  { href: "#ubicacion", label: "Ubicación" },
] as const;

const listVariants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 24 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 28 },
  },
};

const ctaVariants = {
  closed: { opacity: 0, y: 16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.42, duration: 0.35, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const iconVariants = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: 90, opacity: 0 },
};

export function Nav({ whatsappUrl }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        <span className="nav-brand-dot pulse-dot" />
        ENERGY / FAMILY
      </a>

      <div className="nav-links">
        {links.slice(0, 5).map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Reservar por WhatsApp"
        >
          <span className="inline-flex items-center gap-2 border border-[var(--brand)] bg-[var(--brand)] text-[#ffffff] px-4 py-2 text-[0.68rem] font-mono font-semibold uppercase tracking-[0.22em] hover:bg-transparent hover:text-[var(--brand)] transition-colors">
            <MessageCircleMore className="size-4" />
            <span className="hidden sm:inline">Reservar</span>
          </span>
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menú"
            className="md:hidden relative inline-flex items-center justify-center border border-[var(--border-strong)] text-[var(--foreground)] size-10 hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="bg-[var(--background)] border-l border-[var(--border)] text-[var(--foreground)] w-[82vw] sm:max-w-sm p-0 flex flex-col"
          >
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-[var(--border)]">
              <SheetTitle className="font-display text-lg uppercase tracking-[0.08em] flex items-center gap-2">
                <span className="nav-brand-dot" />
                Energy / Family
              </SheetTitle>
            </SheetHeader>

            <motion.ul
              className="flex flex-col py-2"
              variants={listVariants}
              initial="closed"
              animate={open ? "open" : "closed"}
            >
              {links.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <SheetClose asChild>
                    <a
                      href={link.href}
                      className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] font-mono text-sm uppercase tracking-[0.22em] text-[var(--muted-foreground)] hover:text-[var(--brand)] hover:bg-[var(--block)] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[var(--brand)]">→</span>
                    </a>
                  </SheetClose>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-auto p-6 border-t border-[var(--border)]"
              variants={ctaVariants}
              initial="closed"
              animate={open ? "open" : "closed"}
            >
              <SheetClose asChild>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-[var(--brand)] bg-[var(--brand)] text-[#ffffff] py-4 text-[0.72rem] font-mono font-semibold uppercase tracking-[0.22em]"
                >
                  <MessageCircleMore className="size-4" />
                  Reservar prueba gratis
                </a>
              </SheetClose>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
