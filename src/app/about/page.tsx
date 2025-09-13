import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* About Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/profile.png" alt="Mudassir Hussain" width={300} height={300} className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-auto md:h-auto object-cover" />
              </div>
              <div className="md:w-2/3">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I&apos;m Mudassir Hussain, a skilled web developer with expertise in building responsive and high-performance applications. My passion lies in creating user-friendly interfaces and solving complex problems with clean, efficient code. I specialize in technologies like Next.js, React, and Tailwind CSS, and I&apos;m always eager to learn and adopt new tools to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}