"use client";

import { useGetPromptsQuery } from "@/features/api/apiSlice";
import PromptCard from "../components/PromptCard";

const Page = () => {
  const { data: prompts, isLoading, error } = useGetPromptsQuery();
  console.log(prompts);

  if (isLoading) return <div>Loading prompts...</div>;
  if (error)
    return (
      <div>
        Error: {"message" in error ? error.message : "An error occurred"}
      </div>
    );

  return (
    <main className="container mx-auto p-4">
      <div>Home Page</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts?.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={{
              id: prompt._id,
              title: prompt.prompt,
              tags: prompt.tags,
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
