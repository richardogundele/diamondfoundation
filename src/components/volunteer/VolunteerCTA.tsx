
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const VolunteerCTA = () => {
  const { toast } = useToast();
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";

  const handleVolunteerClick = () => {
    window.open(volunteerFormLink, "_blank");
    
    toast({
      title: "Opening application form",
      description: "You're being redirected to our volunteer application form.",
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-6 justify-center"
    >
      <Button 
        onClick={handleVolunteerClick}
        className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300"
        size="lg"
      >
        Join Our Team Today <Heart size={24} className="ml-3" />
      </Button>
      <Button 
        variant="outline"
        className="border-white border-2 text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300 bg-transparent"
        size="lg"
      >
        Learn More <ArrowRight size={24} className="ml-3" />
      </Button>
    </motion.div>
  );
};

export default VolunteerCTA;
