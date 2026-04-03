import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Evergreen Labs — AI Systems for Operations",
  description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
  keywords: ["AI development", "AI agency", "property management AI", "staffing automation", "custom AI", "AI automation"],
  authors: [{ name: "Evergreen Labs" }],
  openGraph: {
    title: "Evergreen Labs — AI Systems for Operations",
    description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://evergreenlabs.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evergreen Labs - AI Systems for Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Labs — AI Systems for Operations",
    description: "We help property managers, staffing agencies, and service businesses reduce admin work with custom AI tools.",
    images: ["https://evergreenlabs.dev/og-image.png"],
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