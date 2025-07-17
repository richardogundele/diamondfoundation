
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PreviewSectionProps {
  title: string;
  description: string;
  link: string;
  image: string;
  index: number;
}

const PreviewSection = ({ title, description, link, image, index }: PreviewSectionProps) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-100 border border-transparent"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="relative group h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-textSecondary mb-4 line-clamp-3">{description}</p>
      <Link to={link}>
        <button className="group text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all animated-button">
          Learn More
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </motion.div>
);

export default PreviewSection;
