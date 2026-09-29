import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { TourForm } from "@/components/sections/tour-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  headlineMemberships,
  moreMemberships,
  membershipFootnote,
} from "@/lib/data/memberships";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Memberships from £21 day passes to £88/month — access the gym, 25m pool, spa, sauna, steam room and 100+ classes at Lanes Health Clubs Rustington.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Choose how you belong"
        lead="Every membership includes a free gym assessment, guest passes and 15% off Wellness Rooms treatments. 50% off joining fee this September."
        image="/assets/photos/pool-3.jpg"
        imageAlt="The 25 metre pool at Lanes Health Clubs"
      />

      {/* Headline tiers */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
        <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
          {headlineMemberships.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className="bg-ink">
              <article className={`flex h-full flex-col p-8 md:p-12 ${m.featured ? "bg-ink-3" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow text-lanes">{m.name}</p>
                    {m.promo && (
                      <p className="mt-2 inline-block bg-flame/15 px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-flame">
                        50% off joining fee
                      </p>
                    )}
                  </div>
                  {m.featured && (
                    <span className="bg-lanes px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ink">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-8 font-display text-6xl font-light text-cream md:text-7xl">
                  {m.price}
                  <span className="ml-2 text-lg text-fog">{m.cadence}</span>
                </p>
                <p className="mt-3 text-sm text-flame">{m.joiningFee}</p>
                <p className="mt-1 text-xs text-fog">{m.term}</p>
                <ul className="mt-9 flex-1 space-y-3.5 border-t border-line pt-7">
                  {m.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-3 text-sm text-cream/80">
                      <Check size={15} className="shrink-0 text-lanes" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <ButtonLink
                    href={site.joinOnline}
                    external
                    variant={m.featured ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Get started
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More options */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <SectionHeading
            index="02"
            eyebrow="More ways to join"
            title="Every option, every lifestyle"
            description="Flexible, joint, corporate, concessions and day access — there's a membership shaped around how you live."
          />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {moreMemberships.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05} className="bg-ink-2">
                <article className="flex h-full flex-col p-7 transition-colors duration-500 hover:bg-ink-3">
                  <p className="eyebrow text-lanes">{m.name}</p>
                  {m.promo && (
                    <p className="mt-2 inline-block w-fit bg-flame/15 px-2 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-flame">
                      50% off joining fee
                    </p>
                  )}
                  <p className="mt-5 font-display text-4xl font-light text-cream">
                    {m.price}
                    {m.cadence && (
                      <span className="ml-1 text-sm text-fog">{m.cadence}</span>
                    )}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {m.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-[0.83rem] leading-snug text-cream/70">
                        <Check size={13} className="mt-0.5 shrink-0 text-lanes" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-line pt-5">
                    {m.joiningFee && (
                      <p className="text-[0.72rem] text-flame">{m.joiningFee}</p>
                    )}
                    {m.term && <p className="mt-1 text-[0.72rem] text-fog">{m.term}</p>}
                    {m.note && <p className="mt-1 text-[0.72rem] text-fog">{m.note}</p>}
                    <a
                      href={m.cta?.href ?? site.joinOnline}
                      {...(m.cta?.external || !m.cta
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-4 inline-block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cream underline decoration-lanes underline-offset-4 transition-colors hover:text-lanes"
                    >
                      {m.cta?.label ?? "Get started"}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-xs leading-relaxed text-fog">{membershipFootnote}</p>
          </Reveal>
        </div>
      </section>

      {/* Book a tour — same form as the live site */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            index="03"
            eyebrow="Book a tour"
            title="Experience Lanes for yourself"
            description="Book a tour today and explore everything we have to offer — the state-of-the-art fitness facilities, relaxing wellness areas and dynamic group classes. Our team will answer any questions about memberships and amenities, and help you reach your wellness goals."
          />
          <Reveal delay={0.15}>
            <div className="border border-line bg-ink-2 p-8 md:p-12">
              <TourForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
