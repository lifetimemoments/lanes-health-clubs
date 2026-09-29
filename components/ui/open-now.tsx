"use client";

import { useEffect, useState } from "react";
import { clubHours } from "@/lib/data/site";

function fmt(h: number) {
  const hr = Math.floor(h);
  const min = Math.round((h - hr) * 60);
  return `${hr.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
}

function status(now: Date) {
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = clubHours[day];
  if (hour >= today.open && hour < today.close) {
    return { open: true, label: `Open now · until ${fmt(today.close)}` };
  }
  if (hour < today.open) {
    return { open: false, label: `Opens today at ${fmt(today.open)}` };
  }
  const tmr = clubHours[(day + 1) % 7];
  return { open: false, label: `Opens tomorrow at ${fmt(tmr.open)}` };
}

export function OpenNow({ className = "" }: { className?: string }) {
  const [s, setS] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setS(status(new Date()));
    update();
    const t = setInterval(update, 60_000);
    return () => clearInterval(t);
  }, []);

  if (!s) {
    return (
      <span className={`inline-flex items-center gap-2 whitespace-nowrap text-xs text-fog ${className}`}>
        <span className="size-1.5 rounded-full bg-fog/50" />
        Mon–Fri 06:00–22:00 · Sat–Sun 08:00–20:00
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap text-xs ${className}`}>
      <span
        className={`size-1.5 rounded-full ${
          s.open ? "bg-lanes animate-pulse-dot" : "bg-flame"
        }`}
      />
      <span className={s.open ? "text-cream/90" : "text-fog"}>{s.label}</span>
    </span>
  );
}
