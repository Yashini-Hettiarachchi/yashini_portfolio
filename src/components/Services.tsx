"use client";

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  BeakerIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Creating modern, responsive, and user-friendly web applications using the latest technologies.',
      icon: CodeBracketIcon,
    },
    {
      title: 'Quality Assurance',
      description:
        'Ensuring software quality through comprehensive testing and quality assurance processes.',
      icon: BeakerIcon,
    },
    {
      title: 'Project Management',
      description:
        'Managing projects efficiently using agile methodologies and best practices.',
      icon: CommandLineIcon,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-maroon-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 