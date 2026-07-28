import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPosts, getPost, formatDate } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BeehiivForm } from "@/components/BeehiivForm";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.title
    ? `${post.title} | The AI Boss`
    : "The AI Boss Blog";

  return {
    title: { absolute: title },
    description: post.description || "AI strategy insights from Kathy Slowinski, CEO of Trilogy.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title: post.title || title,
      description: post.description || undefined,
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
      publishedTime: post.pubDate ? new Date(post.pubDate).toISOString() : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description || undefined,
    image: post.thumbnail || undefined,
    datePublished: post.pubDate ? new Date(post.pubDate).toISOString() : undefined,
    url: `https://theaiboss.ai/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "Kathy Slowinski",
      url: "https://theaiboss.ai/about",
    },
    publisher: {
      "@type": "Organization",
      name: "The AI Boss",
      logo: { "@type": "ImageObject", url: "https://theaiboss.ai/logo.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://theaiboss.ai/blog/${slug}`,
    },
  };

  return (
    <>
      <JsonLd data={ARTICLE_SCHEMA} />

      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <Breadcrumb
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />
          {post.pubDate && (
            <p className="text-sm font-medium text-[var(--color-cta)] uppercase tracking-wider mb-4">
              {formatDate(post.pubDate)}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              {post.description}
            </p>
          )}
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/kathy_hero.png"
              alt="Kathy Slowinski, CEO and AI keynote speaker"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover object-top"
            />
            <div>
              <div className="text-sm font-semibold">Kathy Slowinski</div>
              <div className="text-xs text-gray-400">CEO, Trilogy · The AI Boss</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="bg-[var(--color-foreground)]">
          <div className="max-w-3xl mx-auto px-6 pb-0">
            {/* External CDN image — already optimized by Beehiiv/Cloudflare */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full rounded-xl shadow-lg"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* Post Content */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Beehiiv inline styles are scoped to .beehiiv — trusted source */}
          <div
            className="beehiiv-content prose-wrapper"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Subscribe CTA */}
      <section className="bg-[var(--color-foreground)] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Get Weekly AI Insights for CEOs
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Every week, Kathy shares one AI insight from the CEO chair — no hype, no tutorials, just what leaders need to act on.
          </p>
          <BeehiivForm />
        </div>
      </section>

      {/* More Posts */}
      <section className="py-12 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-cta)] transition-colors"
          >
            Read more from The AI Boss
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
