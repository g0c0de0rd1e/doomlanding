import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';
import AnimatedBackground from './ui/AnimatedBackground';

const Hero = () => {
  return (
    <AnimatedBackground>
      <section id="home" className="pt-20 pb-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              Unleash Digital
              <span className="text-red-500"> Dominance</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              We forge cutting-edge solutions that revolutionize the digital landscape.
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <Code2 className="w-12 h-12 text-red-500 mx-auto mb-4 animate-float" />
                <h3 className="font-semibold text-gray-300">Elite Development</h3>
              </div>
              <div className="text-center">
                <Rocket className="w-12 h-12 text-red-500 mx-auto mb-4 animate-float" />
                <h3 className="font-semibold text-gray-300">Rapid Deployment</h3>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4 animate-float" />
                <h3 className="font-semibold text-gray-300">Expert Squad</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Hero;