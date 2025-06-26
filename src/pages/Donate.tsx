
import Navbar from "../components/Navbar";
import { Heart, DollarSign, Coffee, Gift, ExternalLink, ArrowRight, Check, School, Building, Users, Calendar, Star, Shield, Zap, Award, Globe, Target } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Donate = () => {
  const { toast } = useToast();
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  
  const donateImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  
  const handleDonateClick = (amount: string, index: number) => {
    setSelectedDonation(index);
    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of ${amount} will help us make a difference.`,
    });
  };

  const donationOptions = [
    {
      amount: "$10",
      title: "Basic Support",
      description: "Provides educational materials for one child",
      icon: Coffee,
      benefits: ["Educational supplies", "Books for one child", "Art supplies"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      amount: "$50",
      title: "Friend of the Foundation",
      description: "Supports a community outreach program for a week",
      icon: Heart,
      benefits: ["Community outreach", "Meals for 10 children", "Educational workshop"],
      color: "from-green-500 to-emerald-600"
    },
    {
      amount: "$100",
      title: "Community Champion",
      description: "Funds a scholarship for a deserving student",
      icon: Gift,
      benefits: ["Full scholarship", "School supplies", "Mentorship program"],
      color: "from-purple-500 to-violet-600"
    },
    {
      amount: "Custom",
      title: "Your Choice",
      description: "Make a donation of any amount you choose",
      icon: DollarSign,
      benefits: ["Flexible support", "Directed to greatest need", "Custom recognition"],
      color: "from-amber-500 to-orange-600"
    }
  ];

  const impactStats = [
    { value: "2,500+", label: "Children Supported", icon: Users, color: "from-blue-500 to-cyan-600" },
    { value: "100+", label: "Communities Reached", icon: Globe, color: "from-green-500 to-emerald-600" },
    { value: "95%", label: "Funds to Programs", icon: Target, color: "from-purple-500 to-violet-600" },
    { value: "5+", label: "Years of Impact", icon: Award, color: "from-rose-500 to-pink-600" }
  ];

  const rebuild10Projects = [
    {
      amount: "₦2M",
      title: "Full School Renovation",
      description: "Completely renovate one entire school",
      icon: Building,
      benefits: ["Complete renovation", "Classrooms & roofs", "Windows & furniture", "Whiteboards included"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      amount: "₦500K",
      title: "School Furniture Package",
      description: "Furnish a school with essential learning materials",
      icon: School,
      benefits: ["Desks for all students", "Bookshelves", "Whiteboards", "Teacher's furniture"],
      color: "from-green-500 to-emerald-600"
    },
    {
      amount: "₦100K",
      title: "Essential Repairs",
      description: "Basic improvements for better learning environment",
      icon: Users,
      benefits: ["Paint classrooms", "Repair windows", "Install ceiling fans", "Basic maintenance"],
      color: "from-purple-500 to-violet-600"
    }
  ];

  const trustIndicators = [
    { icon: Shield, title: "Secure Donations", description: "Your donations are processed securely" },
    { icon: Star, title: "Transparent Impact", description: "Regular reports on fund utilization" },
    { icon: Award, title: "Verified Organization", description: "Registered and compliant NGO" },
    { icon: Heart, title: "Direct Impact", description: "95% of funds go directly to programs" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Heart className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Make a Difference</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Lives with <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Your Generosity</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Your donation helps us continue our mission to transform lives through love and compassion in communities across Africa. Every contribution makes a real difference.
            </p>

            <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" onClick={() => document.getElementById('donation-options')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Donating <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Your Impact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">by Numbers</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Story */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Donation Creates Lasting Change</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every contribution, regardless of size, helps us make a meaningful difference in the lives of children and communities in need. See exactly how your generosity transforms lives.
              </p>
              <ul className="space-y-4 text-gray-600">
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
        </div>
      </div>
      
      {/* Donation Options */}
      <div id="donation-options" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Choose Your Donation</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the donation amount that feels right for you. Every contribution makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {donationOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group ${
                  selectedDonation === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <Card className="bg-white shadow-xl border-none hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 flex flex-col">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <option.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                      <p className={`text-4xl font-bold bg-gradient-to-r ${option.color} bg-clip-text text-transparent mb-4`}>{option.amount}</p>
                      <p className="text-gray-600 mb-6">{option.description}</p>
                    </div>
                    
                    <div className="w-full mb-6 space-y-3 flex-grow">
                      {option.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-left">
                          <Check size={16} className="text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => handleDonateClick(option.amount, index)}
                      className={`w-full py-6 h-auto text-lg font-medium bg-gradient-to-r ${option.color} hover:opacity-90 transition-all duration-300 text-white`}
                    >
                      Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <indicator.icon className="text-blue-600" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{indicator.title}</h4>
                <p className="text-sm text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Project 2025 Section */}
      <div id="rebuild10" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-transparent border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
                  <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white/15"></div>
                  <div className="absolute bottom-20 left-1/3 w-12 h-12 rounded-full bg-white/10"></div>
                </div>
                
                <div className="relative z-10 p-12 text-white">
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                    >
                      <School className="text-white" size={24} />
                      <span className="text-white font-semibold">PROJECT 2025</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Rebuild 10: Transform Education
                    </h2>
                    <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
                      Join our ambitious mission to renovate 10 schools across Nigeria, restoring dignity to education and transforming the lives of over 1,000 children.
                    </p>
                  </div>

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
                      <div className="text-2xl font-bold text-white">₦50M</div>
                      <div className="text-white/80">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-white">1000+</div>
                      <div className="text-white/80">Children</div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center mb-8">Partnership Opportunities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {rebuild10Projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                                <project.icon className="text-white" size={24} />
                              </div>
                              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                              <p className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>{project.amount}</p>
                              <p className="text-white/80 mb-4">{project.description}</p>
                              <ul className="space-y-2">
                                {project.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-center text-white/90">
                                    <Check size={16} className="text-green-300 mr-2 flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-white/90 mb-6 text-lg">Ready to transform education and touch lives?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                        <a href="mailto:hello@diamondfoundation.org" className="flex items-center">
                          Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                        <a href="/project-2025" className="flex items-center">
                          Learn More <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              For corporate donations, partnership opportunities, or other inquiries, please contact us at{" "}
              <a href="mailto:thediamondfoundation2020@gmail.com" className="text-blue-600 hover:underline font-medium">
                thediamondfoundation2020@gmail.com
              </a>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                <a href="/impact">View Our Impact</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
