import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "SK Labs — AI Systems for Operations",
  description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
  keywords: ["AI development", "AI agency", "property management AI", "staffing automation", "custom AI", "AI automation"],
  authors: [{ name: "SK Labs" }],
  openGraph: {
    title: "SK Labs — AI Systems for Operations",
    description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Labs — AI Systems for Operations",
    description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#141414] text-white antialiased">
        {children}
      </body>
    </html>
  );
}