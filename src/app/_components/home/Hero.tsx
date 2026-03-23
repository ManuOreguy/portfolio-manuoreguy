"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5491154553704";

  return (
    <section className="min-h-[90vh] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Profile image */}
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
              <Image
                src="/images/profile.jpg"
                alt="Juan Manuel Oreguy"
                fill
                className="rounded-full object-cover border-2 border-purple-500/20"
                priority
              />
            </div>
          </div>

          {/* Name + title */}
          <div className="space-y-2 mb-5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4">
                Juan Manuel <span className="text-purple-500">Oreguy</span>
              </h1>
              <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-500/50 to-transparent rounded-full mt-2" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">
              Frontend Developer · React & React Native
            </h2>
          </div>

          {/* Value prop copy */}
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 px-2 text-sm sm:text-base">
            Desarrollo aplicaciones web y mobile con React y React Native que
            resuelven problemas reales — desde plataformas de facturación
            electrónica hasta apps de salud y bienestar. +3 años construyendo
            productos en equipos ágiles, con experiencia adicional como Product
            Owner.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
            <a
              href="#experience"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
            >
              Ver experiencia
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors text-sm sm:text-base"
            >
              Contactame
            </a>
            <a
              href="https://www.linkedin.com/in/manuoreguy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-colors text-sm sm:text-base"
              aria-label="Descargar CV en LinkedIn"
            >
              CV / LinkedIn
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/ManuOreguy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/manuoreguy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <a
              href="#contact"
              aria-label="Email"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
