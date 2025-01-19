import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-400">GDFUTURE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and digital innovators committed to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, GDFUTURE emerged from a vision to transform how businesses approach digital solutions. 
                We believed that every company, regardless of size, deserves access to cutting-edge technology and 
                exceptional digital experiences.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped numerous businesses achieve their digital transformation goals, 
                creating solutions that not only meet current needs but are built to evolve with future technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-yellow-400 text-4xl font-bold mb-2">100+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-yellow-400 text-4xl font-bold mb-2">50+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-yellow-400 text-4xl font-bold mb-2">15+</h3>
                <p className="text-gray-300">Team Members</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-yellow-400 text-4xl font-bold mb-2">24/7</h3>
                <p className="text-gray-300">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-yellow-400" />,
                title: "Client Focus",
                description: "Your success is our priority. We work closely with you to understand and meet your needs."
              },
              {
                icon: <Target className="h-8 w-8 text-yellow-400" />,
                title: "Excellence",
                description: "We strive for excellence in every project, delivering solutions that exceed expectations."
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-400" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to solve complex challenges."
              },
              {
                icon: <Rocket className="h-8 w-8 text-yellow-400" />,
                title: "Growth",
                description: "We're committed to continuous learning and improvement in everything we do."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl text-center">
                <div className="inline-block p-3 bg-gray-700 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;