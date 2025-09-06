import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        <Link href="/">
          PromptHub
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/prompts" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Prompts</Link></li>
          <li><Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</Link></li>
          <li><Link href="/register" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;