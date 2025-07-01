
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamHero from "../components/team/TeamHero";
import LeadershipSection from "../components/team/LeadershipSection";
import DepartmentsSection from "../components/team/DepartmentsSection";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TeamHero />
      <LeadershipSection />
      <DepartmentsSection />
      <Footer />
    </div>
  );
};

export default Team;
