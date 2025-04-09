import React from 'react';
import { motion } from 'framer-motion';

const Internships = () => {
  const internships = [
    {
      title: "Virtual Internship - Networking",
      company: "Cisco Networking Academy",
      duration: "2023",
      description: "Configured and maintained network devices, gaining hands-on experience with network troubleshooting.",
      skills: ["Network Configuration", "Troubleshooting", "Network Security"]
    },
    {
      title: "Virtual Internship - AWS Cloud Computing",
      company: "AWS Academy",
      duration: "2022",
      description: "Managed and optimized AWS services, developing practical cloud computing skills.",
      skills: ["AWS Services", "Cloud Management", "Resource Optimization"]
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
    <section id="internships" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Internships</h2>

        <div className="max-w-3xl mx-auto">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white" />

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{internship.title}</h3>
                    <p className="text-gray-300">{internship.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {internship.duration}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
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

export default Internships; 