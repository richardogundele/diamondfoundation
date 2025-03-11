import { useState } from 'react';
import ImageCarousel from "./ImageCarousel";
import MegaOutreach from './outreach/MegaOutreach';
import UpcomingOutreach from './outreach/UpcomingOutreach';
import OutreachStats from './outreach/OutreachStats';
import OutreachDetailTabs from './outreach/OutreachDetailTabs';
import FirstOutreach from './outreach/FirstOutreach';

interface OutreachReportProps {
  selectedOutreach: string;
}

const OutreachReport = ({ selectedOutreach }: OutreachReportProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const outreachImages = [
    "/lovable-uploads/2fae06fe-1440-49de-9f5d-79d7819eda9c.png",
    "/lovable-uploads/8d3d1c7a-227e-4b33-8b22-23fee6ca4d5c.png",
    "/lovable-uploads/0584152a-24e5-48be-90d8-d52a14113dea.png",
    "/lovable-uploads/e5c8ad4c-044e-4b93-adc7-b5ffb2461de7.png",
    "/lovable-uploads/2259d445-c196-4b42-98b7-e5a0a2d02aee.png",
    "/lovable-uploads/1677421e-6072-4f0d-8e68-bbbdda9002dc.png",
    "/lovable-uploads/fd3b25bf-364e-441e-8941-e1f39a572347.png"
  ];
  
  const megaOutreachImage = "/lovable-uploads/7fa8b40c-d370-4fb9-9665-0d98c125ae91.png";
  const firstOutreachImage = "/lovable-uploads/5157c3be-67c1-416b-b8a7-09aa555ab73c.png";
  
  const stateData = [
    { name: "North Central (Kwara)", children: 45, amount: 220361 },
    { name: "North East (Bauchi)", children: 25, amount: 194800 },
    { name: "North West (Kano)", children: 10, amount: 189070 },
    { name: "South South (Bayelsa)", children: 20, amount: 193000 },
    { name: "South East (Anambra)", children: 20, amount: 193800 },
    { name: "South West (Oyo)", children: 20, amount: 194470 },
    { name: "South West (Lagos)", children: 10, amount: 277700 }
  ];
  
  const financialData = {
    target: 1000,
    raised: 1030,
    expenses: 1463201 / 2008.5, // Convert to pounds for comparison
    balance: 545299 / 2008.5 // Convert to pounds for comparison
  };
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  
  const pieData = [
    { name: 'Target', value: financialData.target },
    { name: 'Raised', value: financialData.raised },
  ];
  
  if (selectedOutreach === "Mega Outreach 2024") {
    return <MegaOutreach title={selectedOutreach} imageSrc={megaOutreachImage} />;
  }
  
  if (selectedOutreach === "November Outreach 2020") {
    return <FirstOutreach title={selectedOutreach} imageSrc={firstOutreachImage} />;
  }
  
  if (selectedOutreach !== "December Outreach 2024") {
    return <UpcomingOutreach title={selectedOutreach} />;
  }
  
  const outreachDescription = "Last year's outreach reached 8 orphanages across 6 geopolitical zones in Nigeria, impacting over 100 children with educational resources and essential supplies.";
  
  return (
    <>
      <OutreachStats 
        title={selectedOutreach} 
        description={outreachDescription}
        imageCarousel={<ImageCarousel images={outreachImages} />}
      />
      
      <div className="max-w-7xl mx-auto mb-16">
        <OutreachDetailTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          stateData={stateData}
          pieData={pieData}
          COLORS={COLORS}
          financialData={financialData}
        />
      </div>
    </>
  );
};

export default OutreachReport;
