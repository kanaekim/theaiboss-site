import type { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title:
    "AI Transformation Results: 4x Revenue Per Headcount | Trilogy Case Study",
  description:
    "See the verified results of a CEO-led AI transformation: 4x revenue per headcount, 96% codebase reduction, 6x AWS savings, 80% AI-handled support. Real metrics from a real $110M company.",
};

const metrics = [
  {
    value: "4x",
    label: "Revenue per headcount",
    detail: "Same people, four times the output.",
  },
  {
    value: "96%",
    label: "Codebase reduction",
    detail: "3 million lines compressed to 125,000.",
  },
  {
    value: "6x",
    label: "AWS cost savings",
    detail: "Infrastructure spend cut by a factor of six.",
  },
  {
    value: "80%",
    label: "Support handled by AI",
    detail: "Customers answered faster, not worse.",
  },
  {
    value: "~40",
    label: "Total employees",
    detail: "Running three SaaS brands and $110M in revenue.",
  },
  {
    value: "34-yr low",
    label: "Bug backlog",
    detail: "The cleanest the codebase has been in company history.",
  },
];

const beforeAfter = [
  {
    dimension: "AI usage",
    before: "Optional, ad hoc experimentation",
    after: "Company-wide, daily, non-negotiable",
  },
  {
    dimension: "Revenue / headcount",
    before: "Baseline",
    after: "4x baseline",
  },
  {
    dimension: "Codebase",
    before: "3 million lines of legacy code",
    after: "125,000 lines, AI-rewritten",
  },
  {
    dimension: "AWS costs",
    before: "Baseline infrastructure spend",
    after: "1/6th of original spend",
  },
  {
    dimension: "Support",
    before: "Fully staffed human support team",
    after: "80% handled by AI agents",
  },
  {
    dimension: "Board prep",
    before: "Weeks of manual assembly",
    after: "AI-drafted, human-reviewed",
  },
  {
    dimension: "Product specs",
    before: "Manual requirements gathering",
    after: "AI-generated first drafts in hours",
  },
  {
    dimension: "Bug backlog",
    before: "Growing year over year",
    after: "34-year low",
  },
  {
    dimension: "Team size",
    before: "~40 employees",
    after: "~40 employees",
  },
  {
    dimension: "Approach",
    before: "Pilot programs and committees",
    after: "CEO-led, full-company adoption",
  },
];

const timeline = [
  { date: "April 2023", event: "Weds.ai launches" },
  { date: "Mid 2023", event: "Second Brains deployed company-wide" },
  { date: "Late 2023", event: "Support hits 80% AI-handled" },
  { date: "Early 2024", event: "Codebase compressed 96%" },
  { date: "Mid 2024", event: "Executive ops go AI-native" },
  { date: "Late 2024", event: "Flywheel effects compound" },
  { date: "2025", event: "4x revenue per headcount achieved" },
  { date: "2026", event: "Playbook opens to other CEOs" },
];

const departments = [
  {
    name: "Engineering",
    metric: "96% codebase reduction",
    description:
      "AI rewrote and compressed 3 million lines of legacy code down to 125,000 lines. The remaining code is cleaner, faster, and more maintainable than anything the team had shipped in three decades. Bug counts hit historic lows. Deployment speed increased dramatically.",
    keyShift:
      "From maintaining legacy systems to directing AI-assisted rewrites.",
  },
  {
    name: "Support",
    metric: "80% AI-handled",
    description:
      "Customer support was rebuilt from scratch with AI handling the majority of inbound volume. Response times dropped. Customer satisfaction held steady or improved. The human support team shifted from answering repetitive questions to handling complex escalations that actually require judgment.",
    keyShift: "From answering tickets to training and supervising AI agents.",
  },
  {
    name: "Product",
    metric: "Specs generated in hours, not weeks",
    description:
      "Product specifications that used to take weeks of cross-functional meetings are now AI-generated first drafts reviewed and refined by humans. The product team spends less time documenting and more time deciding. Iteration cycles shortened from months to weeks.",
    keyShift:
      "From requirements gathering to requirements refining.",
  },
  {
    name: "Executive",
    metric: "Board prep: weeks to hours",
    description:
      "Board presentations, investor updates, and strategic analyses are now AI-drafted and human-reviewed. The executive team spends less time assembling information and more time acting on it. Decision-making accelerated across the entire leadership layer.",
    keyShift:
      "From assembling data to interpreting and acting on AI-prepared insights.",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            The Proof Is in the P&L.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            One company. 40 people. $110M in revenue. AI transformation —
            measured in margin, not meetings.
          </p>
          <p className="mt-6 text-base text-gray-400 max-w-2xl leading-relaxed">
            Every metric on this page comes from Trilogy — a real company with
            real customers, real code, and real revenue. Nothing hypothetical.
            Nothing projected.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Book a CEO Briefing
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Download the Full Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Headline Numbers Dashboard */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            The Numbers That Changed the Argument
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[var(--color-foreground)] text-white rounded-xl p-6 sm:p-8"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {m.value}
                </div>
                <div className="text-sm sm:text-base font-semibold mb-2">
                  {m.label}
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The Trilogy Case Study */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How 40 People Outperform Companies 10x Their Size
          </h2>

          {/* Where They Started */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Where They Started</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Trilogy was a successful software company with $110M in revenue,
              but it carried the weight of decades: a bloated codebase, manual
              processes, and a team stretched thin across three SaaS brands. AI
              was being discussed, but no one was deploying it systematically.
              The CEO decided that would change — starting with herself.
            </p>
          </div>

          {/* The Turning Point */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">The Turning Point</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              In April 2023, the CEO launched Weds.ai — a weekly,
              company-wide AI hackathon where every employee builds with AI.
              Not a training program. Not an optional workshop. A mandatory,
              hands-on session every single week. The message was clear: AI is
              not a department initiative. It is how this company operates now.
            </p>
          </div>

          {/* What They Implemented */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">What They Implemented</h3>
            <div className="space-y-4">
              <div className="border border-[var(--color-border)] rounded-lg p-5 bg-white">
                <h4 className="font-bold mb-1">Weds.ai</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Weekly AI hackathons — 52 sessions per year — that turned
                  every employee into an AI practitioner. Ideas from these
                  sessions became production systems.
                </p>
              </div>
              <div className="border border-[var(--color-border)] rounded-lg p-5 bg-white">
                <h4 className="font-bold mb-1">Second Brains</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  AI assistants trained on institutional knowledge, replacing
                  tribal expertise that lived in people&apos;s heads. When
                  someone left, the knowledge stayed.
                </p>
              </div>
              <div className="border border-[var(--color-border)] rounded-lg p-5 bg-white">
                <h4 className="font-bold mb-1">AI-Native Support</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Customer support rebuilt from scratch with AI handling 80% of
                  inbound volume. Faster responses, maintained quality, freed
                  the human team for complex escalations.
                </p>
              </div>
              <div className="border border-[var(--color-border)] rounded-lg p-5 bg-white">
                <h4 className="font-bold mb-1">Codebase Compression</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  3 million lines of legacy code compressed to 125,000 through
                  AI-assisted rewrites. Cleaner, faster, and more maintainable
                  — with the lowest bug count in company history.
                </p>
              </div>
              <div className="border border-[var(--color-border)] rounded-lg p-5 bg-white">
                <h4 className="font-bold mb-1">AI-Augmented Exec Ops</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Board prep, investor updates, and strategic analysis shifted
                  to AI-drafted, human-reviewed workflows. Weeks of assembly
                  reduced to hours.
                </p>
              </div>
            </div>
          </div>

          {/* What Surprised Them */}
          <div>
            <h3 className="text-xl font-bold mb-4">What Surprised Them</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-foreground)] text-white text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="font-semibold">Culture got stronger.</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Rather than replacing people, AI gave the team leverage.
                    Employees who embraced it became dramatically more
                    productive. Morale improved because people stopped doing
                    repetitive work.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-foreground)] text-white text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="font-semibold">
                    Compounding was faster than expected.
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Each AI system made the next one easier to build. Second
                    Brains fed into support automation. Support automation
                    surfaced product insights. The flywheel effect accelerated
                    with every deployment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-foreground)] text-white text-sm font-bold flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="font-semibold">
                    Biggest resistance came from middle management, not the
                    bottom.
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Individual contributors adapted quickly. The friction came
                    from managers whose roles were built around coordination —
                    exactly the work AI replaced first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Before/After Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Before AI vs. After AI
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="text-left py-4 px-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Dimension
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Before
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold uppercase tracking-wider">
                    After
                  </th>
                </tr>
              </thead>
              <tbody>
                {beforeAfter.map((row, i) => (
                  <tr
                    key={row.dimension}
                    className={
                      i % 2 === 0
                        ? "bg-[var(--color-surface)]"
                        : ""
                    }
                  >
                    <td className="py-4 px-4 text-sm font-semibold">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 text-sm text-[var(--color-muted)]">
                      {row.before}
                    </td>
                    <td className="py-4 px-4 text-sm font-bold">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Timeline Visualization */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            From the Inside Out.
          </h2>
          <div className="relative">
           {/* Vertical line — keep at left-6 */}
<div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)]" />

{timeline.map((item, i) => (
  <div key={i} className="relative flex items-start gap-6 pl-16">
    {/* Dot — center it on the line (left-6 = 1.5rem, minus half of w-4 = 0.5rem → left-[1.25rem]) */}
    <div className="absolute left-[1.125rem] top-1 w-3.5 h-3.5 rounded-full bg-[var(--color-foreground)] border-4 border-[var(--color-surface)]" />
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
        {item.date}
      </div>
      <div className="text-base font-bold">{item.event}</div>
    </div>
  </div>
))}
            </div>
          </div>

          <p className="text-center text-[var(--color-muted)] mt-12 text-sm">
            Total consultants hired: zero. Total committees formed: zero.
          </p>
        </div>
      </section>

      {/* Section 5: Department Breakdown */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Department by Department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-lg font-bold mb-1">{dept.name}</h3>
                <div className="text-sm font-semibold text-[var(--color-cta)] mb-4">
                  {dept.metric}
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {dept.description}
                </p>
                <div className="text-sm">
                  <span className="font-semibold">Key shift:</span>{" "}
                  <span className="text-[var(--color-muted)]">
                    {dept.keyShift}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        dark
        headline="These Results Were Not Inevitable. They Were Led."
        body="Every number on this page traces back to one decision: a CEO who stopped waiting for consensus and started building."
        secondaryLabel="Explore the Playbook"
        secondaryHref="/playbook"
      />
    </>
  );
}
