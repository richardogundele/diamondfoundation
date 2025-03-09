
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const VolunteerHero = () => {
  const { toast } = useToast();
  const volunteerImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
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
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden mb-16 fade-in-section"
    >
      <img 
        src={volunteerImagePath} 
        alt="Volunteer" 
        className="w-full h-64 object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-transparent flex items-center">
        <div className="text-white p-8 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Make An Impact</h2>
          <p className="text-white/90 mb-6">
            Volunteering with Diamond Foundation means joining a community dedicated to 
            uplifting underprivileged children and communities across Africa.
          </p>
          <Button 
            onClick={handleVolunteerClick}
            className="bg-white text-blue-600 hover:bg-blue-50 animated-button"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default VolunteerHero;
