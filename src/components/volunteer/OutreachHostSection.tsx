
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Handshake } from "lucide-react";
import { motion } from "framer-motion";

const OutreachHostSection = () => {
  const { toast } = useToast();
  const outreachFormLink = "https://forms.gle/eL8srxPPKymywvtk8";

  const handleOutreachClick = () => {
    // Open the Google Form in a new tab
    window.open(outreachFormLink, "_blank");
    
    toast({
      title: "Opening outreach host form",
      description: "You're being redirected to our community outreach host application form.",
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-16 fade-in-section"
    >
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Handshake size={40} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-textPrimary mb-2">Host an Outreach In Your Community</h3>
            <p className="text-textSecondary mb-4">
              Bring the impact of Diamond Foundation to your local community. Host an outreach event and help us 
              extend our reach to more underprivileged children across Africa.
            </p>
            <Button 
              onClick={handleOutreachClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply to Host an Outreach
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OutreachHostSection;
