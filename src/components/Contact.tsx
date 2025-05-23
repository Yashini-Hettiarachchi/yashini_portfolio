"use client";

import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
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

        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-maroon-700 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to me for any questions or opportunities.<br />
              I&apos;ll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:yashinihettiarachchi99@gmail.com"
                className="flex items-center justify-center text-gray-600 hover:text-maroon-700"
              >
                <EnvelopeIcon className="w-6 h-6 mr-3" />
                yashinihettiarachchi99@gmail.com
              </a>
              <a
                href="tel:+94705518090"
                className="flex items-center justify-center text-gray-600 hover:text-maroon-700"
              >
                <PhoneIcon className="w-6 h-6 mr-3" />
                +94 70 551 8090
              </a>
              <a
                href="https://linkedin.com/in/yashini-hettiarachchi-757441217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-600 hover:text-maroon-700"
              >
                <GlobeAltIcon className="w-6 h-6 mr-3" />
                linkedin.com/in/yashini-hettiarachchi-757441217
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 