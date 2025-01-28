import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
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
];

const FAQSection = () => {
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
      className="py-20 px-4"
      initial="hidden"
      animate="show"
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
          {faqs.map((faq, index) => (
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
  );
};

export default FAQSection;