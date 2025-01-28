import React from 'react';
import { Globe, Smartphone, Database, ArrowRight, CheckCircle } from 'lucide-react';
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

const ServicesGrid = () => {
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
  );
};

export default ServicesGrid;