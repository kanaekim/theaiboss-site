import { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "AI Board Presentation Strategy | The AI Boss",
  description:
    "Prepare a board-ready AI strategy with a CEO who has sat on both sides of the boardroom. Walk into your next board meeting with a real answer on AI.",
};

const boardQuestions = [
  "What is our AI strategy?",
  "How does AI affect our competitive position in 12 months?",
  "What are we spending on AI and what is the ROI?",
  "Are we moving fast enough — or are we falling behind?",
];

const weeklyPhases = [
  {
    week: "Week 1",
    title: "Strategic Diagnostic",
    description:
      "Confidential deep-dive into your business, competitive landscape, current AI initiatives, and board dynamics. Kathy identifies where AI creates real value and where your board will push hardest.",
  },
  {
    week: "Week 2",
    title: "Strategy Architecture",
    description:
      "Using the Slowinski Pyramid, Kathy builds a sequenced AI strategy tied to your actual business metrics — revenue, margin, headcount efficiency, and competitive positioning. No generic frameworks. Your numbers, your market, your plan.",
  },
  {
    week: "Week 3",
    title: "Presentation Build + Rehearsal",
    description:
      "A board-ready presentation deck built with you, not for you. Includes a live rehearsal session where Kathy pressure-tests your answers from the board's perspective — because she has been on both sides of that table.",
  },
];

const deliverables = [
  "Board-ready AI strategy presentation (fully designed deck)",
  "Executive summary document for pre-read distribution",
  "Competitive AI landscape analysis for your sector",
  "90-day AI action plan with milestones and owners",
  "Financial model showing projected AI ROI",
  "Risk and mitigation framework",
  "Appendix of supporting research and benchmarks",
  "Post-meeting follow-up brief with recommended next steps",
];

const faqItems = [
  {
    question: "How far in advance should I start preparing?",
    answer:
      "Ideally 4-6 weeks before your board meeting. The engagement is three weeks of active work, and you want buffer time for revisions and rehearsal. That said, Kathy has done accelerated timelines when the meeting is closer — reach out and we will figure it out.",
  },
  {
    question: "Will Kathy present to the board directly?",
    answer:
      "That is your call. Some CEOs want Kathy in the room as a strategic advisor. Others prefer to own the presentation themselves after being fully prepared. Both approaches work — the goal is that you walk in with confidence and a real plan.",
  },
  {
    question: "What if our board has not asked about AI yet?",
    answer:
      "They will. And the CEO who brings a proactive AI strategy to the board — before being asked — signals leadership, not reactivity. This is your chance to set the narrative rather than respond to it.",
  },
  {
    question: "Can this be combined with the ongoing advisory engagement?",
    answer:
      "Absolutely. Many CEOs start with board prep and transition into the ongoing advisory. The board presentation becomes the foundation for a longer-term AI transformation strategy.",
  },
];

export default function BoardPresentationsPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            Your Board Is Going to Ask About AI at the Next Meeting. Will You
            Have a Real Answer?
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Work with a CEO who has delivered AI strategy to boards — and sat on
            both sides of the table.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Prepare for Your Next Board Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            The Board Meeting You Are Dreading
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              You know it is coming. Somewhere between the financial review and
              the strategic update, a board member is going to lean forward and
              ask about AI. And they will not want platitudes.
            </p>
            <p>They are going to ask:</p>
            <ul className="space-y-3 ml-6">
              {boardQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {q}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              If your answer is &ldquo;we are exploring it&rdquo; or &ldquo;the
              CTO is running some pilots,&rdquo; you are going to lose the room.
              Boards want a CEO who leads on AI — with specifics, timelines, and
              a plan tied to financial outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            How It Works: Three Weeks to Board-Ready
          </h2>
          <div className="space-y-12">
            {weeklyPhases.map((phase) => (
              <div
                key={phase.week}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <div className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                  {phase.week}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">What You Receive</h3>
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

      {/* ── Differentiator ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Why Kathy
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              Most AI consultants have never sat in a board meeting as a CEO.
              Kathy has — hundreds of times. She has presented AI strategy to
              boards, defended budgets, answered tough questions about ROI
              timelines, and navigated the politics of transformation from the
              CEO chair.
            </p>
            <p>
              She has also sat on the other side. She knows what board members
              are actually evaluating when a CEO presents an AI strategy: not the
              technology, but the leadership. Do you understand this? Have you
              done the work? Can you execute?
            </p>
            <p className="text-[var(--color-foreground)] font-semibold text-xl">
              Kathy prepares you to answer yes to all three — with proof.
            </p>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <TestimonialPlaceholder context="Board Member" />
          <TestimonialPlaceholder context="Board Member" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
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
        headline="Your Board Will Either See You as the CEO Who Leads on AI — or the One Who Does Not."
        body="Prepare for the conversation that will define how your board sees your leadership."
        primaryLabel="Prepare for Your Next Board Meeting"
        primaryHref="/contact"
      />
    </main>
  );
}
