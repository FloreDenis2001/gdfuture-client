"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  User,
  AtSign
} from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "contact@gdfuture.com",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "123 Innovation Street, Tech City",
      gradient: "from-yellow-400 to-orange-600"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      gradient: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
      {/* Hero Section */}
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
              <span className="text-yellow-300 font-medium">Get in Touch</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Let's Start a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Conversation
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Grid */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="text"
                            className="block w-full pl-10 bg-white/[0.03] border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="text"
                            className="block w-full pl-10 bg-white/[0.03] border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AtSign className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          className="block w-full pl-10 bg-white/[0.03] border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-500" />
                        </div>
                        <textarea
                          rows={4}
                          className="block w-full pl-10 bg-white/[0.03] border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/20">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.gradient} bg-opacity-10 mb-4`}>
                        <div className="p-2 bg-black/30 rounded-lg text-white">
                          {info.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-[300px] overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043435129!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
              <span className="text-yellow-300 font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Typically, small projects take 4-6 weeks, while larger projects can take 3-6 months."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch."
              },
              {
                q: "What is your development process?",
                a: "We follow an agile methodology with regular client check-ins, iterative development, and continuous feedback integration."
              },
              {
                q: "How do you handle project pricing?",
                a: "We provide detailed proposals based on project requirements, with transparent pricing and milestone-based payment schedules."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}