import Hero from "@/app/_components/home/Hero";
import ContactForm from "@/app/_components/contact/ContactForm";
import ExperienceTimeline from "@/app/_components/experience/ExperienceTimeline";
import TechStack from "@/app/_components/home/TechStack";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="tech-stack" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-16">
            <HiOutlineCodeBracket className="w-8 h-8 text-purple-500" />
            <h2 className="text-4xl font-outfit font-bold text-center">
              Stack <span className="text-purple-500">Tecnológico</span>
            </h2>
          </div>
          <TechStack />
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiOutlineBriefcase className="w-8 h-8 text-purple-500" />
              <h2 className="text-4xl font-outfit font-bold text-center">
                Experiencia <span className="text-purple-500">Profesional</span>
              </h2>
            </div>
            <p className="text-gray-400 text-center max-w-2xl">
              Mi trayectoria profesional abarca desde el desarrollo frontend
              hasta roles de liderazgo técnico, siempre enfocado en crear
              soluciones innovadoras y escalables.
            </p>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* <section id="projects" className="py-20 px-4">
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

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiOutlineChatBubbleBottomCenterText className="w-8 h-8 text-purple-500" />
              <h2 className="text-4xl md:text-5xl font-outfit font-bold">
                <span className="text-4xl text-purple-500">Hablemos</span>
              </h2>
            </div>
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
