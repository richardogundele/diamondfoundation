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
    className="glass-card rounded-3xl overflow-hidden group h-full hover-lift"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Image Container */}
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover overlay arrow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg">
          <ArrowRight className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>
      <Link to={link}>
        <button className="text-primary font-bold flex items-center gap-2 group/btn transition-all">
          Learn More
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </Link>
    </div>
  </motion.div>
);

export default PreviewSection;