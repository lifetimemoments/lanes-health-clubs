import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-lanes text-ink hover:bg-lanes-bright border border-lanes hover:border-lanes-bright",
  outline:
    "border border-cream/25 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  ghost: "text-cream/70 hover:text-cream border border-transparent",
};

const base =
  "group/btn inline-flex items-center gap-2.5 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-out";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  arrow = true,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const arrowIcon = arrow ? (
    <ArrowUpRight
      size={14}
      strokeWidth={2.4}
      className="transition-transform duration-500 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
    />
  ) : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrowIcon}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
      {arrowIcon}
    </Link>
  );
}
