"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { story } from "@/lib/data/story";

export function StoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* Track */}
      <div className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-line md:left-1/2" aria-hidden />
      <motion.div
        className="absolute bottom-0 left-[1.1rem] top-0 w-px origin-top bg-lanes md:left-1/2"
        style={{ scaleY: progress }}
        aria-hidden
      />

      <ol className="space-y-16 md:space-y-24">
        {story.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <li key={s.year} className="relative md:grid md:grid-cols-2 md:gap-16">
              {/* Node */}
              <span className="absolute left-[1.1rem] top-2 z-10 grid size-4 -translate-x-1/2 place-items-center md:left-1/2">
                <span className="size-2.5 rounded-full border-2 border-lanes bg-ink" />
              </span>

              {/* Year marker */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`pl-12 md:pl-0 ${left ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
              >
                <p className="font-display text-6xl font-light text-lanes/30 md:text-7xl">
                  {s.year}
                </p>
                <h3 className="mt-3 font-display text-2xl font-light text-cream md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-fog">{s.body}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
