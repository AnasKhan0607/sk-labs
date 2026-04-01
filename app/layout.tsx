import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "SK Labs — AI Software Studio",
  description: "We build AI-powered software for companies that want to move fast. Custom AI agents, automation, and intelligent products.",
  keywords: ["AI development", "AI agency", "software studio", "custom AI", "AI automation", "AI agents"],
  authors: [{ name: "SK Labs" }],
  openGraph: {
    title: "SK Labs — AI Software Studio",
    description: "We build AI-powered software for companies that want to move fast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Labs — AI Software Studio",
    description: "We build AI-powered software for companies that want to move fast.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}