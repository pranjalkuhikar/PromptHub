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

  const currentUserId = user?.user._id;

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
    <div className="min-h-[82vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* User Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36 mb-6">
              <Image
                src={user?.avatar || "/Images/profile.png"}
                alt="Profile Avatar"
                height={0}
                width="0"
                sizes="100vw"
                className="rounded-full border-4 border-gray-500 shadow-md object-cover h-full w-full"
              />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              {user.user.username}
            </h2>
            <p className="text-xl text-gray-600 mb-4">{user.user.email}</p>
            <p className="text-md text-gray-700 leading-relaxed max-w-prose">
              I am a Prompt Enginner
            </p>
          </div>
        </div>

        {/* User Prompts Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Your Prompts</h3>
        </div>

        {data && data.length > 0 ? (
          <div className="container mx-auto p-4 flex flex-wrap justify-center gap-8">
            {data?.map((item) => (
              <PromptCard
                key={item._id}
                id={item._id}
                prompt={item.prompt}
                tags={item.tags}
                userId={item.userId}
                showActions
                currentUserId={currentUserId}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center text-gray-600 text-lg">
            You haven&apos;t created any prompts yet. Start sharing your
            creativity!
          </div>
        )}
      </div>
    </div>
  );
}
