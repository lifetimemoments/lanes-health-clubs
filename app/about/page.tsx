import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StoryTimeline } from "@/components/sections/story-timeline";
import { lanesDifference } from "@/lib/data/story";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Lanes experience — a club that prioritises every aspect of your wellbeing, from fitness and social to community and mental health.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="The Lanes experience"
        lead="A club that prioritises every aspect of your wellbeing — fitness, social, community and mental health. Meaningful exercise based on movement and function."
        image="/assets/photos/hero-2022.jpg"
        imageAlt="Ash helping a member on the gym floor at Lanes"
      />

      {/* Difference */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="01"
          eyebrow="Why Lanes"
          title="The Lanes difference"
          align="center"
        />
        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
          {lanesDifference.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="bg-ink">
              <div className="h-full p-8 transition-colors duration-500 hover:bg-ink-3 md:p-12">
                <p className="font-display text-4xl font-light text-lanes/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-2xl font-light text-cream">
                  {d.title}
                </h3>
                <p className="mt-4 leading-relaxed text-fog">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story timeline */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            index="02"
            eyebrow="Our story"
            title="Built on community since 2015"
            align="center"
          />
          <div className="mt-20">
            <StoryTimeline />
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-24 max-w-3xl text-center font-display text-2xl font-light leading-snug text-cream md:text-3xl">
              If you&rsquo;re looking for a health club that truly cares, look no
              further — the future is bright for Lanes Health Clubs, and we would
              be glad to share this experience with you.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
