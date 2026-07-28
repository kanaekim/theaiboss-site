"use client";

import { useEffect } from "react";

const AI_DOMAINS: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "aistudio.google.com": "google_ai_studio",
  "claude.ai": "claude",
  "copilot.microsoft.com": "microsoft_copilot",
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

function getSourceFromReferrer(): string | null {
  try {
    const hostname = new URL(document.referrer).hostname.replace(/^www\./, "");
    for (const [domain, source] of Object.entries(AI_DOMAINS)) {
      if (hostname === domain || hostname.endsWith(`.${domain}`)) return source;
    }
  } catch {
    // no referrer
  }
  return null;
}

function getSourceFromUTM(): string | null {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  if (utmMedium === "ai" && utmSource) return utmSource;
  if (utmSource && Object.values(AI_DOMAINS).includes(utmSource)) return utmSource;
  return null;
}

export function AIReferralTracker() {
  useEffect(() => {
    const source =
      getCookie("__ai_ref") ??
      getSourceFromUTM() ??
      getSourceFromReferrer();

    if (!source) return;

    clearCookie("__ai_ref");
    localStorage.setItem("ai_referral_source", source);

    if (typeof window.gtag === "function") {
      window.gtag("event", "ai_referral", {
        event_category: "acquisition",
        event_label: source,
        ai_source: source,
        send_to: "G-2TSQ90GCP9",
      });
    }
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
