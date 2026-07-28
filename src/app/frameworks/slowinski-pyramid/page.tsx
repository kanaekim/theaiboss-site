import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: {
    absolute: "The Slowinski Pyramid — AI Prioritization Framework for CEOs | The AI Boss",
  },
  description:
    "The Slowinski Pyramid tells you exactly where AI creates value in your business — and where it wastes money. A three-tier model for sequencing AI investments correctly.",
  alternates: { canonical: "/frameworks/slowinski-pyramid" },
  openGraph: { url: "/frameworks/slowinski-pyramid" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Slowinski Pyramid: How to Sequence AI Investments",
  description:
    "A three-tier framework for prioritizing AI investments in order of ROI: Tier 1 (repetitive tasks), Tier 2 (skill gaps), Tier 3 (urgent projects).",
  author: { "@type": "Person", name: "Kathy Slowinski" },
  publisher: { "@type": "Organization", name: "The AI Boss" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tier 1 — Repetitive Tasks",
      text: "Automate what people already hate doing. This is where you start — and where the biggest, fastest wins live.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Tier 2 — Skill Gaps",
      text: "Use AI to give your team capabilities they do not have yet. Design without a designer. Analyze data without a data scientist.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Tier 3 — Urgent Projects",
      text: "Throw AI at the fire drills. When something needs to ship yesterday, AI compresses the timeline.",
    },
  ],
};

const tiers = [
  {
    number: "Tier 1",
    subtitle: "The Base — Start Here",
    title: "Repetitive Tasks",
    description:
      "Automate the work that people already hate doing — data entry, status updates, report generation, meeting notes, email triage. This is where AI pays for itself fastest, and where your team will thank you for the change.",
    examples: [
      "Weekly status reports assembled automatically",
      "Customer support FAQ responses handled by AI",
      "Invoice processing and data extraction",
      "Meeting transcripts and action items",
      "Social media scheduling and drafting",
    ],
    result: "At Trilogy: codebase went from 3M to 125K lines of code — by applying AI to the repetitive work of rewriting legacy code.",
    width: "max-w-2xl",
  },
  {
    number: "Tier 2",
    subtitle: "The Middle — Expand Capability",
    title: "Skill Gaps",
    description:
      "Use AI to give your team capabilities they do not have. This is where a small team punches far above its weight. You do not need a designer when AI can produce professional-grade visuals. You do not need a data scientist when AI can analyze a dataset in seconds.",
    examples: [
      "Design mockups without a full-time designer",
      "Data analysis without a data science team",
      "First-draft copywriting across all functions",
      "Legal document review before paying attorney rates",
      "Financial modeling without a dedicated analyst",
    ],
    result: "At Trilogy: 40 people manage $110M in revenue across three SaaS brands — because every employee has AI filling their skill gaps.",
    width: "max-w-lg",
  },
  {
    number: "Tier 3",
    subtitle: "The Top — Accelerate Under Pressure",
    title: "Urgent Projects",
    description:
      "Once your team is proficient with Tiers 1 and 2, AI becomes your crisis tool. When a board presentation is due Friday, a competitor launches something unexpected, or a major customer has a problem — AI compresses the timeline. You can only use the top of the pyramid if you have built the base.",
    examples: [
      "Board presentation ready in hours instead of weeks",
      "Competitive response drafted overnight",
      "Product spec written in a day instead of a month",
      "Crisis communications drafted and reviewed in minutes",
      "Due diligence materials assembled under deadline",
    ],
    result: "At Trilogy: board prep collapsed from a full day to 90 minutes — a Tier 3 win built on Tier 1 and Tier 2 foundations.",
    width: "max-w-sm",
  },
];

export default function SlowinskiPyramidPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />

      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <Breadcrumb
            items={[
              { name: "Frameworks", href: "/frameworks" },
              { name: "The Slowinski Pyramid", href: "/frameworks/slowinski-pyramid" },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            The Slowinski Pyramid
          </h1>
          <p className="mt-4 text-xl text-[var(--color-cta)] font-semibold">
            Where AI Creates Value First
          </p>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Most companies deploy AI randomly — a tool here, a pilot there — and wonder why it does not add up. The Slowinski Pyramid is a three-tier prioritization model that tells you exactly where to start, what comes next, and how to sequence AI investments for compounding returns.
          </p>
          <p className="mt-4 text-base text-gray-400 max-w-2xl">
            You cannot start at the top. The organization has to earn its way up.
          </p>
        </div>
      </section>

      {/* The Core Idea */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-4">
              The Core Insight
            </div>
            <p className="text-lg sm:text-xl leading-relaxed mb-4">
              Every company has three types of AI opportunities. Most companies chase the flashy ones first (Tier 3). That is why most AI initiatives fail. The Pyramid inverts the instinct: start at the base, build competence and confidence, then move up.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              The sequence matters because Tier 1 wins pay for Tier 2 experiments. Tier 2 competence makes Tier 3 possible. Skip the base and you build on nothing.
            </p>
          </div>
        </div>
      </section>

      {/* Pyramid Visual + Tiers */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The Three Tiers
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Read from bottom to top. That is the order to deploy.
          </p>

          <div className="flex flex-col items-center gap-3 mb-20">
            {[...tiers].reverse().map((tier) => (
              <div
                key={tier.number}
                className={`w-full ${tier.width} bg-[var(--color-foreground)] text-white rounded-lg p-5 sm:p-6 text-center`}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">
                  {tier.number}
                </div>
                <h3 className="text-lg font-bold">{tier.title}</h3>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {tiers.map((tier, i) => (
              <div key={tier.number} className="border border-[var(--color-border)] rounded-xl p-8 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="sm:w-24 shrink-0">
                    <div className="text-3xl font-bold text-[var(--color-cta)]">{i + 1}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mt-1">{tier.number}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">{tier.subtitle}</p>
                    <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed mb-6">{tier.description}</p>
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Examples</h4>
                    <ul className="space-y-2 mb-6">
                      {tier.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                          <span className="text-[var(--color-cta)] font-bold mt-0.5 shrink-0">/</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[var(--color-surface)] rounded-lg p-4 text-sm">
                      <span className="font-semibold">At Trilogy: </span>
                      <span className="text-[var(--color-muted)]">{tier.result.replace("At Trilogy: ", "")}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Why Most Companies Get the Pyramid Wrong
          </h2>
          <div className="space-y-6">
            {[
              {
                mistake: "Starting at Tier 3",
                explanation: "Every leadership team wants the flashy use case — AI doing strategy, AI in the boardroom, AI running autonomous agents. But without Tier 1 and Tier 2 foundations, the organization has no competence to execute on Tier 3 ideas. They become expensive pilots that never ship.",
              },
              {
                mistake: "Treating all Tiers equally",
                explanation: "Tier 1 should represent 70% of your first year of AI investment. It is unglamorous. It is process automation. It is exactly where the money is. Companies that skip it in favor of Tier 2 experiments find themselves spending on tools their team does not know how to use.",
              },
              {
                mistake: "Letting IT own the Pyramid",
                explanation: "The Pyramid is a business prioritization tool, not a technology roadmap. When IT owns it, it becomes a vendor evaluation process. The CEO needs to own this — matching business pain points to the tiers, not evaluating software features.",
              },
            ].map((item) => (
              <div key={item.mistake} className="border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.mistake}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Frameworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/frameworks/wedsai-method" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">Next Framework</div>
              <div className="font-bold">The Weds.ai Method →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">How to build the Tier 1 muscle, one Wednesday at a time.</div>
            </Link>
            <Link href="/playbook" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">See It In Context</div>
              <div className="font-bold">The Full Playbook →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">How the Pyramid fits into the 12-month transformation roadmap.</div>
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA
        dark
        headline="Know the Pyramid. Now Build the Plan."
        body="Book a CEO Briefing to map the Slowinski Pyramid against your specific business — and find out exactly where your Tier 1 wins are."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
      />
    </>
  );
}
