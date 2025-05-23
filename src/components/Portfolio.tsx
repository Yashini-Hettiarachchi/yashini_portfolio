"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Portfolio: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js and MongoDB.',
      image: 'https://placehold.co/600x400/maroon/white?text=E-Commerce',
      tags: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://placehold.co/600x400/maroon/white?text=Task+App',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills.',
      image: 'https://placehold.co/600x400/maroon/white?text=Portfolio',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
  ];

  const handleImageError = (projectIndex: number) => {
    setImageErrors((prev) => ({ ...prev, [projectIndex]: true }));
  };

  return (
    <section id="portfolio" className="py-20">
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
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48 bg-maroon-50">
                {!imageErrors[index] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💻</div>
                      <div className="text-sm font-medium text-maroon-800">{project.title}</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-maroon-700 text-white rounded-md hover:bg-maroon-800 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 