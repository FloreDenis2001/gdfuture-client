"use client";
import React from 'react';
import { 
  Briefcase, MapPin, Clock, ArrowRight,
  Coffee, Users, Heart, Zap,
  Building, DollarSign, GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const jobListings = [
  {
    title: "Senior Full Stack Developer",
    location: "New York, NY",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced Full Stack Developer to join our growing team.",
    salary: "$120k - $180k",
    requirements: ["5+ years experience", "React & Node.js", "Cloud platforms"],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Join our design team to create beautiful and intuitive user experiences.",
    salary: "$90k - $140k",
    requirements: ["3+ years experience", "Figma", "User research"],
    gradient: "from-purple-400 to-pink-600"
  },
  {
    title: "DevOps Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Operations",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
    salary: "$130k - $190k",
    requirements: ["AWS/GCP", "Kubernetes", "CI/CD"],
    gradient: "from-yellow-400 to-orange-600"
  }
];

const benefits = [
  {
    icon: <Coffee size={32} />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Users size={32} />,
    title: "Great Team",
    description: "Work with talented and passionate individuals",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: <Heart size={32} />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    icon: <Zap size={32} />,
    title: "Growth Opportunities",
    description: "Continuous learning and career development",
    gradient: "from-green-400 to-emerald-600"
  }
];

const values = [
  {
    icon: <Users size={32} />,
    title: "Collaborative Culture",
    description: "We believe in the power of teamwork and open communication",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Building size={32} />,
    title: "Innovation First",
    description: "We're always pushing the boundaries of what's possible",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: <DollarSign size={32} />,
    title: "Competitive Pay",
    description: "We offer top-market compensation and equity packages",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Learning & Development",
    description: "Regular workshops, conferences, and learning stipends",
    gradient: "from-green-400 to-emerald-600"
  }
];

export default function Careers() {
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
              <span className="text-yellow-300 font-medium">Join Our Team</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Build the </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Future
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Be part of a team that's shaping the future of digital technology
          </motion.p>

          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-16 px-4"
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
              <span className="text-yellow-300 font-medium">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What We Stand For
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our values define who we are and how we work together
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
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

      {/* Benefits Section */}
      <motion.section 
        className="py-16 px-4 bg-white/[0.02] backdrop-blur-sm"
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
              <span className="text-yellow-300 font-medium">Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Work With Us
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with growth opportunities and amazing benefits
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} bg-opacity-10 mb-6`}>
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Job Listings */}
      <motion.section 
        className="py-16 px-4"
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
              <span className="text-yellow-300 font-medium">Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Join our team and help shape the future of technology
            </p>
          </motion.div>

          <div className="grid gap-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <DollarSign size={16} className="mr-2" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2" size={20} />
                      </motion.button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, rIndex) => (
                        <span
                          key={rIndex}
                          className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm backdrop-blur-sm border border-yellow-500/20"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
            }}
          />
          <div className="relative text-center p-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Don't See Your Perfect Role?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-gray-900 text-yellow-400 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}