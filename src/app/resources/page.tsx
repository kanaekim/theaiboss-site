import { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "AI Resources for CEOs & Executive Teams",
  description:
    "Free AI frameworks, assessments, and tools built from real operational experience. The same resources that drove 4x revenue per headcount at Trilogy.",
};

const RESOURCES = [
  {
    title: "CEO's 90-Day AI Roadmap",
    format: "PDF",
    description:
      "A 12-to-15-page guide that walks you through the first 90 days of AI transformation, from quick wins to strategic milestones.",
    href: "#",
  },
  {
    title: "Slowinski Pyramid Worksheet",
    format: "PDF",
    description:
      "Map your team's tasks across the three tiers of AI readiness: automate, augment, and elevate.",
    href: "#",
  },
  {
    title: "Weds.ai Implementation Guide",
    format: "PDF",
    description:
      "Everything you need to launch your first four Wednesdays of company-wide AI experimentation.",
    href: "#",
  },
  {
    title: "AI Leadership Self-Assessment",
    format: "PDF",
    description:
      "Five questions that reveal whether your leadership team is ready to drive AI adoption or standing in its way.",
    href: "#",
  },
  {
    title: "Board AI Brief Template",
    format: "PDF",
    description:
      "A one-page board-ready template that communicates your AI strategy, progress, and ROI clearly.",
    href: "#",
  },
  {
    title: "Sample Board Presentation Outline",
    format: "PDF",
    description:
      "A 12-to-18-slide structure for presenting AI strategy and results to your board of directors.",
    href: "#",
  },
  {
    title: "Speaker Kit",
    format: "PDF",
    description:
      "Bio, headshot, and keynote descriptions for event organizers.",
    href: "#",
    free: true,
  },
  {
    title: "Workshop Menu",
    format: "PDF",
    description:
      "Overview of all three workshop formats: 2-hour, half-day, and full-day.",
    href: "#",
    free: true,
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* -- Hero -- */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            The Tools Behind the Transformation
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Every resource on this page was built from real operational
            experience. These are the same frameworks that drove 4x revenue per
            headcount at Trilogy.
          </p>
        </div>
      </section>

      {/* -- Featured Resource -- */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-[var(--color-cta)] bg-[var(--color-surface)]">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-cta)] text-white rounded-full">
                Interactive Quiz
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              AI Readiness Assessment
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl">
              10 questions. 3 minutes. Immediate results. Find out where your
              company stands on AI readiness and get a personalized action plan.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-cta)] text-white font-medium rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Take the Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* -- Resource Grid -- */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => (
              <div
                key={resource.title}
                className="p-6 rounded-xl border border-[var(--color-border)] bg-white flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold">{resource.title}</h3>
                  <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)] border border-[var(--color-border)] rounded">
                    {resource.format}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 flex-1">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href={resource.href}
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-foreground)] text-white hover:bg-gray-800 transition-colors"
                  >
                    Download
                  </Link>
                  {resource.free && (
                    <span className="text-xs font-medium text-[var(--color-cta)]">
                      Free &mdash; No Email Required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Newsletter Callout -- */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Get Weekly AI Strategy in Your Inbox
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
            One actionable AI insight every Tuesday. Written by a CEO who has
            done the transformation, not just studied it.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
          >
            Subscribe to the Newsletter
          </Link>
        </div>
      </section>

      {/* -- Bottom CTA -- */}
      <SectionCTA
        headline="Ready to Go Beyond the Resources?"
        body="The resources on this page are a starting point. For a tailored strategy built around your company, start a conversation."
        secondaryLabel="Explore the Playbook"
        secondaryHref="/playbook"
      />
    </main>
  );
}
