
import React from 'react';
import ImageCarousel from '../ImageCarousel';

interface MegaOutreachProps {
  title: string;
  imageSrc: string;
}

const MegaOutreach = ({ title }: MegaOutreachProps) => {
  const carouselImages = [
    "/lovable-uploads/7fa8b40c-d370-4fb9-9665-0d98c125ae91.png", // Original map image
    "/lovable-uploads/7857c809-6a1f-4223-9a63-2568304b72dc.png", // Group photo
    "/lovable-uploads/1edd7bf7-b76b-497a-a27d-108949b50782.png", // Team with banner and supplies
    "/lovable-uploads/e177432f-c781-4c8d-ab40-5fa20c057216.png", // Ladies in blue shirts
    "/lovable-uploads/f9ece54e-c2a1-40d8-a3a5-5c4fd825684b.png", // Team with children and banner
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full mb-8 h-[500px]">
            <ImageCarousel 
              images={carouselImages}
              className="rounded-lg shadow-lg"
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
