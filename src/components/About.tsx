"use client";

import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-gray-600">
              I am a final-year IT undergraduate with a passion for creating
              innovative solutions. My expertise lies in Quality Assurance, Web
              Development, and Project Management.
            </p>
            <p className="text-gray-600">
              I believe in continuous learning and staying up-to-date with the
              latest technologies and best practices in the industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-maroon-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-maroon-700 mb-4">
                Education
              </h3>
              <p className="text-gray-600">
                Bachelor of Science in Information Technology
                <br />
                University of Sri Jayewardenepura
                <br />
                2020 - Present
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 