import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold mb-4">This page has been deprecated.</h1>
        <p className="text-[var(--color-muted)] text-lg mb-8">
          (Even AI cannot find everything.)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            { label: "The Playbook", href: "/playbook" },
            { label: "Results", href: "/results" },
            { label: "Advisory", href: "/advisory" },
            { label: "Blog", href: "/blog" },
            { label: "Speaking", href: "/speaking" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[var(--color-foreground)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
