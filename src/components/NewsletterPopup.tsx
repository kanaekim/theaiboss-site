"use client";

import { useEffect, useState } from "react";
import { BeehiivForm } from "@/components/BeehiivForm";

const SESSION_KEY = "newsletter_popup_seen";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function handleScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.4) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe to newsletter"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setVisible(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[var(--color-foreground)] rounded-2xl p-8 sm:p-10 shadow-2xl">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="text-xs uppercase tracking-widest text-[var(--color-cta)] font-semibold mb-3">
            Weekly AI Briefing
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            AI Strategy From the CEO Chair
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Every week, Kathy shares one AI insight leaders can act on — no hype, no tutorials.
          </p>
        </div>

        <BeehiivForm />

        <p className="mt-4 text-center text-xs text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
