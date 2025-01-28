'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Linkedin, Twitter, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        stiffness: 100
      }
    }
  };

  return (
    <footer className="relative bg-gray-900 text-gray-400 py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="group flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 blur-lg group-hover:blur-xl transition-all duration-300" />
                <Zap size={28} className="text-yellow-400 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">GDFUTURE</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting digital excellence through innovative solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Twitter, link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="group relative p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "UI/UX Design",
                "Consulting",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400 }}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400 }}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 6 }}>
                <MapPin size={16} className="text-yellow-400" />
                <span>Global Development Future</span>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 6 }}>
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:globaldevelopmentfuture@gmail.com" className="hover:text-yellow-400 transition-colors">
                  globaldevelopmentfuture@gmail.com
                </a>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 6 }}>
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+40751389111" className="hover:text-yellow-400 transition-colors">
                  +40 751 389 111
                </a>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 6 }}>
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                <span>CIF 48140505</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative border-t border-gray-800 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Global Development Future. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;