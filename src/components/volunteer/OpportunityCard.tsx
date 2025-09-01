
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
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 rounded-full text-blue-700 font-semibold">
          <Clock size={18} className="mr-2" />
          <span>{commitment}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityCard;
