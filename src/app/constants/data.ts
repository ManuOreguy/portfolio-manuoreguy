import { Experience, NavItem, Project, SocialLink } from "../lib/types";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/ManuOreguy",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/manuoreguy/",
    icon: "linkedin",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Cedeira Software Factory",
    position: "Frontend Developer",
    period: "Feb 2023 - Actualidad",
    description:
      "Desarrollo de aplicaciones web y móviles con React y React Native. Participación en proyecto de facturación electrónica con integración de APIs, gestión de estado con Redux Toolkit, desarrollo de Custom Hooks, y creación de dashboard empresarial. Implementación de aplicación móvil para conectar cuidadores de mascotas con usuarios. Realización de pruebas y optimización de experiencia de usuario.",
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Next.js",
      "TailwindCSS",
      "APIs REST",
    ],
    logos: ["/images/cedeira.png"],
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    company: "Gulf (Deltapatagonia S.A.)",
    position: "Analista Logístico y Product Owner",
    period: "Mar 2021 - Feb 2023",
    description:
      "Product Owner de plataforma de ventas y LogicTracker en Argentina y Uruguay. Gestión de planeamiento logístico para red de estaciones de servicio. Desarrollo y mejora de base de datos en SAP B1, creación de dashboards estratégicos en Power BI, análisis de P&L y gestión de supply chain para lubricantes.",
    technologies: ["SAP B1", "SQL", "Power BI", "Excel", "Metodologías Ágiles"],
    logos: ["/images/gulf.png", "/images/delta.jpg"],
    bgColor: "bg-orange-50",
  },
  {
    id: 3,
    company: "Monsun SRL",
    position: "Desarrollador Qlik SSR",
    period: "Oct 2016 - Sep 2020",
    description:
      "Desarrollo de soluciones de Business Intelligence utilizando QlikSense y Qlikview. Implementación de procesos ETL y diseño de dashboards para empresas como Pfizer, Jazmin Chebar y LoJack. Gestión de tareas en QMC y documentación técnica. Trabajo con bases de datos SQL y SAP B1.",
    technologies: ["QlikSense", "Qlikview", "SQL", "SAP B1", "ETL"],
    logos: ["/images/monsun.jpg"],
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    company: "Epic Mountain Express",
    position: "Reservation Agent",
    period: "Dic 2018 - Abr 2019",
    description:
      "Gestión de reservas de viajes y atención al cliente en programa Work and Travel. Experiencia en servicio al cliente internacional y manejo de sistemas de reservas.",
    technologies: ["Customer Service", "Reservation Systems", "English"],
    logos: ["/images/epic.png"],
    bgColor: "bg-gray-100",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Portfolio profesional desarrollado con Next.js y TailwindCSS",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/manuoreguy/portfolio",
    liveUrl: "https://manuoreguy.dev",
  },
];

export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logos: string[];
  bgColor?: string;
};
