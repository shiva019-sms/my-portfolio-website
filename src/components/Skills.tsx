import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: "🐍",
          bgColor: "bg-gradient-to-br from-blue-500 to-green-500"
        },
        {
          name: "SQL",
          icon: "🗃️",
          bgColor: "bg-gradient-to-br from-orange-500 to-red-500"
        },
        {
          name: "HTML/CSS",
          icon: "🎨",
          bgColor: "bg-gradient-to-br from-red-500 to-pink-500"
        },
        {
          name: "JavaScript",
          icon: "📜",
          bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500"
        }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        {
          name: "AWS",
          icon: "☁️",
          bgColor: "bg-gradient-to-br from-orange-400 to-yellow-500"
        },
        {
          name: "Cloud Services",
          icon: "🌩️",
          bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500"
        }
      ]
    },
    {
      title: "Parallel Computing",
      skills: [
        {
          name: "OpenMP",
          icon: "⚡",
          bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500"
        },
        {
          name: "MPI",
          icon: "🔄",
          bgColor: "bg-gradient-to-br from-green-500 to-emerald-500"
        }
      ]
    },
    {
      title: "Networking",
      skills: [
        {
          name: "Network Configuration",
          icon: "🌐",
          bgColor: "bg-gradient-to-br from-blue-600 to-sky-500"
        },
        {
          name: "Network Security",
          icon: "🔒",
          bgColor: "bg-gradient-to-br from-red-600 to-rose-500"
        },
        {
          name: "Troubleshooting",
          icon: "🔧",
          bgColor: "bg-gradient-to-br from-gray-600 to-slate-500"
        }
      ]
    },
    {
      title: "Tools & Packages",
      skills: [
        {
          name: "Git",
          icon: "📚",
          bgColor: "bg-gradient-to-br from-orange-600 to-red-600"
        },
        {
          name: "Linux",
          icon: "🐧",
          bgColor: "bg-gradient-to-br from-yellow-600 to-amber-600"
        },
        {
          name: "Windows",
          icon: "🪟",
          bgColor: "bg-gradient-to-br from-blue-500 to-sky-500"
        },
        {
          name: "NodeMCU",
          icon: "🤖",
          bgColor: "bg-gradient-to-br from-green-600 to-emerald-600"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-black/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
              variants={containerVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={`skill-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div 
                      className={`absolute inset-0 ${skill.bgColor} opacity-50 group-hover:opacity-70 transition-opacity rounded-xl blur`}
                    />
                    <div className="relative bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                      <div className="text-4xl mb-4">{skill.icon}</div>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 