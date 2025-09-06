"use client";

import { useGetPromptsQuery } from "@/features/api/apiSlice";
import PromptCard from "../components/PromptCard";

const Page = () => {
  const jobData = [
    {
      companyLogo: "/Images/airbnb.png",
      companyName: "Airbnb",
      timePosted: "5 days ago",
      jobTitle: "Junior UI/UX Designer",
      jobTypes: ["Contract", "Remote"],
      salary: "$100/hr",
      location: "Delhi, India",
      saved: false,
    },
    {
      companyLogo: "/Images/apple.png",
      companyName: "Apple",
      timePosted: "5 days ago",
      jobTitle: "Graphic Designer",
      jobTypes: ["Full-Time", "Flexible Schedule"],
      salary: "$85-120k",
      location: "Kerala, India",
      saved: true,
    },
  ];

  return (
    <>
      <main className="container mx-auto p-4 flex flex-wrap justify-center gap-8">
        {jobData.map((job, index) => (
          <PromptCard key={index} {...job} />
        ))}
      </main>
    </>
  );
};

export default Page;
