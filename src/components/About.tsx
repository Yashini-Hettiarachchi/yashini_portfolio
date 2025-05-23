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
              Yashini Hettiarachchi is a passionate and motivated IT graduate from Sri Lanka, currently completing her BSc (Hons) in Information Technology at SLIIT, graduating in 2025. Her journey into IT blends a love for problem-solving, testing, and creative development.
            </p>
            <p className="text-gray-600">
              She is fluent in English and currently preparing for the A2 level in German at the Goethe Institute.
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">BSc (Hons) in Information Technology</h4>
                  <p className="text-gray-600">SLIIT</p>
                  <p className="text-gray-500 text-sm">Expected mid-2025</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">German Language</h4>
                  <p className="text-gray-600">Goethe Institute</p>
                  <p className="text-gray-500 text-sm">A1 Complete, A2 in progress</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 