import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../types';
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiDocker, SiJavascript, SiTailwindcss, SiMysql, SiDotnet, SiVuedotjs, SiGit, SiGithub, SiExpress } from 'react-icons/si';

const skills: Skill[] = [
    { name: 'React', icon: SiReact, category: 'frontend' },
    { name: 'Vue.js', icon: SiVuedotjs, category: 'frontend' },
    { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
    { name: 'Taildwind CSS', icon: SiTailwindcss, category: 'frontend' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
    { name: 'Express', icon: SiExpress, category: 'backend' },
    { name: 'C# .NET', icon: SiDotnet, category: 'backend' },
    { name: 'MySQL', icon: SiMysql, category: 'database' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'database' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database' },
    { name: 'GIT', icon: SiGit, category: 'tools' },
    { name: 'GitHub', icon: SiGithub, category: 'tools' },
    { name: 'Docker', icon: SiDocker, category: 'tools' },
  ];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2 flex justify-center items-center">
                <skill.icon aria-hidden="true" className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;