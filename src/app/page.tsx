"use client";

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Hi, I&apos;m{' '}
                <span className="text-maroon-700">Yashini Hettiarachchi</span>
              </h1>
              <p className="text-xl text-gray-600">
                A passionate and motivated IT graduate from Sri Lanka, specializing in Quality Assurance,
                Web Development, and Project Management
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-maroon-700 text-white rounded-lg hover:bg-maroon-800 transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 border-2 border-maroon-700 text-maroon-700 rounded-lg hover:bg-maroon-50 transition-colors duration-200"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="relative h-[400px] w-[400px] mx-auto">
              <div className="absolute inset-0 bg-maroon-100 rounded-full transform rotate-3"></div>
              <div className="absolute inset-0 bg-maroon-200 rounded-full transform -rotate-3"></div>
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Yashini Hettiarachchi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
