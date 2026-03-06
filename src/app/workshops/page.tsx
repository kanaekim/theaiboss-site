import { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "AI Workshop for Executives & Leadership Teams | The AI Boss",
  description:
    "Hands-on AI workshops for executive teams. Walk in with questions, walk out with a real AI plan by 5 PM. Led by a CEO who 4x'd revenue per employee using AI.",
};

const workshopFormats = [
  {
    title: "AI Leadership Intensive",
    duration: "Full Day",
    audience: "8-20 people",
    description:
      "A deep-dive working session for leadership teams ready to build a real AI strategy. Covers the Slowinski Pyramid for prioritization, the Weds.ai Method for cultural adoption, and hands-on exercises where your team identifies and sequences their highest-value AI opportunities.",
    deliverable:
      "90-day AI roadmap built by your team during the session, with owners, milestones, and quick wins identified.",
    format:
      "Interactive. Half presentation, half working session. Your team leaves with something they built together — not something that was presented to them.",
  },
  {
    title: "Weds.ai Sprint",
    duration: "Half Day",
    audience: "10-30 people",
    description:
      "Experience the exact weekly AI hackathon format that drove 4x revenue growth at Trilogy. Your team spends a half day building with AI tools — not learning about them. Kathy facilitates, coaches, and shows your people what is possible when you stop planning and start doing.",
    deliverable:
      "Working AI prototypes built by your team during the session, plus a Weds.ai implementation guide for continuing weekly sprints.",
    format:
      "Hands-on. Bring your laptops. Your team will build real solutions to real business problems using AI tools — by the end of the session.",
  },
  {
    title: "Board + C-Suite Alignment",
    duration: "2 Hours",
    audience: "5-15 people",
    description:
      "A focused session for boards and C-suites who need to align on AI strategy before making investment decisions. Kathy walks the room through the AI landscape, your competitive position, and the key decisions that need to be made — then facilitates the conversation that gets everyone on the same page.",
    deliverable:
      "Alignment brief documenting agreed-upon AI priorities, investment parameters, and next steps.",
    format:
      "Facilitated discussion. Kathy presents the strategic framework, then guides the room through the decisions that matter.",
  },
];

const allWorkshopsInclude = [
  "Pre-workshop diagnostic to customize content to your business",
  "Battle-tested frameworks (Slowinski Pyramid, Weds.ai Method, Leadership-First Adoption)",
  "30-day follow-up session to review progress and troubleshoot implementation",
  "Digital resource kit with templates, tools, and reference materials",
];

const faqItems = [
  {
    question: "Can the workshop be customized for our industry?",
    answer:
      "Every workshop starts with a pre-diagnostic where Kathy learns your business, your competitive landscape, and your team dynamics. The frameworks are universal, but the examples, exercises, and recommendations are tailored to your specific context.",
  },
  {
    question: "What level of AI knowledge does our team need?",
    answer:
      "None. The workshops are designed for business leaders, not technologists. If your team can use a web browser, they can participate. Kathy meets people where they are and brings everyone up to speed quickly.",
  },
  {
    question: "Can we do this virtually?",
    answer:
      "The AI Leadership Intensive and Board + C-Suite Alignment work well in virtual formats. The Weds.ai Sprint is most effective in person because of the hands-on, collaborative nature of the work. Kathy will recommend the best format based on your goals.",
  },
  {
    question: "How far in advance do we need to book?",
    answer:
      "Kathy typically books 4-6 weeks out for workshops. For large events or multi-day engagements, 8-12 weeks is recommended. Reach out and we will find a date that works.",
  },
];

export default function WorkshopsPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            One Day. One Team. A Real AI Plan by 5 PM.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Hands-on AI workshops led by a CEO who used these exact frameworks
            to 4x revenue per employee. Your team walks out with a plan they
            built together — not a slide deck someone presented to them.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Request a Custom Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* ── Workshop Formats ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Three Workshop Formats
          </h2>
          <div className="space-y-8">
            {workshopFormats.map((ws) => (
              <div
                key={ws.title}
                className="bg-white border border-[var(--color-border)] rounded-xl p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold">{ws.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-surface)] border border-[var(--color-border)]">
                    {ws.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-surface)] border border-[var(--color-border)]">
                    {ws.audience}
                  </span>
                </div>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  {ws.description}
                </p>
                <div className="border-t border-[var(--color-border)] pt-4 mt-4 space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold">Deliverable:</span>{" "}
                    <span className="text-[var(--color-muted)]">
                      {ws.deliverable}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Format:</span>{" "}
                    <span className="text-[var(--color-muted)]">
                      {ws.format}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Workshops Include ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            All Workshops Include
          </h2>
          <ul className="space-y-4 text-lg text-[var(--color-muted)]">
            {allWorkshopsInclude.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            This Is a Business Workshop About AI — Not a Tech Workshop
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              Most AI workshops are run by technologists who teach tools. This
              workshop is run by a CEO who teaches strategy. The difference
              matters.
            </p>
            <p>
              Your team does not need to learn how GPT-4 works under the hood.
              They need to understand where AI creates leverage in your specific
              business, how to prioritize AI investments, and how to build a
              culture where AI adoption compounds over time.
            </p>
            <p className="text-[var(--color-foreground)] font-semibold text-xl">
              Kathy teaches what she built. Every framework in the workshop came
              from running a real company — not from a research lab.
            </p>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <TestimonialPlaceholder context="Workshop Attendee" />
          <TestimonialPlaceholder context="Workshop Attendee" />
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
        headline="Your Team Does Not Need Another AI Webinar. They Need a Working Session With Someone Who Has Done It."
        body="Request a custom workshop and give your leadership team the frameworks that drove 4x revenue growth."
        primaryLabel="Request a Custom Workshop"
        primaryHref="/contact"
      />
    </main>
  );
}
