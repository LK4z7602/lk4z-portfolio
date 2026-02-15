import { motion } from "framer-motion";
import { lazy, Suspense, memo, useMemo } from "react";

const RocketLaunchOutlinedIcon = lazy(() =>
  import("@mui/icons-material/RocketLaunchOutlined").then((m) => ({
    default: m.default,
  })),
);
const CodeOutlinedIcon = lazy(() =>
  import("@mui/icons-material/CodeOutlined").then((m) => ({
    default: m.default,
  })),
);
const ElectricBoltOutlinedIcon = lazy(() =>
  import("@mui/icons-material/ElectricBoltOutlined").then((m) => ({
    default: m.default,
  })),
);
const GpsFixedOutlinedIcon = lazy(() =>
  import("@mui/icons-material/GpsFixedOutlined").then((m) => ({
    default: m.default,
  })),
);

const IconFallback = () => <span className="w-6 h-6 inline-block" />;

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.LazyExoticComponent<React.ComponentType<any>>;
}

const milestones: Milestone[] = [
  {
    year: "Jun 2024",
    title: "Primeiras Linhas de Código",
    description: "Iniciei os estudos no desenvolvimento web com HTML e CSS",
    icon: RocketLaunchOutlinedIcon,
  },
  {
    year: "Mai 2025",
    title: "Primeiros Projetos",
    description:
      "Comecei a construir projetos responsivos e interativos com HTML e CSS, começando os estudos de JavaScript",
    icon: CodeOutlinedIcon,
  },
  {
    year: "Ago 2025",
    title: "Projetos Aprimorados",
    description:
      "Construí projetos grandes com HTML, CSS e JS, implementando novas tecnologias. Começando o estudo em React e TypeScript",
    icon: ElectricBoltOutlinedIcon,
  },
  {
    year: "Dec 2025 - Presente",
    title: "Expandindo Portfólio",
    description:
      "Construindo projetos reais e ampliando habilidades técnicas, testando novas tecnologias e contruindo projetos escaláveis",
    icon: GpsFixedOutlinedIcon,
  },
];

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

const MilestoneCard = memo(({ milestone, index }: MilestoneCardProps) => {
  const Icon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative lg:w-1/2 ${
        index % 2 === 0 ? "lg:pr-16 lg:ml-0" : "lg:pl-16 lg:ml-auto"
      }`}
    >
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-laranjao shadow-lg shadow-laranjao/50 ${
          index % 2 === 0 ? "-right-2" : "-left-2"
        }`}
      />
      <div className="group relative p-6 lg:p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-laranjao/30 transition-all duration-500 hover:shadow-xl hover:shadow-laranjao/5">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-laranjao/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-start gap-5">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-laranjao/10 flex items-center justify-center group-hover:bg-laranjao/20 transition-colors">
            <Suspense fallback={<IconFallback />}>
              <Icon className="text-laranjao" />
            </Suspense>
          </div>

          <div className="flex-1">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-laranjao bg-laranjao/10 rounded-full">
              {milestone.year}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

MilestoneCard.displayName = "MilestoneCard";

const AboutContent = () => {
  const milestonesContent = useMemo(
    () =>
      milestones.map((milestone, index) => (
        <MilestoneCard key={index} milestone={milestone} index={index} />
      )),
    [],
  );

  return (
    <section id="about" className="relative pb-32 pt-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-laranjao">Mim</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Sou o Lucas, um desenvolvedor web apaixonado por criar websites e
            aplicações incríveis e performáticas.
            <span className="hidden sm:block">
              Desde o início da minha jornada, tenho me dedicado a aprender e
              aprimorar habilidades no ramo web, e sempre em busca de
              conhecimentos novos para expandir minha gama de tecnologias.
            </span>
            Atualmente foocado no ecossistema React, usando TypeScript e
            Tailwind, mas sempre aberto a explorar novas tecnologias e desafios.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-laranjao/30 to-transparent hidden lg:block" />
          <div className="grid gap-8 lg:gap-0">{milestonesContent}</div>
        </div>
      </div>
    </section>
  );
};

export const About = memo(AboutContent);
