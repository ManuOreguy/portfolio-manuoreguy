import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiSass,
  SiGit,
  SiPostgresql,
  SiSupabase,
  SiNodedotjs,
  SiFirebase,
  SiJest,
  SiVercel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const TECHNOLOGIES = [
  // Frontend Core
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    Icon: TbBrandReactNative,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
  },
  // Markup & Styling
  {
    name: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    Icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Sass",
    Icon: SiSass,
    color: "#CC6699",
  },
  // State Management
  {
    name: "Redux",
    Icon: SiRedux,
    color: "#764ABC",
  },
  // Backend & Database
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "SQL",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
  // Tools & Platforms
  {
    name: "Git",
    Icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
    color: "#3FCF8E",
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Jest",
    Icon: SiJest,
    color: "#C21325",
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          Stack <span className="text-purple-500">Tecnológico</span>
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 mb-2">
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <div className="relative bg-gray-800/50 rounded-full p-3 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center">
                  <tech.Icon
                    className="w-full h-full transition-colors"
                    style={{ color: tech.color }}
                  />
                </div>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
