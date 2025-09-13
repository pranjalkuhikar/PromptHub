import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">
        <Link href="/">
          <Image
            src="/Images/logo.png"
            alt="PromptHub"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-[#3C5A9F] bg-white hover:text-gray-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/prompts"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-[#3C5A9F] bg-white hover:text-gray-100 transition-colors"
            >
              Prompts
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-[#3C5A9F] bg-white hover:text-gray-100 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-[#3C5A9F] bg-white hover:text-gray-100 transition-colors"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
