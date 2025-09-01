
import { BookOpen, Users, Settings, Globe } from "lucide-react";
import { motion } from "framer-motion";
import PositionCard from "./PositionCard";

const OpenPositionsSection = () => {
  const volunteerPositions = [
    {
      title: "Head of Volunteers",
      skills: ["Leadership", "Team Management", "Volunteer Coordination"],
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "Project Manager",
      skills: ["Organization", "Leadership", "Strategic Planning"],
      icon: Settings,
      color: "bg-primary"
    },
    {
      title: "Country Representative",
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
      className="fade-in-section"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Open <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Leadership Positions</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Ready to take on a leadership role? We're looking for passionate individuals to join our core team and drive meaningful change.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
    </motion.div>
  );
};

export default OpenPositionsSection;
