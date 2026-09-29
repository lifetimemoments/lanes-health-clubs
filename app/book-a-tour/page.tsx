import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TourForm } from "@/components/sections/tour-form";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Book a Tour",
  description:
    "Experience Lanes Health Clubs for yourself — book a tour and explore our gym, pool, classes and Wellness Rooms.",
};

export default function BookATourPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a tour"
        title="Come and see it for yourself"
        lead="Explore everything we have to offer — the state-of-the-art gym, relaxing wellness areas and dynamic group classes. Our team will answer any questions about memberships and amenities."
        image="/assets/photos/img4574.jpg"
        imageAlt="Inside Lanes Health Clubs"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              index="01"
              eyebrow="Schedule your visit"
              title="Pick a time that suits"
              description={`Tours run throughout the day at the club — ${site.address}. Or simply call ${site.phone} and we'll arrange everything.`}
            />
            <Reveal delay={0.2}>
              <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden grain lg:block">
                <Image
                  src="/assets/photos/pool-2.jpg"
                  alt="The pool at Lanes Health Clubs"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </Reveal>
          </div>
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
