'use client';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AdsterraBanner from '../components/AdsterraBanner';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/background.webm"
          />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 text-white">
            <div className="relative mb-6 mx-auto w-32 h-32 sm:w-40 sm:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-75 animate-pulse" style={{ filter: 'blur(10px)' }} />
              <Image
                src="/profile.png"
                alt="Mudassir Hussain"
                width={160}
                height={160}
                className="relative rounded-full shadow-lg w-full h-full object-cover border-4 border-white"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-in-up">Hi, I&apos;m Mudassir Hussain</h2>
            <p className="text-lg sm:text-xl mb-6 animate-fade-in-up animation-delay-200">A passionate developer crafting modern, scalable web solutions.</p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition animate-fade-in-up animation-delay-400">
              Get in Touch
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5" /> {/* Overlay for text readability */}
        </section>

        {/* Adsterra Banner */}
        <AdsterraBanner />
      </main>
      <Footer />

      {/* Custom Animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
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
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.75;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}