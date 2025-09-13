"use client";

import { useGetPromptsQuery } from "@/features/api/apiSlice";
import PromptCard from "../components/common/PromptCard";

const Page = () => {
  const { data, isLoading } = useGetPromptsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="container mx-auto p-4 flex flex-wrap justify-center gap-8">
        {data?.map((item, index) => (
          <PromptCard
            key={index}
            prompt={item.prompt}
            tags={item.tags}
            userId={item.userId}
          />
        ))}
      </main>
    </>
  );
};

export default Page;
