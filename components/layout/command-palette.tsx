"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { nav } from "@/lib/data/site";
import { classes } from "@/lib/data/classes";

const pages = [
  ...nav.map((n) => ({ label: n.label, href: n.href })),
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Tour", href: "/book-a-tour" },
];

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-[12vh] w-[min(92vw,560px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              className="overflow-hidden border border-line bg-ink-2 shadow-2xl shadow-black/60"
              label="Site search"
            >
              <div className="flex items-center gap-3 border-b border-line px-5">
                <Search size={16} className="text-fog" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages and classes…"
                  className="h-14 w-full bg-transparent text-sm text-cream placeholder:text-fog/60 focus:outline-none"
                />
                <kbd className="border border-line px-1.5 py-0.5 text-[0.6rem] text-fog">ESC</kbd>
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-fog">
                  Nothing found.
                </Command.Empty>
                <Command.Group
                  heading="Pages"
                  className="text-[0.62rem] uppercase tracking-[0.2em] text-fog [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2"
                >
                  {pages.map((p) => (
                    <Command.Item
                      key={p.href}
                      value={p.label}
                      onSelect={() => go(p.href)}
                      className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-cream/80 data-[selected=true]:bg-lanes/10 data-[selected=true]:text-lanes"
                    >
                      {p.label}
                      <ArrowRight size={14} className="opacity-0 data-[selected=true]:opacity-100" />
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group
                  heading="Classes"
                  className="text-[0.62rem] uppercase tracking-[0.2em] text-fog [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2"
                >
                  {classes.map((c) => (
                    <Command.Item
                      key={c.name}
                      value={`${c.name} class`}
                      onSelect={() => go("/classes")}
                      className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-cream/80 data-[selected=true]:bg-lanes/10 data-[selected=true]:text-lanes"
                    >
                      <span>
                        {c.name}
                        <span className="ml-2 text-xs text-fog">{c.category}</span>
                      </span>
                      <ArrowRight size={14} />
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
