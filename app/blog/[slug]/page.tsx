import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/sections/cta-band";
import { posts } from "@/lib/data/posts";

export function generateStaticParams() {
  return posts.filter((p) => p.body).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.body);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-44 md:px-8">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-fog transition-colors hover:text-lanes"
          >
            <ArrowLeft size={14} /> All articles
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-fog">
            {post.categories.map((c) => (
              <span key={c} className="text-lanes">{c}</span>
            ))}
            <span>{post.date}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-cream md:text-6xl">
            {post.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-cream/80">
            {post.body!.map((para, i) => (
              <p key={i} className={i === 0 ? "font-display text-2xl font-light text-cream" : "text-fog text-base leading-loose"}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </article>
      <CTABand />
    </>
  );
}
