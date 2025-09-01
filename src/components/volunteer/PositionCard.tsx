
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface PositionCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  color: string;
  index: number;
}

const PositionCard = ({ title, skills, icon: Icon, color, index }: PositionCardProps) => {
  const { toast } = useToast();
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";

  const handleVolunteerClick = () => {
    // Open the Google Form in a new tab
    window.open(volunteerFormLink, "_blank");
    
    toast({
      title: "Opening application form",
      description: `You're applying for the ${title} position.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
    >
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6 flex-grow">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100">
            {skill}
          </span>
        ))}
      </div>
      
      <Button 
        onClick={handleVolunteerClick}
        className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Apply Now
      </Button>
    </motion.div>
  );
};

export default PositionCard;
