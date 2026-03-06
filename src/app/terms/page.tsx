import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-[var(--color-muted)]">
          <p>
            By accessing and using TheAIBoss.ai, you agree to these terms. If
            you do not agree, please do not use this website.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Use of Content
          </h2>
          <p>
            All content on this site — including text, frameworks, graphics, and
            downloadable resources — is the intellectual property of The AI Boss
            and Kathy Slowinski. You may use downloaded resources for your own
            business purposes but may not redistribute, resell, or republish
            them without written permission.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Engagement Terms
          </h2>
          <p>
            Advisory, speaking, and workshop engagements are subject to
            individual agreements. The terms on this page govern website use
            only, not service engagements.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Disclaimer
          </h2>
          <p>
            Results described on this site reflect the experience of Trilogy
            under Kathy Slowinski&apos;s leadership. Individual results vary based on
            company, industry, team, and execution. We do not guarantee specific
            outcomes.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Contact
          </h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:kathy@theaiboss.ai" className="text-[var(--color-cta)] hover:underline">
              kathy@theaiboss.ai
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
