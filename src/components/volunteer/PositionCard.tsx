
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface PositionCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  color: string;
  index: number;
}

const PositionCard = ({ title, skills, icon: Icon, color, index }: PositionCardProps) => {
  const { toast } = useToast();

  const handleVolunteerClick = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch with you soon about volunteering opportunities.",
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
      <button 
        onClick={handleVolunteerClick}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors animated-button"
      >
        Apply
      </button>
    </motion.div>
  );
};

export default PositionCard;
