import Image from "next/image";
import { Reveal, RevealWords } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden grain">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="animate-kenburns object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-20 pt-48 md:px-8">
        <Reveal>
          <p className="eyebrow text-lanes">{eyebrow}</p>
        </Reveal>
        <RevealWords
          as="h1"
          text={title}
          delay={0.1}
          className="mt-5 max-w-4xl font-display font-light leading-[1.0] tracking-tight text-[clamp(2.8rem,7vw,5.5rem)] text-cream"
        />
        {lead && (
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
