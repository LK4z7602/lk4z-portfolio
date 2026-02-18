import footerIcons from "../utils/icons";

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a
            href="#hero"
            className="text-2xl font-bold tracking-tight text-laranjao"
          >
            LK4z
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lk4z7602"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-laranjao hover:border-laranjao/30 hover:bg-laranjao/10 transition-all duration-300"
              aria-label="Meu GitHub"
            >
              <footerIcons.footerIcons.FiGithub size={18}/>
            </a>

            {/* <a
              href="https://linkedin.com/in/lk4z7602"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-laranjao hover:border-laranjao/30 hover:bg-laranjao/10 transition-all duration-300"
              aria-label="Meu LinkedIn"
            >
              <footerIcons.footerIcons.FiLinkedin />
            </a> */}

            <a
              href="mailto:lk4zvpn@gmail.com"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-laranjao hover:border-laranjao/30 hover:bg-laranjao/10 transition-all duration-300"
              aria-label="Contate-me por e-mail"
            >
              <footerIcons.footerIcons.MdMailOutline size={20}/>
            </a>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">Feito com&nbsp;<footerIcons.footerIcons.FaRegHeart className="text-laranjao" />&nbsp;por Lucas Gomes &copy; 2026</p>
        </div>
      </div>
    </footer>
  );
};
