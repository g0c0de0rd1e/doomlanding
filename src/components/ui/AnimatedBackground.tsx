import React from 'react';

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute inset-0 matrix-background opacity-5"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

export default AnimatedBackground;