import React from 'react';
import { 
  MapPin, Phone, Mail, Clock,
  Send, MessageSquare
} from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your ideas to life
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white h-32"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button className="w-full px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <MapPin className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Office Location</h3>
                      <p className="text-gray-400">1234 Digital Avenue, Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Phone className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone Number</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Mail className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email Address</h3>
                      <p className="text-gray-400">contact@gdfuture.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg">
                      <Clock className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Business Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="mr-2" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "What services do you offer?",
                      answer: "We offer web development, mobile app development, cloud solutions, and digital consulting services."
                    },
                    {
                      question: "How long does a typical project take?",
                      answer: "Project timelines vary based on complexity, but we typically deliver within 2-6 months."
                    },
                    {
                      question: "Do you provide support after launch?",
                      answer: "Yes, we offer ongoing maintenance and support services for all our projects."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;