import { Reveal, RevealWords } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function CTABand({
  title = "Break the ordinary with Lanes",
  body = "Throughout our lives our bodies change — and what we want from a health club changes too. Everyone has their own reason for joining, that's why we tailor your experience. Feeling good is as important as looking good.",
  cta = { label: "Explore membership options", href: "/membership" },
}: {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-forest/10">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full opacity-[0.13]"
        style={{ background: "radial-gradient(circle, #70b139 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-lanes">Your journey</p>
            </Reveal>
            <RevealWords
              text={title}
              delay={0.1}
              className="mt-5 font-display font-light leading-[1.02] tracking-tight text-[clamp(2.4rem,5vw,4.5rem)] text-cream"
            />
          </div>
          <Reveal delay={0.25}>
            <p className="text-fog leading-relaxed md:text-lg">{body}</p>
            <div className="mt-8">
              <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
