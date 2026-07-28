import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { AIReferralTracker } from "@/components/AIReferralTracker";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The AI Boss",
  url: "https://theaiboss.ai",
  logo: "https://theaiboss.ai/logo.svg",
  founder: {
    "@type": "Person",
    name: "Kathy Slowinski",
  },
  sameAs: ["https://linkedin.com/in/kathyslowinski"],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theaiboss.ai"),
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  title: {
    default: "The AI Boss | AI Keynote Speaker & Executive AI Advisor for CEOs",
    template: "%s | The AI Boss",
  },
  description:
    "Kathy Slowinski is an AI keynote speaker, executive advisor, and YPO member who shows CEOs and boards how to adopt AI with real business results.",
  openGraph: {
    siteName: "The AI Boss",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The AI Boss — Kathy Slowinski | AI Keynote Speaker & Executive Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={ORG_SCHEMA} />
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
        <GoogleAnalytics />
        <AIReferralTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
