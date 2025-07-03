
import Navbar from "../components/Navbar";
import TeamHero from "../components/team/TeamHero";
import LeadershipSection from "../components/team/LeadershipSection";
import DepartmentsSection from "../components/team/DepartmentsSection";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Enhanced background decorations */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar />
      <TeamHero />
      <LeadershipSection />
      <DepartmentsSection />
    </motion.div>
  );
};

export default Team;
