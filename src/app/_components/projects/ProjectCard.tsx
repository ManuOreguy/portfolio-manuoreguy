import { Project } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 flex flex-col">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-outfit font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          {project.description}
        </p>
        {project.context && (
          <p className="text-gray-400 text-xs mb-4 leading-relaxed italic border-l-2 border-purple-500/40 pl-3">
            {project.context}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-3 border-t border-gray-700/50">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors text-sm"
                aria-label={`Ver demo de ${project.title}`}
              >
                <FiExternalLink className="w-4 h-4" />
                Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors text-sm"
                aria-label={`Ver código de ${project.title} en GitHub`}
              >
                <FiGithub className="w-4 h-4" />
                Código
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
