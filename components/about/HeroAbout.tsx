import React from 'react';
import { motion } from 'framer-motion';

const HeroAbout = () => {
  return (
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
  );
};

export default HeroAbout;