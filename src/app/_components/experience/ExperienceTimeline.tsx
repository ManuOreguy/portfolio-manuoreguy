import { EXPERIENCES } from "@/app/constants/data";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 via-purple-500/25 to-transparent" />

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Punto de conexión */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500/20 rounded-full border border-purple-500/50 backdrop-blur-sm" />

            {/* Card */}
            <div className="w-1/2">
              <ExperienceCard experience={experience} />
            </div>

            {/* Fecha en móvil */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:hidden">
              <span className="text-sm text-gray-400">{experience.period}</span>
            </div>

            {/* Fecha en desktop */}
            <div
              className={`hidden md:block w-1/2 ${
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
