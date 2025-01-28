import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "Java", gradient: "from-red-400 to-red-600" },
  { name: "Spring", gradient: "from-green-400 to-emerald-600" },
  { name: "React", gradient: "from-blue-400 to-indigo-600" },
  { name: "Node.js", gradient: "from-green-400 to-emerald-600" },
  { name: "MySQL", gradient: "from-blue-400 to-cyan-600" },
  { name: "MongoDB", gradient: "from-green-400 to-teal-600" },
  { name: "Docker", gradient: "from-blue-400 to-cyan-600" },
  { name: "Kubernetes", gradient: "from-blue-400 to-indigo-600" },
  { name: "TailwindCSS", gradient: "from-cyan-400 to-blue-600" },
  { name: "SASS", gradient: "from-pink-400 to-rose-600" },
  { name: "TypeScript", gradient: "from-blue-400 to-indigo-600" },
  { name: "GraphQL", gradient: "from-pink-400 to-purple-600" }
];

const TechnologiesSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.section 
      className="py-16 px-4"
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
            <span className="text-yellow-300 font-medium">Our Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Technologies We Use
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We work with the latest technologies to deliver modern and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/20 text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologiesSection;