"use client";

import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Project Manager & Development Service',
      company: 'Raxwo Pvt Ltd',
      period: 'Apr 2025 – Apr 2026',
      description: 'Leading project management and development initiatives.',
    },
    {
      title: 'Intern – Software Engineer',
      company: 'Gamage Recruiters',
      period: 'Dec 2024 – Present',
      description: 'Working on software development and implementation.',
    },
    {
      title: 'Intern – QA',
      company: 'Kayble Zone',
      period: 'Mar 2024 – Dec 2024',
      description: 'Quality assurance and testing responsibilities.',
    },
    {
      title: 'Intern – QA',
      company: 'Bluechip Technologies Asia',
      period: 'Jan 2024 – Jul 2024',
      description: 'Quality assurance and testing responsibilities.',
    },
  ];

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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-maroon-700 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 