import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-[var(--color-muted)]">
          <p>
            TheAIBoss.ai (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy. This policy explains how we collect, use, and protect your
            information when you visit our website or engage with our services.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Information We Collect
          </h2>
          <p>
            We collect information you voluntarily provide through contact forms,
            newsletter signups, and assessment tools — including your name,
            email address, company name, role, and any additional details you
            share.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            How We Use Your Information
          </h2>
          <p>
            We use your information to respond to inquiries, deliver requested
            resources, send our newsletter (if subscribed), and improve our
            services. We do not sell, rent, or share your personal information
            with third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Cookies and Analytics
          </h2>
          <p>
            We use Google Analytics (GA4) to understand how visitors interact
            with our site. This may involve cookies. You can opt out by adjusting
            your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-8">
            Contact
          </h2>
          <p>
            Questions about this policy? Email us at{" "}
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
