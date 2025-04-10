import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Electronics And Communications Engineering",
      institution: "Madanapalle Institute Of Technology And Science - Madanapalle",
      duration: "2021-2024",
      grade: "8.84 CGPA"
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "BIT Institute Of Technology and Science - Hindupur",
      duration: "2018-2021",
      grade: "83.04%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am H Siva Kumar, an Electronics and Communication Engineering graduate. I enjoy working in IT and software fields. 
            My training at CDAC in High-Performance Computing and AI helped me learn new skills. I like solving problems and working with teams.
            Eager to apply my skills in designing, implementing, and maintaining robust IT systems, contributing to organizational growth and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
                
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white" />

                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {edu.duration}
                      </span>
                      <p className="mt-2 text-blue-400 font-semibold">
                        {edu.grade}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <a
            href="https://drive.google.com/file/d/13qzeiKRTiNhIqhEKFd6Gwnb4fpSdvN8P/view?usp=drive_link"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">
                PG Diploma in High-Performance Computing and Artificial Intelligence (HPC-AI)
              </h4>
              <p className="text-gray-300 mb-4">CDAC Bangalore</p>
              <p className="text-gray-300 text-left">
                Completed a 6-month on-site program at CDAC Bangalore, gaining expertise in high-performance computing (HPC) 
                and artificial intelligence (AI). Worked with parallel computing frameworks like OpenMP and MPI to optimize 
                algorithms for distributed systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 
