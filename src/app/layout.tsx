import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The AI Boss | AI Keynote Speaker & Executive AI Advisor for CEOs",
    template: "%s | The AI Boss",
  },
  description:
    "Kathy Slowinski is an AI keynote speaker, executive advisor, and YPO member who shows CEOs and boards how to adopt AI with real business results.",
  openGraph: {
    siteName: "The AI Boss",
    type: "website",
    url: "https://theaiboss.ai",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
