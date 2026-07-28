import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: {
    absolute:
      "FAQ — AI Transformation, Keynote Speaking & CEO Advisory | The AI Boss",
  },
  description:
    "Common questions about working with Kathy Slowinski: AI advisory engagements, keynote speaking, CEO workshops, pricing, and what to expect.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: "/faq",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Kathy Slowinski?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kathy is a CEO who led AI transformation at Trilogy, driving 4x revenue per headcount with a 40-person team. She compressed 3 million lines of legacy code to 125,000, reduced board prep from a full day to 90 minutes, and built AI-powered support that handles 80% of customer inquiries. She is a YPO member and AI Champion, and now works directly with CEOs and executive teams through advisory, speaking, and workshops.",
      },
    },
    {
      "@type": "Question",
      name: "What makes The AI Boss different from other AI consultants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI consultants have never actually done the transformation themselves. They have frameworks and slide decks. Kathy has scar tissue. She built a real AI-first company from the inside as the CEO, not as an outside advisor. That operational experience is the difference between theory and results.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for tech companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While Kathy's background is in technology, the frameworks and strategies apply to any company where knowledge work, operations, or customer interactions can be enhanced with AI. The principles of the Slowinski Pyramid and Weds.ai Method are industry-agnostic.",
      },
    },
    {
      "@type": "Question",
      name: "What size companies do you typically work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients are companies with $50M to $500M in annual revenue. These are organizations large enough to have meaningful AI opportunities but small enough that leadership can move quickly without layers of bureaucracy.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical advisory engagement look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts with a 90-minute diagnostic session where we assess your current state, identify the highest-impact AI opportunities, and map your team's readiness. From there, engagements are customized, but most involve a 90-day sprint with defined milestones, direct CEO access, and measurable outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does advisory cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advisory engagements typically start in the low five figures. The exact scope depends on company size, complexity, and duration. We will give you a clear number after the initial conversation. There are no hidden fees or scope creep.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will we see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most companies see measurable operational improvements within the first 30 days. The 90-day mark is where strategic impact becomes visible: reduced cycle times, higher throughput, and clear ROI on AI investments.",
      },
    },
    {
      "@type": "Question",
      name: "Will we have direct access to Kathy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kathy works directly with every advisory client. There is no junior team, no account managers, and no delegation to associates. You get the CEO who did the transformation.",
      },
    },
    {
      "@type": "Question",
      name: "Is everything confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every engagement is covered by a mutual NDA. We will never discuss your company, your challenges, or your strategy with anyone without explicit written permission.",
      },
    },
    {
      "@type": "Question",
      name: "What if we are not ready for a full engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That is fine. Start with a speaking engagement or workshop to build internal alignment. Or take the AI Readiness Assessment on our resources page to see where you stand. Not every company is ready, and we will tell you honestly if the timing is not right.",
      },
    },
    {
      "@type": "Question",
      name: "What topics does Kathy speak on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core topics include AI transformation from the CEO's perspective, building AI-first teams, the Slowinski Pyramid framework, leading through AI disruption, and what boards need to know about AI. Every keynote is customized to the audience and industry.",
      },
    },
    {
      "@type": "Question",
      name: "What formats are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keynote (30–60 minutes), fireside chat, panel participation, and half-day deep dives. The format depends on your event goals and audience.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a speaking engagement cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees vary by format, location, and exclusivity. Contact us for a specific quote. We are transparent about pricing from the first conversation.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should we book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally 8 to 12 weeks, though we can sometimes accommodate shorter timelines depending on schedule availability. Popular conference seasons book faster.",
      },
    },
    {
      "@type": "Question",
      name: "Do you speak internationally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kathy has spoken to audiences across North America and is available for international events. Travel logistics are handled as part of the engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What is included beyond the talk itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every engagement includes a pre-event discovery call to customize content, the presentation itself, and a post-event summary with recommended next steps for the audience. For premium engagements, a Q&A session or executive roundtable can be added.",
      },
    },
    {
      "@type": "Question",
      name: "What workshop formats do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three formats: a 2-hour executive briefing for leadership teams, a half-day working session with hands-on exercises, and a full-day immersive workshop that includes strategy development and action planning.",
      },
    },
    {
      "@type": "Question",
      name: "Do participants need a technical background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Workshops are designed for executives and senior leaders, not engineers. The focus is on strategy, decision-making, and organizational change, not on writing code or configuring tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can workshops be customized to our industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every workshop is customized based on a pre-session intake that covers your industry, company size, current AI maturity, and specific goals. No two workshops are identical.",
      },
    },
    {
      "@type": "Question",
      name: "What do participants walk away with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Concrete deliverables vary by format but typically include a prioritized AI opportunity map, a 90-day action plan, a framework for evaluating AI investments, and a clear understanding of what to do on Monday morning.",
      },
    },
    {
      "@type": "Question",
      name: "Can workshops be delivered virtually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All three formats are available both in-person and virtually. In-person tends to generate more energy and interaction, but the virtual format is fully effective and includes the same materials and outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I submit the contact form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We review every submission within two business days. If there is a potential fit, we schedule a 30-minute introductory call. If it is not the right match, we will tell you directly and suggest alternatives. You will never be ghosted.",
      },
    },
    {
      "@type": "Question",
      name: "Will I be added to a sales sequence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We do not run automated email campaigns, drip sequences, or cold outreach. You will receive one human response to your inquiry. That is it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer retainers or ongoing engagements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After an initial engagement, some clients move to a quarterly or ongoing advisory relationship. This is always optional and based on mutual fit. We never push for longer commitments than what makes sense.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <FAQContent />
    </>
  );
}
