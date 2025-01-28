'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Database } from 'lucide-react';
import HeroProject from '@/components/portfolio/HeroProject';
import ProjectsGrid from '@/components/portfolio/ProjectsGrid';
import CTASection from '@/components/CTASection';

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

const tabs = [
  { id: "all", label: "All Projects", icon: <Globe size={20} /> },
  { id: "web", label: "Web Apps", icon: <Code2 size={20} /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone size={20} /> },
  { id: "backend", label: "Backend", icon: <Database size={20} /> }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
      <HeroProject />

      <motion.section 
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
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

          <ProjectsGrid projects={projects} activeTab={activeTab} />
        </div>
      </motion.section>

      <CTASection />
    </div>
  );
}



export default Portfolio