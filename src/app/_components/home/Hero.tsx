"use client";

import Image from "next/image";
import WhatsAppQR from "../ui/WhatsAppQR";

const Hero = () => {
  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4 sm:mb-6">
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

          <div className="space-y-2 mb-4 sm:mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4">
                Juan Manuel <span className="text-purple-500">Oreguy</span>
              </h1>
              <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-500/50 to-transparent rounded-full mt-2" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">
              Frontend Developer
            </h2>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 text-sm sm:text-base">
            ¡Hola! 👋 Soy desarrollador frontend y me gusta crear experiencias
            web que además de verse bien, sean fáciles de usar. Me divierte
            probar nuevas tecnologías y buscar soluciones creativas a los
            desafíos que van surgiendo.
          </p>

          {/* WhatsApp QR */}
          <div className="relative group scale-90 sm:scale-100">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <div className="relative bg-gray-800/30 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <WhatsAppQR />
            </div>
          </div>

          {/* Decoración de fondo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-tr from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-transparent via-purple-500/5 to-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
