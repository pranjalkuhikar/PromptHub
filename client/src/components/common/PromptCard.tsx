import React from "react";

interface PromptCardProps {
  prompt: string;
  tags: string[];
}

const JobCard: React.FC<PromptCardProps> = ({ prompt, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 w-80">
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">{prompt}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
