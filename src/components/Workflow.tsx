import React from 'react';
import { ClipboardList, MessageSquare, Code, CheckCircle } from 'lucide-react';
import AnimatedBackground from './ui/AnimatedBackground';

const Workflow = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-red-500" />,
      title: "Strategic Analysis",
      description: "Deep dive into requirements and objectives"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-red-500" />,
      title: "Architecture Design",
      description: "Creating robust and scalable solutions"
    },
    {
      icon: <Code className="w-12 h-12 text-red-500" />,
      title: "Elite Development",
      description: "Cutting-edge development with continuous feedback"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-red-500" />,
      title: "Deployment",
      description: "Rigorous testing and seamless deployment"
    }
  ];

  return (
    <AnimatedBackground>
      <section id="workflow" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Battle Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 animate-float">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Workflow;