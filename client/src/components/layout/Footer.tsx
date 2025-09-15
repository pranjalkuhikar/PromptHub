import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-8 text-center text-gray-600 h-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600  transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
          >
            Dribbble
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
