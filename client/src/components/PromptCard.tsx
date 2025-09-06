import React from 'react';
import Image from 'next/image';

interface JobCardProps {
  companyLogo: string;
  companyName: string;
  timePosted: string;
  jobTitle: string;
  jobTypes: string[];
  salary: string;
  location: string;
  saved: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  companyName,
  timePosted,
  jobTitle,
  jobTypes,
  salary,
  location,
  saved,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between" style={{ width: '350px', height: '400px' }}>
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 mr-3">
            <Image src={companyLogo} alt={companyName} width={32} height={32} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{companyName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{timePosted}</p>
          </div>
        </div>
        <button className={`px-4 py-2 rounded-full text-sm font-medium ${saved ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
          {saved ? 'Saved' : 'Save'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Job Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{jobTitle}</h2>

      {/* Job Type Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {jobTypes.map((type, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
            {type}
          </span>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{salary}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-gray-800 transition-colors">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;