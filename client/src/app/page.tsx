"use client";

import { useGetPromptsQuery, useProfileQuery } from "@/features/api/apiSlice";
import PromptCard from "../components/common/PromptCard";

const Page = () => {
  const { data, isLoading } = useGetPromptsQuery();
  const { data: user } = useProfileQuery({});

  const currentUserId = user?.user._id;

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Loading....</h2>
          <p className="text-gray-500">
            Please wait Some time Prompt is Loading
          </p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            No prompts available
          </h2>
          <p className="text-gray-500">Be the first to create a prompt!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh]">
      <main className="container mx-auto p-4 flex flex-wrap justify-center gap-8 ">
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
      </main>
    </div>
  );
};

export default Page;
