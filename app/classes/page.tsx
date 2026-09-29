import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ClassExplorer } from "@/components/sections/class-explorer";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Over 100 group exercise classes every week at Lanes Health Clubs — Les Mills, HIIT, Yoga, Pilates, Spin, Zumba, Aqua and more.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Group exercise"
        title="Get fit together"
        lead="Over 100 sessions each week — sweat, stretch, relax or build strength. Whatever your goals, there is a class for you."
        image="/assets/photos/hiit.jpg"
        imageAlt="Instructor leading a dumbbell class at Lanes"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="01"
            eyebrow="The timetable"
            title="Every class, every level"
            description="From high-energy Les Mills sessions to holistic Yoga, Pilates and Tai Chi — plus weekly 15-minute quick sessions on the gym floor for beginners."
          />
          <Reveal delay={0.2}>
            <ButtonLink href={site.bookingPortal} external>
              Book your classes
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14">
          <ClassExplorer />
        </div>
      </section>

      {/* Timetable images */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <SectionHeading
            index="02"
            eyebrow="This week"
            title="The full timetable"
            description="Download the Lanes app to book classes, track your spot and see live schedule changes."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {["/assets/misc/class-tt-1.png", "/assets/misc/class-tt-2.png"].map(
              (src, i) => (
                <Reveal key={src} delay={i * 0.1}>
                  <div className="border border-line bg-cream p-2">
                    <Image
                      src={src}
                      alt={`Lanes class timetable part ${i + 1}`}
                      width={2048}
                      height={1453}
                      className="w-full"
                    />
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="First class is on us to try"
        body="New to the gym? No problem — beginner-friendly classes and weekly quick sessions led by our fitness instructors help you get started with confidence."
        cta={{ label: "Book a tour", href: "/book-a-tour" }}
      />
    </>
  );
}
