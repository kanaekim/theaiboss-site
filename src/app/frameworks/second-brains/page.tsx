import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SectionCTA } from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Second Brains — AI Assistants Built on Institutional Knowledge | The AI Boss",
  },
  description:
    "Second Brains are AI assistants trained on your company's documents, processes, and history — replacing the tribal expertise that lives in people's heads and walks out the door when they leave.",
  alternates: { canonical: "/frameworks/second-brains" },
  openGraph: { url: "/frameworks/second-brains" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Build Second Brains: AI on Your Institutional Knowledge",
  description:
    "A framework for building AI assistants trained on your company's documents, processes, and institutional knowledge — so expertise is preserved and accessible company-wide.",
  author: { "@type": "Person", name: "Kathy Slowinski" },
  publisher: { "@type": "Organization", name: "The AI Boss" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify the knowledge that lives in people",
      text: "Map the expertise that currently exists only in specific employees' heads. These are your highest-risk knowledge concentrations — and your first Second Brain targets.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Surface and structure the knowledge",
      text: "Extract that knowledge through documents, recordings, interviews, and structured prompting sessions. This is the content the Second Brain will be trained on.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build the AI assistant",
      text: "Use an AI platform to build a retrieval-augmented assistant on top of the structured knowledge. It can answer questions in the voice and style of the domain expert.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deploy and iterate",
      text: "Release to the team. Track questions it cannot answer — those gaps are your documentation backlog. The Second Brain improves every time a gap is filled.",
    },
  ],
};

const examples = [
  {
    title: "The Founder Second Brain",
    description:
      "Captures how the founder thinks about the business: their product intuition, strategic principles, and decision-making heuristics. New hires ask it the questions they are afraid to ask in a meeting.",
  },
  {
    title: "The Support Second Brain",
    description:
      "Trained on every support ticket, resolution, and escalation pattern. Handles 80% of inbound support at Trilogy — giving customers instant answers to questions that previously required a human specialist.",
  },
  {
    title: "The Codebase Second Brain",
    description:
      "Trained on the architecture decisions, legacy context, and undocumented reasoning behind how the system was built. Engineers ask it why the code does what it does — and get an answer instead of a shrug.",
  },
  {
    title: "The Sales Second Brain",
    description:
      "Trained on winning deal patterns, objection responses, pricing logic, and competitive positioning. Onboards new sales reps in days, not months. Never forgets what the top performer knew.",
  },
];

const problems = [
  {
    problem: "The expert leaves",
    impact: "Years of institutional knowledge walks out the door. The team spends months rebuilding what one person knew.",
  },
  {
    problem: "Onboarding takes forever",
    impact: "New hires spend 60-90 days trying to absorb context that a Second Brain can transfer in their first week.",
  },
  {
    problem: "The same questions get asked repeatedly",
    impact: "Senior people spend hours answering questions junior people should be able to answer themselves.",
  },
  {
    problem: "Expertise does not scale",
    impact: "The best thinker on the team can only be in one meeting at a time. A Second Brain lets their thinking be everywhere.",
  },
];

export default function SecondBrainsPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />

      {/* Hero */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <Breadcrumb
            items={[
              { name: "Frameworks", href: "/frameworks" },
              { name: "Second Brains", href: "/frameworks/second-brains" },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Second Brains
          </h1>
          <p className="mt-4 text-xl text-[var(--color-cta)] font-semibold">
            AI Built on Your Institutional Knowledge
          </p>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Every company has knowledge that lives in people&rsquo;s heads and nowhere else. When those people leave, the knowledge leaves with them. Second Brains are AI assistants trained on that knowledge — so it stays in the company forever.
          </p>
          <p className="mt-4 text-base text-gray-400 max-w-2xl">
            At Trilogy, Second Brains deployed company-wide allowed a 40-person team to operate with the institutional depth of a team ten times its size.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">The Problem Second Brains Solve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map((item) => (
              <div key={item.problem} className="border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.problem}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Second Brain Is */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What a Second Brain Is (and Is Not)</h2>
          <div className="space-y-6 mt-10">
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
              <h3 className="font-bold text-lg mb-4">A Second Brain IS</h3>
              <ul className="space-y-3">
                {[
                  "An AI assistant trained on your company's specific documents, decisions, and processes",
                  "A queryable repository of institutional knowledge, accessible to everyone",
                  "A tool that improves over time as you add more context to it",
                  "A way to make expertise available without the expert being in the room",
                  "A retention tool that keeps knowledge when people leave",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                    <span className="text-[var(--color-cta)] font-bold mt-0.5 shrink-0">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
              <h3 className="font-bold text-lg mb-4">A Second Brain Is NOT</h3>
              <ul className="space-y-3">
                {[
                  "A generic AI chatbot trained on the internet (it knows your company, not the world)",
                  "A replacement for human judgment on complex, novel decisions",
                  "A one-time build — it requires ongoing maintenance as the company evolves",
                  "A documentation tool — it is a living assistant, not a static wiki",
                  "Something only engineers can build — the Weds.ai method produces Second Brains",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                    <span className="text-[var(--color-border)] font-bold mt-0.5 shrink-0">&times;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Four Types of Second Brains</h2>
          <p className="text-[var(--color-muted)] mb-12 text-lg">
            Different knowledge problems require different Second Brains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {examples.map((ex) => (
              <div key={ex.title} className="border border-[var(--color-border)] rounded-xl p-8">
                <h3 className="font-bold text-lg mb-3">{ex.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Build */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">How to Build Your First Second Brain</h2>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Identify the knowledge that lives in people",
                description: "Map the expertise that currently exists only in specific employees' heads. Ask: if this person left tomorrow, what would break? Those are your first targets.",
              },
              {
                step: "02",
                title: "Surface and structure the knowledge",
                description: "Extract that knowledge through documents, recordings, structured Q&A sessions, and AI-assisted interviews. Convert unstructured expertise into organized context.",
              },
              {
                step: "03",
                title: "Build the AI assistant",
                description: "Use a retrieval-augmented generation (RAG) setup or an AI platform designed for custom assistants. Train it on the structured knowledge base. Tune it for tone and accuracy.",
              },
              {
                step: "04",
                title: "Deploy and fill the gaps",
                description: "Release to the team. Track every question it cannot answer confidently — those gaps are your documentation priorities. The Second Brain improves every time a gap is filled.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-[var(--color-border)] rounded-xl p-6 sm:p-8 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-[var(--color-cta)] shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-[var(--color-foreground)] text-white rounded-xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Trilogy&rsquo;s approach:</span> Second Brains were built during{" "}
              <Link href="/frameworks/wedsai-method" className="text-[var(--color-cta)] hover:underline">
                Weds.ai sessions
              </Link>
              {" "}— by the employees who held the knowledge, using the tools they were learning to use. No engineering team required. No vendor contract. Just knowledge workers documenting their own expertise in AI-queryable form.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Frameworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/frameworks/wedsai-method" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">How to Build Them</div>
              <div className="font-bold">The Weds.ai Method →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">Second Brains are built in Weds.ai sessions — by the people who hold the knowledge.</div>
            </Link>
            <Link href="/results" className="border border-[var(--color-border)] rounded-lg p-5 bg-white hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">See the Results</div>
              <div className="font-bold">Real Results at Trilogy →</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">How Second Brains contributed to 80% AI-handled support and 4x revenue per head.</div>
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA
        dark
        headline="Your Company's Knowledge Is Leaking. Let's Capture It."
        body="Book a CEO Briefing to map where your institutional knowledge lives and how Second Brains can make it permanent."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
        secondaryLabel="Explore All Frameworks"
        secondaryHref="/frameworks"
      />
    </>
  );
}
