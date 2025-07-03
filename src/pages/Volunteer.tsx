
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
      className="min-h-screen relative overflow-hidden"
    >
      {/* Enhanced background decorations */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      <Navbar />
      <VolunteerHero />
      <OpportunitiesSection />
      <OpenPositionsSection />
      <OutreachHostSection />
      <VolunteerCTA />
    </motion.div>
  );
};

export default Volunteer;
