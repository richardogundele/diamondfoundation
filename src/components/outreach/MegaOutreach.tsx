
import React from 'react';

interface MegaOutreachProps {
  title: string;
  imageSrc: string;
}

const MegaOutreach = ({ title, imageSrc }: MegaOutreachProps) => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full mb-8">
            <img 
              src={imageSrc} 
              alt={`${title} - Grand Visit to 6 Orphanage Homes in 6 Months`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">{title}</h3>
            <div className="space-y-4 text-textSecondary">
              <p>
                We are embarking on a grand mission to visit 6 orphanage homes across the 6 geopolitical zones of Nigeria within 6 months. 
                Our goal is to raise ₦10 Million+ to provide resources, love, and support to orphaned children.
              </p>
              <p>
                We are on a mission to provide every orphan child a fair chance in life. Partner with us as we extend our hand of love to 
                support part of the 10 million orphans in Nigeria.
              </p>
              <p className="font-bold">
                More details about this outreach will be provided soon. Please check back later for updates on our progress and how you can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaOutreach;
