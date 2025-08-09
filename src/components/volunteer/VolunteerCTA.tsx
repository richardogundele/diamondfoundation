
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const VolunteerCTA = () => {
  const { toast } = useToast();
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";

  const handleVolunteerClick = () => {
    // Open the Google Form in a new tab
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
      className="text-center fade-in-section"
    >
      <Button 
        onClick={handleVolunteerClick}
        className="px-8 py-6 rounded-full text-lg font-semibold"
      >
        Join Our Team Today
      </Button>
    </motion.div>
  );
};

export default VolunteerCTA;
