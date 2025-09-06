import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-8 bg-white dark:bg-gray-900 shadow-inner text-center text-gray-600 dark:text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2024 All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            Dribbble
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;