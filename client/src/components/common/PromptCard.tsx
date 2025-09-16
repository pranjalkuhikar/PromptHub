import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Copy, Check } from "lucide-react";

interface PromptCardProps {
  prompt: string;
  tags: string[];
  userId?: { username?: string };
  isSaved: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, tags, userId }) => {
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [prompt]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 w-80">
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono">
            <Image
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1gMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EADoQAAIBAwIDBQUFBwUBAAAAAAABAgMEEQUhEjFBBhNRYYEicZGhsRQjMkNSFUJykrLB0TNTYpPhB//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwDqIAAAAAAAAA5gFzIH2n1CV5qMqaf3NBuMYp9er+JLL7WrKxk41q33i/cgste857Vlx1Jz/VJv5geAAAAAAAAVNrout19MlwS4qttnenJ/h84+BqQB0+0uaN5bxr28+KnL5F459oOrS0u6zNydvPapHw8/Q6BCUZwjKMsqSymuTT6gVAAAAAAAAAAAAAAAAAAA0vajVZafaxpUZff1k0n+mPVm626kA7UXDr61XXSlilH03fzbA1TeXnq98vqUBWKk5xUE3NvEVHm2+gFATnROxdJUo1dWlKU3v3MJYS975kgp6BpNNYjp1v6xz9SaOTA669I0prH7Otf+pGg7VdmqE7P7RplvGlVo7zhBfjj/AJQ0QEFer95QoAAATXsde/aLGdrU/Fbv2P4Xy+Dz8iFGXpt9V067jcUOfKUXykuqYHSgR6HauznSWaVbvXt3aXN9NyQRbcIyacXJcgKgAAAAAAAAAAAAAAAHM9Tlx6ldy8a0/wCpnTFzRzLUI8N/dLH50vqwLBJ+wWnRutTnd1Y5har2U+Tm+XwSfyIvjPXDOldhrZW+g054w685VH8cL5IlEgABlQdVsABEO03ZPv5yvNKSVV71KHJS815+RB6tKpRqypVqc6dSPOE1hr0OzmFqWk2OpxSvbaFTC2nylH3NbllRyMoTm77B0nl2N/OH/GtDi+exHtb7PXejU6dS5qUp06kuBSg3s8dcryLo05labZu+vYW0aipyqZw3uuX/AIYq5F60rytrmjXg/apyUl6Mol+kdmKdncRr3VXvpweYxUcRT/ySAt29ancUKdak805rKLgAAAAAAAAAAAAAAAAAgPau3+z63WktoVsVI/R/PJPj3+zLS+ov7ZbwqJrhi5LeK8vAUcne2/gdc0Oj3Gj2VL9NGP0OZ9oNLnpN9Vtm3KH4qUvGJ1W1jw2tGK5KnFfIlF0AGVAAAAAA0fbO2+0aBXeMulirH05/3N4WNQoq4sLilLlOlKOPQI45y9DaaLo9XVoV3SnGEaawpNbSlzwZfY/SIalqLndwUqFuszi/3pdF9Se1LOhQpt2tGNJZzJQWF7zWiG6XT17SZu3haxrUW+slwrzySqLk4rj2l1SKgoAAAAAAAAAAAAAAAAM2NBLuIY5YNcuZmWU/Y7t81yJRH/8A6BYqrplO8j+KhLEvOLJNQ/0Kf8K+hY1S2V5p11bSWe8pSXrjYu2m9rRfjTj9DKroAAAAAAAAxxZT5PYFUBoeyFkrWxrzx7Va6qP0Umkbm4X3MvcVo0o0qShBYSbLN7UxFQXPO/uKjDABoAAAAAAAAAAAAAAAACqbTynh+JQAZVO9cUu8WfNc2ZNPHdx4do42RrDOtJZo+aJYL4AMqAAAAAAbwC1cS4KMn1ewFurdr8tPPizDlKUnmXN8wDWIAAoAAAAAAAAAAAAAAAAAAB0L1rU4Kq4n7LLI9wG1Bi2l1GpN0ZPE48t+ZlGAAAUAAAwbypxTUFyjz957vLyMJqlTeZvOX+lGLv6+JYgADQAAAAAAAAAAAAAAAAAAAAAA9QPqBZnSzNy3T8UZ9vdvCjW/mLcIZim1z3PXd+RijOUoyWYyTQ5rYwlBp5Wx74qn6mFZM5RgsyePeYVzdSknGgsZ5yZWUXLeTyyndkGFClwybfqXuZelSbXsrcspPw5I3EAAUAAAAAAAAAAAAAAAAAAAAG/RANuprq+o8dxC2tWszmoOp4Za5GPqt+23RoP2eUpLr5GFpqT1C1TX50PqglqcyjnG+cbZPPCXclDDS3wjhLgAt8I4S4APMYpNMjk777PqNe1uXmCn7E/0p7pP4klIXr6X7XufNx/pRYlb9brKw+ufEGg0y/dB91Vk3Sb/AJTf+DztzyaSAACgAAAAAAAAAAAACsVxSS5e4pDfOegAFJPhhJ88LO5FrjXr2d+rWPd06bTy4x3fxACVba6l6wbV/bNf7sPqioKynr5lADm6K43a8GykdwCopJ4kl4wcvg0v7lU8pMAgEJ1tuWq3TfSWPkgDXKdMI8z169srqnb03TnS4VhVI5x6oAqRLac3OlxtJPwR7W88dEsgBpXG2Si3TAAAAAAAP//Z"
              alt="avatar"
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-full h-10 w-10 object-cover"
            />
            {userId?.username ? (
              <Link href={`/profile/${userId.username}`}>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {userId.username}
                </h3>
              </Link>
            ) : (
              <h3 className="text-lg font-semibold text-gray-900">
                Unknown User
              </h3>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsSaved(!isSaved)}
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
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">{prompt}</p>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-2 bg-gray-100 text-sm rounded-md"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
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
