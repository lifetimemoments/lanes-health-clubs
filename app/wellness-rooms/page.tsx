import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { wellnessHours, wellnessPolicies, wellnessTeam } from "@/lib/data/wellness";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Wellness Rooms",
  description:
    "Massage, facials, manicures and bespoke treatments in the Wellness Rooms at Lanes Health Clubs — luxurious treatments at affordable prices.",
};

export default function WellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="The Wellness Rooms"
        title="Beauty, massage & wellness"
        lead="Luxurious bespoke treatments from massages and facials to manicures and pedicures — at fantastically affordable prices."
        image="/assets/photos/wellness.jpg"
        imageAlt="A treatment in the Wellness Rooms at Lanes"
      />

      {/* Treatments + booking */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              index="01"
              eyebrow="Treatments"
              title="More than just beauty"
              description="Our Health & Beauty therapists offer a range of bespoke treatments with one aim — a top-notch experience that makes you feel good. Members receive 15% off all treatments."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Bespoke massages",
                "Facials",
                "Manicures & pedicures",
                "Lash lifts",
                "Deep tissue & sports massage",
                "Thai foot massage",
                "Aromatherapy",
                "Lava treatments",
                "Nails",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-line px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] text-cream/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={site.phoneHref} external>
                  Book now — {site.phone}
                </ButtonLink>
                <ButtonLink href="/membership" variant="outline">
                  Member discounts
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Hours */}
          <Reveal delay={0.15}>
            <div className="border border-line bg-ink-2 p-8">
              <p className="flex items-center gap-3 font-display text-xl font-light text-cream">
                <Clock size={18} className="text-lanes" />
                Wellness Rooms hours
              </p>
              <ul className="mt-6 divide-y divide-line">
                {wellnessHours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-cream/80">{h.day}</span>
                    <span className="text-fog">
                      {h.hours}
                      {h.note && <span className="ml-1 text-[0.65rem]">({h.note})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            index="02"
            eyebrow="Meet the wellness team"
            title="In expert hands"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {wellnessTeam.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <article className="group h-full border border-line bg-ink">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role} at Lanes`}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow text-lanes">{t.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-light text-cream">
                      {t.name}
                    </h3>
                    <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-fog">
                      {t.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Good to know"
          title="Booking policies"
        />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {wellnessPolicies.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className="bg-ink">
              <div className="h-full p-7">
                <h3 className="font-display text-lg font-light text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Treat yourself today"
        body="Call the Wellness Rooms team to book — last-minute appointments and gift cards available."
        cta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
      />
    </>
  );
}
