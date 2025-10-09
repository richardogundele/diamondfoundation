
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
  // Switch to email application. We keep a toast for quick feedback.
  const mailtoHref = `mailto:admin@thediamondfoundation.org?subject=Internship%20Application%20-%20${encodeURIComponent(title)}&body=Please%20attach%20your%20CV%20and%20cover%20letter.`;

  const handleVolunteerClick = () => {
    window.location.href = mailtoHref;
    toast({
      title: "Opening email to apply",
      description: `You're applying for the ${title} internship.`,
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
        Apply by Email
      </Button>
    </motion.div>
  );
};

export default PositionCard;
