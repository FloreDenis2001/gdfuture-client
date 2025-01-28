'use client';   
import React from "react";
import { Rocket, Users, Award, MessageSquare, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 md:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Digital Background"
          className="w-full h-full object-cover opacity-20"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-900/50 to-gray-900/50 mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="px-6 py-2 bg-yellow-500/20 rounded-full backdrop-blur-sm border border-yellow-500/20">
            <span className="text-yellow-300 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Innovate • Create • Deliver
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="inline-block">We Craft Digital</span>{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 inline-block"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Excellence
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Transforming visionary ideas into powerful digital solutions with
          cutting-edge technology and unparalleled expertise
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 flex items-center justify-center mx-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <span className="relative flex items-center">
              Start Your Project
              <ChevronRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {[
            {
              number: "250+",
              label: "Projects Completed",
              icon: <Rocket className="w-6 h-6" />,
              gradient: "from-pink-500 via-red-500 to-yellow-500",
            },
            {
              number: "50+",
              label: "Team Members",
              icon: <Users className="w-6 h-6" />,
              gradient: "from-green-500 via-teal-500 to-blue-500",
            },
            {
              number: "10+",
              label: "Years Experience",
              icon: <Award className="w-6 h-6" />,
              gradient: "from-purple-500 via-violet-500 to-indigo-500",
            },
            {
              number: "99%",
              label: "Client Satisfaction",
              icon: <MessageSquare className="w-6 h-6" />,
              gradient: "from-yellow-500 via-orange-500 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group perspective-1000"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
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
              <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10 mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="p-2 bg-black/30 rounded-lg text-white">
                    {stat.icon}
                  </div>
                </motion.div>

                <div className="relative">
                  <motion.div
                    className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}