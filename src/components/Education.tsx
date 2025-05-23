"use client";

import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      school: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2020-2024',
      description: 'Bachelor of Science in Information Technology',
      details: [
        'Relevant Coursework: Software Development, Database Management, Web Development, Quality Assurance'
      ]
    },
    {
      school: 'Sujatha Vidyalaya, Matara',
      period: '2005-2019',
      description: 'Primary and Secondary Education',
      details: [
        'G.C.E. Advanced Level (A/L) - Physical Science Stream',
        '2018: 3S passes',
        '2019: 3C passes',
      ]
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto mb-8"></div>
          
          {/* Resume Download Button */}
          <motion.a
            href="/Yashini_Hettiarachchi_Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maroon-700 hover:bg-maroon-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                <span className="text-maroon-700 font-medium mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              {edu.details && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 