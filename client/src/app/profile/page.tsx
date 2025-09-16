"use client";

import React from "react";
import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate developer who loves to build amazing things with code. Always learning and exploring new technologies.",
    avatar: "/Images/logo.png", // Placeholder image
  };

  return (
    <div className="min-h-[82vh] flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-8 border border-gray-200 dark:border-gray-700 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={user.avatar}
              alt="Profile Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-400 dark:border-blue-600"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            {user.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {user.email}
          </p>
          <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed">
            {user.bio}
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => alert("Edit Profile clicked!")}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition duration-150 ease-in-out"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
