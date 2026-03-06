import type { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "The AI Boss Framework: How to 4x Revenue Without 4x Headcount",
  description:
    "The proven 3-part framework used to transform a 40-person company from zero AI to 80% AI-assisted operations. Includes the Slowinski Pyramid, Weds.ai Method, and a full 12-month roadmap.",
};

const objections = [
  {
    objection: '"We do not have time for a weekly hackathon."',
    answer:
      "You do not have time not to. Every week you skip is a week your competitors learn something your team did not.",
  },
  {
    objection: '"Our people are not technical enough."',
    answer:
      "That is exactly the point. Weds.ai is designed so that non-technical employees build with AI from week one. The tools do the heavy lifting.",
  },
  {
    objection: '"What if people build things that do not work?"',
    answer:
      "They will. That is the process. Failed experiments presented publicly create more organizational learning than polished decks presented privately.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    timeline: "Days 1-90",
    title: "Foundation",
    items: [
      "Launch Weds.ai with your first team",
      "CEO commits to daily AI usage",
      "Map the Slowinski Pyramid for your organization",
      "Focus exclusively on Tier 1 (repetitive tasks)",
    ],
  },
  {
    phase: "Phase 2",
    timeline: "Months 4-6",
    title: "Expansion",
    items: [
      "Move to Tier 2 projects (skill gaps)",
      "Identify and empower AI champions in each department",
      "Expand Weds.ai across the full organization",
      "Begin measuring AI-assisted work percentage",
    ],
  },
  {
    phase: "Phase 3",
    timeline: "Months 7-12",
    title: "Transformation",
    items: [
      "Tackle Tier 3 (urgent, high-stakes projects)",
      "Restructure workflows around AI-native processes",
      "Build an internal AI knowledge base",
      "Measure and report on revenue-per-headcount gains",
    ],
  },
];

export default function PlaybookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Most Companies Adopt AI Bottom-Up.
            <br />
            That Is Why Most Companies Fail at AI.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            The AI Boss Framework is the leadership-driven system that took one
            company from zero AI to 80% AI-assisted operations, 4x revenue
            efficiency, and a 96% reduction in codebase — in under 24 months.
          </p>
          <p className="mt-6 text-base text-gray-400 max-w-2xl leading-relaxed">
            This is not a tools list. It is not a prompt library. It is an
            operating system for building an AI-native organization.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Book a CEO Briefing
            </Link>
          </div>
        </div>
      </section>

      {/* TL;DR Box */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-4">
              TL;DR
            </div>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              In April 2023, Trilogy ($110M revenue, ~40 people) had zero AI
              adoption. Within 24 months: 4x revenue per headcount, codebase
              reduced from 3M to 125K lines, board prep collapsed from a full
              day to 90 minutes.
            </p>
            <p className="text-[var(--color-muted)] mb-2 font-medium">
              Three things made it happen:
            </p>
            <ol className="list-decimal list-inside text-[var(--color-muted)] space-y-1">
              <li>The Slowinski Pyramid</li>
              <li>The Weds.ai Method</li>
              <li>Leadership-First Adoption</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 1: The Slowinski Pyramid */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The Slowinski Pyramid
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto text-lg">
            How to Decide Where AI Goes First
          </p>

          {/* Pyramid visualization */}
          <div className="flex flex-col items-center gap-4 mb-16">
            {/* Tier 3 — Top */}
            <div className="w-full max-w-sm bg-[var(--color-foreground)] text-white rounded-lg p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                Tier 3 — Top
              </div>
              <h3 className="text-lg font-bold mb-2">Urgent Projects</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Throw AI at the fire drills. When something needs to ship
                yesterday, AI compresses the timeline.
              </p>
            </div>

            {/* Tier 2 — Middle */}
            <div className="w-full max-w-lg bg-[var(--color-foreground)] text-white rounded-lg p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                Tier 2 — Middle
              </div>
              <h3 className="text-lg font-bold mb-2">Skill Gaps</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Use AI to give your team capabilities they do not have yet.
                Design without a designer. Analyze data without a data
                scientist.
              </p>
            </div>

            {/* Tier 1 — Base */}
            <div className="w-full max-w-2xl bg-[var(--color-foreground)] text-white rounded-lg p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                Tier 1 — Base
              </div>
              <h3 className="text-lg font-bold mb-2">Repetitive Tasks</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Automate what people already hate doing. This is where you start
                — and where the biggest, fastest wins live.
              </p>
              <div className="mt-4 text-2xl font-bold text-[var(--color-cta)]">
                3M to 125K lines of code
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <div className="max-w-3xl mx-auto border-l-4 border-[var(--color-cta)] pl-6 py-2">
            <p className="text-xl sm:text-2xl font-medium italic leading-relaxed">
              &ldquo;You cannot start at the top of the pyramid. The
              organization has to earn its way up.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Weds.ai Method */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The Weds.ai Method
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-4 max-w-2xl mx-auto text-lg">
            The Weekly Engine That Makes AI Adoption Stick
          </p>
          <p className="text-center text-[var(--color-foreground)] font-semibold mb-16 max-w-2xl mx-auto">
            4 Hours of Building. 1 Hour of Showing. Every Week. Non-Optional.
          </p>

          {/* Time breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-cta)] mb-2">
                4 hrs
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-2">
                Building
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                Every employee works on a real AI project. Not training. Not
                watching demos. Hands on keyboard.
              </p>
            </div>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-cta)] mb-2">
                1 hr
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-2">
                Demo
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                Show what you built. Successes and failures. The whole company
                watches. Leadership included.
              </p>
            </div>
          </div>

          {/* Rules */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-bold mb-6">The Rules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Participation is not optional",
                "Only real work counts — no toy projects",
                "Failure is presented, not hidden",
                "Leadership participates alongside everyone",
              ].map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4"
                >
                  <span className="text-[var(--color-cta)] font-bold mt-0.5 shrink-0">
                    /
                  </span>
                  <span className="text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Objections */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-bold mb-6">Common Objections</h3>
            <div className="space-y-6">
              {objections.map((item) => (
                <div
                  key={item.objection}
                  className="border border-[var(--color-border)] rounded-xl p-6"
                >
                  <p className="font-semibold mb-2">{item.objection}</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stat callout */}
          <div className="bg-[var(--color-foreground)] text-white rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="text-5xl sm:text-6xl font-bold mb-4">80%</div>
            <p className="text-lg text-gray-300">
              of all work at Trilogy is now AI-assisted — built one Wednesday at
              a time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership Requirements */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            AI Adoption Is a Leadership Problem, Not a Technology Problem
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto text-lg">
            The CEO must spend 10-25% of their time using AI directly. Not
            reviewing reports about AI. Using it.
          </p>

          {/* CEO usage examples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {[
              {
                label: "Morning",
                description:
                  "Start the day with AI. Use it to triage email, summarize overnight activity, draft responses.",
              },
              {
                label: "Meetings",
                description:
                  "Bring AI output to every meeting. Show the team what AI-informed decision-making looks like in practice.",
              },
              {
                label: "Strategy",
                description:
                  "Use AI for scenario modeling, competitive analysis, and strategic planning — not just delegation.",
              },
              {
                label: "Communication",
                description:
                  "Draft board materials, investor updates, and company-wide messaging with AI as your first editor.",
              },
            ].map((example) => (
              <div
                key={example.label}
                className="bg-white border border-[var(--color-border)] rounded-xl p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                  {example.label}
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cascade effect */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-bold mb-6 text-center">
              The Cascade Effect
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              {[
                {
                  title: "Permission Granted",
                  body: "When the CEO uses AI publicly, every employee gets implicit permission to do the same.",
                },
                {
                  title: "Quality Standards Set",
                  body: "The CEO's usage defines what good AI output looks like. The bar is set from the top.",
                },
                {
                  title: "Strategy Grounded",
                  body: "AI strategy built by someone who uses AI daily is fundamentally different from strategy built by committee.",
                },
              ].map((item, i) => (
                <div key={item.title} className="flex-1 flex items-stretch">
                  <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 flex flex-col">
                    <div className="text-sm font-bold text-[var(--color-cta)] mb-1">
                      {i + 1}.
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat callout */}
          <div className="bg-[var(--color-foreground)] text-white rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="text-3xl sm:text-4xl font-bold mb-4">
              Board prep: full day → 90 minutes
            </div>
            <p className="text-lg text-gray-300">
              When the CEO uses AI daily, even the most complex executive tasks
              compress dramatically.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The 12-Month Roadmap */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The 12-Month Roadmap
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto text-lg">
            From zero AI to AI-native operations in three phases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((phase, i) => (
              <div
                key={phase.phase}
                className="border border-[var(--color-border)] rounded-xl p-8 flex flex-col"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">
                  {phase.phase}
                </div>
                <div className="text-sm text-[var(--color-muted)] mb-3">
                  {phase.timeline}
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-3 flex-1">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[var(--color-muted)] leading-relaxed"
                    >
                      <span className="text-[var(--color-cta)] font-bold mt-0.5 shrink-0">
                        /
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        dark
        headline="You Have the Framework. Now You Need the First 90 Days."
        body="What it cannot tell you is what this looks like inside your specific company. That is what the consultation is for."
        secondaryLabel="Download the Complete Framework PDF"
        secondaryHref="/resources"
      />
    </>
  );
}
