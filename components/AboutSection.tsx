import React from "react";
import { Brain, Cpu, Shield, Gauge, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
                <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  About Us
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">We're a Team of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Digital Craftsmen
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over a decade of experience in digital innovation, we&apos;ve
              mastered the art of transforming complex challenges into elegant
              solutions. Our passion for technology and commitment to
              excellence drives us to deliver exceptional results for our
              clients.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                {
                  icon: <Brain size={24} />,
                  text: "Strategic Thinking",
                  gradient: "from-blue-400 to-indigo-600",
                },
                {
                  icon: <Cpu size={24} />,
                  text: "Technical Excellence",
                  gradient: "from-purple-400 to-pink-600",
                },
                {
                  icon: <Shield size={24} />,
                  text: "Secure Solutions",
                  gradient: "from-green-400 to-emerald-600",
                },
                {
                  icon: <Gauge size={24} />,
                  text: "High Performance",
                  gradient: "from-yellow-400 to-orange-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-white/[0.03] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="relative flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <span className="text-gray-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="group relative px-8 py-4 bg-yellow-500/10 text-yellow-400 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-500/20 flex items-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <span className="relative flex items-center">
                Learn More About Us
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 via-transparent to-yellow-500/20 z-10 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team at work"
                className="rounded-lg shadow-2xl w-full h-full object-cover transform transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 p-6 rounded-lg shadow-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="relative">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm font-medium">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}