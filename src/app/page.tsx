"use client";

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

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
                <a
                  href="/portfolio/public/Yashini_Hettiarachchi_Resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-maroon-700 text-maroon-700 rounded-lg hover:bg-maroon-50 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
            <div className="relative h-[400px] w-[400px] mx-auto">
              <div className="absolute inset-0 bg-maroon-100 rounded-full transform rotate-3 opacity-50"></div>
              <div className="absolute inset-0 bg-maroon-200 rounded-full transform -rotate-3 opacity-50"></div>
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/profile.png"
                  alt="Yashini Hettiarachchi"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
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
