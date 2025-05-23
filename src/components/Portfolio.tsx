"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Client Management System',
    description:
      'A comprehensive client management system built with MERN stack and designed using Figma.',
    technologies: ['MERN Stack', 'Figma', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/Yashini-Hettiarachchi/client-management-system',
    demo: '#',
  },
  {
    title: 'Automated Testing Framework',
    description:
      'An automated testing framework using Cypress and Selenium for web application testing.',
    technologies: ['Cypress', 'Selenium', 'JavaScript', 'Node.js'],
    github: 'https://github.com/Yashini-Hettiarachchi/automated-testing-framework',
    demo: '#',
  },
  {
    title: 'QA Dashboard',
    description:
      'A comprehensive dashboard for tracking and managing quality assurance metrics and test results.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/Yashini-Hettiarachchi/qa-dashboard',
    demo: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-maroon-100 to-maroon-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-sm font-medium text-maroon-800">{project.title}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-maroon-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon-700 hover:text-maroon-800 font-medium"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon-700 hover:text-maroon-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 