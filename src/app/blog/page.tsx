import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | AI Strategy for CEOs",
  description:
    "AI strategy insights from a sitting CEO. Weekly articles on AI adoption, leadership, and transformation for executives and boards.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            The AI Boss Blog
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            AI strategy from the CEO chair. No hype. No tutorials. Just what
            leaders need to know.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl font-bold text-[var(--color-border)] mb-6">
            Coming Soon
          </div>
          <p className="text-[var(--color-muted)] mb-8">
            The blog launches with the site. In the meantime, subscribe to the
            AI Leadership Briefing for weekly insights.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Subscribe to the Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
