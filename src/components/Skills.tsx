"use client";

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Quality Assurance',
    skills: [
      'Manual/Automation testing',
      'JIRA',
      'Cypress',
      'Selenium',
      'Appium',
      'Postman',
      'JMeter',
    ],
  },
  {
    title: 'Development',
    skills: [
      'MERN Stack',
      'HTML',
      'CSS',
      'JavaScript',
      'Spring Boot',
      'MySQL',
      'Oracle',
    ],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'Trello', 'Excel'],
  },
  {
    title: 'Soft Skills',
    skills: ['Project planning', 'Team collaboration', 'Problem-solving'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-maroon-700 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-maroon-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 