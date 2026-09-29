import { Reveal, RevealWords } from "./reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  dark = true,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <Reveal>
        <p className={`eyebrow flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${dark ? "text-lanes" : "text-forest"}`}>
          {index && <span className={dark ? "text-fog" : "text-fog"}>{index}</span>}
          {index && <span className="h-px w-8 bg-lanes/50" />}
          {eyebrow}
        </p>
      </Reveal>
      <RevealWords
        text={title}
        delay={0.08}
        className={`mt-5 font-display font-light leading-[1.02] tracking-tight text-[clamp(2.2rem,5.2vw,4.2rem)] ${dark ? "text-cream" : "text-ink"}`}
      />
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-6 text-base leading-relaxed md:text-lg ${dark ? "text-fog" : "text-ink/70"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
