import React from 'react';
import { Brain, Coffee, Code2, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your requirements and vision",
      icon: <Brain size={32} />,
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating detailed roadmap and architecture",
      icon: <Coffee size={32} />,
      gradient: "from-purple-400 to-pink-600"
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with best practices",
      icon: <Code2 size={32} />,
      gradient: "from-yellow-400 to-orange-600"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Testing, deployment and ongoing support",
      icon: <Rocket size={32} />,
      gradient: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <motion.section 
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
              <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                How We Work
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Our Development </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Process
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We follow a proven methodology to ensure successful project delivery
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              <div className="relative bg-gray-900/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 group-hover:translate-y-[-5px]">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 1 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {step.icon}
                    </div>
                  </motion.div>

                  <motion.div 
                    className={`absolute top-4 right-4 text-6xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    initial={false}
                    whileHover={{ scale: 1.1, opacity: 0.3 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-400 transition-all duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500" />
              </div>

              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={24} className="text-yellow-400" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;