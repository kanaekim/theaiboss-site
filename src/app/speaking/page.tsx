import { Metadata } from "next";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "AI Keynote Speaker | Kathy Slowinski | The AI Boss",
  description:
    "Book an AI keynote speaker with real results. Kathy Slowinski is a CEO who built a $110M company with ~40 people using AI. Her frameworks have been used by hundreds of leaders.",
};

const speakingFormats = [
  {
    title: "Keynote",
    duration: "45-60 minutes",
    description:
      "A high-energy, story-driven keynote built around Kathy's experience building a $110M company with ~40 people. Combines real operational data with actionable frameworks your audience can deploy immediately. No fluff. No theory. Just what works.",
  },
  {
    title: "Fireside Chat",
    duration: "30-45 minutes",
    description:
      "An intimate, moderated conversation where Kathy goes deep on AI strategy, leadership, and transformation. Best for executive audiences who want candid, unscripted insights and the chance to ask tough questions in real time.",
  },
  {
    title: "Panel",
    duration: "60-90 minutes",
    description:
      "Kathy brings operator credibility to any AI panel. She has done the work — and she is not afraid to disagree with the consultants and theorists who have not. Moderators love her because she gives direct, specific answers instead of consulting-speak.",
  },
  {
    title: "Half-Day Corporate Event",
    duration: "3-4 hours",
    description:
      "Combines a keynote presentation with a hands-on workshop for your leadership team. The audience goes from inspiration to action in a single session. Ideal for corporate offsites, leadership retreats, and annual planning events.",
  },
];

const signatureTopics = [
  {
    title: "4x: How I Built a $110M Company With 40 People Using AI",
    description:
      "The flagship keynote. Kathy tells the full story of transforming Trilogy using AI — from the first Weds.ai hackathon to quadrupling revenue per employee. Includes the Slowinski Pyramid, the Weds.ai Method, and the leadership principles that made it work.",
    featured: true,
  },
  {
    title: "The CEO's AI Playbook: What Every Leader Needs to Know Now",
    description:
      "A strategic overview for executive audiences. Covers where AI creates real value, where it wastes money, and the three decisions every CEO needs to make in the next 90 days.",
    featured: false,
  },
  {
    title: "Stop Planning, Start Building: The Weds.ai Method",
    description:
      "How a weekly company-wide hackathon became the engine of AI adoption — and why your training programs are failing. A tactical talk about building AI culture from the ground up.",
    featured: false,
  },
  {
    title: "AI and the Board: What Directors Need to Hear From Their CEO",
    description:
      "For board-level and governance audiences. How to evaluate AI strategy as a fiduciary, what questions to ask your CEO, and what good AI leadership actually looks like from the boardroom.",
    featured: false,
  },
];

const faqItems = [
  {
    question: "What is Kathy's speaking fee?",
    answer:
      "Speaking fees depend on the format, audience size, and travel requirements. Reach out through the contact form and we will provide a custom quote within 48 hours.",
  },
  {
    question: "Does Kathy travel for events?",
    answer:
      "Yes. Kathy speaks at events worldwide. Virtual keynotes and fireside chats are also available for organizations that prefer a remote format.",
  },
  {
    question: "Can the keynote be customized for our industry or audience?",
    answer:
      "Every engagement starts with a pre-event call where Kathy learns about your audience, your event theme, and what you want people to walk away with. The core frameworks remain the same, but examples, data points, and recommendations are tailored to your context.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Kathy typically books 6-12 weeks in advance for keynotes and corporate events. For large conferences, 3-6 months is recommended. Reach out early to secure your preferred date.",
  },
];

export default function SpeakingPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            An AI Keynote Speaker Who Has Actually Done It. Not Just Talked
            About It.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Kathy Slowinski is the CEO of Trilogy, where she built a $110M
            company with ~40 people using AI. Her frameworks have been used by
            hundreds of leaders to transform how they work.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Check Availability for Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Placeholder ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-xl flex flex-col items-center justify-center border border-[var(--color-border)]">
            <svg
              className="w-16 h-16 text-[var(--color-muted)] mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="text-[var(--color-muted)] font-medium">
              Keynote Highlight Reel Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* ── Speaking Formats ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Speaking Formats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {speakingFormats.map((format) => (
              <div
                key={format.title}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-1">{format.title}</h3>
                <p className="text-sm font-semibold text-[var(--color-cta)] mb-4">
                  {format.duration}
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signature Topics ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Signature Topics
          </h2>
          <div className="space-y-8">
            {signatureTopics.map((topic) => (
              <div
                key={topic.title}
                className={`rounded-xl p-8 ${
                  topic.featured
                    ? "bg-[var(--color-foreground)] text-white"
                    : "bg-white border border-[var(--color-border)]"
                }`}
              >
                {topic.featured && (
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-3">
                    Signature Keynote
                  </div>
                )}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    topic.featured ? "text-white" : ""
                  }`}
                >
                  {topic.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    topic.featured ? "text-gray-300" : "text-[var(--color-muted)]"
                  }`}
                >
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Why Kathy Is Different
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              She is not a professional speaker who learned about AI. She is a
              CEO who happens to be an exceptional speaker.
            </p>
            <p>
              Every story she tells on stage happened to her. Every framework she
              teaches was built inside her company. Every metric she shares is
              from her own P&amp;L. When the audience asks &ldquo;how do I
              actually do this?&rdquo; — she answers with specifics, not
              consulting platitudes.
            </p>
            <p className="text-[var(--color-foreground)] font-semibold text-xl">
              Your audience will not just be inspired. They will leave with a
              plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto space-y-6">
          <TestimonialPlaceholder context="Event Planner" />
          <TestimonialPlaceholder context="Event Planner" />
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
        headline="Give Your Audience the AI Talk They Will Actually Remember."
        body="Kathy delivers keynotes that combine real operational results with frameworks your audience can use immediately."
        primaryLabel="Check Availability for Your Event"
        primaryHref="/contact"
        secondaryLabel="Download the Speaker Kit"
        secondaryHref="/resources"
      />
    </main>
  );
}
