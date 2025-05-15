import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "RFP Ripper Tool - P5TechSolutions & Vatortech",
  description: "A custom proposal for the RFP Ripper Tool, built by P5TechSolutions for Vatortech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
