import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    title: "AI-Powered Analytics Platform",
    description:
      "Enterprise-level analytics platform with machine learning capabilities for predictive insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "ai",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    link: "#",
  },
  {
    title: "E-Commerce Mobile App",
    description:
      "Cross-platform mobile application for a luxury fashion brand with AR try-on features.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    category: "mobile",
    tech: ["React Native", "Node.js", "Firebase", "AR Kit"],
    link: "#",
  },
  {
    title: "Smart City Dashboard",
    description:
      "Real-time monitoring and control system for urban infrastructure management.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    category: "web",
    tech: ["Next.js", "GraphQL", "D3.js", "IoT"],
    link: "#",
  },
  {
    title: "Healthcare AI Assistant",
    description:
      "AI-powered virtual assistant for patient care and medical diagnosis support.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    category: "ai",
    tech: ["Python", "NLP", "Vue.js", "Docker"],
    link: "#",
  },
];

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI Solutions" },
];

const itemVariants = {
  closed: { x: 50, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="portfolio"
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-yellow-900/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
              <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Our Work
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our latest work and see how we've helped businesses
            achieve their digital goals
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.3,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        activeTab === tab.id
                          ? "text-gray-900"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {portfolioItems
              .filter(
                (item) => activeTab === "all" || item.category === activeTab
              )
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-white/5">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={false}
                      animate={
                        hoveredIndex === index
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                    />

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
                      initial={false}
                      animate={
                        hoveredIndex === index
                          ? { scale: 1.05 }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.6 }}
                    />

                    <motion.div
                      className="absolute inset-0 p-8 flex flex-col justify-end"
                      initial={false}
                      animate={
                        hoveredIndex === index
                          ? { y: 0, opacity: 1 }
                          : { y: 20, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      <div className="relative z-10">
                        <motion.h3
                          className="text-2xl font-bold text-white mb-3"
                          initial={false}
                          animate={
                            hoveredIndex === index
                              ? { y: 0, opacity: 1 }
                              : { y: 20, opacity: 0 }
                          }
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                          className="text-gray-300 mb-4"
                          initial={false}
                          animate={
                            hoveredIndex === index
                              ? { y: 0, opacity: 1 }
                              : { y: 20, opacity: 0 }
                          }
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-2 mb-6"
                          initial={false}
                          animate={
                            hoveredIndex === index
                              ? { y: 0, opacity: 1 }
                              : { y: 20, opacity: 0 }
                          }
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
                          href={project.link}
                          className="inline-flex items-center text-white font-medium group/btn bg-yellow-500/20 px-4 py-2 rounded-xl hover:bg-yellow-500/30 transition-all duration-300"
                          initial={false}
                          animate={
                            hoveredIndex === index
                              ? { y: 0, opacity: 1 }
                              : { y: 20, opacity: 0 }
                          }
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
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}