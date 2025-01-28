import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, AtSign, MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
  );
};

export default ContactForm;