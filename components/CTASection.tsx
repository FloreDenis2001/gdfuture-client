import React from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <motion.section 
      className="relative py-24 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="text-gray-900" size={24} />
            <span className="text-gray-900 font-semibold">Let's Create Together</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ready to Transform Your
            <span className="relative">
              <span className="relative z-10"> Digital Presence</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0 10 Q50 0 100 10"
                  fill="none"
                  stroke="rgba(0,0,0,0.3)"
                  strokeWidth="4"
                />
              </motion.svg>
            </span>
            ?
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl text-gray-800 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Let's create something extraordinary together. Our team is ready to help you achieve your digital goals.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-gray-900 text-yellow-400 rounded-xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 1 }}
              />
              <span className="relative flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <motion.div
                  className="absolute right-0 w-12 h-full bg-gradient-to-r from-transparent to-yellow-400/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                />
              </span>
            </motion.button>

            <motion.button 
              className="group relative px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 1 }}
              />
              <span className="relative flex items-center justify-center">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;