"use client";

import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Quality Assurance',
      items: ['Manual Testing', 'Automation Testing', 'JIRA', 'Cypress', 'Selenium', 'Appium', 'Postman', 'JMeter'],
    },
    {
      category: 'Development',
      items: ['MERN Stack', 'HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL', 'Oracle'],
    },
    {
      category: 'Tools',
      items: ['Figma', 'Trello', 'Excel'],
    },
    {
      category: 'Soft Skills',
      items: ['Project Planning', 'Team Collaboration', 'Problem-solving'],
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-maroon-700 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm hover:bg-maroon-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 