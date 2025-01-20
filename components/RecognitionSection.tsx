import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const RecognitionSection = () => {
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

  const awards = [
    {
      icon: <Trophy size={32} />,
      title: "Best Web Agency 2023",
      org: "Digital Excellence Awards",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      icon: <Award size={32} />,
      title: "Top Mobile App Developer",
      org: "App Development Weekly",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Star size={32} />,
      title: "Innovation in Technology",
      org: "Tech Leaders Summit",
      gradient: "from-yellow-400 to-orange-600"
    }
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
      delay: 0
    },
    {
      url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      delay: 0.2
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      delay: 0.4
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      delay: 0.6
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
        className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block mb-6"
              variants={itemVariants}
            >
              <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
                <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Recognition
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
              variants={itemVariants}
            >
              <span className="text-white">Award-Winning </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Digital Excellence
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base sm:text-lg mb-12"
              variants={itemVariants}
            >
              Our commitment to quality and innovation has been recognized by industry leaders
            </motion.p>

            <motion.div 
              className="grid gap-6"
              variants={containerVariants}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative bg-gray-900/20 backdrop-blur-sm border border-white/5 p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      initial={false}
                      whileHover={{ scale: 1.5, opacity: 0.1 }}
                      transition={{ duration: 1 }}
                    />
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${award.gradient} bg-opacity-10`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="p-2 bg-black/30 rounded-lg text-white">
                          {award.icon}
                        </div>
                      </motion.div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-400 transition-all duration-300">
                          {award.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {award.org}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative group rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "transform translate-y-8" : ""
                }`}
                variants={itemVariants}
                transition={{ delay: image.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                />
                
                <img
                  src={image.url}
                  alt="Team and office"
                  className="w-full h-32 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <motion.div 
                  className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300 rounded-2xl"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RecognitionSection;