import type { Metadata } from "next";
import { Inter, Libre_Bodoni } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ChainLex - Compliance, Codified",
  description: "The AI-Driven Compliance Infrastructure for Tokenized Assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreBodoni.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
