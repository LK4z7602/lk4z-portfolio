import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string | null;
}

const projectsMock: Project[] = [
  {
    title: "Gerador de Tickets",
    description:
      "App dinâmico de geração de tickets construído para o desafio do Frontend Mentor com validação de formulário.",
    image: "/imgs/project1.avif",
    tech: ["TypeScript", "React", "TailwindCSS", "ContextAPI", "Zod", "React Hook Form"],
    github: "https://github.com/LK4z7602/ticket-generator-frmentor",
    live: "https://ticket-generator-frmentor.vercel.app/",
  },
  {
    title: "App de To-Do List",
    description:
      "Aplicação básica de gerenciamento de tarefas com funcionalidades de adicionar, editar, excluir tarefas e filtrar por status",
    image: "/imgs/project2.avif",
    tech: ["TypeScript", "React", "TailwindCSS", "ContextAPI"],
    github: "https://github.com/LK4z7602/todolist-app-project",
    live: "https://todolist-app-project-lkz.vercel.app/",
  },
  {
    title: "Caseirinhos Amália",
    description:
      "Landing page para negócio local com design moderno e layout responsivo, sistema de navegação suave e otimização para SEO, com redirecionamento para WhatsApp.",
    image: "/imgs/project3.avif",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "NextJS",
      "RHF Zod",
      "React Router Dom",
    ],
    github: "https://github.com/LK4z7602/caseirinhos-amalia",
    live: "https://caseirinhosdaamalia.vercel.app/",
  },
  {
    title: "Cards Studio Ghibli",
    description:
      "Galeria de cards apresentando filmes do Studio Ghibli com integração de API e paginação.",
    image: "/imgs/project4.avif",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Tanstack Query",
      "React Router Dom",
    ],
    github: "https://github.com/LK4z7602/cards-studio-ghibli",
    live: "https://cards-studio-ghibli.vercel.app/",
  },
  {
    title: "Calculadora de Idade",
    description:
      "Calculadora interativa de idade que computa anos, meses e dias exatos a partir da sua data de nascimento, com validação de entrada e design responsivo.",
    image: "/imgs/project5.png",
    tech: ["TypeScript", "React", "TailwindCSS"],
    github: "https://github.com/LK4z7602/age-calculator-app-frmentor",
    live: "https://age-calculator-app-frmentor.vercel.app/",
  },
  {
    title: "Conferidor Mega Sena",
    description: "App simples e elegante que busca os resultados da Mega Sena.",
    image: "/imgs/project6.png",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
    github: "https://github.com/LK4z7602/conferidor-mega-sena",
    live: "https://conferidor-mega-sena.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-laranjao/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus <span className="text-laranjao">Projetos</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-400">
            Alguns projetos que construí com tecnologias atuais do mercado
            Front-End
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsMock.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/lk4z7602?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todos os projetos no GitHub"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-laranjao/30 transition-all duration-300"
          >
            Ver Todos os Projetos no GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
