export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <a
            href="#hero"
            className="text-2xl font-bold tracking-tight text-laranjao"
          >
            LK4z
          </a>
          <a
            href="https://github.com/lk4z7602"
            className="ml-4 px-5 py-2.5 bg-laranjao text-white text-sm font-semibold rounded-lg hover:bg-laranjao-hover transition-all duration-300 hover:shadow-lg hover:shadow-laranjao/20 md:hidden"
          >
            GitHub
          </a>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="#hero"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              Sobre
            </a>
            <a
              href="#stack"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              Stack
            </a>
            <a
              href="#projects"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              Projetos
            </a>
            <a
              href="https://github.com/lk4z7602"
              className="ml-4 px-5 py-2.5 bg-laranjao text-white text-sm font-semibold rounded-lg hover:bg-laranjao-hover transition-all duration-300 hover:shadow-lg hover:shadow-laranjao/20"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
