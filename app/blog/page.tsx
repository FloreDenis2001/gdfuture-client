'use client';
import React, { useState } from 'react';
import { Calendar, User, MessageSquare, ArrowRight, Zap } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the web development landscape",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
    date: "Mar 15, 2024",
    author: "John Smith",
    comments: 12,
    category: "Technology"
  },
  {
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Learn best practices for creating robust and scalable applications",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    date: "Mar 12, 2024",
    author: "Emma Wilson",
    comments: 8,
    category: "Development"
  },
  {
    title: "UI/UX Design Trends for Modern Web Applications",
    excerpt: "Discover the latest design trends that enhance user experience",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
    date: "Mar 10, 2024",
    author: "Michael Chen",
    comments: 15,
    category: "Design"
  }
];

function Blog() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900">
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
              {['Home', 'About', 'Services','Team', 'Portfolio','Careers','Blog', 'Contact'].map((item) => (
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
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Latest Insights & <span className="text-yellow-400">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and insights in the digital world
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User size={16} className="mr-2" />
                        {post.author}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <MessageSquare size={16} className="mr-2" />
                      {post.comments}
                    </span>
                  </div>
                  <button className="group inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300">
                    Read More 
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;