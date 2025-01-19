import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    description: "A modern e-commerce platform with advanced features and seamless user experience."
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description: "Mobile application for healthcare providers to manage patient care efficiently."
  },
  {
    title: "Financial Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    description: "Real-time financial analytics dashboard with advanced data visualization."
  },
  {
    title: "Social Media Platform",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    description: "A social networking platform with real-time messaging and content sharing."
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80",
    description: "Mobile app for tracking workouts, nutrition, and fitness goals."
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    description: "Property listing and management platform with virtual tour capabilities."
  }
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;