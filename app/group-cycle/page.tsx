import type { Metadata } from "next";
import { Activity, BarChart3, Bike, Users } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Group Cycle Studio",
  description:
    "The dedicated Group Cycle Studio at Lanes Health Clubs — Technogym Group Cycle bikes, immersive classes and real-time performance tracking.",
};

const features = [
  {
    icon: Bike,
    title: "Innovative equipment",
    body: "Technogym Group Cycle bikes with magnetic resistance and Poly-V Belt Drive — a smooth, quiet ride with a realistic road feel.",
  },
  {
    icon: Activity,
    title: "Diverse classes",
    body: "From Beginners and Rhythmic Beats to High-Intensity Peaks — the Peak Experience and Freebeat Experience have something for everyone.",
  },
  {
    icon: BarChart3,
    title: "Performance tracking",
    body: "Integrated digital solutions let you monitor performance in real time, set personalised targets and track progress over time.",
  },
  {
    icon: Users,
    title: "Expert instructors",
    body: "Certified trainers guide every session with personalised coaching to help you maximise your workout.",
  },
];

export default function GroupCyclePage() {
  return (
    <>
      <PageHero
        eyebrow="Group Cycle Studio"
        title="Ride further together"
        lead="Our state-of-the-art dedicated studio — powered by Technogym's cutting-edge Group Cycle equipment — delivers an immersive cycling experience for every level."
        image="/assets/photos/img4550.jpg"
        imageAlt="Group cycle studio at Lanes Health Clubs"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="01"
          eyebrow="Why group cycle"
          title="A premium indoor ride"
        />
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-ink">
              <div className="h-full p-8 transition-colors duration-500 hover:bg-ink-3 md:p-10">
                <f.icon size={24} className="text-lanes" />
                <h3 className="mt-5 font-display text-2xl font-light text-cream">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-fog">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 text-center">
          <ButtonLink href={site.bookingPortal} external>
            Book Group Cycle &amp; Aqua
          </ButtonLink>
        </Reveal>
      </section>

      <CTABand
        title="Take a demo class"
        body="Whether it's your first ride or you're pushing towards a personal best, come and feel the energy of the studio."
        cta={{ label: "Book a tour", href: "/book-a-tour" }}
      />
    </>
  );
}
