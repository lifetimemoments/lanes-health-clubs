import { ReactNode } from "react";

export function Marquee({
  children,
  slow,
  className = "",
}: {
  children: ReactNode;
  slow?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max items-center gap-0 ${slow ? "animate-marquee-slow" : "animate-marquee"} motion-reduce:animate-none`}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
