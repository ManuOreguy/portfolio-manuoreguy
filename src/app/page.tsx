import Hero from "@/app/_components/home/Hero";
import ContactForm from "@/app/_components/contact/ContactForm";
import ExperienceTimeline from "@/app/_components/experience/ExperienceTimeline";
import TechStack from "@/app/_components/home/TechStack";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const SectionTitle = ({
  icon: Icon,
  title,
  highlight,
  description,
  hideIconOnMobile,
}: {
  icon: React.ElementType;
  title: string;
  highlight: string;
  description?: string;
  hideIconOnMobile?: boolean;
}) => (
  <div className="flex flex-col items-center mb-16">
    <div className="inline-flex items-center justify-center gap-3 mb-4">
      <Icon
        className={`w-7 h-7 sm:w-8 sm:h-8 text-purple-500 flex-shrink-0 ${
          hideIconOnMobile ? "hidden sm:block" : ""
        }`}
      />
      <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-center">
        {title} <span className="text-purple-500">{highlight}</span>
      </h2>
    </div>
    {description && (
      <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base">
        {description}
      </p>
    )}
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <section id="tech-stack" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            icon={HiOutlineCodeBracket}
            title="Stack"
            highlight="Tecnológico"
          />
          <TechStack />
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle
            icon={HiOutlineBriefcase}
            title="Experiencia"
            highlight="Profesional"
            description="Mi trayectoria profesional abarca desde el desarrollo frontend hasta roles de liderazgo técnico, siempre enfocado en crear soluciones innovadoras y escalables."
            hideIconOnMobile
          />
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
            <SectionTitle
              icon={HiOutlineChatBubbleBottomCenterText}
              title=""
              highlight="Hablemos"
            />
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
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
