
import { useState } from "react";
import OutreachReport from "./OutreachReport";
import ImpactHeader from "./impact/ImpactHeader";
import OutreachSelector from "./impact/OutreachSelector";
import Stats, { stats } from "./impact/Stats";
import { motion } from "framer-motion";

const Impact = () => {
  const [selectedOutreach, setSelectedOutreach] = useState("December Outreach 2024");
  
  return (
    <motion.div 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImpactHeader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Stats items={stats.slice(0, 4)} />
        </motion.div>
        
        <motion.div 
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <OutreachSelector 
            selectedOutreach={selectedOutreach} 
            setSelectedOutreach={setSelectedOutreach} 
          />
        </motion.div>
        
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <OutreachReport selectedOutreach={selectedOutreach} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Impact;
