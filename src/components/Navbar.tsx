import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <motion.a
            href="#hero"
            className="text-2xl font-bold tracking-tight text-laranjao"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LK4z
          </motion.a>
          <motion.a
            href="https://github.com/lk4z7602"
            className="ml-4 px-5 py-2.5 bg-laranjao text-white text-sm font-semibold rounded-lg hover:bg-laranjao-hover transition-all duration-300 hover:shadow-lg hover:shadow-laranjao/20 md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            <motion.a
              href="#hero"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              Início
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-laranjao group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#about"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              Sobre
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-laranjao group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#stack"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              Stack
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-laranjao group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#projects"
              className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              Projetos
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-laranjao group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="https://github.com/lk4z7602"
              className="ml-4 px-5 py-2.5 bg-laranjao text-white text-sm font-semibold rounded-lg hover:bg-laranjao-hover transition-all duration-300 hover:shadow-lg hover:shadow-laranjao/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
