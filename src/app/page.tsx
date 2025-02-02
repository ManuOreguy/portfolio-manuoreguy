import { EXPERIENCES, PROJECTS } from "./constants/data";
import Hero from "./components/home/Hero";
import ExperienceCard from "./components/experience/ExperienceCard";
import ProjectCard from "./components/projects/ProjectCard";
import ContactForm from "./components/contact/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Experiencia <span className="text-purple-500">Profesional</span>
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mis <span className="text-purple-500">Proyectos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contacta<span className="text-purple-500">me</span>
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
