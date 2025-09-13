import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Projects Section */}
        <section className="py-12 sm:py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Project One</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">A modern e-commerce platform built with Next.js and integrated with a payment gateway.</p>
                <Link href="#" className="text-blue-600 hover:underline text-sm sm:text-base">View Project</Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Project Two</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">A task management app with real-time collaboration features using React and Firebase.</p>
                <Link href="#" className="text-blue-600 hover:underline text-sm sm:text-base">View Project</Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Project Three</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">A personal blog platform with a custom CMS built using Next.js and Contentful.</p>
                <Link href="#" className="text-blue-600 hover:underline text-sm sm:text-base">View Project</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}