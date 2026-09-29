"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { site } from "@/lib/data/site";

const slots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

export function TourForm() {
  const [slot, setSlot] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const input =
    "w-full border-b border-cream/20 bg-transparent py-3.5 text-cream placeholder:text-fog/50 transition-colors focus:border-lanes focus:outline-none";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-lanes/40 bg-lanes/10 p-10 text-center"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-lanes text-ink">
          <Check size={22} strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-light text-cream">
          Tour requested
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-fog">
          We&rsquo;ll be in touch to confirm your appointment. Prefer to talk it
          through now? Call us on {site.phone}.
        </p>
        <a
          href={site.phoneHref}
          className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-lanes"
        >
          <Phone size={14} /> {site.phone}
        </a>
      </motion.div>
    );
  }

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-fog">Name *</span>
          <input required type="text" name="name" className={input} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="eyebrow text-fog">Email *</span>
          <input required type="email" name="email" className={input} placeholder="you@email.com" />
        </label>
        <label className="block">
          <span className="eyebrow text-fog">Phone *</span>
          <input required type="tel" name="phone" className={input} placeholder="07…" />
        </label>
        <label className="block">
          <span className="eyebrow text-fog">Preferred date *</span>
          <input
            required
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            className={`${input} [color-scheme:dark]`}
          />
        </label>
      </div>

      <div>
        <p className="eyebrow text-fog">Preferred time *</p>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {slots.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setSlot(t)}
              aria-pressed={slot === t}
              className={`border py-2.5 text-xs tabular-nums transition-all duration-300 ${
                slot === t
                  ? "border-lanes bg-lanes text-ink font-bold"
                  : "border-cream/15 text-cream/60 hover:border-cream/40 hover:text-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {!slot && (
            <motion.p
              exit={{ opacity: 0 }}
              className="mt-3 text-xs text-fog/70"
            >
              Select a time slot — we&rsquo;ll be in touch to confirm.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={!slot}
        className="group inline-flex items-center gap-3 bg-lanes px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:bg-lanes-bright disabled:cursor-not-allowed disabled:opacity-40"
      >
        Book my tour
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
