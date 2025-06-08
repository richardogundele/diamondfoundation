import Navbar from "../components/Navbar";
import { Heart, DollarSign, Coffee, Gift, ExternalLink, ArrowRight, Check, School, Building, Users, Calendar } from "lucide-react";
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

  const rebuild10Projects = [
    {
      amount: "₦2M",
      title: "Full School Renovation",
      description: "Completely renovate one entire school",
      icon: Building,
      benefits: ["Complete renovation", "Classrooms & roofs", "Windows & furniture", "Whiteboards included"]
    },
    {
      amount: "₦500K",
      title: "School Furniture Package",
      description: "Furnish a school with essential learning materials",
      icon: School,
      benefits: ["Desks for all students", "Bookshelves", "Whiteboards", "Teacher's furniture"]
    },
    {
      amount: "₦100K",
      title: "Essential Repairs",
      description: "Basic improvements for better learning environment",
      icon: Users,
      benefits: ["Paint classrooms", "Repair windows", "Install ceiling fans", "Basic maintenance"]
    }
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
          
          {/* Enhanced Rebuild 10 Project Section */}
          <motion.div 
            id="rebuild10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="my-20"
          >
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-none overflow-hidden rounded-2xl shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white/15"></div>
                    <div className="absolute bottom-20 left-1/3 w-12 h-12 rounded-full bg-white/10"></div>
                  </div>
                  
                  <div className="relative z-10 p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                      >
                        <School className="text-white" size={24} />
                        <span className="text-white font-semibold">NEW PROJECT 2025</span>
                      </motion.div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Rebuild 10: A Vision to Renovate 10 Schools
                      </h2>
                      <p className="text-white/90 text-xl max-w-3xl mx-auto">
                        Restore dignity to education, improve learning environments, and let children see Jesus through love in action.
                      </p>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <School className="text-white" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-white">10</div>
                        <div className="text-white/80">Schools</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Calendar className="text-white" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-white">Aug</div>
                        <div className="text-white/80">2025</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <DollarSign className="text-white" size={24} />
                        </div>
                        <div className="text-2xl font-bold text-white">₦20M</div>
                        <div className="text-white/80">Total Budget</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="text-white" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-white">1000+</div>
                        <div className="text-white/80">Children</div>
                      </div>
                    </div>

                    {/* Partnership Options */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-white text-center mb-8">Partnership Opportunities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {rebuild10Projects.map((project, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                          >
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                              <project.icon className="text-white" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                            <p className="text-2xl font-bold text-blue-200 mb-3">{project.amount}</p>
                            <p className="text-white/80 mb-4">{project.description}</p>
                            <ul className="space-y-2">
                              {project.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center text-white/90">
                                  <Check size={16} className="text-blue-200 mr-2 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Why Partner with Us?</h3>
                        <ul className="space-y-3">
                          {[
                            "Receive CSR recognition",
                            "Gain brand exposure across our media platforms",
                            "Impact lives and transform futures",
                            "Transparent reporting and project visibility"
                          ].map((benefit, index) => (
                            <li key={index} className="flex items-center text-white/90">
                              <Check size={20} className="text-blue-200 mr-3 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Project Focus</h3>
                        <ul className="space-y-3">
                          {[
                            "Classrooms renovation",
                            "Roof repairs and replacements",
                            "Windows and furniture installation",
                            "Whiteboards and learning materials"
                          ].map((focus, index) => (
                            <li key={index} className="flex items-center text-white/90">
                              <Building size={20} className="text-blue-200 mr-3 flex-shrink-0" />
                              <span>{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <p className="text-white/90 mb-6">Ready to transform education and touch lives?</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                          <a href="mailto:hello@diamondfoundation.org" className="flex items-center">
                            Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                          <a href="https://thediamondfoundation.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Learn More <ExternalLink className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
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
