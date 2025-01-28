import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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

const ContactInfo = () => {
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
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="show"
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
  );
};

export default ContactInfo;