import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2025 Mudassir Hussain. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="https://github.com/sangi1235" className="hover:text-blue-400 transition">GitHub</Link>
          <Link href="https://linkedin.com" className="hover:text-blue-400 transition">LinkedIn</Link>
          <Link href="https://twitter.com" className="hover:text-blue-400 transition">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}