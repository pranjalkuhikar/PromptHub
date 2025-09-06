"use client";

import { useGetPromptsQuery } from "@/features/api/apiSlice";
import React from "react";

const Page = () => {
  const { data: prompts, isLoading, error } = useGetPromptsQuery();

  if (isLoading) {
    return <div>Loading prompts...</div>;
  }

  if (error) {
    return <div>Error loading prompts</div>;
  }

  return (
    <>
      <div>Home Page</div>
      {prompts?.map((prompt) => (
        <div key={prompt._id}>
          <p>{prompt.prompt}</p>
          <p>{prompt.tags.join(", ")}</p>
        </div>
      ))}
    </>
  );
};

export default Page;
