import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, nutrition, training and wellness insight from the team at Lanes Health Clubs.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Stories from inside Lanes"
        lead="Training, nutrition, wellness and club news — from the people who know the club best."
        image="/assets/photos/img0595.jpeg"
        imageAlt="The pool at Lanes Health Clubs at dusk"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block overflow-hidden border border-line"
          >
            <div className="relative aspect-[21/9]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
              <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-cream/70">
                {featured.categories.map((c) => (
                  <span key={c} className="border border-cream/30 px-2.5 py-1 backdrop-blur-sm">
                    {c}
                  </span>
                ))}
                <span>{featured.date}</span>
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight text-cream md:text-5xl">
                {featured.title}
              </h2>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => {
            const href = p.body ? `/blog/${p.slug}` : (p.external ?? "/blog");
            const inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
                <div className="flex items-center gap-3 pt-5 text-[0.62rem] uppercase tracking-[0.2em] text-fog">
                  <span className="text-lanes">{p.categories[0]}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  {!p.body && <span className="text-fog/60">· laneshealthclubs.co.uk</span>}
                </div>
                <h3 className="mt-3 font-display text-xl font-light leading-snug text-cream transition-colors group-hover:text-lanes md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fog">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors group-hover:text-lanes">
                  Read article <ArrowUpRight size={13} />
                </span>
              </>
            );
            return (
              <Reveal key={p.slug} delay={i * 0.06}>
                {p.body ? (
                  <Link href={href} className="group block">
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
