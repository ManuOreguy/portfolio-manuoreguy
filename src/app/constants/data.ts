import { NavItem, Project, SocialLink } from "../lib/types";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Stack", href: "#tech-stack" },
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

export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  shortDescription: string;
  achievements: string[];
  technologies: string[];
  logos: string[];
  bgColor?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Amalgama",
    position: "Frontend Developer",
    period: "Nov 2024 - Actualidad",
    shortDescription:
      "Desarrollo de aplicaciones móviles y web enfocadas en salud y bienestar (Welltech).",
    description:
      "Desarrollo de aplicaciones móviles y web enfocadas en salud y bienestar (Welltech). Implementación de interfaces de usuario con React Native y React. Trabajo con metodologías ágiles en equipo multidisciplinario. Integración de APIs, implementación de features y optimización de rendimiento.",
    achievements: [
      "Desarrollo de nuevas funcionalidades en la app móvil principal usando React Native",
      "Implementación de interfaces de usuario responsive y accesibles",
      "Optimización de rendimiento y tiempo de carga de la aplicación",
      "Integración de APIs REST y manejo de estado global",
    ],
    technologies: [
      "React Native",
      "React",
      "TypeScript",
      "TailwindCSS",
      "APIs REST",
      "Git",
      "Agile",
      "Notion",
      "Figma",
    ],
    logos: ["/images/amalgama.png"],
    bgColor: "bg-white",
  },
  {
    id: 2,
    company: "Cedeira Software Factory",
    position: "Frontend Developer",
    period: "Feb 2023 - Nov 2024",
    shortDescription:
      "Desarrollo de aplicaciones web y móviles con React y React Native para diversos clientes.",
    description:
      "Desarrollo de aplicaciones web y móviles con React y React Native. Participación en proyecto de facturación electrónica con integración de APIs, gestión de estado con Redux Toolkit, desarrollo de Custom Hooks, y creación de dashboard empresarial. Implementación de aplicación móvil para conectar cuidadores de mascotas con usuarios. Realización de pruebas y optimización de experiencia de usuario.",
    achievements: [
      "Desarrollo de sistema de facturación electrónica con integración de APIs",
      "Implementación de dashboard empresarial con métricas en tiempo real",
      "Desarrollo de app móvil para conexión de cuidadores de mascotas",
      "Creación de Custom Hooks y componentes reutilizables",
    ],
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
    id: 3,
    company: "Gulf (Deltapatagonia S.A.)",
    position: "Analista Logístico y PO",
    period: "Mar 2021 - Feb 2023",
    shortDescription:
      "Product Owner de plataforma de ventas y LogicTracker en Argentina y Uruguay.",
    description:
      "Product Owner de plataforma de ventas y LogicTracker en Argentina y Uruguay. Gestión de planeamiento logístico para red de estaciones de servicio. Desarrollo y mejora de base de datos en SAP B1, creación de dashboards estratégicos en Power BI, análisis de P&L y gestión de supply chain para lubricantes.",
    achievements: [
      "Liderazgo de equipo de desarrollo como Product Owner",
      "Optimización de procesos logísticos reduciendo tiempos de entrega",
      "Desarrollo de dashboards estratégicos en Power BI",
      "Gestión de supply chain para red de estaciones de servicio",
    ],
    technologies: ["SAP B1", "SQL", "Power BI", "Excel", "Metodologías Ágiles"],
    logos: ["/images/gulf.png", "/images/delta.jpg"],
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    company: "Monsun SRL",
    position: "Desarrollador Qlik SSR",
    period: "May 2019 - Sep 2020",
    shortDescription:
      "Desarrollo de soluciones de Business Intelligence para empresas como Pfizer y LoJack.",
    description:
      "Desarrollo de soluciones de Business Intelligence utilizando QlikSense y Qlikview. Implementación de procesos ETL y diseño de dashboards para empresas como Pfizer, Jazmin Chebar y LoJack. Gestión de tareas en QMC y documentación técnica. Trabajo con bases de datos SQL y SAP B1.",
    achievements: [
      "Implementación de soluciones BI para clientes corporativos",
      "Desarrollo de procesos ETL para integración de datos",
      "Diseño de dashboards interactivos y reportes automatizados",
      "Optimización de consultas SQL y procesos de carga",
    ],
    technologies: ["QlikSense", "Qlikview", "SQL", "SAP B1", "ETL"],
    logos: ["/images/monsun.jpg"],
    bgColor: "bg-blue-50",
  },
  {
    id: 5,
    company: "Epic Mountain Express",
    position: "Reservation Agent",
    period: "Dic 2018 - Abr 2019",
    shortDescription:
      "Gestión de reservas y atención al cliente en programa Work and Travel.",
    description:
      "Gestión de reservas de viajes y atención al cliente en programa Work and Travel. Experiencia en servicio al cliente internacional y manejo de sistemas de reservas.",
    achievements: [
      "Atención al cliente en inglés para reservas internacionales",
      "Manejo de sistemas de reservas y gestión de viajes",
      "Resolución de problemas en tiempo real",
      "Trabajo en equipo multicultural",
    ],
    technologies: ["Customer Service", "Reservation Systems", "English"],
    logos: ["/images/epic.png"],
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    company: "Monsun SRL",
    position: "Desarrollador Qlik Jr",
    period: "Oct 2016 - Nov 2018",
    shortDescription:
      "Inicio en el desarrollo de Business Intelligence con QlikSense y Qlikview.",
    description:
      "Inicio en el desarrollo de Business Intelligence con QlikSense y Qlikview. Desarrollo de dashboards y reportes para clientes corporativos. Aprendizaje y aplicación de procesos ETL, SQL y mejores prácticas de visualización de datos.",
    achievements: [
      "Desarrollo de dashboards y reportes para clientes",
      "Aprendizaje y aplicación de procesos ETL",
      "Implementación de mejores prácticas de visualización",
      "Trabajo con bases de datos SQL",
    ],
    technologies: ["QlikSense", "Qlikview", "SQL", "ETL"],
    logos: ["/images/monsun.jpg"],
    bgColor: "bg-blue-50",
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
