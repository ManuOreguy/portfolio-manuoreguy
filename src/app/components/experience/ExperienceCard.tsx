import { Experience } from "@/app/lib/types";
import Image from "next/image";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-2">
          {experience.logos.map((logo, index) => (
            <div
              key={index}
              className={`relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden ${
                experience.bgColor || "bg-white"
              }`}
            >
              <Image
                src={logo}
                alt={`${experience.company} logo ${index + 1}`}
                fill
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-100">
            {experience.position}
          </h3>
          <p className="text-purple-400 mb-2">{experience.company}</p>
          <p className="text-gray-400 text-sm mb-4">{experience.period}</p>
          <p className="text-gray-300 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
