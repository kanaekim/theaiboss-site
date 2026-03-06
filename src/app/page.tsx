import type { Metadata } from "next";
import Link from "next/link";
import { MetricsBar } from "@/components/MetricsBar";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "The AI Boss | Kathy Slowinski — CEO, AI Keynote Speaker, Executive Advisor",
  description:
    "Most CEOs are still debating AI. Kathy Slowinski used it to eliminate 96% of her codebase, automate 80% of support, and quadruple revenue per employee. Book a CEO Briefing.",
};

const builtItems = [
  {
    title: "Weds.ai",
    description: "Weekly AI hackathons where every employee builds with AI.",
    metric: "52 sessions/year",
  },
  {
    title: "Second Brains",
    description:
      "AI assistants trained on institutional knowledge, replacing tribal expertise.",
    metric: "Company-wide adoption",
  },
  {
    title: "AI-Native Support",
    description:
      "Customer support rebuilt from scratch with AI handling the majority of volume.",
    metric: "80% AI-handled",
  },
  {
    title: "Codebase Compression",
    description:
      "Legacy codebase reduced to its essential core through AI-assisted rewriting.",
    metric: "3M to 125K lines",
  },
];

const frameworks = [
  {
    title: "The Slowinski Pyramid",
    description:
      "A prioritization model that tells you exactly where AI creates value first — and where it wastes money. Stop guessing. Start sequencing.",
  },
  {
    title: "The Weds.ai Method",
    description:
      "Weekly, non-optional AI hackathons that turn every employee into an AI practitioner. Not training. Not workshops. Hands-on building, every single week.",
  },
  {
    title: "Leadership-First Adoption",
    description:
      "The CEO uses AI daily before asking anyone else to. No delegating transformation to the IT department. You go first.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Your AI Strategy Is a PowerPoint Deck.
            <br />
            Mine Runs a $110M Company.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Most CEOs are still debating AI. Kathy Slowinski already used it to
            eliminate 96% of her codebase, automate 80% of support, and
            quadruple revenue per employee.
          </p>
          <p className="mt-6 text-base text-gray-400 max-w-2xl leading-relaxed">
            The difference between companies that talk about AI and companies
            that run on it is one thing: a CEO who has actually done it. Not a
            consultant. Not an advisor who read a white paper. A sitting CEO who
            rebuilt a real company from the inside out — and created the
            frameworks so you can do it too.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Book a CEO Briefing
            </Link>
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Explore the Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsBar />
      
{/* Hero Video */}
      <section className="bg-[var(--color-foreground)] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <video
            className="w-full rounded-xl shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      
      
      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 text-center">
            <div className="px-5 py-2 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-foreground)]">
              YPO AI Champion
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              CEO of Trilogy &middot; $110M Revenue &middot; ~40 People
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <TestimonialPlaceholder context="CEO peer or event organizer" />
          </div>
        </div>
      </section>

      {/* What Kathy Built */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Kathy Built
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            Not theory. Not projections. Real systems running inside a real
            company, right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {builtItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-sm font-semibold text-[var(--color-cta)]">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Frameworks */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The Frameworks
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            Battle-tested systems you can deploy inside your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frameworks.map((fw) => (
              <div
                key={fw.title}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-lg font-bold mb-3">{fw.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
            >
              Explore the Full Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        dark
        headline="Stop Planning. Start Transforming."
        body="The CEOs who act on AI now will define the next decade. The rest will wonder what happened."
        primaryLabel="Book a CEO Briefing"
        secondaryLabel="Explore the Playbook"
        secondaryHref="/playbook"
      />
    </>
  );
}
