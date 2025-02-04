import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Header from "./_components/layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/app/_components/layout/Footer";

// Opción 1: Inter (muy popular en diseños modernos)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Opción 2: Plus Jakarta Sans (elegante y profesional)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

// Opción 3: Outfit (moderna y limpia)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

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
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
    other: {
      rel: "apple-touch-icon",
      url: "/images/favicon.svg",
    },
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
        className={`${outfit.variable} ${plusJakarta.variable} ${inter.variable} font-plus-jakarta bg-gray-900 text-gray-100 min-h-screen relative`}
      >
        {/* Gradient Background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/[0.03] via-gray-900 to-gray-900 pointer-events-none" />

        {/* Content */}
        <div className="relative">
          <Toaster />
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
