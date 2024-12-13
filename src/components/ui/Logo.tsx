import React from 'react';

const Logo = () => (
  <div className="flex items-center space-x-2 group">
    <div className="relative w-10 h-10">
      <img
        src="/logo/logo-light.svg"
        alt="DOOM Technologies Logo"
        className="w-full h-full transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/logo/logo-dark.svg"
        alt="DOOM Technologies Logo"
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-2xl text-white tracking-wider transition-colors duration-300 group-hover:text-red-500">
        DOOM
      </span>
      <span className="text-sm text-gray-400 -mt-1 tracking-widest">
        TECHNOLOGIES
      </span>
    </div>
  </div>
);

export default Logo;