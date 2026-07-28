"use client";

import Link from "next/link";
import { BeehiivForm } from "@/components/BeehiivForm";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "/about" },
      { label: "The Playbook", href: "/playbook" },
      { label: "Results", href: "/results" },
      { label: "Speaking", href: "/speaking" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { label: "The Slowinski Pyramid", href: "/frameworks/slowinski-pyramid" },
      { label: "Weds.ai Method", href: "/frameworks/wedsai-method" },
      { label: "Second Brains", href: "/frameworks/second-brains" },
      { label: "All Frameworks", href: "/frameworks" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Advisory", href: "/advisory" },
      { label: "Board Presentations", href: "/board-presentations" },
      { label: "Workshops", href: "/workshops" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "FAQ", href: "/faq" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a CEO Briefing", href: "/contact" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/kathyslowinski",
        external: true,
      },
      { label: "Email", href: "mailto:kathy@theaiboss.ai" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter strip */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--color-cta)] font-semibold mb-3">
              Weekly AI Briefing
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              AI Strategy From the CEO Chair
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Every week, Kathy shares one AI insight leaders can act on — no hype, no tutorials.
            </p>
            <BeehiivForm />
          </div>
        </div>

        <div className="pt-12 pb-4">
          {/* Logo + tagline */}
          <div className="mb-12">
            <div className="text-xl font-bold tracking-tight">The AI Boss</div>
            <p className="text-sm text-gray-400 mt-2">
              AI-first leadership. Built from the CEO chair.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      {"external" in link ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured banner */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <p className="text-sm text-gray-400">
              Built the playbook inside a $110M company. Now sharing it with CEOs
              ready to move.
            </p>
            <Link
              href="/results"
              className="inline-block mt-2 text-sm text-[var(--color-cta)] hover:underline"
            >
              See Results →
            </Link>
          </div>

          {/* Legal */}
          <div className="border-t border-gray-800 pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} TheAIBoss.ai</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
