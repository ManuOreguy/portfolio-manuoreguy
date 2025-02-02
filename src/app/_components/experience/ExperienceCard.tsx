"use client";

import { Experience } from "@/app/constants/data";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full text-left bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group"
      aria-expanded={isExpanded}
      aria-label={`${experience.position} en ${experience.company}`}
    >
      <div className="flex items-start gap-4">
        {/* Logo - Solo mostramos el primero */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-14 h-14 rounded-md overflow-hidden ${
              experience.bgColor || "bg-white"
            } transition-transform duration-300 group-hover:scale-105`}
          >
            <Image
              src={experience.logos[0]}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-1.5"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-400 transition-colors">
                {experience.position}
              </h3>
              <p className="text-purple-400 mb-2">{experience.company}</p>
              <p className="text-gray-400 text-sm">{experience.period}</p>
            </div>
            <svg
              className={`w-6 h-6 text-gray-400 group-hover:text-purple-400 transform transition-all duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="mt-4">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300 mb-4">{experience.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
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
    </button>
  );
};

export default ExperienceCard;
