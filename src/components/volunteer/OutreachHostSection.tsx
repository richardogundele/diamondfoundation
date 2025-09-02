
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Handshake, Users, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

const OutreachHostSection = () => {
  const { toast } = useToast();
  const outreachFormLink = "https://forms.gle/eL8srxPPKymywvtk8";

  const handleOutreachClick = () => {
    window.open(outreachFormLink, "_blank");
    
    toast({
      title: "Opening outreach host form",
      description: "You're being redirected to our community outreach host application form.",
    });
  };

  const benefits = [
    { icon: Users, text: "Build strong community connections" },
    { icon: Heart, text: "Create lasting impact in your area" },
    { icon: Target, text: "Lead meaningful change initiatives" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Icon and Title */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Handshake size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Host an Outreach</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Bring the Diamond Foundation experience directly to your community
              </p>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-blue-50 text-lg mb-8 leading-relaxed">
                Partner with us to organize impactful outreach events in your local area. As a community host, 
                you'll help us extend our reach and create meaningful connections with more families and children.
              </p>
              
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={20} className="text-white" />
                    </div>
                    <span className="text-blue-50 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                onClick={handleOutreachClick}
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Apply to Host an Outreach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OutreachHostSection;
