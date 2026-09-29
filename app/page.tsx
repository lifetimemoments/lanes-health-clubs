import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Quote } from "lucide-react";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { CountUp } from "@/components/ui/count-up";
import { OpenNow } from "@/components/ui/open-now";
import { CTABand } from "@/components/sections/cta-band";
import { site } from "@/lib/data/site";
import { headlineMemberships } from "@/lib/data/memberships";

const facilities = [
  {
    index: "01",
    title: "Fitness",
    body: "State-of-the-art Technogym equipment, free 90-minute inductions and a team of expert Personal Trainers.",
    href: "/gym",
    image: "/assets/photos/gym.jpg",
    alt: "Technogym gym floor at Lanes",
  },
  {
    index: "02",
    title: "Swimming",
    body: "A 25-metre pool heated to 29°, with spa pool, sauna and steam room to restore body and mind.",
    href: "/swimming",
    image: "/assets/photos/pool-2.jpg",
    alt: "25 metre heated swimming pool at Lanes",
  },
  {
    index: "03",
    title: "Classes",
    body: "Over 100 group exercise classes every week — from Les Mills and HIIT to Yoga, Pilates and Aqua.",
    href: "/classes",
    image: "/assets/photos/hiit.jpg",
    alt: "Group exercise class at Lanes",
  },
  {
    index: "04",
    title: "Wellness",
    body: "Massage, beauty and holistic treatments in the Wellness Rooms — your space to truly unwind.",
    href: "/wellness-rooms",
    image: "/assets/photos/wellness.jpg",
    alt: "Treatment in the Wellness Rooms at Lanes",
  },
];

const testimonials = [
  {
    quote:
      "I have recently joined Lanes and I love it! I always get a hello and goodbye every time I visit. The staff are welcoming, friendly and approachable.",
    name: "Lilly",
  },
  {
    quote:
      "The actual gym is great — lots of space and great equipment. Best gym I've ever been to, always a great atmosphere.",
    name: "Katie Harkness",
  },
  {
    quote:
      "Superb gym. Large and well equipped. Full size indoor swimming pool. Very helpful and knowledgeable staff. The best gym I've ever used.",
    name: "Peter Allen",
  },
  {
    quote:
      "The place is lovely and clean with great facilities! All the instructors are friendly and the management team can't do enough for you.",
    name: "Paul M",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden grain">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/pool-hero.jpg"
            alt="Members swimming in the 25 metre pool at Lanes Health Clubs"
            fill
            priority
            className="animate-kenburns object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-28 pt-44 md:px-8">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <OpenNow className="border border-cream/15 bg-ink/40 px-4 py-2 backdrop-blur-sm" />
              <span className="eyebrow text-cream/70">Rustington · West Sussex</span>
            </div>
          </Reveal>

          <RevealWords
            as="h1"
            text="Break the ordinary"
            delay={0.15}
            className="font-display font-light leading-[0.95] tracking-tight text-cream text-[clamp(3.4rem,10vw,9rem)]"
          />
          <RevealWords
            as="h2"
            text="with Lanes"
            delay={0.4}
            className="font-display font-light italic leading-[0.95] tracking-tight text-lanes text-[clamp(3.4rem,10vw,9rem)]"
          />

          <Reveal delay={0.7}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/book-a-tour">Book a tour</ButtonLink>
              <ButtonLink href="/membership" variant="outline">
                View memberships
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* Vertical edge detail */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-4 [writing-mode:vertical-rl] xl:flex">
          <span className="h-16 w-px bg-cream/25" />
          <span className="text-[0.62rem] uppercase tracking-[0.4em] text-cream/50">
            Est. 2015 — Golfers Lane, Angmering
          </span>
          <span className="h-16 w-px bg-cream/25" />
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[0.62rem] uppercase tracking-[0.3em] text-cream/60 md:flex">
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ——— MANIFESTO MARQUEE ——— */}
      <section className="border-b border-line py-6 md:py-8" aria-hidden>
        <Marquee>
          {["Swim", "Train", "Recover", "Socialise", "Repeat"].map((w) => (
            <span key={w} className="flex items-center">
              <span className="mx-6 font-display text-3xl font-light italic text-cream/50 md:mx-10 md:text-5xl">
                {w}
              </span>
              <span className="size-2 rounded-full bg-lanes/60" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ——— STATS ——— */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {site.stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 md:px-10 md:py-14 ${
                i !== 0 ? "border-l border-line" : ""
              } ${i >= 2 ? "max-md:border-t max-md:border-line" : ""} ${i === 2 ? "max-md:border-l-0" : ""}`}
            >
              <p className="font-display text-4xl font-light text-cream md:text-6xl">
                {s.plain ? `${s.value}${s.suffix}` : <CountUp value={s.value} suffix={s.suffix} />}
              </p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-fog">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— FACILITIES ——— */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="01"
            eyebrow="The club"
            title="Everything under one roof"
            description="A membership at Lanes means joining a local, friendly community with access to state-of-the-art facilities — and over 100 exercise classes every week."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/about" variant="outline">
              Our story
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-ink">
              <Link href={f.href} className="group relative block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    className="object-cover saturate-[0.55] transition-all duration-[1.2s] ease-out group-hover:scale-[1.06] group-hover:saturate-100"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10 transition-opacity duration-700 group-hover:via-ink/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 md:p-9">
                  <div>
                    <p className="eyebrow text-lanes">{f.index}</p>
                    <h3 className="mt-3 font-display text-3xl font-light text-cream md:text-4xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
                      {f.body}
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center border border-cream/25 text-cream transition-all duration-500 group-hover:border-lanes group-hover:bg-lanes group-hover:text-ink">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Partners */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 border-t border-line pt-10">
            <span className="eyebrow text-fog/70">Powered by</span>
            {["Technogym", "Les Mills", "Swim England", "Zumba"].map((b) => (
              <span
                key={b}
                className="font-display text-xl italic text-cream/45 transition-colors duration-500 hover:text-cream/80 md:text-2xl"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ——— MEMBERSHIP TEASER ——— */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            index="02"
            eyebrow="Membership"
            title="Find your fit"
            description="Join a local friendly community with access to the gym, swimming pool, spa pool, sauna, steam rooms and 100+ exercise classes — plus swimming lessons, personal training, Wellness Room treatments and social events."
            align="center"
          />

          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
            {headlineMemberships.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1} className="bg-ink-2">
                <div
                  className={`relative flex h-full flex-col p-8 md:p-10 ${
                    m.featured ? "bg-ink-3" : ""
                  }`}
                >
                  {m.featured && (
                    <span className="absolute right-6 top-6 bg-lanes px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ink">
                      Most popular
                    </span>
                  )}
                  <p className="eyebrow text-lanes">{m.name}</p>
                  <p className="mt-6 font-display text-5xl font-light text-cream md:text-6xl">
                    {m.price}
                    <span className="ml-1 text-base text-fog">{m.cadence}</span>
                  </p>
                  <p className="mt-2 text-xs text-flame">{m.joiningFee}</p>
                  <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-6">
                    {m.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-center gap-3 text-sm text-cream/75"
                      >
                        <span className="size-1 rounded-full bg-lanes" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink
                      href="/membership"
                      variant={m.featured ? "primary" : "outline"}
                      className="w-full justify-center"
                    >
                      Get started
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              href="/membership"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-fog underline decoration-cream/30 underline-offset-4 transition-colors hover:text-lanes"
            >
              View all 11 membership options — including day passes, joint and corporate
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ——— APP ——— */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div
                className="pointer-events-none absolute inset-8 rounded-full opacity-20 blur-3xl"
                style={{ background: "#70b139" }}
              />
              <Image
                src="/assets/app/phones.png"
                alt="Lanes Health Clubs app on iPhone"
                width={1024}
                height={928}
                className="relative w-full object-contain"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              index="03"
              eyebrow="The Lanes app"
              title="Your club in your pocket"
              description="Book classes and Personal Training sessions through the Lanes Health Clubs app — and access hundreds of workouts from your phone, iPad or tablet. Track your progress on every Technogym machine."
            />
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/assets/app/apple.png"
                    alt="Download on the App Store"
                    width={170}
                    height={56}
                    className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/assets/app/google.png"
                    alt="Get it on Google Play"
                    width={170}
                    height={56}
                    className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— TESTIMONIALS MARQUEE ——— */}
      <section className="border-y border-line bg-ink-2 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-center text-lanes">Members&rsquo; voices</p>
        </Reveal>
        <Marquee slow className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mx-5 w-[min(85vw,30rem)] shrink-0 border border-line bg-ink p-8 md:p-10"
            >
              <Quote size={22} className="text-lanes" />
              <blockquote className="mt-5 font-display text-lg font-light leading-relaxed text-cream/90 md:text-xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src="/assets/logo/green-circle.png"
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 object-contain"
                />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-fog">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </section>

      <CTABand
        cta={{ label: "Enquire now", href: "/book-a-tour" }}
      />
    </>
  );
}
