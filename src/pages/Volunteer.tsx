
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
      className="min-h-screen relative"
    >
      <Navbar />
      <main role="main" className="container mx-auto px-4 md:px-6 space-y-16">
        <VolunteerHero />
        <OutreachHostSection />
        <OpportunitiesSection />
        <OpenPositionsSection />
        <VolunteerCTA />
      </main>
    </motion.div>
  );
};

export default Volunteer;
