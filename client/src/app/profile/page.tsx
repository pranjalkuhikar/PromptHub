"use client";

import React from "react";
import Image from "next/image";
import PromptCard from "@/components/common/PromptCard";
import {
  useProfileQuery,
  useGetUserPromptsQuery,
} from "@/features/api/apiSlice";

export default function ProfilePage() {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useProfileQuery({});
  const {
    data,
    isLoading: isPromptsLoading,
    isError: isPromptsError,
  } = useGetUserPromptsQuery();

  if (isUserLoading || isPromptsLoading) {
    return (
      <div className="min-h-[82vh] flex items-center justify-center text-lg text-gray-700 dark:text-gray-300">
        Loading profile data...
      </div>
    );
  }

  if (isUserError || isPromptsError) {
    return (
      <div className="min-h-[82vh] flex items-center justify-center text-lg text-red-500">
        Error loading profile or prompts.
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[82vh] flex items-center justify-center text-lg text-gray-700 dark:text-gray-300">
        No profile data found. Please log in.
      </div>
    );
  }

  return (
    <div className="min-h-[82vh]  dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* User Info Section */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 border border-gray-200 dark:border-gray-700 text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36 mb-6">
              <Image
                src={user?.avatar || "/Images/profile.png"}
                alt="Profile Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-blue-500 dark:border-blue-600 shadow-md"
              />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              {user.user.username}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              {user.user.email}
            </p>
            {user.bio && (
              <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed max-w-prose">
                {user.bio}
              </p>
            )}
          </div>
        </div>

        {/* User Prompts Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Prompts
          </h3>
        </div>

        {data && data.length > 0 ? (
          <div className="container mx-auto p-4 flex flex-wrap justify-center gap-8">
            {data?.map((item, index) => (
              <PromptCard
                key={index}
                prompt={item.prompt}
                tags={item.tags}
                userId={item.userId}
                isSaved={false}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center text-gray-600 dark:text-gray-300 text-lg">
            You haven&apos;t created any prompts yet. Start sharing your
            creativity!
          </div>
        )}
      </div>
    </div>
  );
}
