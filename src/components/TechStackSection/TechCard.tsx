import { Suspense, memo } from "react";
import { motion } from "framer-motion";
import useResponsiveIconSize from "../../utils/useResponsiveIconSize";

interface TechCardProps {
  tech: TechStackItem;
  index: number;
  hoveredTech: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

interface TechStackItem {
  id: string;
  name: string;
  icon: React.LazyExoticComponent<React.ComponentType<{ size: number }>>;
  size: number;
}

const IconFallback = () => <span className="w-12 h-12 inline-block" />;

const TechCard = memo(
  ({ tech, index, hoveredTech, onMouseEnter, onMouseLeave }: TechCardProps) => {
    const Icon = tech.icon;
    const responsiveSize = useResponsiveIconSize(tech.size);

    return (
      <motion.div
        key={tech.id}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onMouseEnter={() => onMouseEnter(tech.id)}
        onMouseLeave={onMouseLeave}
        className="group relative"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className={`relative aspect-square rounded-2xl bg-[#111111] border border-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            hoveredTech === tech.id
              ? "border-laranjao/50 shadow-xl shadow-laranjao/10"
              : "hover:border-white/10"
          }`}
        >

          <div
            className={`absolute inset-0 rounded-2xl bg-laranjao/10 opacity-0 transition-opacity duration-300 ${
              hoveredTech === tech.id ? "opacity-100" : "group-hover:opacity-50"
            }`}
          />

          <div
            className={`relative transition-colors duration-300 ${
              hoveredTech === tech.id
                ? "text-laranjao"
                : "text-gray-400 group-hover:text-gray-200"
            }`}
          >
            <Suspense fallback={<IconFallback />}>
              <Icon size={responsiveSize} />
            </Suspense>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: hoveredTech === tech.id ? 1 : 0,
              y: hoveredTech === tech.id ? 0 : 10,
            }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none z-20"
          >
            {tech.name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  },
);

export default TechCard;
export type { TechCardProps, TechStackItem };