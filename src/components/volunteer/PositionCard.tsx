
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
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center mr-3`}>
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <Button 
        onClick={handleVolunteerClick}
        className="w-full"
      >
        Apply
      </Button>
    </motion.div>
  );
};

export default PositionCard;
