import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const skills = [
    "Web Development",
    "Cloud Computing (AWS)",
    "Networking",
    "HPC-AI"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center relative">
          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6 w-[180px] h-[180px] mt-4"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.2)',
              }}
            />
            {/* Image */}
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400"
              style={{
                backgroundImage: `url('/profile.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="H Siva Kumar - Software Engineer headshot"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">H Siva Kumar</h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">Software Engineer</h2>
            
            {/* Skills in single horizontal line with even smaller boxes and minimal spacing */}
            <div className="flex justify-center items-center gap-1.5 mb-8 overflow-x-auto whitespace-nowrap w-full">
              {skills.map((skill, index) => (
                <motion.div
                  key={`hero-skill-${skill.replace(/\s+/g, '-').toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex-none px-3 py-1.5 rounded-md backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                    minWidth: 'fit-content',
                  }}
                >
                  <span className="text-white/90">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 