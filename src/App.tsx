import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import TechStack from './components/TechStack/TechStack';
import Workflow from './components/Workflow';
import './styles/animations.css';
import './styles/portfolio.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <Workflow />
    </div>
  );
}

export default App;