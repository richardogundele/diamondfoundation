
import React from 'react';
import ImageCarousel from '../ImageCarousel';

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

  // Check if the outreach is from 2022 or 2023
  const is2022or2023 = title.includes("2022") || title.includes("2023");
  
  const outreachImages = [
    "/lovable-uploads/b2829be0-e3b2-4f9a-a10e-df504e30fb57.png", // Thank you outreach committee
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        </div>
        
        {is2022or2023 ? (
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="max-w-4xl w-full h-auto">
              <img
                src={outreachImages[0]}
                alt="Thank you outreach committee"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg shadow-md max-w-4xl w-full">
              <h3 className="text-2xl font-bold text-primary mb-4">Outreach Summary</h3>
              <p className="text-lg text-textSecondary mb-4">
                {getMessage()}
              </p>
              
              <div className="bg-white p-6 rounded-lg mt-6">
                <h4 className="font-bold text-primary text-lg mb-3">Key Highlights:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Dedicated outreach committee led donation efforts</li>
                  <li>Focused on cash donations to maximize impact</li>
                  <li>Supported multiple orphanages across different regions</li>
                  <li>Provided educational materials and essential supplies</li>
                  <li>Improved living conditions for children in need</li>
                </ul>
              </div>
              
              <div className="mt-6 text-center">
                <p className="italic text-primary font-medium">
                  "Our heartfelt thanks to the incredible outreach committee who made this initiative possible."
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-10 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-lg text-textSecondary">
              {getMessage()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingOutreach;
