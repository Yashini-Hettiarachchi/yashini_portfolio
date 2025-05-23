"use client";

import { motion } from 'framer-motion';
import {
  BeakerIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Quality Assurance Testing',
    description:
      'Comprehensive testing services including manual testing, automation testing, API testing, and performance testing to ensure software quality and reliability.',
    icon: BeakerIcon,
  },
  {
    title: 'Web & Software Development',
    description:
      'Full-stack development services using MERN stack, Spring Boot, and modern front-end technologies to create responsive and user-friendly applications.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Project Management',
    description:
      'Expert project management services including team coordination, task planning, and implementation of agile methodologies for successful project delivery.',
    icon: UserGroupIcon,
  },
];

const Services = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-maroon-700" />
              </div>
              <h3 className="text-xl font-semibold text-maroon-700 mb-4">
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