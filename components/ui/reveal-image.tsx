"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/**
 * Editorial clip-path wipe reveal — image settles from a masked,
 * slightly-scaled state into full bleed.
 */
export function RevealImage({
  src,
  alt,
  ratio = "4/3",
  className = "",
  sizes = "100vw",
  delay = 0,
  duotone = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  delay?: number;
  duotone?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      initial={reduce ? false : { clipPath: "inset(12% 10% 12% 10%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${duotone ? "saturate-[0.4]" : ""}`}
        />
      </motion.div>
    </motion.div>
  );
}
