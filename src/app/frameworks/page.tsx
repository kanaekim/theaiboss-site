import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: {
    absolute: "AI Transformation Frameworks — The Slowinski Pyramid, Weds.ai & Second Brains | The AI Boss",
  },
  description:
    "Three battle-tested frameworks for AI transformation: the Slowinski Pyramid for prioritization, the Weds.ai Method for adoption, and Second Brains for institutional knowledge.",
  alternates: { canonical: "/frameworks" },
  openGraph: { url: "/frameworks" },
};

const frameworks = [
  {
    title: "The Slowinski Pyramid",
    href: "/frameworks/slowinski-pyramid",
    tagline: "Where AI Creates Value First",
    description:
      "A three-tier prioritization model that tells you exactly where to deploy AI for maximum ROI. Stop guessing which projects to fund. Start sequencing them correctly.",
    metric: "3M to 125K lines of code",
    metricLabel: "achieved by following the pyramid",
  },
  {
    title: "The Weds.ai Method",
    href: "/frameworks/wedsai-method",
    tagline: "The Engine That Makes AI Adoption Stick",
    description:
      "Weekly, non-optional AI hackathons that turn every employee into an AI practitioner. Not training. Not workshops. Four hours of building and one hour of demos, every single week.",
    metric: "80%",
    metricLabel: "of all work at Trilogy is AI-assisted",
  },
  {
    title: "Second Brains",
    href: "/frameworks/second-brains",
    tagline: "AI Built on Your Institutional Knowledge",
    description:
      "AI assistants trained on your company's documents, processes, and history — replacing the tribal knowledge that walks out the door when people leave.",
    metric: "Company-wide",
    metricLabel: "adoption achieved at Trilogy",
  },
];

export default function FrameworksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <Breadcrumb items={[{ name: "Frameworks", href: "/frameworks" }]} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            The Frameworks That Built a $110M Company With 40 People
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            These are not consulting frameworks invented in a conference room. They were built inside a real company, under real pressure, with real results. Now they are available to CEOs ready to do the same.
          </p>
        </div>
      </section>

      {/* Framework Cards */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {frameworks.map((fw) => (
            <div
              key={fw.href}
              className="border border-[var(--color-border)] rounded-xl p-8 sm:p-10 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-2">
                    {fw.tagline}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{fw.title}</h2>
                  <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                    {fw.description}
                  </p>
                  <Link
                    href={fw.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cta)] hover:underline"
                  >
                    Explore the framework
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
                <div className="lg:text-right lg:min-w-[160px]">
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--color-cta)]">
                    {fw.metric}
                  </div>
                  <div className="text-sm text-[var(--color-muted)] mt-1">
                    {fw.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionCTA
        dark
        headline="Ready to Deploy These Frameworks?"
        body="Book a CEO Briefing to find out exactly how these systems apply to your company."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
        secondaryLabel="Read the Full Playbook"
        secondaryHref="/playbook"
      />
    </>
  );
}
