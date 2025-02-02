import { EXPERIENCES, PROJECTS } from "@/app/constants/data";
import Hero from "@/app/_components/home/Hero";
import ExperienceCard from "@/app/_components/experience/ExperienceCard";
import ProjectCard from "@/app/_components/projects/ProjectCard";
import ContactForm from "@/app/_components/contact/ContactForm";

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

      {/* <section id="projects" className="py-20 px-4 bg-gray-800/30">
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
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <span className="text-purple-500">Hablemos</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Estoy siempre interesado en nuevos desafíos y oportunidades.
              Enviame un mensaje y charlemos sobre cómo puedo ayudarte.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
