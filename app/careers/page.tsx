import React from 'react';
import { 
  Briefcase, MapPin, Clock, ArrowRight,
  Coffee, Users, Heart, Zap
} from 'lucide-react';

const jobListings = [
  {
    title: "Senior Full Stack Developer",
    location: "New York, NY",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced Full Stack Developer to join our growing team."
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Join our design team to create beautiful and intuitive user experiences."
  },
  {
    title: "DevOps Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Operations",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
  }
];

const benefits = [
  {
    icon: <Coffee className="text-yellow-400" size={32} />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  },
  {
    icon: <Users className="text-yellow-400" size={32} />,
    title: "Great Team",
    description: "Work with talented and passionate individuals"
  },
  {
    icon: <Heart className="text-yellow-400" size={32} />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage"
  },
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: "Growth Opportunities",
    description: "Continuous learning and career development"
  }
];

function Careers() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Be part of a team that's shaping the future of digital technology
          </p>
          <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-semibold transition-all transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Work With Us
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with growth opportunities and amazing benefits
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-all">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Open Positions
          </h2>
          <div className="grid gap-6">
            {jobListings.map((job, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 mb-4 md:mb-0">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                    </div>
                    <button className="group flex items-center text-yellow-400 font-medium hover:text-yellow-300">
                      Apply Now
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                    </button>
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

export default Careers;