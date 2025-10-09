
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const VolunteerCTA = () => {
  const { toast } = useToast();
  // Switch CTA to email application for internships
  const mailtoHref = "mailto:admin@thediamondfoundation.org?subject=Internship%20Application&body=Please%20attach%20your%20CV%20and%20cover%20letter.";

  const handleVolunteerClick = () => {
    window.location.href = mailtoHref;
    toast({
      title: "Opening email to apply",
      description: "Please attach your CV and cover letter.",
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
        Apply for Internship <Heart size={24} className="ml-3" />
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
