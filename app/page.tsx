"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Rocket,
  Users,
  Zap,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Award,
  Coffee,
  MessageSquare,
  ArrowRight,
  Brain,
  Cpu,
  Shield,
  Speech as Speed,
  X,
  Menu,
  ArrowDown,
  Gauge,
  ExternalLink,
  Star,
  Trophy,
  Phone,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import RecognitionSection from "@/components/RecognitionSection";
import ProcessSection from "@/components/ProcessSection";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Careers",
    "Contact",
  ];
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your requirements and vision",
      icon: <Brain size={32} />,
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating detailed roadmap and architecture",
      icon: <Coffee size={32} />,
      gradient: "from-purple-400 to-pink-600",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with best practices",
      icon: <Code2 size={32} />,
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      number: "04",
      title: "Delivery",
      description: "Testing, deployment and ongoing support",
      icon: <Rocket size={32} />,
      gradient: "from-green-400 to-emerald-600",
    },
  ];

  const portfolioItems = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Enterprise-level analytics platform with machine learning capabilities for predictive insights.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "ai",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      link: "#",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Cross-platform mobile application for a luxury fashion brand with AR try-on features.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      category: "mobile",
      tech: ["React Native", "Node.js", "Firebase", "AR Kit"],
      link: "#",
    },
    {
      title: "Smart City Dashboard",
      description:
        "Real-time monitoring and control system for urban infrastructure management.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
      category: "web",
      tech: ["Next.js", "GraphQL", "D3.js", "IoT"],
      link: "#",
    },
    {
      title: "Healthcare AI Assistant",
      description:
        "AI-powered virtual assistant for patient care and medical diagnosis support.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      category: "ai",
      tech: ["Python", "NLP", "Vue.js", "Docker"],
      link: "#",
    },
  ];

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI Solutions" },
  ];
  const awards = [
    {
      icon: <Trophy size={32} />,
      title: "Best Web Agency 2023",
      org: "Digital Excellence Awards",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: <Award size={32} />,
      title: "Top Mobile App Developer",
      org: "App Development Weekly",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      icon: <Star size={32} />,
      title: "Innovation in Technology",
      org: "Tech Leaders Summit",
      gradient: "from-yellow-400 to-orange-600",
    },
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
      delay: 0,
    },
    {
      url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      delay: 0.2,
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      delay: 0.4,
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      delay: 0.6,
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariantsPortofolio = {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] xl:w-[80%] z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/[0.02] backdrop-blur-md border border-white/[0.05] py-4 lg:py-5"
            : "bg-transparent py-5 lg:py-6"
        } rounded-full top-6`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 lg:p-2.5 rounded-xl">
                <Zap size={24} className="text-gray-900" />
              </div>
              <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
                GDFUTURE
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-2 py-1 xl:px-4 xl:py-2 text-sm lg:text-base text-gray-300 transition-colors rounded-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10 transition-colors group-hover:text-white">
                    {item}
                  </span>
                  <div className="absolute inset-0 bg-white/[0.03] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <button className="relative group px-4 py-1.5 xl:px-6 xl:py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl text-sm lg:text-base lg:font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-gray-900 z-50 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="p-6">
                <motion.div
                  className="flex items-center justify-between mb-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-xl">
                      <Zap size={20} className="text-gray-900" />
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">
                      GDFUTURE
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                <motion.button
                  className="w-full mt-8 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 md:pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Digital Background"
            className="w-full h-full object-cover opacity-20"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-900/50 to-gray-900/50 mix-blend-multiply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="px-6 py-2 bg-yellow-500/20 rounded-full backdrop-blur-sm border border-yellow-500/20">
              <span className="text-yellow-300 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Innovate • Create • Deliver
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="inline-block">We Craft Digital</span>{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Excellence
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Transforming visionary ideas into powerful digital solutions with
            cutting-edge technology and unparalleled expertise
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 flex items-center justify-center mx-auto overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <span className="relative flex items-center">
                Start Your Project
                <ChevronRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {[
              {
                number: "250+",
                label: "Projects Completed",
                icon: <Rocket className="w-6 h-6" />,
                gradient: "from-pink-500 via-red-500 to-yellow-500",
              },
              {
                number: "50+",
                label: "Team Members",
                icon: <Users className="w-6 h-6" />,
                gradient: "from-green-500 via-teal-500 to-blue-500",
              },
              {
                number: "10+",
                label: "Years Experience",
                icon: <Award className="w-6 h-6" />,
                gradient: "from-purple-500 via-violet-500 to-indigo-500",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
                icon: <MessageSquare className="w-6 h-6" />,
                gradient: "from-yellow-500 via-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group perspective-1000"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
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
                <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10 mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="p-2 bg-black/30 rounded-lg text-white">
                      {stat.icon}
                    </div>
                  </motion.div>

                  <div className="relative">
                    <motion.div
                      className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm sm:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about"
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
                  <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    About Us
                  </span>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-white">We're a Team of </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Digital Craftsmen
                </span>
              </motion.h2>

              <motion.p
                className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                With over a decade of experience in digital innovation, we've
                mastered the art of transforming complex challenges into elegant
                solutions. Our passion for technology and commitment to
                excellence drives us to deliver exceptional results for our
                clients.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  {
                    icon: <Brain size={24} />,
                    text: "Strategic Thinking",
                    gradient: "from-blue-400 to-indigo-600",
                  },
                  {
                    icon: <Cpu size={24} />,
                    text: "Technical Excellence",
                    gradient: "from-purple-400 to-pink-600",
                  },
                  {
                    icon: <Shield size={24} />,
                    text: "Secure Solutions",
                    gradient: "from-green-400 to-emerald-600",
                  },
                  {
                    icon: <Gauge size={24} />,
                    text: "High Performance",
                    gradient: "from-yellow-400 to-orange-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-4 bg-white/[0.03] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10`}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <span className="text-gray-300 font-medium">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className="group relative px-8 py-4 bg-yellow-500/10 text-yellow-400 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-500/20 flex items-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <span className="relative flex items-center">
                  Learn More About Us
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 via-transparent to-yellow-500/20 z-10 mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Team at work"
                  className="rounded-lg shadow-2xl w-full h-full object-cover transform transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 p-6 rounded-lg shadow-xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-sm font-medium">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-yellow-900/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20">
                <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Our Work
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Featured </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Projects
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore our latest work and see how we've helped businesses
              achieve their digital goals
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl"
                          layoutId="activeTab"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 0.3,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          activeTab === tab.id
                            ? "text-gray-900"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {portfolioItems
                .filter(
                  (item) => activeTab === "all" || item.category === activeTab
                )
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group relative"
                    variants={itemVariants}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-white/5">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={false}
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                      />

                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] sm:h-[400px] object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
                        initial={false}
                        animate={
                          hoveredIndex === index
                            ? { scale: 1.05 }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.6 }}
                      />

                      <motion.div
                        className="absolute inset-0 p-8 flex flex-col justify-end"
                        initial={false}
                        animate={
                          hoveredIndex === index
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <div className="relative z-10">
                          <motion.h3
                            className="text-2xl font-bold text-white mb-3"
                            initial={false}
                            animate={
                              hoveredIndex === index
                                ? { y: 0, opacity: 1 }
                                : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>

                          <motion.p
                            className="text-gray-300 mb-4"
                            initial={false}
                            animate={
                              hoveredIndex === index
                                ? { y: 0, opacity: 1 }
                                : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {project.description}
                          </motion.p>

                          <motion.div
                            className="flex flex-wrap gap-2 mb-6"
                            initial={false}
                            animate={
                              hoveredIndex === index
                                ? { y: 0, opacity: 1 }
                                : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {project.tech.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm backdrop-blur-sm border border-yellow-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>

                          <motion.a
                            href={project.link}
                            className="inline-flex items-center text-white font-medium group/btn bg-yellow-500/20 px-4 py-2 rounded-xl hover:bg-yellow-500/30 transition-all duration-300"
                            initial={false}
                            animate={
                              hoveredIndex === index
                                ? { y: 0, opacity: 1 }
                                : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.3, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Project
                            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}

      <ProcessSection />
      <RecognitionSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
