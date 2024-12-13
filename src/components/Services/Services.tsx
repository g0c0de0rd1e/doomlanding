import React from 'react';
import { Code2, Database, Layout, Users } from 'lucide-react';
import AnimatedBackground from '../ui/AnimatedBackground';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored software solutions built with cutting-edge technologies",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Database,
    title: "CRM Systems",
    description: "Comprehensive customer relationship management solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Layout,
    title: "Web Applications",
    description: "Responsive and scalable web applications",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Users,
    title: "Enterprise Solutions",
    description: "Large-scale enterprise software systems",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200"
  }
];

const Services = () => {
  return (
    <AnimatedBackground>
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Services;