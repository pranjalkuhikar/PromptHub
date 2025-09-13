import React from "react";
import Image from "next/image";
import { Bookmark } from "lucide-react";

interface PromptCardProps {
  prompt: string;
  tags: string[];
  userId: { username: string };
  isSaved: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  tags,
  userId,
  isSaved,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 w-80">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3/2AARCAJQAvgDASIAAhEBAxEB/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAID/8QANRAAAgIBAgQDBQYGAwAAAAAAAAECAwQFESExQVESYXETIiMyUkJicoGx0QYzU5HB4RRDsv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDegAAAAAAAABcWklu29klzYAlJt7JNvtsWuHo0rEp5LcF9C5lvRjU462qrivPqBnKtPy7OMaJbPvw/U+0dFy3z9nH1l/o0YAzktGzFyVT9Jf6PhZgZVS3lRLbuuJqgBjWtufD1I3NZkYlGQtra4vz6lPm6PZV7+M3ZFfZ6r9wKsB89uu+wAIMAAAAAIJAAAAAAAA9APVcJWzjCteKUuSRo9O06GLFSntK585bcvQ8aRgrHr9rYvizW+30rsWIAAAAAAAAAAAV2o6bDKTsq2jd/69TPSjKEnGa2kns0zZFXrOCrq3fUviwXvJfaQFAwh0AAAgASiCUAAAAAADv0bG9vleOS3hVxfm+hwGk0ahVYUX1m/EwO8AAAAAAAAEshAAGSBAJAGX1XG/42W/D8k/ej5HGaLXafHie0S41vf8jOgAAAAAAAAAAAXFpd3sbCqHgrjFcEkklsZKlfHr/Gv1NgACAQBgMAAABLIRLIQBkkMkAAAPllV+1x7K/qi0ZCL3jFrqjZsxcPkjty2AkAAAAAAAAAATB+GyEu0kzZJ7pPuYzoarT7fbYdU+u2z9QOkAAAAAAAEshEshAGSQyQAAA8zkoQlOXKK3ZjIbqMd+xqdXt9lgW95Lw/3MuAAAAAAAAAAAAuP4fyOM8aT+9H/ACU57ptlTZG2HCUXuvMDYA+OLfDIojZXyfTsz7AAAAAAEshEshAGSQyQAYOfNyY4uPKyXP7K7sCp1/I8dsKIvhDi/UqT1OTsnKc3vKT3bPIAAAAAAAAAAMACCQOvTs6WHa9+NcvmS6eZpaZwshGdbUoyW6aMedODm24c/ce9b+aD5AaoHNiZ1GVFOuW0usJcGjpAAAAEAAYByZmoUYkfffin0hHmB0XXV0Vuy2SjFdWZjOzJZl3jfCC4Qj2Iy8y3Ls8Vj2ivlguSOcAAAAAAAAAAAAYDAgAkCCUe6abbpeGquU35IsKtFyJRbslCD24LfcCtTaaabTXJo78fV8mnZScbI9pc/wC5zZGJfjfza3+JcUfAC/r1yhr4kJxflxPtHVsJ87dvWLM0ANLLVsNcrW/SLPhbrlKXwq5Tfm9iiI5gd1+q5V6cfEqo/cOJ8Xu92+7IOnGwsjIfw62o/VLggOYFndo2RBfDcJ/nsyvsqspk42wcH95cwPAAAAAAAAAAABg9QhK2argt5SeyQERjKc1CKbk+SXUucLRVwsy29/6afD8zs0/T68SG7Slc+cv2O0DzXCFcVGEVFLokegADW/Pl2OO/TcW7durwyfWHA7ABUT0Kv/qvmvxpP9Nj4vQrf68H6xZegCjWhW9b4flFn1hoVa/mXzf4Ul+5bgDko03Epacak2usuJ1rkAAPFtULY+CyClHs0ewBSZujOO9mI2+9cn+jKhpxbTWzXNPobI4NS0+OVB2VpRuXJ/V6gZsHqUZRk4yW0kns1vM8gAAAAAAu9Aph7Kd+3v+Pwb9lsv3AAuAAAAAAAAAAAAAAAAAAAIfBbgAUv8QVQjKu1LaUuD8ynAAAAD//Z"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div
            className={`flex items-center gap-1 px-2 py-2 ${
              isSaved ? "bg-gray-200" : "bg-gray-100"
            } text-sm rounded-md`}
          >
            {isSaved ? (
              <span className="flex items-center gap-1">
                Saved <Bookmark fill="currentColor" />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                Save <Bookmark />
              </span>
            )}
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800">{userId.username}</p>
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

export default PromptCard;
