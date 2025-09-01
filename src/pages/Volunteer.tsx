
import Navbar from "../components/Navbar";
import VolunteerHero from "../components/volunteer/VolunteerHero";
import OpportunitiesSection from "../components/volunteer/OpportunitiesSection";
import OpenPositionsSection from "../components/volunteer/OpenPositionsSection";
import OutreachHostSection from "../components/volunteer/OutreachHostSection";
import VolunteerCTA from "../components/volunteer/VolunteerCTA";
import { motion } from "framer-motion";

const Volunteer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <Navbar />
      <main role="main" className="overflow-hidden">
        <VolunteerHero />
        
        {/* Enhanced sections with better spacing and backgrounds */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <OpportunitiesSection />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <OpenPositionsSection />
          </div>
        </div>
        
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <OutreachHostSection />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-primary via-primary to-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <VolunteerCTA />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Volunteer;
