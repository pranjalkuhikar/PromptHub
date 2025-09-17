import React from "react";
import Link from "next/link";
import { Linkedin, X } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-8 text-center text-gray-800 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-sm">
          &copy; {new Date().getFullYear()} PromptHub by Pranjal. All rights
          reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/pranjal-kuhikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center space-x-1"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/KuhikarPranjal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center space-x-1"
          >
            <X size={20} />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
