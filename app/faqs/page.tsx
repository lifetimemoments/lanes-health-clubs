import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Lanes Health Clubs — joining, opening hours, parking, children's swimming, referrals and more.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered"
        lead="Our most frequent questions and answers — anything else, just get in touch."
        image="/assets/photos/massage.jpg"
        imageAlt="A relaxing treatment in the Wellness Rooms"
      />
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Accordion items={faqs} />
      </section>
      <CTABand
        title="Still have a question?"
        body="Our team are happy to help — call, email or book a tour and see the club for yourself."
        cta={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
