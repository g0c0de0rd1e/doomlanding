import React, { useState } from 'react';
import { MessageCircle, Phone, Globe } from 'lucide-react';
import Logo from './ui/Logo';

const Navbar = () => {
  const [language, setLanguage] = useState('en');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const languages = {
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      techStack: 'Tech Stack',
      workflow: 'How We Work'
    },
    ru: {
      home: 'Главная',
      services: 'Услуги',
      portfolio: 'Портфолио',
      techStack: 'Технологии',
      workflow: 'Как мы работаем'
    },
    de: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      portfolio: 'Portfolio',
      techStack: 'Technologien',
      workflow: 'Arbeitsweise'
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {Object.entries(languages[language as keyof typeof languages]).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe className="w-5 h-5" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-gray-300 focus:ring-0 cursor-pointer"
              >
                <option value="en" className="bg-gray-900">EN</option>
                <option value="ru" className="bg-gray-900">RU</option>
                <option value="de" className="bg-gray-900">DE</option>
              </select>
            </div>
            <a href="https://t.me/doomtech" 
               className="text-gray-300 hover:text-red-500 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              <MessageCircle size={24} />
            </a>
            <a href="https://wa.me/yourphonenumber" 
               className="text-gray-300 hover:text-red-500 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;