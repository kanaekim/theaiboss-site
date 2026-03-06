import { Metadata } from "next";
import { SectionCTA } from "@/components/SectionCTA";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";

export const metadata: Metadata = {
  title: "Anna TEST About Kathy Slowinski | CEO, AI Keynote Speaker & YPO Member",
  description:
    "Kathy Slowinski is the CEO behind The AI Boss, a leader who has driven AI transformation in real companies, and a trusted AI advisor to executive teams worldwide.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            She turned a 40-person company into a $110M machine. No hiring
            spree. No consultants. Just AI and leadership.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl">
            The story of a CEO who stopped planning AI transformation and
            started building one.
          </p>
        </div>
      </section>

      {/* ── Opening Hook ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-lg sm:text-xl leading-relaxed text-[var(--color-muted)]">
          <p>
            Most CEOs talk about AI transformation like it is somewhere on the
            horizon &mdash; a three-year roadmap, a seven-figure consulting
            engagement, a PowerPoint deck that never leaves the boardroom.
          </p>
          <p>
            Kathy Slowinski skipped all of that. She walked into her company on
            a Wednesday in April 2023, launched a hackathon, and never stopped.
            Within months, her team had compressed 3 million lines of legacy code
            down to 125,000. Board prep went from a full day to 90 minutes.
            Product specs that used to take days were shipping in an hour. The
            bug backlog hit a 34-year low. Revenue per employee quadrupled.
          </p>
          <p>
            She did not read about AI transformation. She built one &mdash; from
            the inside, in real time, with her own people.
          </p>
        </div>
      </section>

      {/* ── The Story ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            From Server Racks to Second Brains
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              Kathy&rsquo;s career did not start in a boardroom. It started with
              server hardware &mdash; racking systems, configuring networks,
              earning a Microsoft MVP designation before most executives knew
              what cloud meant. She was an early AWS adopter, building
              infrastructure at a time when &ldquo;the cloud&rdquo; was still a
              hard sell to CTOs.
            </p>
            <p>
              That technical foundation carried her through leadership roles at
              CircleUp, Neighborhoods.com, Numerator, and IgniteTech &mdash;
              companies where she learned how product, data, and revenue
              intersect at scale.
            </p>
            <p>
              Then came Trilogy, where she took the helm as CEO across
              CopperTree, Jigsaw, and Kayako. Three products. Lean teams. Legacy
              codebases. The conventional playbook said hire more, outsource
              more, plan more.
            </p>
            <p className="text-[var(--color-foreground)] font-semibold text-xl">
              She bet.
            </p>
            <p>
              She bet that a small team, armed with AI and given the freedom to
              experiment every single week, could outperform a company ten times
              its size. And she was right.
            </p>
          </div>
        </div>
      </section>

      {/* ── Transformation Timeline ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Transformation Timeline
          </h2>
          <div className="relative pl-8 border-l-2 border-[var(--color-border)] space-y-14">
            <TimelineEntry
              date="April 2023"
              title="Weds.ai is born"
              description="Kathy launches a weekly company-wide hackathon. Every Wednesday, the entire team stops regular work and builds with AI. No permission needed. No approval chains. Just build."
            />
            <TimelineEntry
              date="Mid 2023"
              title="Second Brains go live"
              description="AI-powered support agents handle 80% of customer inquiries. The team shifts from answering tickets to training models and refining workflows."
            />
            <TimelineEntry
              date="2023 - 2024"
              title="The numbers speak"
              description="Revenue per headcount quadruples. 3 million lines of legacy code compress to 125,000. Board prep drops from a full day to 90 minutes. Product specs ship in an hour instead of days. The bug backlog hits a 34-year low."
            />
          </div>
        </div>
      </section>

      {/* ── Testimonial Placeholder ── */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <TestimonialPlaceholder context="CEO who attended a keynote" />
        </div>
      </section>

      {/* ── Why Not a Consultancy ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Why Not a Consultancy
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
            <p>
              Here is what the big firms will not tell you: they have never done
              this themselves. They have frameworks, maturity models, and
              hundred-slide decks. What they do not have is scar tissue.
            </p>
            <p>
              Kathy has scar tissue. She knows what it feels like when the first
              hackathon flops and half the team thinks AI is a threat to their
              jobs. She knows the resistance that comes from middle management
              when workflows start shifting. She knows because she lived it
              &mdash; not as an outside advisor with a flight home on Friday, but
              as the CEO who had to show up on Monday and keep building.
            </p>
            <p>
              The consultancy model promises initial deliverables in six to
              twelve months, with full transformation stretching to five-plus
              years. Kathy&rsquo;s self-directed approach delivered major
              operational gains within 12 months and 4x revenue per headcount in
              under 24.
            </p>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Philosophy</h2>
          <PullQuote>
            Stop learning about AI. Start doing AI.
          </PullQuote>
          <PullQuote>
            Consultants give you a roadmap. I give you the engine and teach your
            people to drive.
          </PullQuote>
          <PullQuote>
            AI does not replace your team. It reveals who on your team was
            waiting for better tools.
          </PullQuote>
        </div>
      </section>

      {/* ── Testimonial Placeholder ── */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <TestimonialPlaceholder context="YPO member" />
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Credentials</h2>
          <ul className="space-y-4 text-lg text-[var(--color-muted)]">
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
              CEO, Trilogy (CopperTree, Jigsaw, Kayako)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
              YPO Member, Park City Chapter, YPO AI Champion
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
              Former CPRO, CircleUp (acquired by Brightflow.ai)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
              Leadership at Neighborhoods.com, Numerator, IgniteTech
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
              Technical roots: server hardware, Microsoft MVP, early AWS
            </li>
          </ul>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <SectionCTA
        headline="Ready to stop planning and start building?"
        body="Kathy works with CEOs and leadership teams who are done waiting for permission to transform."
        secondaryLabel="Explore the Playbook"
        secondaryHref="/playbook"
      />
    </main>
  );
}

/* ── Local Components ── */

function TimelineEntry({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-[calc(0.5rem+1px)] top-1.5 h-3 w-3 rounded-full bg-[var(--color-cta)] border-2 border-white" />
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cta)] mb-1">
        {date}
      </p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[var(--color-cta)] pl-8 py-2">
      <p className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-[var(--color-foreground)]">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}
