
import { useState } from "react";
import OutreachReport from "./OutreachReport";
import ImpactHeader from "./impact/ImpactHeader";
import OutreachSelector from "./impact/OutreachSelector";
import Stats, { stats } from "./impact/Stats";
import ImpactStats from "./impact/ImpactStats";

const Impact = () => {
  const [selectedOutreach, setSelectedOutreach] = useState("December Outreach 2024");
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImpactHeader />
        <Stats items={stats.slice(0, 4)} />
        
        <div className="mt-16 mb-6">
          <OutreachSelector 
            selectedOutreach={selectedOutreach} 
            setSelectedOutreach={setSelectedOutreach} 
          />
        </div>
        
        <div className="mt-8">
          <OutreachReport selectedOutreach={selectedOutreach} />
        </div>
        
        <ImpactStats />
      </div>
    </div>
  );
};

export default Impact;
