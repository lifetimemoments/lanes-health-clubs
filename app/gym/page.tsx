import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { trainers } from "@/lib/data/trainers";
import { RevealImage } from "@/components/ui/reveal-image";

export const metadata: Metadata = {
  title: "Gym",
  description:
    "State-of-the-art Technogym gym at Lanes Health Clubs — free 90-minute induction, body composition analysis, and nine expert Personal Trainers.",
};

const inductionSteps = [
  {
    title: "Health assessment",
    body: "A member of our team will assess your current fitness level and discuss your goals and any challenges — helping you take the right steps towards achieving them.",
  },
  {
    title: "Body composition analysis",
    body: "Insight into your Body Fat %, Muscle Mass %, BMI, Body Water and over 25 other key indicators of your body.",
  },
  {
    title: "Personalised training programme",
    body: "Based on your assessment, our fitness professionals create a programme so you can train safely and improve your overall fitness and health.",
  },
  {
    title: "30-day progress check",
    body: "We check in to see how you're progressing — with a follow-up Body Composition Assessment so you can see what progress you've made.",
  },
];

export default function GymPage() {
  return (
    <>
      <PageHero
        eyebrow="The gym"
        title="Train on the best. Become your best."
        lead="State-of-the-art Technogym equipment — track your progress on the Lanes app whether you're a beginner or a professional athlete."
        image="/assets/photos/gym.jpg"
        imageAlt="Technogym Skillrow machines on the Lanes gym floor"
      />

      {/* Induction */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="01"
          eyebrow="Your first 90 minutes"
          title="The free fitness induction"
          description="Every new member receives a complimentary 90-minute fitness induction — the smartest start to your training."
        />
        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {inductionSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-ink">
              <div className="h-full p-8 transition-colors duration-500 hover:bg-ink-3">
                <p className="font-display text-5xl font-light text-lanes/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-xl font-light text-cream">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-fog">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Personal Training */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <Reveal>
            <RevealImage
              src="/assets/photos/img4574.jpg"
              alt="Josh, Personal Trainer at Lanes"
              ratio="4/5"
              className="grain"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <div>
            <SectionHeading
              index="02"
              eyebrow="Personal training"
              title="More than a workout"
              description="Motivation, focus and dedication. Our trainers work with you, listen to you, and guide you to become the best version of yourself — with a programme, a nutrition plan and ongoing support built around your goals."
            />
            <Reveal delay={0.25}>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-cream/75">
                {[
                  "A personalised training programme tailored to your body, experience and goals",
                  "A personal nutrition and diet plan supporting training and recovery",
                  "Monthly goal reviews and body composition checks",
                  "Expert guidance on technique — better results, fewer injuries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lanes" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/contact">
                  Enquire about PT
                </ButtonLink>
                <ButtonLink href="/classes" variant="outline">
                  Prefer group training?
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Meet the team"
          title="Nine trainers. One goal — yours."
          description="Fat loss, strength, mobility, rehabilitation or confidence — there's a Lanes trainer for exactly where you are."
        />
        <div className="mt-16 grid gap-x-px gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-3">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role} at Lanes Health Clubs`}
                      fill
                      className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-7xl font-light text-lanes/25">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="eyebrow text-lanes">{t.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-light text-cream">
                      {t.name}
                    </h3>
                  </div>
                </div>
                <div className="border border-line border-t-0 p-6">
                  <p className="line-clamp-4 text-sm leading-relaxed text-fog">
                    {t.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {t.specialities.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border border-line px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-cream/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${t.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-lanes transition-colors hover:text-lanes-bright break-all"
                  >
                    <Mail size={13} />
                    {t.email}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Start with a free induction"
        body="Join today and our fitness professionals will build your personalised programme — and check your progress after 30 days."
        cta={{ label: "Explore memberships", href: "/membership" }}
      />
    </>
  );
}
