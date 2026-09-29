import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Shell } from "@/components/layout/shell";
import { Footer } from "@/components/layout/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laneshealthclubs.co.uk"),
  title: {
    default: "Lanes Health Clubs — Premium Health Club in Rustington",
    template: "%s | Lanes Health Clubs",
  },
  description:
    "Lanes Health Clubs Rustington — a premium health club with a state-of-the-art Technogym gym, 25-metre heated pool, 100+ weekly classes, Wellness Rooms and Café. Break the ordinary.",
  openGraph: {
    siteName: "Lanes Health Clubs",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/assets/photos/pool-hero.jpg", width: 2560, height: 1920 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream flex flex-col">
        <Providers>
          <Shell>
            <main className="flex-1">{children}</main>
            <Footer />
          </Shell>
        </Providers>
      </body>
    </html>
  );
}
