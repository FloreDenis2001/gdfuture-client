import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const ValuesSection = () => {
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
      className="py-16 px-4 bg-white/[0.02] backdrop-blur-sm"
      initial="hidden"
      animate="show"
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
  );
};

export default ValuesSection;