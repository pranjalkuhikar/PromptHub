import React from "react";

interface PromptCardProps {
  prompt: {
    id: string;
    title: string;
    tags: string[];
  };
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <div
      key={prompt.id}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {prompt.title}
      </h2>

      <div className="flex flex-wrap gap-2">
        {prompt.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
