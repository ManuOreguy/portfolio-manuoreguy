import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Header from "./_components/layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/app/_components/layout/Footer";

// Opción 1: Inter (muy popular en diseños modernos)
const inter = Inter({ subsets: ["latin"] });

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
    icon: "/images/test.svg",
    shortcut: "/images/test.svg",
    apple: "/images/test.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/test.svg",
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
        className={`${outfit.variable} font-sans bg-gray-900 text-gray-100 min-h-screen`}
      >
        <Toaster />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
