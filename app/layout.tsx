import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToolScout — Discover the right development tools, faster",
  description:
    "ToolScout helps developers explore, compare, and choose the best tools for building modern applications. A curated directory of development tools, built by developers, for developers.",
  keywords: [
    "developer tools",
    "development tools",
    "programming tools",
    "software tools",
    "tool directory",
    "dev tools",
  ],
  openGraph: {
    title: "ToolScout — Discover the right development tools, faster",
    description:
      "A curated directory of development tools, built by developers, for developers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
