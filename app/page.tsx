'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code2, Rocket, Users, Zap, ChevronRight, Github, Linkedin, Twitter,
  Globe, Database, Smartphone, Monitor, Award, Coffee, MessageSquare,
  ArrowRight, Brain, Cpu, Shield, Speech as Speed
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      category: 'web',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      category: 'mobile',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      tech: ["React Native", "Firebase"]
    },
    {
      category: 'web',
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80",
      title: "Learning Management System",
      description: "Enterprise education platform",
      tech: ["Vue.js", "Laravel"]
    },
    {
      category: 'ai',
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      title: "AI-Powered Assistant",
      description: "Natural language processing solution",
      tech: ["Python", "TensorFlow"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap size={28} className="text-yellow-400" />
            <span className="text-white font-bold text-2xl">GDFUTURE</span>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'absolute top-full left-0 right-0 bg-gray-900 p-4' : 'hidden'} md:relative md:block md:bg-transparent md:p-0`}>
            <div className={`flex ${isMenuOpen ? 'flex-col space-y-4' : 'md:flex-row md:space-x-8'}`}>
              {['Home', 'About', 'Services','Team', 'Portfolio','Careers','Blog' ,'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Digital Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/50 to-gray-900/50 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-block mb-8 px-6 py-2 bg-yellow-500/20 rounded-full">
            <span className="text-yellow-300 font-medium">Innovate • Create • Deliver</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            We Craft Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Excellence
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transforming visionary ideas into powerful digital solutions with cutting-edge technology and unparalleled expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-semibold transition-all flex items-center justify-center">
              Start Your Project 
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all flex items-center justify-center group">
              Watch Showreel
              <span className="ml-2 w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                ▶
              </span>
            </button>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "10+", label: "Years Experience" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight size={24} className="text-yellow-400 rotate-90" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-yellow-500/10 rounded-full">
                <span className="text-yellow-400 font-medium">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                We're a Team of Digital Craftsmen
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                With over a decade of experience in digital innovation, we've mastered the art of transforming complex challenges into elegant solutions. Our passion for technology and commitment to excellence drives us to deliver exceptional results for our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Brain className="text-yellow-400" size={24} />, text: "Strategic Thinking" },
                  { icon: <Cpu className="text-yellow-400" size={24} />, text: "Technical Excellence" },
                  { icon: <Shield className="text-yellow-400" size={24} />, text: "Secure Solutions" },
                  { icon: <Speed className="text-yellow-400" size={24} />, text: "High Performance" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="group flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Learn More About Us
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </button>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-400 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              We offer a full spectrum of digital services to help your business thrive in the modern world
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} className="text-yellow-400" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
              },
              {
                icon: <Smartphone size={32} className="text-yellow-400" />,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                features: ["Native Performance", "Offline Support", "Push Notifications"]
              },
              {
                icon: <Database size={32} className="text-yellow-400" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and DevOps services for your applications.",
                features: ["Auto Scaling", "Load Balancing", "24/7 Monitoring"]
              },
              {
                icon: <Monitor size={32} className="text-yellow-400" />,
                title: "UI/UX Design",
                description: "Beautiful and intuitive user interfaces that deliver exceptional experiences.",
                features: ["User Research", "Wireframing", "Prototyping"]
              },
              {
                icon: <Code2 size={32} className="text-yellow-400" />,
                title: "Custom Development",
                description: "Tailored solutions built to address your unique business challenges.",
                features: ["Scalable Architecture", "Clean Code", "Maintenance"]
              },
              {
                icon: <MessageSquare size={32} className="text-yellow-400" />,
                title: "Consultation",
                description: "Expert guidance to help you make informed technology decisions.",
                features: ["Technical Audits", "Strategy Planning", "Team Training"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 sm:p-8 rounded-xl hover:bg-gray-700/50 transition-all hover:transform hover:-translate-y-1">
                <div className="mb-6 p-4 bg-yellow-500/10 rounded-lg inline-block group-hover:bg-yellow-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-400 font-medium">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12">
              Explore our latest work and see how we've helped businesses achieve their digital goals
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'web', 'mobile', 'ai'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioItems
              .filter(item => activeTab === 'all' || item.category === activeTab)
              .map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center text-white font-medium group/btn">
                        View Project
                        <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-400 font-medium">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We dive deep into your requirements and vision",
                icon: <Brain size={32} className="text-yellow-400" />
              },
              {
                number: "02",
                title: "Planning",
                description: "Creating detailed roadmap and architecture",
                icon: <Coffee size={32} className="text-yellow-400" />
              },
              {
                number: "03",
                title: "Development",
                description: "Building your solution with best practices",
                icon: <Code2 size={32} className="text-yellow-400" />
              },
              {
                number: "04",
                title: "Delivery",
                description: "Testing, deployment and ongoing support",
                icon: <Rocket size={32} className="text-yellow-400" />
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-yellow-400/20 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-yellow-500/10 rounded-full">
                <span className="text-yellow-400 font-medium">Recognition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                Award-Winning Digital Excellence
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8">
                Our commitment to quality and innovation has been recognized by industry leaders
              </p>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Award size={32} className="text-yellow-400" />,
                    title: "Best Web Agency 2023",
                    org: "Digital Excellence Awards"
                  },
                  {
                    icon: <Award size={32} className="text-yellow-400" />,
                    title: "Top Mobile App Developer",
                    org: "App Development Weekly"
                  },
                  {
                    icon: <Award size={32} className="text-yellow-400" />,
                    title: "Innovation in Technology",
                    org: "Tech Leaders Summit"
                  }
                ].map((award, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      {award.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                      <p className="text-gray-400">{award.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 md:mt-0">
              {[
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              ].map((image, index) => (
                <div key={index} className={`rounded-lg overflow-hidden ${index % 2 === 0 ? 'transform translate-y-8' : ''}`}>
                  <img src={image} alt="Team and office" className="w-full h-32 sm:h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
            Let's create something extraordinary together. Our team is ready to help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-yellow-400 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Zap size={28} className="text-yellow-400" />
                <span className="text-white font-bold text-2xl">GDFUTURE</span>
              </div>
              <p className="text-gray-400 mb-6">
                Crafting digital excellence through innovative solutions and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>Global Development Future</li>
                <li>CIF 48140505</li>
                <li>globaldevelopmentfuture@gmail.com</li>
                <li>+40 751 389 111</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 Global Development Future. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;