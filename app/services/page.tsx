"use client";
import React from 'react';
import { 
  Code2, Rocket, Globe, Database, 
  Smartphone, Monitor, Shield, Cpu,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: [
      "Responsive Design",
      "SEO Optimization", 
      "Performance Tuning",
      "E-commerce Solutions",
      "Content Management",
      "API Integration"
    ],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Native Apps",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Support"
    ],
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: <Database size={32} />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services.",
    features: [
      "Cloud Migration",
      "Auto Scaling",
      "Load Balancing",
      "24/7 Monitoring",
      "Backup Solutions",
      "Security Management"
    ],
    gradient: "from-yellow-400 to-orange-600"
  }
];

export default function Services() {
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
              <span className="text-yellow-300 font-medium">What We Offer</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Services
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-6`}>
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <CheckCircle size={16} className={`mr-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className={`mt-8 group flex items-center font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-16 px-4 bg-white/[0.02] backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
              <span className="text-yellow-300 font-medium">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 size={32} />,
                title: "Planning",
                description: "We analyze requirements and create detailed project plans",
                gradient: "from-blue-400 to-indigo-600"
              },
              {
                icon: <Monitor size={32} />,
                title: "Design",
                description: "Creating intuitive and beautiful user interfaces",
                gradient: "from-purple-400 to-pink-600"
              },
              {
                icon: <Cpu size={32} />,
                title: "Development",
                description: "Building with modern technologies and best practices",
                gradient: "from-yellow-400 to-orange-600"
              },
              {
                icon: <Rocket size={32} />,
                title: "Launch",
                description: "Thorough testing and smooth deployment",
                gradient: "from-green-400 to-emerald-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.gradient} bg-opacity-10 mb-6`}>
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-yellow-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
            {[
              { name: "React", gradient: "from-blue-400 to-indigo-600" },
              { name: "Node.js", gradient: "from-green-400 to-emerald-600" },
              { name: "Python", gradient: "from-yellow-400 to-orange-600" },
              { name: "AWS", gradient: "from-orange-400 to-red-600" },
              { name: "Docker", gradient: "from-blue-400 to-cyan-600" },
              { name: "Kubernetes", gradient: "from-indigo-400 to-purple-600" },
              { name: "MongoDB", gradient: "from-green-400 to-teal-600" },
              { name: "PostgreSQL", gradient: "from-blue-400 to-indigo-600" }
            ].map((tech, index) => (
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
              Ready to Start Your Project?
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
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}