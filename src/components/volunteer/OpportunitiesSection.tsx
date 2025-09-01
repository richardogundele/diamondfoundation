
import { Heart, BookOpen, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import OpportunityCard from "./OpportunityCard";

const OpportunitiesSection = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Mentoring",
      description: "Guide and support children and young adults in their personal development",
      commitment: "4-6 hours/week",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs and events in local communities",
      commitment: "Flexible hours",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Professional Expertise",
      description: "Contribute your skills in education, healthcare, or fundraising",
      commitment: "Project-based",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Advocacy",
      description: "Spread awareness about our cause through social media and networking",
      commitment: "2-3 hours/week",
      color: "bg-amber-100 text-amber-600"
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
      <h2 className="text-3xl font-semibold text-primary text-center mb-8">How You Can Help</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard 
            key={index}
            index={index}
            icon={opportunity.icon}
            title={opportunity.title}
            description={opportunity.description}
            commitment={opportunity.commitment}
            color={opportunity.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OpportunitiesSection;
