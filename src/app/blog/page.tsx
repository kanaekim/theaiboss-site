import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | AI Strategy for CEOs",
  description:
    "AI strategy insights from a sitting CEO. Weekly articles on AI adoption, leadership, and transformation for executives and boards.",
};

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://rss.beehiiv.com/feeds/DAoX2ngnkW.xml",
      { next: { revalidate: 3600 } }
    );
    const xml = await res.text();

    const items: BlogPost[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];

      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>(.*?)<\/title>/)?.[1] ??
        "";

      const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

      const thumbnail =
        item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ??
        item.match(/<media:content[^>]+url="([^"]+)"/)?.[1] ??
        item.match(/<description>[\s\S]*?<img[^>]+src="([^"]+)"/)?.[1] ??
        item.match(/<content:encoded>[\s\S]*?<img[^>]+src="([^"]+)"/)?.[1] ??
        "";

      items.push({ title, link, pubDate, thumbnail });
    }

    return items;
  } catch {
    return [];
  }
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            The AI Boss Blog
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            AI strategy from the CEO chair. No hype. No tutorials. Just what
            leaders need to know.
          </p>
          <div className="mt-10 max-w-md mx-auto">
            <iframe
              src="https://subscribe-forms.beehiiv.com/f9e5ca6c-91f8-433d-99ef-927d06f14f2e"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "80px", background: "transparent", border: "none" }}
            />
          </div>
          <div className="mt-6">
            <Link href="/newsletter" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors">
              Subscribe to the Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-48 object-cover"
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
                  </div>
                </a>
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
