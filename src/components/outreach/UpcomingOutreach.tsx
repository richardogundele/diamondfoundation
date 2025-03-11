
import React from 'react';

interface UpcomingOutreachProps {
  title: string;
}

const UpcomingOutreach = ({ title }: UpcomingOutreachProps) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-10 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-lg text-textSecondary">
            Report for this outreach is coming soon. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOutreach;
