import React from 'react';

interface TechLogoProps {
  name: string;
  icon: string;
}

const TechLogo = ({ name, icon }: TechLogoProps) => {
  return (
    <div className="group flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700">
      <img 
        src={icon} 
        alt={name} 
        className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110" 
      />
      <span className="text-gray-300 font-medium">{name}</span>
    </div>
  );
};

export default TechLogo;