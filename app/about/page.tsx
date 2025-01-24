"use client";
import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
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
              <span className="text-yellow-300 font-medium">Our Story</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              GDFUTURE
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're a team of passionate developers, designers, and digital innovators committed to excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, GDFUTURE emerged from a vision to transform how businesses approach digital solutions. 
                We believed that every company, regardless of size, deserves access to cutting-edge technology and 
                exceptional digital experiences.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped numerous businesses achieve their digital transformation goals, 
                creating solutions that not only meet current needs but are built to evolve with future technologies.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "100+", label: "Projects Completed", gradient: "from-blue-400 to-indigo-600" },
                { number: "50+", label: "Happy Clients", gradient: "from-purple-400 to-pink-600" },
                { number: "15+", label: "Team Members", gradient: "from-yellow-400 to-orange-600" },
                { number: "24/7", label: "Support", gradient: "from-green-400 to-emerald-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative perspective-1000"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 animate-pulse-slow rounded-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </h3>
                    <p className="text-gray-300 relative z-10">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-16 px-4 bg-white/[0.02] backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
              <span className="text-yellow-300 font-medium">What Drives Us</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client Focus",
                description: "Your success is our priority. We work closely with you to understand and meet your needs.",
                gradient: "from-blue-400 to-indigo-600"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
                gradient: "from-purple-400 to-pink-600"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to solve complex challenges.",
                gradient: "from-yellow-400 to-orange-600"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Growth",
                description: "We're committed to continuous learning and improvement in everything we do.",
                gradient: "from-green-400 to-emerald-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20 text-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.gradient} bg-opacity-10 mb-6`}>
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}