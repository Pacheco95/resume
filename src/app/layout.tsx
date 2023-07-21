import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const title = "Michael Pacheco - Resume";

export const metadata: Metadata = {
  title: title,
  description: title,
  applicationName: title,
  authors: [
    {
      name: "Michael Pacheco",
      url: "https://linkedin.com/in/michaelpacheco95",
    },
  ],
  creator: "Michael Pacheco",
  keywords: ["cv", "curriculum vitae", "resume", "portfolio"],
  colorScheme: "only light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
