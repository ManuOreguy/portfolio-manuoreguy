"use client";

import { Experience } from "@/app/constants/data";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldCoverImage =
    experience.company === "Amalgama" || experience.company === "Monsun SRL";

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full text-left bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group border border-gray-700/50"
      aria-expanded={isExpanded}
      aria-label={`${experience.position} en ${experience.company}`}
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-14 h-14 rounded-lg overflow-hidden ${
              shouldCoverImage ? "" : experience.bgColor || "bg-white"
            } transition-transform duration-300 group-hover:scale-105`}
          >
            <Image
              src={experience.logos[0]}
              alt={`${experience.company} logo`}
              fill
              className={`${
                shouldCoverImage ? "object-cover p-0" : "object-contain p-2"
              }`}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-xl font-outfit font-semibold text-gray-100 group-hover:text-purple-400 transition-colors truncate">
                {experience.position}
              </h3>
              <p className="text-purple-400/90 font-medium truncate">
                {experience.company}
              </p>
            </div>
            <svg
              className={`w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-purple-400 transform transition-all duration-200 ${
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

          {/* Divider */}
          <div className="my-4 border-t border-gray-700/50" />

          <div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {/* Descripción */}
              <div className="space-y-4 text-gray-300">
                <p className="font-medium text-gray-200">
                  {experience.shortDescription}
                </p>
                <ul className="space-y-2 list-disc list-inside ml-2">
                  {experience.achievements?.map((achievement, index) => (
                    <li key={index} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-700/50" />
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-400/20"
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
