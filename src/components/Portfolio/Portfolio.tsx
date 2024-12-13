import React from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';
import PortfolioSlider from './PortfolioSlider';

const Portfolio = () => {
  return (
    <AnimatedBackground>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Projects</h2>
          <PortfolioSlider />
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Portfolio;