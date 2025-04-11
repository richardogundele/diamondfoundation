
import Navbar from "../components/Navbar";
import { Heart, DollarSign, Coffee, Gift, ExternalLink, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Donate = () => {
  const { toast } = useToast();
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  
  // For demonstration purposes, we'll load an image from public folder
  const donateImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  
  const handleDonateClick = (amount: string, index: number) => {
    setSelectedDonation(index);
    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of ${amount} will help us make a difference.`,
    });
    // In a real scenario, you would redirect to a payment gateway
  };

  const donationOptions = [
    {
      amount: "$10",
      title: "Basic Support",
      description: "Provides educational materials for one child",
      icon: Coffee,
      benefits: ["Educational supplies", "Books for one child", "Art supplies"]
    },
    {
      amount: "$50",
      title: "Friend of the Foundation",
      description: "Supports a community outreach program for a week",
      icon: Heart,
      benefits: ["Community outreach", "Meals for 10 children", "Educational workshop"]
    },
    {
      amount: "$100",
      title: "Community Champion",
      description: "Funds a scholarship for a deserving student",
      icon: Gift,
      benefits: ["Full scholarship", "School supplies", "Mentorship program"]
    },
    {
      amount: "Custom",
      title: "Your Choice",
      description: "Make a donation of any amount you choose",
      icon: DollarSign,
      benefits: ["Flexible support", "Directed to greatest need", "Custom recognition"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Updated impact stats with the requested changes
  const impactStats = [
    { value: "500+", label: "Children Supported" },
    { value: "15+", label: "Communities Reached" },
    { value: "95%", label: "Funds to Programs" },
    { value: "4+", label: "Years of Impact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-textPrimary mb-6">
              Make a Difference Today
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto">
              Your donation helps us continue our mission to transform lives through love and compassion in communities across Africa.
            </p>
          </motion.div>

          {/* Impact Stats - Updated UI with larger text and improved visual appeal */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">{stat.value}</p>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <img
                src={donateImagePath}
                alt="Donation Impact"
                className="rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold text-textPrimary">Your Donation Makes an Impact</h2>
              <p className="text-lg text-textSecondary">
                Every contribution, regardless of size, helps us make a meaningful difference in the lives of children and communities in need.
              </p>
              <ul className="space-y-4 text-textSecondary">
                {[
                  "Provide educational resources to underprivileged children",
                  "Support community development programs",
                  "Fund healthcare initiatives for those in need",
                  "Create sustainable empowerment opportunities"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                      <Check size={14} />
                    </span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Improved donation options section with better spacing and animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-textPrimary text-center mb-10">Choose Your Donation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationOptions.map((option, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                    selectedDonation === index ? 'border-blue-600' : 'border-transparent'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <option.icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{option.title}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-4">{option.amount}</p>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    
                    <div className="w-full mb-6 space-y-2">
                      {option.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-left">
                          <Check size={16} className="text-blue-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => handleDonateClick(option.amount, index)}
                      className={`w-full py-6 h-auto text-lg font-medium ${
                        selectedDonation === index 
                          ? 'bg-blue-700 hover:bg-blue-800' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      } transition-colors`}
                    >
                      Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced GoFundMe Section with better contrast and visual appeal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="my-16"
          >
            <Card className="bg-gradient-to-r from-blue-700 to-blue-500 border-none overflow-hidden rounded-xl shadow-xl">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">Support Our GoFundMe Campaign</h2>
                    <p className="text-white/90 text-lg mb-6">Help us reach more children and communities through our crowdfunding campaign.</p>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-6 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                      <a href="https://gofund.me/50d855ef" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Donate on GoFundMe <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src={donateImagePath} 
                      alt="Children benefiting from donations" 
                      className="h-64 w-auto rounded-xl shadow-lg border-4 border-white/20 hover:border-white/40 transition-all duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-textSecondary max-w-3xl mx-auto mb-6">
              For corporate donations or other inquiries, please contact us at <a href="mailto:thediamondfoundation2020@gmail.com" className="text-blue-600 hover:underline font-medium">thediamondfoundation2020@gmail.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
