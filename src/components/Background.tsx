import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main background image with reduced opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('/profile.png')`,
          filter: 'brightness(0.7) contrast(1.2)'
        }}
        aria-hidden="true"
        role="presentation"
      />

      {/* Lens flares - Optimized for performance */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)',
          willChange: 'transform',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
        animate={{
          x: [-100, 50, -100],
          y: [-100, 50, -100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          willChange: 'transform',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
        animate={{
          x: [100, -50, 100],
          y: [100, -50, 100],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        aria-hidden="true"
      />

      {/* Dark overlay with gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
};

export default Background; 