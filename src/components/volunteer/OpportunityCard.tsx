
import { LucideIcon } from "lucide-react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

interface OpportunityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  commitment: string;
  color: string;
  index: number;
}

const OpportunityCard = ({ icon: Icon, title, description, commitment, color, index }: OpportunityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-accent2 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex items-center text-sm text-blue-600">
          <Clock size={16} className="mr-1" />
          <span>{commitment}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityCard;
