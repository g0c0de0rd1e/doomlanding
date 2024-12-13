import React from 'react';
import AnimatedBackground from './ui/AnimatedBackground';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
    }
  ];

  return (
    <AnimatedBackground>
      <section id="tech-stack" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Tech Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-red-500/20 transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.techs.map((t, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default TechStack;