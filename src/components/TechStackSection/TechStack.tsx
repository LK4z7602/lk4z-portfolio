import { useState, memo, useMemo } from "react";
import { motion } from "framer-motion";

import TechCard, { type TechStackItem } from "./TechCard";
import techIcons from "../../utils/icons";

const { techIcons: techIcon } = techIcons;

const techStackData: TechStackItem[] = [
  { id: "react", name: "React", icon: techIcon.FaReact, size: 50 },
  {
    id: "typescript",
    name: "TypeScript",
    icon: techIcon.BiLogoTypescript,
    size: 60,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: techIcon.BiLogoTailwindCss,
    size: 50,
  },
  { id: "html5", name: "HTML5", icon: techIcon.FaHtml5, size: 50 },
  { id: "css3", name: "CSS3", icon: techIcon.FaCss3Alt, size: 50 },
  { id: "javascript", name: "JavaScript", icon: techIcon.FaJsSquare, size: 50 },
  { id: "vite", name: "Vite", icon: techIcon.SiVite, size: 50 },
  {
    id: "reactrouter",
    name: "React Router",
    icon: techIcon.SiReactrouter,
    size: 50,
  },
  {
    id: "tanstackquery",
    name: "Tanstack Query",
    icon: techIcon.TbBeach,
    size: 50,
  },
  {
    id: "reacthookform",
    name: "React Hook Form",
    icon: techIcon.SiReacthookform,
    size: 50,
  },
  { id: "zod", name: "Zod", icon: techIcon.SiZod, size: 50 },
  {
    id: "framermotion",
    name: "Framer Motion",
    icon: techIcon.TbBrandFramerMotion,
    size: 50,
  },
  { id: "git", name: "Git", icon: techIcon.FaGitAlt, size: 60 },
  { id: "figma", name: "Figma", icon: techIcon.SiFigma, size: 50 },
  { id: "github", name: "GitHub", icon: techIcon.FaGithub, size: 50 },
];

TechCard.displayName = "TechCard";

const TechStackContent = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCards = useMemo(
    () =>
      techStackData.map((tech, index) => (
        <TechCard
          key={tech.id}
          tech={tech}
          index={index}
          hoveredTech={hoveredTech}
          onMouseEnter={setHoveredTech}
          onMouseLeave={() => setHoveredTech(null)}
        />
      )),
    [hoveredTech],
  );

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-150 h-100 bg-laranjao/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologias <span className="text-laranjao">& Ferramentas</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-400">
            Linguagens, Frameworks, Bibliotecas e Utilitários que uso para
            construir minhas aplicações web
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 *:w-1/4 sm:*:w-1/5 md:*:w-1/7">
          {techCards}
        </div>
      </div>
    </section>
  );
};

export const TechStack = memo(TechStackContent);
