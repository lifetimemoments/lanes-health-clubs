"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { classes, classCategories } from "@/lib/data/classes";

export function ClassExplorer() {
  const [active, setActive] = useState<(typeof classCategories)[number]>("All");
  const filtered =
    active === "All" ? classes : classes.filter((c) => c.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="sticky top-[6.75rem] z-20 -mx-5 border-y border-line bg-ink/90 px-5 backdrop-blur-xl md:-mx-8 md:px-8"
        role="tablist"
        aria-label="Class categories"
      >
        <div className="flex gap-1 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {classCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 whitespace-nowrap border px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                active === cat
                  ? "border-lanes bg-lanes text-ink"
                  : "border-cream/15 text-cream/60 hover:border-cream/40 hover:text-cream"
              }`}
            >
              {cat}
              <span className="ml-2 opacity-50">
                {cat === "All"
                  ? classes.length
                  : classes.filter((c) => c.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.ul layout className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.li
              layout
              key={c.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink-3"
            >
              <p className="eyebrow text-lanes/80">{c.category}</p>
              <h3 className="mt-3 font-display text-xl font-light text-cream transition-colors group-hover:text-lanes">
                {c.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                {c.description}
              </p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
