"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProfileQuery, useLogoutMutation } from "@/features/api/apiSlice";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { isSuccess: isLoggedIn } = useProfileQuery({});
  const [logout] = useLogoutMutation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout({});
    window.location.href = "/login";
  };

  return (
    <header className="w-full py-4 px-8 flex justify-between items-center relative">
      <div className="text-2xl font-bold text-gray-900">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.png"
            alt="PromptHub"
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <div className="mt-3 font-mono">PromptHub</div>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`md:flex ${
          isMobileMenuOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4 z-10"
            : "hidden"
        } items-center`}
      >
        <ul
          className={`md:flex ${
            isMobileMenuOpen
              ? "flex flex-col gap-4 justify-center items-center"
              : "hidden gap-7"
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-white hover:text-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/create-prompt"
                  className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-white hover:text-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Prompt
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-white hover:text-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-100 px-5 py-2 rounded-2xl hover:bg-red-400 bg-red-600 hover:text-gray-100 transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-gray-100 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-blue-600 hover:text-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-100 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-blue-600 hover:text-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
