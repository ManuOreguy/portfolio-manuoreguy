import { EXPERIENCES } from "@/app/constants/data";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Línea central - Visible desde tablet */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 via-purple-500/25 to-transparent" />

      {/* Línea vertical en móvil */}
      <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/25 to-transparent" />

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col pl-12 md:pl-0 gap-8`}
          >
            {/* Punto de conexión - Tablet y Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500/20 rounded-full border border-purple-500/50 backdrop-blur-sm" />

            {/* Punto de conexión - Mobile */}
            <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-purple-500/20 rounded-full border border-purple-500/50 backdrop-blur-sm" />

            {/* Fecha en móvil */}
            <div className="absolute left-12 -top-6 md:hidden">
              <span className="text-sm text-gray-400 font-medium">
                {experience.period}
              </span>
            </div>

            {/* Card */}
            <div className="w-full md:w-[calc(50%-2rem)] max-w-xl">
              <ExperienceCard experience={experience} />
            </div>

            {/* Fecha en tablet y desktop */}
            <div
              className={`hidden md:block md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"
              }`}
            >
              <span className="text-gray-400">{experience.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
