import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { nav, site } from "@/lib/data/site";
import { OpenNow } from "@/components/ui/open-now";

const extraLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Group Cycle", href: "/group-cycle" },
  { label: "Book a Tour", href: "/book-a-tour" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      {/* Giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display leading-[0.75] text-outline text-[clamp(8rem,22vw,22rem)] translate-y-[22%] opacity-60"
      >
        LANES
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logo/white-circle.png"
              alt="Lanes Health Clubs"
              width={88}
              height={88}
              className="h-20 w-20 object-contain"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-fog">
              Lanes Health Clubs Rustington is for everyone — being a member means
              being part of a unique community. State-of-the-art gym, 25-metre
              pool, Wellness Rooms, Café and 100+ exercise classes.
            </p>
            <div className="mt-6">
              <OpenNow />
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: site.socials.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: site.socials.facebook, label: "Facebook" },
                { icon: LinkedinIcon, href: site.socials.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center border border-line text-fog transition-colors hover:border-lanes hover:text-lanes"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer">
            <h3 className="eyebrow text-fog">Explore</h3>
            <ul className="mt-5 space-y-3">
              {[...nav, ...extraLinks.slice(0, 2)].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-lanes"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* More */}
          <nav aria-label="More">
            <h3 className="eyebrow text-fog">More</h3>
            <ul className="mt-5 space-y-3">
              {extraLinks.slice(2).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-lanes"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.bookingPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-lanes"
                >
                  Book Classes
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-fog">Visit us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream/70 transition-colors hover:text-lanes"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-lanes" />
                  {site.address}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-cream/70 transition-colors hover:text-lanes"
                >
                  <Phone size={16} className="shrink-0 text-lanes" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-cream/70 transition-colors hover:text-lanes"
                >
                  <Mail size={16} className="shrink-0 text-lanes" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-fog">
              <p className="font-semibold text-cream/60 uppercase tracking-wider">Opening times</p>
              <p className="mt-2">Monday – Friday: 06:00 – 22:00</p>
              <p>Saturday – Sunday: 08:00 – 20:00</p>
              <p>Bank Holidays: 08:00 – 20:00</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[0.68rem] uppercase tracking-[0.18em] text-fog md:flex-row md:items-center">
          <p>Lanes Health Clubs © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-cream">
              Contact us
            </Link>
            <a
              href="https://laneshealthclubs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="https://laneshealthclubs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
