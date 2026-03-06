import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Boss Newsletter | Weekly AI Strategy for CEOs",
  description:
    "One AI insight per week that is worth your CEO attention. No hype. No tutorials. Just strategy. Subscribe to The AI Leadership Briefing.",
};

export default function NewsletterPage() {
  return (
    <main className="bg-white text-[var(--color-foreground)]">
      {/* -- Hero -- */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            The AI Leadership Briefing
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto mb-6">
            One AI insight per week that is worth your CEO attention. No hype.
            No tutorials. Just strategy.
          </p>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-xl mx-auto">
            Every Tuesday morning, one email. One strategic AI insight. One
            implication for your business. One action you can take that week.
          </p>
        </div>
      </section>

      {/* -- Signup Form -- */}
      <section className="pb-20 px-6">
        <div className="max-w-md mx-auto">
          <form action="#" className="flex gap-3">
            <input
              type="email"
              name="email"
              placeholder="Your business email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] focus:border-transparent transition-shadow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-cta)] text-white font-medium rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-sm text-[var(--color-muted)] text-center mt-3">
            Every Tuesday. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </section>

      {/* -- What You Get -- */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            What You Get
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Signal, Not Noise",
                body: "One topic per issue. 400 to 600 words. Three minutes of your time. We respect your schedule by being brief and focused.",
              },
              {
                title: "Written by a Practitioner",
                body: "Every issue comes from someone who drove AI transformation as the CEO of a $110M company. Not theory. Not research summaries. Real operational insight.",
              },
              {
                title: "Actionable by Friday",
                body: "Every issue includes one specific action you can take that week. Not vague advice. A concrete step you can implement before the weekend.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-xl border border-[var(--color-border)] bg-white"
              >
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Sample Topics -- */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Sample Topics
          </h2>
          <ul className="space-y-5">
            {[
              "The One Question That Tells You If Your AI Investment Is Working",
              "Why Your Best Engineer Is Your Worst AI Blocker",
              "The Board Deck Slide That Changes the AI Conversation",
              "What 80% AI-Handled Support Actually Looks Like",
              "The Middle Management Problem Nobody Talks About",
            ].map((topic) => (
              <li key={topic} className="flex items-start gap-4">
                <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-[var(--color-cta)]" />
                <span className="text-lg text-[var(--color-muted)] leading-relaxed">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -- Who Reads This -- */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Who Reads This
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
            CEOs, board members, and senior executives at companies with $50M to
            $500M in revenue. Leaders who are past the hype cycle and ready to
            make real decisions about AI.
          </p>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Members of YPO, EO, and Vistage. Executives who value peer-level
            insight over vendor pitches.
          </p>
        </div>
      </section>

      {/* -- Bottom Signup -- */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            One Email. Every Tuesday.
          </h2>
          <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-10">
            The AI insight your competitors are already reading.
          </p>
          <form action="#" className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Your business email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] focus:border-transparent transition-shadow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-cta)] text-white font-medium rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-sm text-[var(--color-muted)] mt-3">
            Every Tuesday. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </section>
    </main>
  );
}
