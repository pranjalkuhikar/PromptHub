"use client";

import { useGetPromptsQuery, useProfileQuery } from "@/features/api/apiSlice";
import PromptCard from "../components/common/PromptCard";

const Page = () => {
  const { data, isLoading } = useGetPromptsQuery();
  const { data: user } = useProfileQuery({});

  const currentUserId = user?.user._id;

  if (isLoading) {
    return <div>Loading...</div>;
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
