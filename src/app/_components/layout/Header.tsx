"use client";

import { NAV_ITEMS } from "@/app/constants/data";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-100 hover:text-purple-400 transition-colors font-medium"
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 p-2 text-gray-100 hover:text-purple-400"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-center text-gray-100 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
