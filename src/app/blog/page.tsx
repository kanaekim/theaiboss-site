import type { Metadata } from "next";
import Link from "next/link";
import { BeehiivForm } from "@/components/BeehiivForm";
import { getPosts, formatDate } from "@/lib/blog";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: {
    absolute: "AI Strategy Blog for CEOs & Executives | The AI Boss",
  },
  description:
    "Weekly AI strategy insights from a sitting CEO. No hype, no tutorials — just what leaders need to know about AI adoption and transformation.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            The AI Boss Blog
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            AI strategy from the CEO chair. No hype. No tutorials. Just what
            leaders need to know.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Join CEOs getting weekly AI insights delivered to their inbox.
          </p>
          <div className="mt-8">
            <BeehiivForm />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.thumbnail ? (
                    // Beehiiv images are already Cloudflare-optimized (format=auto)
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={192}
                    />
                  ) : (
                    <div className="w-full h-48 bg-[var(--color-foreground)] flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        The AI Boss
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2">
                      {formatDate(post.pubDate)}
                    </p>
                    <h2 className="text-lg font-bold leading-snug">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[var(--color-muted)] mb-8">
                Posts are on the way. Subscribe to the AI Leadership Briefing
                for weekly insights.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
              >
                Subscribe to the Newsletter
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
