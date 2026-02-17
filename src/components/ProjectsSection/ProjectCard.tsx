import { motion } from 'framer-motion';
import projectIcons from '../../utils/icons';

interface Tech {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: Tech[] | string[];
  github: string;
  live?: string | null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
    hovering: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hovering"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-white/5 hover:border-laranjao/30 transition-all duration-500">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.45 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 0, y: -10 },
              hovering: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-500/35 backdrop-blur-sm flex items-center justify-center text-white hover:bg-laranjao hover:text-white transition-all duration-300"
            >
              <projectIcons.projectIcons.FiGithub size={20} />
            </motion.a>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-laranjao transition-colors duration-300">
              {project.title}
            </h3>
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="text-white hover:text-laranjao transition-colors duration-300 cursor-pointer"
              >
                <projectIcons.projectIcons.MdArrowOutward size={20} />
              </motion.a>
            ) : (
              <projectIcons.projectIcons.MdArrowOutward size={20} />
            )}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <motion.div
            layout
            className="flex flex-wrap gap-2"
          >
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={`${tech}-${techIndex}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + techIndex * 0.05 }}
                className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/5 hover:border-laranjao/30 hover:text-laranjao transition-all duration-300"
              >
                {typeof tech === 'string' ? tech : tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-laranjao to-transparent origin-left"
        />
      </div>
    </motion.div>
  );
};
