import { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "AI Strategy Advisor for CEOs | The AI Boss",
  description:
    "Work directly with a CEO AI consultant who 4x'd revenue per employee using AI. Kathy Slowinski advises CEOs of $50M-$500M companies on AI strategy that actually works.",
};

const phases = [
  {
    number: "01",
    title: "90-Day AI Roadmap",
    description:
      "A confidential diagnostic of your business, your team, and your competitive landscape. You walk away with a prioritized, sequenced plan for where AI creates value first — not a generic maturity model, but a roadmap built on your actual numbers.",
  },
  {
    number: "02",
    title: "The Slowinski Pyramid",
    description:
      "A prioritization framework that tells you exactly where to deploy AI for maximum ROI. Stop wasting budget on AI experiments that do not move revenue. Start with the layer that pays for everything else.",
  },
  {
    number: "03",
    title: "The Weds.ai Method",
    description:
      "A weekly, company-wide AI adoption system that turns your team into practitioners — not spectators. This is not a training program. It is a cultural operating system that compounds every single week.",
  },
];

const deliverables = [
  "90-Day AI Roadmap customized to your business",
  "Slowinski Pyramid analysis for your organization",
  "Weds.ai implementation playbook for your team",
  "Monthly 1:1 CEO advisory sessions",
  "On-call access for board prep and investor questions",
  "Quarterly progress review and roadmap recalibration",
];

const idealClients = [
  "CEOs of $50M-$500M companies who know AI matters but are not sure where to start",
  "Leaders who have tried AI pilots that went nowhere",
  "CEOs preparing for board-level AI conversations they cannot afford to fumble",
  "Executives who are tired of consultants who have never run a company",
  "YPO, EO, and Vistage members looking for peer-level AI guidance",
];

const notForYou = [
  "You want a vendor to build AI tools for you (this is strategy, not implementation)",
  "You are looking for a chatbot or a single-use AI tool",
  "You are not willing to personally engage with AI as a daily practice",
  "Your company is pre-revenue or pre-product-market-fit",
];

const comparisonRows = [
  {
    category: "Has been a CEO",
    kathy: "Yes — currently running $110M across 3 products",
    bigFour: "No — career consultants and analysts",
  },
  {
    category: "Revenue per headcount",
    kathy: "4x improvement, proven at scale",
    bigFour: "Theoretical projections in a slide deck",
  },
  {
    category: "Who you work with",
    kathy: "Kathy, directly — no handoff to junior associates",
    bigFour: "Partner sells, associates deliver",
  },
  {
    category: "Deliverable",
    kathy: "90-day executable roadmap + ongoing advisory",
    bigFour: "200-page report delivered in 6 months",
  },
  {
    category: "Accountability",
    kathy: "Quarterly recalibration tied to your metrics",
    bigFour: "Engagement ends when the deck is delivered",
  },
  {
    category: "Speed to value",
    kathy: "First wins within 30 days",
    bigFour: "6-12 months to initial deliverables",
  },
  {
    category: "Investment",
    kathy: "A fraction of a Big 4 engagement",
    bigFour: "$2M+ for a strategy engagement",
  },
];

const faqItems = [
  {
    question: "How is this different from hiring an AI consulting firm?",
    answer:
      "Consulting firms send teams of analysts who have never run a company. You get frameworks designed in a conference room. With Kathy, you get direct access to a sitting CEO who built these systems inside her own company — and she works with you personally, not through junior associates.",
  },
  {
    question: "What size company is this for?",
    answer:
      "The advisory is designed for CEOs of companies doing $50M to $500M in revenue. The frameworks scale across that range, and Kathy has direct experience operating at that level.",
  },
  {
    question: "How much time does this require from me as CEO?",
    answer:
      "Expect 2-4 hours per month for advisory sessions, plus the time you invest in actually using AI yourself. The biggest unlock comes when the CEO leads by example — Kathy will show you how to do that without adding to your calendar.",
  },
  {
    question: "What if we have already started AI initiatives that are not working?",
    answer:
      "That is actually the most common starting point. Most companies have tried something — a pilot, a tool, a vendor — and it fizzled. The 90-Day Roadmap starts by diagnosing what went wrong and redirecting resources to where AI actually creates value in your specific business.",
  },
];

export default function AdvisoryPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            Your Competitors Are Using AI to Do More With Less. You Need a CEO
            Who Has Already Done It.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl mb-4">
            Kathy Slowinski built a $110M company with ~40 people. Now she
            brings those frameworks to CEOs of $50M&ndash;$500M companies who
            are ready to stop debating AI and start deploying it.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Book a Confidential CEO Briefing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            The AI Problem No One Is Telling CEOs the Truth About
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              You have seen the McKinsey deck. You have sat through the $2M
              consulting pitch. You have heard your CTO say &ldquo;we are
              exploring AI&rdquo; for the third quarter in a row.
            </p>
            <p>
              Here is what no one is telling you: the big consulting firms have
              never done this themselves. They are selling AI strategy the same
              way they sold digital transformation — with maturity models,
              readiness assessments, and timelines that stretch to 2028.
            </p>
            <p>
              Meanwhile, your competitors are shipping. They are compressing
              teams, automating workflows, and building AI into the fabric of how
              they operate. The gap between companies that talk about AI and
              companies that run on it is widening every quarter.
            </p>
            <p className="text-[var(--color-foreground)] font-semibold text-xl">
              You do not need another AI strategy deck. You need a CEO who has
              already built what you are trying to build.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            How It Works
          </h2>
          <div className="space-y-12">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <div className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                  Phase {phase.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">What You Get</h3>
            <ul className="space-y-4 text-lg text-[var(--color-muted)]">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Who This Is For
          </h2>
          <ul className="space-y-4 text-lg text-[var(--color-muted)] mb-12">
            {idealClients.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-6">
            This Is NOT for You If...
          </h3>
          <ul className="space-y-4 text-lg text-[var(--color-muted)]">
            {notForYou.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-border)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Key Differentiator ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Kathy vs. the Big 4
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-foreground)]">
                  <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wider">
                    &nbsp;
                  </th>
                  <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-cta)]">
                    Kathy Slowinski
                  </th>
                  <th className="py-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Big 4 Consulting
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-[var(--color-border)]"
                  >
                    <td className="py-4 pr-6 font-semibold text-sm">
                      {row.category}
                    </td>
                    <td className="py-4 pr-6 text-sm text-[var(--color-muted)]">
                      {row.kathy}
                    </td>
                    <td className="py-4 text-sm text-[var(--color-muted)]">
                      {row.bigFour}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto space-y-6">
          <TestimonialPlaceholder context="CEO" />
          <TestimonialPlaceholder context="CEO" />
          <TestimonialPlaceholder context="CEO" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            {faqItems.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <SectionCTA
        dark
        headline="The CEOs Who Act on AI Now Will Define the Next Decade."
        body="Book a confidential briefing and find out exactly where AI creates value in your business — from someone who has done it."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
      />
    </main>
  );
}
