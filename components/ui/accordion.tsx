"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-display text-sm text-lanes tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-lg md:text-xl font-light transition-colors duration-300 ${
                    isOpen ? "text-cream" : "text-cream/80 group-hover:text-cream"
                  }`}
                >
                  {item.q}
                </span>
              </span>
              <span
                className={`shrink-0 grid size-9 place-items-center rounded-full border transition-all duration-500 ${
                  isOpen
                    ? "border-lanes bg-lanes text-ink rotate-45"
                    : "border-cream/20 text-cream/60 group-hover:border-cream/50"
                }`}
              >
                <Plus size={15} strokeWidth={2.5} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pl-12 pr-4 text-fog leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
