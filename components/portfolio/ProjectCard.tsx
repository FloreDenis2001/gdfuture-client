import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    gradient: string;
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative"
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-white/5">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={false}
          animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
          initial={false}
          animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 p-8 flex flex-col justify-end"
          initial={false}
          animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative z-10">
            <motion.h3
              className="text-2xl font-bold text-white mb-3"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {project.tech.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm backdrop-blur-sm border border-yellow-500/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.a
              href="#"
              className="inline-flex items-center text-white font-medium group/btn bg-yellow-500/20 px-4 py-2 rounded-xl hover:bg-yellow-500/30 transition-all duration-300"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project
              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;