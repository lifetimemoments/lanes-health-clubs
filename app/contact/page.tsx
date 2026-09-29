import type { Metadata } from "next";
import { Car, Mail, MapPin, Phone, Train } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lanes Health Clubs — Golfers Lane, Angmering BN16 4NB. Call 01903 859777 or email info@laneshealthclubs.co.uk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Read our FAQs first — and if you still have a query, get in touch today. We'll be more than happy to help."
        image="/assets/photos/img5677.png"
        imageAlt="A member of the Lanes team"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Details */}
          <div>
            <SectionHeading index="01" eyebrow="The club" title="Visit, call, write" />
            <div className="mt-10 space-y-px border border-line bg-line">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: site.phone,
                  href: site.phoneHref,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: site.email,
                  href: `mailto:${site.email}`,
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: site.address,
                  href: site.mapsUrl,
                },
                {
                  icon: Car,
                  label: "Parking",
                  value: "Around 280 free parking spaces",
                },
                {
                  icon: Train,
                  label: "Rail",
                  value: "Angmering station — 10 minute walk",
                },
              ].map((row) => {
                const inner = (
                  <>
                    <row.icon size={18} className="mt-1 shrink-0 text-lanes" />
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-fog">
                        {row.label}
                      </p>
                      <p className="mt-1.5 text-cream/85">{row.value}</p>
                    </div>
                  </>
                );
                return (
                  <div key={row.label} className="bg-ink">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex gap-5 p-6 transition-colors hover:bg-ink-3"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex gap-5 p-6">{inner}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 border border-line bg-ink-2 p-7 text-sm leading-relaxed text-fog">
                <p className="font-semibold uppercase tracking-[0.2em] text-cream/70">
                  Opening times
                </p>
                <p className="mt-3">Monday – Friday: 06:00 – 22:00</p>
                <p>Saturday – Sunday: 08:00 – 20:00</p>
                <p>Bank Holidays: 08:00 – 20:00</p>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.15}>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full min-h-[28rem] overflow-hidden border border-line grain"
            >
              <iframe
                title="Map to Lanes Health Clubs, Golfers Lane, Angmering"
                src="https://www.google.com/maps?q=Golfers%20Lane%2C%20Angmering%20BN16%204NB&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[0.6] invert-[0.9] contrast-[0.9] opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 bg-ink px-5 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-cream/80">
                {site.address} — open in Maps
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Come and see the club"
        body="The best way to understand Lanes is to experience it — book a tour and we'll show you around."
        cta={{ label: "Book a tour", href: "/book-a-tour" }}
      />
    </>
  );
}
