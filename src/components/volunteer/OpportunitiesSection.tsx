
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
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          How You Can <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Make a Difference</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Choose the way that best fits your skills, schedule, and passion. Every contribution matters in our mission to transform lives.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
