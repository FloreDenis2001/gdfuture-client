import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "With over 15 years of experience in technology leadership."
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80",
    bio: "Award-winning designer with a passion for user-centered design."
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Expert in cloud architecture and scalable systems."
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Certified PMP with a track record of successful project delivery."
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    bio: "Full-stack developer specializing in React and Node.js."
  },
  {
    name: "Lisa Chen",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "Passionate about creating intuitive user experiences."
  }
];

function Team() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the talented individuals who make GDFUTURE a leader in digital innovation
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;