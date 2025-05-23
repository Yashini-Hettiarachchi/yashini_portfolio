"use client";

import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
          >
            <EnvelopeIcon className="w-12 h-12 text-maroon-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:yashinihettiarachchi99@gmail.com" className="text-gray-600 hover:text-maroon-700 transition-colors duration-200">
              yashinihettiarachchi99@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
          >
            <PhoneIcon className="w-12 h-12 text-maroon-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone / WhatsApp</h3>
            <a href="https://wa.me/94705518090" className="text-gray-600 hover:text-maroon-700 transition-colors duration-200">
              +94 70 551 8090
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
          >
            <LinkIcon className="w-12 h-12 text-maroon-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Links</h3>
            <div className="space-y-2">
              <a href="https://www.linkedin.com/in/yashini-hettiarachchi-757441217" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-maroon-700 transition-colors duration-200 block">
                LinkedIn
              </a>
              <a href="https://github.com/Yashini-Hettiarachchi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-maroon-700 transition-colors duration-200 block">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 