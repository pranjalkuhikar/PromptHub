"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useGetPromptByIdQuery,
  useUpdatePromptMutation,
} from "@/features/api/apiSlice";

const EditPromptPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setId(window.location.pathname.split("/").pop());
    }
  }, []);

  const {
    data: promptData,
    isLoading: isPromptLoading,
    isError,
  } = useGetPromptByIdQuery(id || "", {
    skip: !id,
  });
  const [updatePrompt, { isLoading: isUpdating }] = useUpdatePromptMutation();

  const [promptContent, setPromptContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (promptData) {
      setPromptContent(promptData.prompt);
      setTags(promptData.tags);
    }
  }, [promptData]);

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePrompt({ id, prompt: promptContent, tags }).unwrap();
      }
      router.push("/profile"); // Redirect to profile after successful update
    } catch (error) {
      console.error("Failed to update prompt:", error);
    }
  };

  if (isPromptLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading prompt.</div>;
  }

  if (!promptData) {
    return <div>Prompt not found.</div>;
  }

  return (
    <div className="min-h-[82vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Edit Prompt
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="prompt-content" className="sr-only">
                Prompt Content
              </label>
              <textarea
                id="prompt-content"
                name="prompt-content"
                rows={6}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Write your prompt here..."
                value={promptContent}
                onChange={(e) => setPromptContent(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-4">
              <label htmlFor="tags" className="sr-only">
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Add tags (press Enter after each tag)"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleAddTag}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500"
                  >
                    <span className="sr-only">Remove tag</span>
                    <svg
                      className="h-2 w-2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 8 8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M1 1l6 6m0-6L1 7"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center item-center gap-4">
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="px-5 py-1.5 text-sm text-gray-500 rounded-full border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 text-sm bg-green-600 rounded-full text-white"
              disabled={isUpdating}
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPromptPage;
