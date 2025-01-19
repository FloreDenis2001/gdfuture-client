import React from 'react';
import { 
  Code2, Rocket, Globe, Database, 
  Smartphone, Monitor, Shield, Cpu,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} className="text-yellow-400" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "E-commerce Solutions",
      "Content Management",
      "API Integration"
    ]
  },
  {
    icon: <Smartphone size={32} className="text-yellow-400" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Native Apps",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Support"
    ]
  },
  {
    icon: <Database size={32} className="text-yellow-400" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services.",
    features: [
      "Cloud Migration",
      "Auto Scaling",
      "Load Balancing",
      "24/7 Monitoring",
      "Backup Solutions",
      "Security Management"
    ]
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700/50 transition-all">
                <div className="mb-6 p-4 bg-yellow-500/10 rounded-lg inline-block">
                  {service.icon}
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
                      <CheckCircle size={16} className="text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 group flex items-center text-yellow-400 font-medium hover:text-yellow-300">
                  Learn More
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 size={32} className="text-yellow-400" />,
                title: "Planning",
                description: "We analyze requirements and create detailed project plans"
              },
              {
                icon: <Monitor size={32} className="text-yellow-400" />,
                title: "Design",
                description: "Creating intuitive and beautiful user interfaces"
              },
              {
                icon: <Cpu size={32} className="text-yellow-400" />,
                title: "Development",
                description: "Building with modern technologies and best practices"
              },
              {
                icon: <Rocket size={32} className="text-yellow-400" />,
                title: "Launch",
                description: "Thorough testing and smooth deployment"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies to deliver modern and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React", "Node.js", "Python", "AWS",
              "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl text-center hover:bg-gray-700/50 transition-all">
                <h3 className="text-xl font-semibold text-white">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <button className="px-8 py-4 bg-gray-900 text-yellow-400 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;