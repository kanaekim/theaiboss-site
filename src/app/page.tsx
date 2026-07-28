import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MetricsBar } from "@/components/MetricsBar";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";
import { JsonLd } from "@/components/JsonLd";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kathy Slowinski",
  jobTitle: "CEO",
  worksFor: { "@type": "Organization", name: "Trilogy" },
  description:
    "CEO of Trilogy ($110M revenue), AI keynote speaker, and executive advisor who increased revenue per head by 4x and automated 80% of customer support with AI.",
  url: "https://theaiboss.ai",
  sameAs: ["https://linkedin.com/in/kathyslowinski"],
  knowsAbout: [
    "Artificial Intelligence",
    "AI Strategy",
    "SaaS",
    "AI Transformation",
    "Executive Leadership",
  ],
};

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Kathy Slowinski — YPO AI Champion",
  description:
    "CEO of Trilogy shares how she used AI to manage $110M in revenue with ~40 people",
  thumbnailUrl: "https://img.youtube.com/vi/eg-Xb7U0K_8/maxresdefault.jpg",
  uploadDate: "2024-03-01",
  embedUrl: "https://www.youtube.com/embed/eg-Xb7U0K_8",
};

const REVIEW_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Review",
  author: {
    "@type": "Person",
    name: "Job Tucker",
    jobTitle: "Director",
    worksFor: { "@type": "Organization", name: "Third Comma" },
  },
  reviewBody:
    "Kathy has singlehandedly pushed AI to the forefront of our YPO chapter and made it accessible, practical, and incredibly valuable for our members. Her depth of knowledge and relentless curiosity make her a powerful guide for leaders trying to understand how AI can create real advantage in their businesses. I’ve personally gained tremendous insight from her and consistently walk away from our conversations seeing the future more clearly.",
  itemReviewed: { "@type": "ProfessionalService", name: "The AI Boss" },
};

export const metadata: Metadata = {
  title: {
    absolute:
      "Kathy Slowinski — AI Keynote Speaker, CEO Advisor & AI Transformation Expert | The AI Boss",
  },
  description:
    "Kathy Slowinski is a sitting CEO who used AI to run a $110M company with 40 people. Book her as an AI keynote speaker, executive advisor, or workshop leader.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Kathy Slowinski — AI Keynote Speaker & CEO Advisor | The AI Boss",
  },
};

const builtItems = [
  {
    title: "Weds.ai",
    href: "/frameworks/wedsai-method",
    description: "Weekly AI hackathons where every employee builds with AI.",
    metric: "52 sessions/year",
  },
  {
    title: "Second Brains",
    href: "/frameworks/second-brains",
    description:
      "AI assistants trained on institutional knowledge, replacing tribal expertise.",
    metric: "Company-wide adoption",
  },
  {
    title: "AI-Native Support",
    href: "/results",
    description:
      "Customer support rebuilt from scratch with AI handling the majority of volume.",
    metric: "80% AI-handled",
  },
  {
    title: "Codebase Compression",
    href: "/results",
    description:
      "Legacy codebase reduced to its essential core through AI-assisted rewriting.",
    metric: "3M to 125K lines",
  },
];

const frameworks = [
  {
    title: "The Slowinski Pyramid",
    description:
      "A prioritization model that tells you exactly where AI creates value first — and where it wastes money. Stop guessing. Start sequencing.",
  },
  {
    title: "The Weds.ai Method",
    description:
      "Weekly, non-optional AI hackathons that turn every employee into an AI practitioner. Not training. Not workshops. Hands-on building, every single week.",
  },
  {
    title: "Leadership-First Adoption",
    description:
      "The CEO uses AI daily before asking anyone else to. No delegating transformation to the IT department. You go first.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={PERSON_SCHEMA} />
      <JsonLd data={VIDEO_SCHEMA} />
      <JsonLd data={REVIEW_SCHEMA} />
{/* Hero Section */}
      <section className="bg-[var(--color-foreground)] text-white pt-24">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left — Text (2/2) */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Your AI Strategy Is a PowerPoint Deck.
                <br />
                Mine Runs a $110M Company.
              </h1>
              <h2 className="sr-only">AI Keynote Speaker &amp; Executive AI Advisor for CEOs and Boards</h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
               Most CEOs have spent the last three years debating whether AI is real, forming committees, hiring consultants, 
                and running pilots that never ship. Kathy Slowinski spent those same three years actually doing it. 
                She increased revenue per head by 4x, moved margins 15 points from 60% to 75%, and built an operating model 
                that runs a $100M+ SaaS portfolio with a fraction of the headcount her competitors need. 
                They are still talking about what is possible. 
                She already proved it.
              </p>
            </div>

            {/* Right — Kathy's Photo (1/2) */}
            <div className="lg:w-1/3 lg:mt-4">
              <Image
                src="/kathy_hero.png"
                alt="Kathy Slowinski, CEO and AI keynote speaker"
                width={540}
                height={540}
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="w-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Full-width paragraph below */}
          <p className="mt-10 text-base text-gray-400 leading-relaxed max-w-full">
            The difference between companies that talk about AI and companies
            that run on it is one thing: a CEO who has actually done it. Not a
            consultant. Not an advisor who read a white paper. A sitting CEO who
            rebuilt a real company from the inside out — and created the
            frameworks so you can do it too.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Book a CEO Briefing
            </Link>
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Explore the Playbook
            </Link>
          </div>
        </div>
      </section>
      
      {/* Metrics Bar */}
      <MetricsBar />
      
{/* Hero Video */}
      <section className="bg-[var(--color-foreground)] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <YoutubeEmbed
            videoId="eg-Xb7U0K_8"
            title="Kathy Slowinski — YPO AI Champion: CEO shares how she used AI to manage $110M in revenue with 40 people"
          />
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 text-center">
            <div className="px-5 py-2 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-foreground)]">
              YPO AI Champion
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              CEO of Trilogy &middot; $110M Revenue &middot; ~40 People
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/job_tucker.png"
                  alt="Job Tucker, Director at Third Comma"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">Job Tucker</div>
                  <div className="text-sm text-[var(--color-muted)]">Director @ Third Comma</div>
                </div>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed italic">
                &ldquo;Kathy has singlehandedly pushed AI to the forefront of our YPO chapter and made it accessible, practical, and incredibly valuable for our members. Her depth of knowledge and relentless curiosity make her a powerful guide for leaders trying to understand how AI can create real advantage in their businesses. I&rsquo;ve personally gained tremendous insight from her and consistently walk away from our conversations seeing the future more clearly.&rdquo;
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link href="/results" className="text-sm font-medium text-[var(--color-cta)] hover:underline">
                See the full results at Trilogy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Kathy Built */}
      <section className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Kathy Built
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            Not theory. Not projections. Real systems running inside a real
            company, right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {builtItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-2">
                  <Link href={item.href} className="hover:text-[var(--color-cta)] transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-[var(--color-muted)] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-sm font-semibold text-[var(--color-cta)]">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Frameworks */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The Frameworks
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            Battle-tested systems you can deploy inside your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frameworks.map((fw) => (
              <div
                key={fw.title}
                className="border border-[var(--color-border)] rounded-xl p-8"
              >
                <h3 className="text-lg font-bold mb-3">{fw.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
            >
              Explore the Full Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        dark
        headline="Stop Planning. Start Transforming."
        body="The CEOs who act on AI now will define the next decade. The rest will wonder what happened."
        primaryLabel="Book a CEO Briefing"
        secondaryLabel="Explore the Playbook"
        secondaryHref="/playbook"
      />
    </>
  );
}
