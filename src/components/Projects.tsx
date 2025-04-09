import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Web-Based SSH and MPI Execution Tool",
      description: "A streamlined web interface for remote access and execution of MPI/OpenMP programs on Linux machines and HPC clusters. Built with React.js, Node.js, and SSH2.",
      tech: ["React.js", "Node.js", "SSH2", "MPI", "OpenMP"],
      highlights: [
        "Developed a user-friendly web interface for remote execution",
        "Implemented secure SSH connections for remote access",
        "Integrated MPI and OpenMP program execution capabilities"
      ]
    },
    {
      title: "IoT-Based Emergency Alert and Tracking System",
      description: "A real-time emergency alert and tracking system using NodeMCU, WiFi, and GPS modules. Features live location tracking and instant emergency notifications.",
      tech: ["NodeMCU", "WiFi", "GPS", "Real-time Tracking"],
      highlights: [
        "Designed and implemented IoT device integration",
        "Created real-time location tracking system",
        "Developed emergency alert notification system"
      ]
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
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 