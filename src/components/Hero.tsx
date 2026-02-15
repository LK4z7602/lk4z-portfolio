import { lazy, Suspense, memo } from "react";
import { motion } from "framer-motion";

const GitHubIcon = lazy(() =>
  import("@mui/icons-material/GitHub").then((m) => ({ default: m.default })),
);
const SourceOutlinedIcon = lazy(() =>
  import("@mui/icons-material/SourceOutlined").then((m) => ({
    default: m.default,
  })),
);
const ArrowDownwardIcon = lazy(() =>
  import("@mui/icons-material/ArrowDownward").then((m) => ({
    default: m.default,
  })),
);

const IconFallback = () => <span className="w-6 h-6 inline-block" />;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const HeroContent = () => {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-white">Lucas </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-laranjao to-laranjao-hover">
              Gomes
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light"
          >
            Desenvolvedor Front-End
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed"
          >
            Como um desenvolvedor Front-End, crio interfaces web modernas e
            cativantes. <br className="hidden sm:block" /> Focado em entregar
            ótima performance e escalabilidade;{" "}
            <span className="hidden sm:block">
              {" "}
              Atendendo às necessidades e superando expectativas.{" "}
            </span>{" "}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-laranjao text-white font-semibold rounded-xl hover:bg-laranjao-hover transition-all duration-300 hover:shadow-xl hover:shadow-laranjao/25 ease-out"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Suspense fallback={<IconFallback />}>
                <SourceOutlinedIcon />
              </Suspense>
              Ver Projetos{" "}
              <Suspense fallback={<IconFallback />}>
                <ArrowDownwardIcon fontSize="small" />
              </Suspense>
            </motion.a>

            <motion.a
              href="https://github.com/lk4z7602"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-out"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Suspense fallback={<IconFallback />}>
                <GitHubIcon />
              </Suspense>
              Meu GitHub
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-12 pt-16 hover:cursor-default"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">25+</h3>
              <p className="text-sm text-gray-500 mt-1">Projetos</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                200+
              </h3>
              <p className="text-sm text-gray-500 mt-1">Commits</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                PT/EN
              </h3>
              <p className="text-sm text-gray-500 mt-1">Idiomas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Hero = memo(HeroContent);
