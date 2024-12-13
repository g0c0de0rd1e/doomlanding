import React from 'react';

interface TechItemProps {
  name: string;
  color: string;
}

const TechItem = ({ name, color }: TechItemProps) => {
  return (
    <div 
      className={`px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer
        hover:scale-105 border-2 border-transparent hover:border-${color}-500 hover:text-${color}-500`}
    >
      {name}
    </div>
  );
};

export default TechItem;