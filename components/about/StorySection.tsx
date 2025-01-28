import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
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
    <motion.section 
      className="py-16 px-4"
      initial="hidden"
      animate="show"
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
              Today, we&apos;re proud to have helped numerous businesses achieve their digital transformation goals, 
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
  );
};

export default StorySection;