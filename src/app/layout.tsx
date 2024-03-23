import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";

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
  icons: [
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  keywords: [
    "cv",
    "curriculum vitae",
    "resume",
    "portfolio",
    "engineer",
    "developer",
    "programmer",
    "senior",
    "full-stack",
    "front-end",
    "back-end",
    "michael pacheco",
  ],
  colorScheme: "only light",
  themeColor: "#ffffff",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
