import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Calendar } from "lucide-react";

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

  const stats = [
    { icon: Heart, value: "1,200+", label: "Lives Impacted" },
    { icon: Users, value: "150+", label: "Active Volunteers" },
    { icon: Calendar, value: "24+", label: "Annual Events" },
  ];

  return (
    <div className="mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden mb-8 shadow-xl fade-in-section"
      >
        <img 
          src={volunteerImagePath} 
          alt="Volunteer" 
          className="w-full h-[500px] object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-600/70 to-transparent flex items-center">
          <div className="text-white p-12 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Join Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/90 text-lg mb-8"
            >
              Volunteering with Diamond Foundation means joining a community dedicated to 
              uplifting underprivileged children and communities across Africa. Your time and 
              skills can make a real difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                onClick={handleVolunteerClick}
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg px-6 py-6 h-auto font-semibold"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VolunteerHero;
