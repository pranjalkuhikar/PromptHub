"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProfileQuery, useLogoutMutation } from "@/features/api/apiSlice";

const Header: React.FC = () => {
  const router = useRouter();
  const { isSuccess: isLoggedIn } = useProfileQuery({});
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout({});
    router.push("/login");
  };

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
        <ul className="flex item-center gap-7">
          <li>
            <Link
              href="/"
              className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-white hover:text-gray-100 transition-colors"
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
                >
                  Create Prompt
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-700 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-white hover:text-gray-100 transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-gray-100 px-5 py-1 -mt-2 rounded-2xl hover:bg-red-400 bg-red-600 hover:text-gray-100 transition-colors"
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
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-100 px-5 py-2 rounded-2xl hover:bg-gray-600 active:bg-gray-600 bg-blue-600 hover:text-gray-100 transition-colors"
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
