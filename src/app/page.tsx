'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AdsterraBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      const atOptions = {
        key: '10d888f2e5843d081768747352c65cdc',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {},
      };
      script.type = 'text/javascript';
      script.src = '//www.highperformanceformat.com/10d888f2e5843d081768747352c65cdc/invoke.js';
      script.async = true;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;
      bannerRef.current.append(conf);
      bannerRef.current.append(script);

      return () => {
        if (bannerRef.current) {
          bannerRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center my-8">
      <div ref={bannerRef} style={{ width: '728px', height: '90px' }} />
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Mudassir Hussain</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="#home" className="block text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#about" className="block text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="#projects" className="block text-gray-700 hover:text-blue-600 transition">Projects</Link>
              <Link href="#contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Hi, I&apos;m Mudassir Hussain</h2>
          <p className="text-xl mb-6 animate-fade-in-up animation-delay-200">A passionate developer crafting modern, scalable web solutions.</p>
          <Link href="#contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition animate-fade-in-up animation-delay-400">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Adsterra Banner */}
      <AdsterraBanner />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image src="/profile.png" alt="Mudassir Hussain" width={300} height={300} className="rounded-full shadow-lg" />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m Mudassir Hussain, a skilled web developer with expertise in building responsive and high-performance applications. My passion lies in creating user-friendly interfaces and solving complex problems with clean, efficient code. I specialize in technologies like Next.js, React, and Tailwind CSS, and I&apos;m always eager to learn and adopt new tools to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">A modern e-commerce platform built with Next.js and integrated with a payment gateway.</p>
              <Link href="#" className="text-blue-600 hover:underline">View Project</Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">A task management app with real-time collaboration features using React and Firebase.</p>
              <Link href="#" className="text-blue-600 hover:underline">View Project</Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Three</h3>
              <p className="text-gray-600 mb-4">A personal blog platform with a custom CMS built using Next.js and Contentful.</p>
              <Link href="#" className="text-blue-600 hover:underline">View Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Mudassir Hussain. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="https://github.com" className="hover:text-blue-400 transition">GitHub</Link>
            <Link href="https://linkedin.com" className="hover:text-blue-400 transition">LinkedIn</Link>
            <Link href="https://twitter.com" className="hover:text-blue-400 transition">Twitter</Link>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}