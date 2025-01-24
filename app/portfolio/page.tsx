"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Smartphone, Globe, Database } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    description: "A modern e-commerce platform with advanced features and seamless user experience.",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    title: "Healthcare App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description: "Mobile application for healthcare providers to manage patient care efficiently.",
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    gradient: "from-purple-400 to-pink-600"
  },
  {
    title: "Financial Dashboard",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    tech: ["React", "D3.js", "Node.js", "WebSocket"],
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    title: "Social Media Platform",
    category: "backend",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    description: "A social networking platform with real-time messaging and content sharing.",
    tech: ["Next.js", "Socket.io", "Redis", "AWS"],
    gradient: "from-green-400 to-emerald-600"
  },
  {
    title: "Fitness Tracking App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80",
    description: "Mobile app for tracking workouts, nutrition, and fitness goals.",
    tech: ["React Native", "GraphQL", "Node.js", "PostgreSQL"],
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    title: "Real Estate Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    description: "Property listing and management platform with virtual tour capabilities.",
    tech: ["Next.js", "Three.js", "Prisma", "PostgreSQL"],
    gradient: "from-indigo-400 to-purple-600"
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const tabs = [
    { id: "all", label: "All Projects", icon: <Globe size={20} /> },
    { id: "web", label: "Web Apps", icon: <Code2 size={20} /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone size={20} /> },
    { id: "backend", label: "Backend", icon: <Database size={20} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const filteredProjects = projects.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
              <span className="text-yellow-300 font-medium">Our Work</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Projects
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore our latest work and see how we've helped businesses achieve their digital goals
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2`}
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
                    <span className="relative z-10">
                      {tab.icon}
                    </span>
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

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group relative"
                    variants={itemVariants}
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
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                      />

                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
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
                            href="#"
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
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-gray-400 text-lg">No projects found in this category.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
            }}
          />
          <div className="relative text-center p-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Let's discuss how we can help you achieve your digital goals
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-gray-900 text-yellow-400 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}