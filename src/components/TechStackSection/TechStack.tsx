import { useState, lazy, memo, useMemo } from "react";
import { motion } from "framer-motion";

import TechCard, {type TechStackItem} from "./TechCard";

const FaReactIcon = lazy(() =>
  import("react-icons/fa").then((m) => ({
    default: m.FaReact,
  })),
);
const FaJsSquareIcon = lazy(() =>
  import("react-icons/fa").then((m) => ({
    default: m.FaJsSquare,
  })),
);
const FaHtml5Icon = lazy(() =>
  import("react-icons/fa").then((m) => ({
    default: m.FaHtml5,
  })),
);
const FaCss3AltIcon = lazy(() =>
  import("react-icons/fa").then((m) => ({
    default: m.FaCss3Alt,
  })),
);
const FaGitAltIcon = lazy(() =>
  import("react-icons/fa").then((m) => ({
    default: m.FaGitAlt,
  })),
);
const BiLogoTypescriptIcon = lazy(() =>
  import("react-icons/bi").then((m) => ({
    default: m.BiLogoTypescript,
  })),
);
const BiLogoTailwindCssIcon = lazy(() =>
  import("react-icons/bi").then((m) => ({
    default: m.BiLogoTailwindCss,
  })),
);
const SiViteIcon = lazy(() =>
  import("react-icons/si").then((m) => ({
    default: m.SiVite,
  })),
);
const SiReactRouterIcon = lazy(() =>
  import("react-icons/si").then((m) => ({
    default: m.SiReactrouter,
  })),
);
const TbTanstackQueryIcon = lazy(() =>
  import("react-icons/tb").then((m) => ({
    default: m.TbBeach,
  })),
);
const SiReactHookFormIcon = lazy(() =>
  import("react-icons/si").then((m) => ({
    default: m.SiReacthookform,
  })),
);
const SiZodIcon = lazy(() =>
  import("react-icons/si").then((m) => ({
    default: m.SiZod,
  })),
);
const SiFigmaIcon = lazy(() =>
  import("react-icons/si").then((m) => ({
    default: m.SiFigma,
  })),
);
const TbFramerMotionIcon = lazy(() =>
  import("react-icons/tb").then((m) => ({
    default: m.TbBrandFramerMotion,
  })),
);

const techStackData: TechStackItem[] = [
  {
    id: "react",
    name: "React",
    icon: FaReactIcon,
    size: 50,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: BiLogoTypescriptIcon,
    size: 60,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: FaJsSquareIcon,
    size: 50,
  },
  {
    id: "html5",
    name: "HTML5",
    icon: FaHtml5Icon,
    size: 50,
  },
  {
    id: "css3",
    name: "CSS3",
    icon: FaCss3AltIcon,
    size: 50,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: BiLogoTailwindCssIcon,
    size: 50,
  },
  {
    id: "vite",
    name: "Vite",
    icon: SiViteIcon,
    size: 50,
  },
  {
    id: "git",
    name: "Git",
    icon: FaGitAltIcon,
    size: 60,
  },
  {
    id: "reactrouter",
    name: "React Router",
    icon: SiReactRouterIcon,
    size: 50,
  },
  {
    id: "tanstackquery",
    name: "Tanstack Query",
    icon: TbTanstackQueryIcon,
    size: 50,
  },
  {
    id: "reacthookform",
    name: "React Hook Form",
    icon: SiReactHookFormIcon,
    size: 50,
  },
  {
    id: "zod",
    name: "Zod",
    icon: SiZodIcon,
    size: 50,
  },
  {
    id: "figma",
    name: "Figma",
    icon: SiFigmaIcon,
    size: 50,
  },
  {
    id: "framermotion",
    name: "Framer Motion",
    icon: TbFramerMotionIcon,
    size: 50,
  },
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
