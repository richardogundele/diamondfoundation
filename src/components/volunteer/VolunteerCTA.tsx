
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const VolunteerCTA = () => {
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
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center fade-in-section"
    >
      <p className="text-lg text-textSecondary max-w-3xl mx-auto mb-8">
        We are also in need of project managers and representatives from African countries to help us expand our reach and impact.
      </p>
      <Button 
        onClick={handleVolunteerClick}
        className="bg-primary text-white px-8 py-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors animated-button"
      >
        Join Our Team Today
      </Button>
    </motion.div>
  );
};

export default VolunteerCTA;
