
import React from 'react';

interface UpcomingOutreachProps {
  title: string;
}

const UpcomingOutreach = ({ title }: UpcomingOutreachProps) => {
  // Message based on the outreach title
  const getMessage = () => {
    if (title.includes("2022") || title.includes("2023")) {
      return "For this outreach, Diamond Foundation focused solely on cash donations to support orphanages across Nigeria. These funds were used to provide essential supplies, educational materials, and support for daily operations. Detailed reports are currently being compiled.";
    }
    return "Report for this outreach is coming soon. Please check back later.";
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-10 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-lg text-textSecondary">
            {getMessage()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOutreach;
