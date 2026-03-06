"use client";

import { useState, FormEvent } from "react";

export function BeehiivForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Open Beehiiv subscribe form in a popup with the email
    const url = `https://subscribe-forms.beehiiv.com/f9e5ca6c-91f8-433d-99ef-927d06f14f2e`;
    window.open(url, "beehiiv", "width=500,height=600,scrollbars=yes");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Check the popup to confirm your subscription!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3.5 rounded-lg bg-[var(--color-cta)] text-white text-sm font-medium hover:bg-[var(--color-cta-hover)] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </div>
  );
}
