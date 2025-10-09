
import { BookOpen, Users, Settings, Globe } from "lucide-react";
import { motion } from "framer-motion";
import PositionCard from "./PositionCard";

const OpenPositionsSection = () => {
  // Rename to internships and clarify unpaid nature in titles where applicable
  const volunteerPositions = [
    {
      title: "Head of Interns (Unpaid)",
      skills: ["Leadership", "Team Management", "Volunteer Coordination"],
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "Project Management Intern (Unpaid)",
      skills: ["Organization", "Leadership", "Strategic Planning"],
      icon: Settings,
      color: "bg-primary"
    },
    {
      title: "Country Representative Intern (Unpaid)",
      skills: ["Local Knowledge", "Communication", "Community Engagement"],
      icon: Globe,
      color: "bg-primary"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 fade-in-section"
    >
      <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-primary text-center mb-4">Internship Opportunities (Unpaid)</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-center text-textSecondary mb-8">
          We offer meaningful unpaid internships. Email your CV and cover letter to admin@thediamondfoundation.org to apply.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerPositions.map((position, index) => (
            <PositionCard
              key={index}
              index={index}
              title={position.title}
              skills={position.skills}
              icon={position.icon}
              color={position.color}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OpenPositionsSection;
