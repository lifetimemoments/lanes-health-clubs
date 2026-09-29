import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Coffee, Star, UtensilsCrossed } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Café & Events",
  description:
    "The Lanes Café Lounge — delicious food, great coffee and a fully licensed bar, open to members and non-members. Event hire, quiz nights and live sport.",
};

export default function CafeEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Café & Events"
        title="The heart of the club"
        lead="Experience tells us the heart of any club is a buzzing social programme — and the hub of ours is the Lanes Café, open to members and non-members alike."
        image="/assets/photos/img0526.jpeg"
        imageAlt="The Lanes Café Lounge counter"
      />

      {/* Café */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="01"
              eyebrow="Café lounge"
              title="Delicious food, great coffee"
              description="All of our ingredients are fresh, using local suppliers where available — and our chef is always enhancing the menu with weekly specials on the board. The fully licensed bar serves some of life's more decadent treats too."
            />
            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
                {[
                  { icon: Coffee, label: "Coffee & brunch" },
                  { icon: UtensilsCrossed, label: "Licensed bar" },
                  { icon: CalendarDays, label: "Weekly specials" },
                ].map((i) => (
                  <div key={i.label} className="bg-ink p-6 text-center">
                    <i.icon size={20} className="mx-auto text-lanes" />
                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/80">
                      {i.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 border border-line bg-ink-2 p-6 text-sm leading-relaxed text-fog">
                <p className="font-semibold text-cream">Café opening times</p>
                <p className="mt-2">Monday–Thursday: 8:00am – 8:30pm</p>
                <p>Friday–Sunday: 8:00am – 3:00pm</p>
                <p>Bank Holidays: 8:00am – 7:00pm</p>
                <p className="mt-2 text-fog/70">
                  Outside these hours, snacks and beverages can be ordered at the front desk until 9:30pm.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={site.phoneHref} external>
                  Book a table
                </ButtonLink>
                <ButtonLink href={site.tripAdvisor} external variant="outline">
                  <Star size={14} className="mr-1" /> Review us on TripAdvisor
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Menus */}
          <div className="grid gap-5">
            {[
              { src: "/assets/menus/breakfast.png", label: "Breakfast menu" },
              { src: "/assets/menus/light-bites.png", label: "Light bites menu" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <figure className="group border border-line bg-cream p-2">
                  <Image
                    src={m.src}
                    alt={`Lanes Café ${m.label}`}
                    width={1086}
                    height={1536}
                    className="w-full transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  <figcaption className="p-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ink/70">
                    {m.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <SectionHeading
              index="02"
              eyebrow="Event hire"
              title="Your occasion, our space"
              description="Most of our social events happen in the Café Lounge — available for hire with or without our staff and catering. Keep an eye on the calendar for quiz nights and live sport with TNT Sports."
            />
            <Reveal delay={0.2}>
              <div className="border border-line bg-ink p-8">
                <p className="font-display text-xl font-light text-cream">
                  Planning something special?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  Contact the front desk for event hire information and pricing —
                  call {site.phone} or drop in and speak to the team.
                </p>
                <div className="mt-6">
                  <ButtonLink href={site.phoneHref} external>
                    Contact the front desk
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
