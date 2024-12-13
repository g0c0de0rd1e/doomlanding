import React from 'react';
import AnimatedBackground from './ui/AnimatedBackground';

const Portfolio = () => {
  const projects = [
    {
      title: "Cybersecurity Platform",
      description: "Advanced threat detection and prevention system",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Node.js", "AI/ML"]
    },
    {
      title: "Enterprise Management",
      description: "Scalable enterprise resource planning solution",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tech: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Automated cloud deployment platform",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      tech: ["AWS", "Docker", "Kubernetes"]
    }
  ];

  return (
    <AnimatedBackground>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-red-500/20 transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Portfolio;