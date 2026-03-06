import Link from "next/link";

interface SectionCTAProps {
  headline: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export function SectionCTA({
  headline,
  body,
  primaryLabel = "Book a CEO Briefing",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  dark = false,
}: SectionCTAProps) {
  return (
    <section
      className={`py-20 px-4 ${
        dark
          ? "bg-[var(--color-foreground)] text-white"
          : "bg-[var(--color-surface)]"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{headline}</h2>
        {body && (
          <p
            className={`text-lg mb-8 ${
              dark ? "text-gray-300" : "text-[var(--color-muted)]"
            }`}
          >
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg transition-colors ${
              dark
                ? "bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)]"
                : "bg-[var(--color-foreground)] text-white hover:bg-[var(--color-accent-light)]"
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg border transition-colors ${
                dark
                  ? "border-gray-600 text-gray-200 hover:bg-gray-800"
                  : "border-[var(--color-border)] hover:bg-white"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
