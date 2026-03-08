"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    label: "Advisory",
    href: "/advisory",
    desc: "Ongoing strategic guidance for CEOs navigating AI",
  },
  {
    label: "Board Presentations",
    href: "/board-presentations",
    desc: "AI fluency for boards and leadership teams",
  },
  {
    label: "Workshops",
    href: "/workshops",
    desc: "Hands-on AI implementation sessions for teams",
  },
  {
    label: "Speaking",
    href: "/speaking",
    desc: "Keynotes and panels for conferences and events",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main nav */}
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
  <img
    src="/logo.svg"
    alt="The AI Boss"
    className="h-10 w-auto"
  />
</Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors">
              About
            </Link>
            <Link href="/playbook" className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors">
              The Playbook
            </Link>
            <Link href="/results" className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors">
              Results
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors flex items-center gap-1">
                Services
                <svg className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-lg shadow-xl border border-[var(--color-border)] p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="p-3 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
                      >
                        <div className="font-medium text-sm">{s.label}</div>
                        <div className="text-xs text-[var(--color-muted)] mt-1">{s.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)] text-center">
                    <Link
                      href="/contact"
                      className="text-sm text-[var(--color-cta)] font-medium hover:underline"
                    >
                      Not sure which is right? Book a CEO Briefing →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors">
              Blog
            </Link>
            <Link href="/speaking" className="text-sm font-medium hover:text-[var(--color-muted)] transition-colors">
              Speaking
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[var(--color-foreground)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
            >
              Book a CEO Briefing
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "The Playbook", href: "/playbook" },
              { label: "Results", href: "/results" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-[var(--color-border)] pt-3">
              <div className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-2">Services</div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block text-sm py-2 pl-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-[var(--color-border)] pt-3 space-y-3">
              <Link href="/blog" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/speaking" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
                Speaking
              </Link>
              <Link href="/newsletter" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
                Newsletter
              </Link>
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-[var(--color-foreground)] text-white text-sm font-medium rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Book a CEO Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
