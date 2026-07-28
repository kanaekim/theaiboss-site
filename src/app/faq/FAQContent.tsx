"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionCTA } from "@/components/SectionCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

type AnswerNode = string | React.ReactNode;

interface FAQItem {
  q: string;
  a: AnswerNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQSection[] = [
  {
    title: "General",
    items: [
      {
        q: "Who is Kathy Slowinski?",
        a: "Kathy is a CEO who led AI transformation at Trilogy, driving 4x revenue per headcount with a 40-person team. She compressed 3 million lines of legacy code to 125,000, reduced board prep from a full day to 90 minutes, and built AI-powered support that handles 80% of customer inquiries. She is a YPO member and AI Champion, and now works directly with CEOs and executive teams through advisory, speaking, and workshops.",
      },
      {
        q: "What makes The AI Boss different from other AI consultants?",
        a: "Most AI consultants have never actually done the transformation themselves. They have frameworks and slide decks. Kathy has scar tissue. She built a real AI-first company from the inside as the CEO, not as an outside advisor. That operational experience is the difference between theory and results.",
      },
      {
        q: "Is this only for tech companies?",
        a: (
          <>
            No. While Kathy&rsquo;s background is in technology, the frameworks and strategies apply to any company where knowledge work, operations, or customer interactions can be enhanced with AI. The principles of the{" "}
            <Link href="/playbook" className="text-[var(--color-cta)] hover:underline">
              Slowinski Pyramid
            </Link>{" "}
            and{" "}
            <Link href="/playbook" className="text-[var(--color-cta)] hover:underline">
              Weds.ai Method
            </Link>{" "}
            are industry-agnostic.
          </>
        ),
      },
      {
        q: "What size companies do you typically work with?",
        a: "Most clients are companies with $50M to $500M in annual revenue. These are organizations large enough to have meaningful AI opportunities but small enough that leadership can move quickly without layers of bureaucracy.",
      },
    ],
  },
  {
    title: "Advisory",
    items: [
      {
        q: "What does a typical advisory engagement look like?",
        a: "It starts with a 90-minute diagnostic session where we assess your current state, identify the highest-impact AI opportunities, and map your team's readiness. From there, engagements are customized, but most involve a 90-day sprint with defined milestones, direct CEO access, and measurable outcomes.",
      },
      {
        q: "How much does advisory cost?",
        a: "Advisory engagements typically start in the low five figures. The exact scope depends on company size, complexity, and duration. We will give you a clear number after the initial conversation. There are no hidden fees or scope creep.",
      },
      {
        q: "How quickly will we see results?",
        a: "Most companies see measurable operational improvements within the first 30 days. The 90-day mark is where strategic impact becomes visible: reduced cycle times, higher throughput, and clear ROI on AI investments.",
      },
      {
        q: "Will we have direct access to Kathy?",
        a: "Yes. Kathy works directly with every advisory client. There is no junior team, no account managers, and no delegation to associates. You get the CEO who did the transformation.",
      },
      {
        q: "Is everything confidential?",
        a: "Absolutely. Every engagement is covered by a mutual NDA. We will never discuss your company, your challenges, or your strategy with anyone without explicit written permission.",
      },
      {
        q: "What if we are not ready for a full engagement?",
        a: (
          <>
            That is fine. Start with a speaking engagement or workshop to build internal alignment. Or take the AI Readiness Assessment on our{" "}
            <Link href="/resources" className="text-[var(--color-cta)] hover:underline">
              resources page
            </Link>{" "}
            to see where you stand. Not every company is ready, and we will tell you honestly if the timing is not right.
          </>
        ),
      },
    ],
  },
  {
    title: "Speaking",
    items: [
      {
        q: "What topics does Kathy speak on?",
        a: (
          <>
            Core topics include AI transformation from the CEO&rsquo;s perspective, building AI-first teams, the{" "}
            <Link href="/playbook" className="text-[var(--color-cta)] hover:underline">
              Slowinski Pyramid framework
            </Link>
            , leading through AI disruption, and what boards need to know about AI. Every keynote is customized to the audience and industry.
          </>
        ),
      },
      {
        q: "What formats are available?",
        a: "Keynote (30–60 minutes), fireside chat, panel participation, and half-day deep dives. The format depends on your event goals and audience.",
      },
      {
        q: "How much does a speaking engagement cost?",
        a: (
          <>
            Fees vary by format, location, and exclusivity.{" "}
            <Link href="/contact" className="text-[var(--color-cta)] hover:underline">
              Contact us
            </Link>{" "}
            for a specific quote. We are transparent about pricing from the first conversation.
          </>
        ),
      },
      {
        q: "How far in advance should we book?",
        a: "Ideally 8 to 12 weeks, though we can sometimes accommodate shorter timelines depending on schedule availability. Popular conference seasons book faster.",
      },
      {
        q: "Do you speak internationally?",
        a: "Yes. Kathy has spoken to audiences across North America and is available for international events. Travel logistics are handled as part of the engagement.",
      },
      {
        q: "What is included beyond the talk itself?",
        a: "Every engagement includes a pre-event discovery call to customize content, the presentation itself, and a post-event summary with recommended next steps for the audience. For premium engagements, a Q&A session or executive roundtable can be added.",
      },
    ],
  },
  {
    title: "Workshops",
    items: [
      {
        q: "What workshop formats do you offer?",
        a: "Three formats: a 2-hour executive briefing for leadership teams, a half-day working session with hands-on exercises, and a full-day immersive workshop that includes strategy development and action planning.",
      },
      {
        q: "Do participants need a technical background?",
        a: "No. Workshops are designed for executives and senior leaders, not engineers. The focus is on strategy, decision-making, and organizational change, not on writing code or configuring tools.",
      },
      {
        q: "Can workshops be customized to our industry?",
        a: "Yes. Every workshop is customized based on a pre-session intake that covers your industry, company size, current AI maturity, and specific goals. No two workshops are identical.",
      },
      {
        q: "What do participants walk away with?",
        a: "Concrete deliverables vary by format but typically include a prioritized AI opportunity map, a 90-day action plan, a framework for evaluating AI investments, and a clear understanding of what to do on Monday morning.",
      },
      {
        q: "Can workshops be delivered virtually?",
        a: "Yes. All three formats are available both in-person and virtually. In-person tends to generate more energy and interaction, but the virtual format is fully effective and includes the same materials and outcomes.",
      },
    ],
  },
  {
    title: "Working With Us",
    items: [
      {
        q: "What happens after I submit the contact form?",
        a: (
          <>
            We review every submission within two business days. If there is a potential fit, we schedule a 30-minute introductory call. If it is not the right match, we will tell you directly and suggest alternatives. You will never be ghosted.{" "}
            <Link href="/contact" className="text-[var(--color-cta)] hover:underline">
              Book a CEO Briefing
            </Link>{" "}
            to get started.
          </>
        ),
      },
      {
        q: "Will I be added to a sales sequence?",
        a: "No. We do not run automated email campaigns, drip sequences, or cold outreach. You will receive one human response to your inquiry. That is it.",
      },
      {
        q: "Do you offer retainers or ongoing engagements?",
        a: "Yes. After an initial engagement, some clients move to a quarterly or ongoing advisory relationship. This is always optional and based on mutual fit. We never push for longer commitments than what makes sense.",
      },
    ],
  },
];

export default function FAQContent() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} variant="light" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Questions CEOs Actually Ask
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Straight answers about AI advisory, keynote speaking, workshops, and what it&rsquo;s like to work with Kathy.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {FAQ_DATA.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        dark
        headline="Still Have Questions?"
        body="Book a CEO Briefing to discuss your specific AI transformation goals with Kathy Slowinski."
        primaryLabel="Book a CEO Briefing"
        primaryHref="/contact"
      />
    </main>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: AnswerNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--color-surface)] transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <span
          className={`flex-shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[var(--color-muted)] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
