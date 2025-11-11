
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
      transition={{ duration: 0.4 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <TeamHero />
      <LeadershipSection />
      <DepartmentsSection />
    </motion.div>
  );
};

export default Team;
