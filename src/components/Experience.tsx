"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Project Manager & Development Service',
    company: 'Raxwo Pvt Ltd',
    period: 'Apr 2025 – Apr 2026',
    description: 'Leading project teams and managing development services.',
  },
  {
    title: 'Intern – Software Engineer',
    company: 'Gamage Recruiters',
    period: 'Dec 2024 – Present',
    description: 'Working on software development projects and gaining hands-on experience.',
  },
  {
    title: 'Intern – QA',
    company: 'Kayble Zone',
    period: 'Mar 2024 – Dec 2024',
    description: 'Performing quality assurance testing and ensuring software quality.',
  },
  {
    title: 'Intern – QA',
    company: 'Bluechip Technologies Asia',
    period: 'Jan 2024 – Jul 2024',
    description: 'Conducting quality assurance testing and implementing testing strategies.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-maroon-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-maroon-700 border-4 border-white"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-maroon-700 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 