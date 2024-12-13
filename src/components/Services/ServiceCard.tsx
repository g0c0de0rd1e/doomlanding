import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ icon: Icon, title, description, image }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-20 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      <div className="relative p-6 h-full flex flex-col">
        <Icon className="w-12 h-12 text-red-500 mb-4 transform transition-transform duration-500 group-hover:scale-110" />
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;