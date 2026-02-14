import GitHubIcon from "@mui/icons-material/GitHub";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-white">Lucas </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-laranjao to-laranjao-hover">
                Gomes
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light">
              Desenvolvedor Front-End
            </p>

            <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
              Como um desenvolvedor Front-End, crio interfaces web modernas e
              cativantes. <br className="hidden sm:block" /> Focado em entregar
              ótima performance e escalabilidade;{" "}
              <span className="hidden sm:block">
                {" "}
                Atendendo às necessidades e superando expectativas.{" "}
              </span>{" "}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 bg-laranjao text-white font-semibold rounded-xl hover:bg-laranjao-hover transition-all duration-300 hover:shadow-xl hover:shadow-laranjao/25"
              >
                <SourceOutlinedIcon /> Ver Projetos{" "}
                <ArrowDownwardIcon fontSize="small" />
              </a>

              <a
                href="https://github.com/lk4z7602"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <GitHubIcon /> Meu GitHub
              </a>
            </div>

            <div className="flex items-center justify-center gap-12 pt-16">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  20+
                </h3>
                <p className="text-sm text-gray-500 mt-1">Projetos</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  20+                </h3>
                <p className="text-sm text-gray-500 mt-1">Projetos</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  20+
                </h3>
                <p className="text-sm text-gray-500 mt-1">Projetos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
