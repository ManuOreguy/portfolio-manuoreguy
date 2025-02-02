import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Manuel Oreguy - Frontend Developer",
  description:
    "Portfolio personal de Juan Manuel Oreguy, Frontend Developer especializado en React, React Native, Next.js y TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "React Native",
    "Redux Toolkit",
    "TailwindCSS",
    "APIs REST",
  ],
  icons: {
    icon: "/images/test.svg",
    shortcut: "/images/test.svg",
    apple: "/images/test.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/favicon.svg",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
