"use client";

import { SOCIAL_LINKS } from "@/app/constants/data";
import Image from "next/image";
import Link from "next/link";
import WhatsAppQR from "../ui/WhatsAppQR";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Header con foto y nombre */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src="/images/profile.jpg"
                alt="Juan Manuel Oreguy"
                fill
                className="rounded-full object-cover border-2 border-purple-500/20"
                priority
              />
            </div>
          </div>

          {/* Nombre y título */}
          <div className="space-y-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Juan Manuel <span className="text-purple-500">Oreguy</span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500/50 to-transparent rounded-full mt-3" />
            </div>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light">
              Frontend Developer
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Dedicado a crear interfaces cautivadoras e implementar soluciones
            robustas. Mi objetivo es combinar diseño y funcionalidad de manera
            perfecta para una experiencia de usuario excepcional.
          </p>

          {/* Enlaces y Contacto */}
          <div className="flex flex-col items-center gap-8">
            {/* Redes Sociales */}
            <div className="flex items-center gap-8">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={`Visitar ${link.platform}`}
                >
                  <div className="relative p-3">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                    <div className="relative text-gray-400 group-hover:text-purple-500 transition-colors">
                      {link.platform === "GitHub" ? (
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* WhatsApp QR */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50">
                <WhatsAppQR />
              </div>
            </div>
          </div>

          {/* Decoración de fondo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-transparent via-purple-500/5 to-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
