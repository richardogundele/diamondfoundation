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
    "/lovable-uploads/ee2f541f-04ca-4f47-95a8-639911395629.png",
    "/lovable-uploads/a58379e3-1bb5-43b3-a5ba-4dfa05a5a62c.png",
    "/lovable-uploads/2db47a69-8efb-4a10-9470-d1cd1e723988.png"
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
