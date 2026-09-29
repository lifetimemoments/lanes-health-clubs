"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { nav, site } from "@/lib/data/site";
import { OpenNow } from "@/components/ui/open-now";

export function Header({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Promo bar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-lanes text-ink">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center gap-3 px-4 text-[0.68rem] font-bold uppercase tracking-[0.2em]">
          <span className="hidden sm:inline">{site.promo}</span>
          <span className="sm:hidden">50% off joining fee</span>
          <Link
            href="/membership"
            className="underline underline-offset-2 decoration-ink/40 hover:decoration-ink transition-colors"
          >
            Claim
          </Link>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 top-9 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-xl border-b border-line"
            : "bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-6 px-5 md:px-8">
          <Link href="/" className="relative z-10 shrink-0" aria-label="Lanes Health Clubs — home">
            <Image
              src="/assets/logo/logo-01.png"
              alt="Lanes Health Clubs"
              width={208}
              height={78}
              priority
              className="h-10 w-auto object-contain brightness-0 invert xl:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 xl:px-3 xl:text-[0.7rem] xl:tracking-[0.15em] ${
                      pathname === item.href
                        ? "text-lanes"
                        : "text-cream/75 hover:text-cream"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={12} className="opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span
                      className={`absolute inset-x-3.5 bottom-0.5 h-px bg-lanes transition-transform duration-500 ease-out origin-left ${
                        pathname === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-56 border border-line bg-ink-2/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cream/70 transition-colors hover:bg-lanes/10 hover:text-lanes"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden 2xl:block">
              <OpenNow />
            </div>
            <button
              onClick={onOpenPalette}
              aria-label="Search site"
              className="hidden xl:grid size-10 place-items-center border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
            >
              <Search size={15} />
            </button>
            <Link
              href="/book-a-tour"
              className="hidden md:inline-flex items-center whitespace-nowrap bg-cream px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-lanes xl:px-5 xl:text-[0.68rem] xl:tracking-[0.2em]"
            >
              Book a tour
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="grid size-10 place-items-center text-cream lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-30 bg-ink lg:hidden"
          >
            <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-36">
              <nav aria-label="Mobile">
                <ul>
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-baseline justify-between border-b border-line py-5 font-display text-3xl font-light text-cream"
                      >
                        {item.label}
                        <span className="text-xs text-fog">{String(i + 1).padStart(2, "0")}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 space-y-5"
              >
                <OpenNow />
                <div className="flex gap-3">
                  <Link
                    href="/book-a-tour"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 bg-lanes px-5 py-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink"
                  >
                    Book a tour
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="flex-1 border border-cream/25 px-5 py-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cream"
                  >
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
