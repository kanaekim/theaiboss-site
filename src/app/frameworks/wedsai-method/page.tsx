import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: {
    absolute: "The Weds.ai Method — Weekly AI Adoption Framework for Companies | The AI Boss",
  },
  description:
    "The Weds.ai Method: weekly, non-optional AI hackathons that turn every employee into an AI practitioner. How Trilogy reached 80% AI-assisted operations in 24 months.",
  alternates: { canonical: "/frameworks/wedsai-method" },
  openGraph: { url: "/frameworks/wedsai-method" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Weds.ai Method: Weekly AI Adoption That Sticks",
  description:
    "A weekly, company-wide AI hackathon framework: 4 hours of building, 1 hour of demos, non-optional, every Wednesday. Results: 80% AI-assisted operations at Trilogy.",
  author: { "@type": "Person", name: "Kathy Slowinski" },
  publisher: { "@type": "Organization", name: "The AI Boss" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Launch on a Wednesday",
      text: "Pick a recurring time and lock it. Wednesday works because it breaks the week and creates a ritual. The day matters less than the consistency.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Four hours of building",
      text: "Every employee works on a real AI project — not training, not demos, not theory. Hands on keyboard, building something that actually matters to their role.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "One hour of demos",
      text: "Everyone shows what they built. Successes and failures. The whole company watches. Leadership participates alongside everyone else.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Make it non-optional",
      text: "This is not a workshop you attend when convenient. It is how the company operates now. The CEO participates. No exemptions for senior leaders.",
    },
  ],
};

const rules = [
  {
    rule: "Participation is non-optional",
    detail: "Not optional for engineers. Not optional for executives. Not optional for the CEO. If leadership gets an exemption, the whole program collapses within 8 weeks.",
  },
  {
    rule: "Only real work counts",
    detail: "No toy projects, no demos of tools that already exist, no slideware about AI. You build something that actually matters to your job — or you do not participate.",
  },
  {
    rule: "Failure is presented, not hidden",
    detail: "When something does not work, it gets demoed anyway. Failure shown publicly creates more organizational learning than polished success shared privately.",
  },
  {
    rule: "Leadership participates alongside everyone",
    detail: "The CEO sits in the demo alongside the intern. This is not a presentation to leadership. It is leadership building alongside everyone else.",
  },
];

const objections = [
  {
    objection: '"We do not have time for a weekly hackathon."',
    answer: "You do not have time not to. Every week you skip is a week your competitors learn something your team did not. Weds.ai is not additional time — it replaces time previously spent on lower-leverage activities.",
  },
  {
    objection: '"Our people are not technical enough."',
    answer: "That is exactly the point. Weds.ai is designed so non-technical employees build with AI from week one. The tools do the heavy lifting. The non-technical person who learns to use AI for their job is more valuable than the engineer who builds AI tools no one wants to use.",
  },
  {
    objection: '"What if people build things that do not work?"',
    answer: "They will. That is the process. Failed experiments presented publicly create more organizational learning than polished decks presented privately. Your culture of failure tolerance is the competitive moat. Companies that fear public failure never build it.",
  },
  {
    objection: '"This sounds like a lot of overhead to run."',
    answer: "The first session takes work. By month three, it runs itself. Employees look forward to it. Ideas from Weds.ai become production systems. The overhead is the first four weeks. The compounding is the next four years.",
  },
];

export default function WedsAiMethodPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />

      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <Breadcrumb
            items={[
              { name: "Frameworks", href: "/frameworks" },
              { name: "Weds.ai Method", href: "/frameworks/wedsai-method" },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            The Weds.ai Method
          </h1>
          <p className="mt-4 text-xl text-[var(--color-cta)] font-semibold">
            The Engine That Makes AI Adoption Stick
          </p>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Training programs do not create AI-native companies. Workshops do not create AI-native companies. Committees, readiness assessments, and vendor evaluations do not create AI-native companies. One thing does: every employee building with AI every single week, without exception.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-4">
              In One Sentence
            </div>
            <p className="text-lg sm:text-xl leading-relaxed">
              Every Wednesday, every employee at Trilogy spends four hours building something real with AI, then one hour showing what they built to the whole company — no exceptions, no opt-outs, no observers.
            </p>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">The Structure</h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Five hours. Every week. Non-negotiable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-[var(--color-cta)] mb-3">4 hrs</div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3">Building</div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Every employee works on a real AI project. Not training. Not watching demos. Hands on keyboard, solving a real problem from their actual role.
              </p>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-[var(--color-cta)] mb-3">1 hr</div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3">Demos</div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Show what you built. Successes and failures. The whole company watches. Leadership is in the room, not receiving a summary later.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="text-4xl sm:text-5xl font-bold mb-3">52</div>
            <p className="text-[var(--color-muted)]">sessions per year. That is 52 opportunities to learn something your competitor missed.</p>
          </div>
        </div>
      </section>

      {/* The Rules */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Four Rules</h2>
          <p className="text-[var(--color-muted)] mb-12 text-lg">Break any one of these and the method stops working.</p>
          <div className="space-y-6">
            {rules.map((item, i) => (
              <div key={item.rule} className="border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-[var(--color-cta)] shrink-0 mt-0.5">{i + 1}.</div>
                  <div>
                    <h3 className="font-bold mb-2">{item.rule}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Common Objections</h2>
          <div className="space-y-6">
            {objections.map((item) => (
              <div key={item.objection} className="border border-[var(--color-border)] rounded-xl p-6 bg-white">
                <p className="font-semibold mb-3">{item.objection}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">What Happened at Trilogy</h2>
          <div className="bg-[var(--color-foreground)] text-white rounded-xl p-10 sm:p-16 mb-8">
            <div className="text-6xl sm:text-7xl font-bold text-[var(--color-cta)] mb-4">80%</div>
            <p className="text-xl text-gray-300">
              of all work at Trilogy is now AI-assisted — built one Wednesday at a time, over 24 months.
            </p>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            April 2023: zero AI adoption. 52 sessions later: the company runs on AI. Revenue per headcount is 4x. The codebase went from 3 million lines to 125,000. Customer support went from fully staffed to 80% AI-handled. None of it came from a strategy deck. All of it came from one hour of building, every Wednesday.
          </p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Frameworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/frameworks/slowinski-pyramid" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">Prioritize First</div>
              <div className="font-bold">The Slowinski Pyramid →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">Know where to focus the building sessions for maximum ROI.</div>
            </Link>
            <Link href="/frameworks/second-brains" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">What Gets Built</div>
              <div className="font-bold">Second Brains →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">What happens when Weds.ai sessions build AI on your institutional knowledge.</div>
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA
        dark
        headline="Ready to Run Your First Weds.ai Session?"
        body="Book a CEO Briefing. Kathy will walk you through exactly how to launch Weds.ai inside your company — including the first-session agenda."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
        secondaryLabel="Read the Full Playbook"
        secondaryHref="/playbook"
      />
    </>
  );
}
