import Hero from "@/app/_components/home/Hero";
import ContactForm from "@/app/_components/contact/ContactForm";
import ExperienceTimeline from "@/app/_components/experience/ExperienceTimeline";
import TechStack from "@/app/_components/home/TechStack";
import ProjectCard from "@/app/_components/projects/ProjectCard";
import { PROJECTS } from "@/app/constants/data";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCodeBracket,
  HiOutlineRectangleStack,
} from "react-icons/hi2";

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

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            icon={HiOutlineRectangleStack}
            title="Mis"
            highlight="Proyectos"
            description="Selección de proyectos profesionales y personales que reflejan mi experiencia técnica y forma de resolver problemas."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <SectionTitle
              icon={HiOutlineChatBubbleBottomCenterText}
              title=""
              highlight="Hablemos"
            />
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Busco oportunidades full-time o freelance — remoto o LATAM.
              Si tenés un proyecto donde React, React Native o Next.js pueden
              hacer la diferencia, contame.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
