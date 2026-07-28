import { NextRequest, NextResponse } from "next/server";

const AI_REFERRERS: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "aistudio.google.com": "google_ai_studio",
  "claude.ai": "claude",
  "copilot.microsoft.com": "microsoft_copilot",
};

function getAISource(referer: string | null): string | null {
  if (!referer) return null;
  try {
    const hostname = new URL(referer).hostname.replace(/^www\./, "");
    for (const [domain, source] of Object.entries(AI_REFERRERS)) {
      if (hostname === domain || hostname.endsWith(`.${domain}`)) return source;
    }
  } catch {
    // invalid URL
  }
  return null;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const referer = request.headers.get("referer");
  const source = getAISource(referer);

  if (source) {
    response.cookies.set("__ai_ref", source, {
      maxAge: 1800,
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf|mp4)).*)"],
};
