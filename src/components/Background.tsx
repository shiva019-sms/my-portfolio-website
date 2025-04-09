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
      />

      {/* Lens flares */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          x: [-200, 0, -200],
          y: [-200, 0, -200],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [200, 0, 200],
          y: [200, 0, 200],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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