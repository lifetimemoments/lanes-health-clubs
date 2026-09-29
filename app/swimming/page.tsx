import type { Metadata } from "next";
import { Clock, Droplets, Flame, Wind } from "lucide-react";
import { RevealImage } from "@/components/ui/reveal-image";
import { PageHero } from "@/components/sections/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Swimming",
  description:
    "25-metre heated pool, spa pool, sauna and steam room at Lanes Health Clubs — plus adult and children's swimming lessons following Swim England's framework.",
};

const facilities = [
  { icon: Droplets, title: "Spa pool", body: "Soothing hydrotherapy jets to ease tired muscles and promote relaxation." },
  { icon: Flame, title: "Sauna", body: "Heat therapy to improve circulation, detoxify the body and ease tension." },
  { icon: Wind, title: "Steam room", body: "Moist heat opens pores, cleanses skin and alleviates respiratory congestion." },
];

const adultPrices = {
  member: [
    { qty: "2 lessons", price: "£44" },
    { qty: "4 lessons", price: "£80" },
    { qty: "8 lessons", price: "£144" },
  ],
  nonMember: [
    { qty: "2 lessons", price: "£56" },
    { qty: "4 lessons", price: "£101" },
    { qty: "8 lessons", price: "£184" },
  ],
};

export default function SwimmingPage() {
  return (
    <>
      <PageHero
        eyebrow="Swimming"
        title="25 metres of calm"
        lead="Heated to 29°, our pool is perfect for low-impact exercise — or simply relaxing after a long day or hard workout."
        image="/assets/photos/pool-2.jpg"
        imageAlt="The 25 metre heated pool at Lanes Health Clubs"
      />

      {/* Pool facts + facilities */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              index="01"
              eyebrow="The pool"
              title="Swim, soak, recover"
              description="Beyond the lane swimming, our spa facilities offer a full wellness experience — spa pool, sauna and steam room all included in your membership."
            />
            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
              {facilities.map((f) => (
                <Reveal key={f.title} className="bg-ink">
                  <div className="h-full p-7">
                    <f.icon size={22} className="text-lanes" />
                    <h3 className="mt-4 font-display text-xl font-light text-cream">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-start gap-4 border border-line bg-ink-2 p-6">
                <Clock size={18} className="mt-0.5 shrink-0 text-flame" />
                <div className="text-sm leading-relaxed text-fog">
                  <p className="font-semibold text-cream">Pool opening times</p>
                  <p className="mt-2">Monday–Friday: 06:00 – 21:30</p>
                  <p>Sat/Sun/Bank Holidays: 08:00 – 19:30</p>
                  <p className="mt-2">Children: 15:30 – 17:30 daily (£5 per child or £15/month)</p>
                  <p className="mt-2 text-fog/70">
                    Closed during Aqua classes and Swim Fit (Monday 19:30–20:30).
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <RevealImage
              src="/assets/photos/img4647.jpg"
              alt="Children's swimming lesson in the Lanes pool"
              ratio="4/5"
              className="grain h-full min-h-[26rem]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Pool classes */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28">
          <SectionHeading
            index="02"
            eyebrow="Pool classes"
            title="Take to the water"
          />
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {[
              {
                name: "Swim Fit",
                body: "A 60-minute, fast-moving, high-intensity swimming group workout — swim drills plus additional exercises to burn calories and improve technique. Minimum 4 continuous lengths of front crawl required.",
              },
              {
                name: "Aqua Aerobics",
                body: "A 45-minute continuous workout using high-energy movements for resistance and cardio — often incorporating equipment, suitable for all fitness levels.",
              },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1} className="bg-ink-2">
                <div className="flex h-full flex-col p-8 md:p-10">
                  <p className="eyebrow text-lanes">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-3xl font-light text-cream">{c.name}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-fog">{c.body}</p>
                  <div className="mt-7">
                    <ButtonLink href={site.bookingPortal} external variant="outline">
                      Book Group Cycle &amp; Aqua
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Swimming lessons"
          title="Learn with confidence"
          description="Adult and children's lessons with experienced, supportive instructors — following Swim England's Learn to Swim Framework (Stages 1–6), with no more than 6 children per instructor and a consistent 1.2m pool depth."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-px border border-line bg-line md:grid-cols-2">
          {[
            {
              title: "Adult lessons",
              points: [
                "Beginners learning to swim for the first time",
                "Returning to the water after a break",
                "Refining technique or increasing efficiency",
                "Training toward a goal, event or milestone",
              ],
            },
            {
              title: "Children's lessons",
              points: [
                "Swim England Learn to Swim Framework, Stages 1–6",
                "Clear weekly focus on skill and stroke competency",
                "Max 6 children per instructor",
                "Pool platforms so children can stand securely",
              ],
            },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 0.1} className="bg-ink">
              <div className="h-full p-8 md:p-10">
                <h3 className="font-display text-2xl font-light text-cream">{col.title}</h3>
                <ul className="mt-6 space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-cream/75">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lanes" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lesson pricing */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-4xl border border-line bg-ink-2 p-8 md:p-10">
            <h3 className="font-display text-xl font-light text-cream">Adult lesson pricing</h3>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {(
                [
                  ["Members", adultPrices.member],
                  ["Non-members", adultPrices.nonMember],
                ] as const
              ).map(([label, rows]) => (
                <div key={label}>
                  <p className="eyebrow text-lanes">{label}</p>
                  <ul className="mt-4 divide-y divide-line">
                    {rows.map((r) => (
                      <li key={r.qty} className="flex items-center justify-between py-3.5 text-sm">
                        <span className="text-cream/80">{r.qty}</span>
                        <span className="font-display text-xl text-cream">{r.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-fog">
              Contact the swim team on {site.phone} or {site.swimEmail}. Prices subject to review.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 text-center">
          <ButtonLink href={`mailto:${site.swimEmail}`} external>
            Enquire about swimming lessons
          </ButtonLink>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
