
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Heart, Users, Calendar, Handshake, Star, Award, Zap, BookOpen, Settings, Globe, MessageSquare, Clock } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const volunteerImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";
  const outreachFormLink = "https://forms.gle/eL8srxPPKymywvtk8";

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleVolunteerClick = () => {
    window.open(volunteerFormLink, "_blank");
    toast({
      title: "Opening application form",
      description: "You're being redirected to our volunteer application form.",
    });
  };

  const handleOutreachClick = () => {
    window.open(outreachFormLink, "_blank");
    toast({
      title: "Opening outreach host form",
      description: "You're being redirected to our community outreach host application form.",
    });
  };

  const stats = [
    { icon: Heart, value: "1,200+", label: "Lives Impacted" },
    { icon: Users, value: "150+", label: "Active Volunteers" },
    { icon: Calendar, value: "24+", label: "Annual Events" },
  ];

  const opportunities = [
    {
      icon: Heart,
      title: "Mentoring",
      description: "Guide and support children and young adults in their personal development",
      commitment: "4-6 hours/week",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs and events in local communities",
      commitment: "Flexible hours",
      color: "bg-green-500"
    },
    {
      icon: BookOpen,
      title: "Professional Expertise",
      description: "Contribute your skills in education, healthcare, or fundraising",
      commitment: "Project-based",
      color: "bg-purple-500"
    },
    {
      icon: MessageSquare,
      title: "Advocacy",
      description: "Spread awareness about our cause through social media and networking",
      commitment: "2-3 hours/week",
      color: "bg-amber-500"
    },
  ];

  const volunteerPositions = [
    {
      title: "Content Creator",
      skills: ["Writing", "Design", "Social Media"],
      icon: Zap,
      color: "bg-blue-600"
    },
    {
      title: "Fundraising Manager",
      skills: ["Fundraising", "Communication", "Networking"],
      icon: Star,
      color: "bg-green-500"
    },
    {
      title: "Head of Education",
      skills: ["Teaching", "Curriculum Development", "Leadership"],
      icon: BookOpen,
      color: "bg-red-500"
    },
    {
      title: "Website Manager",
      skills: ["Web Development", "Design", "Content Management"],
      icon: Award,
      color: "bg-purple-500"
    },
    {
      title: "Project Manager",
      skills: ["Organization", "Leadership", "Strategic Planning"],
      icon: Settings,
      color: "bg-amber-500"
    },
    {
      title: "Country Representative",
      skills: ["Local Knowledge", "Communication", "Community Engagement"],
      icon: Globe,
      color: "bg-teal-500"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Lives <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Through Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join our global community of changemakers. Your skills, passion, and time can create ripple effects that transform entire communities across Africa.
            </p>

            <Button 
              onClick={handleVolunteerClick}
              className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Start Your Journey <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-3 bg-white/20 rounded-full text-white">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Volunteer Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission Impact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden mb-20 shadow-2xl"
          >
            <img 
              src={volunteerImagePath} 
              alt="Volunteer" 
              className="w-full h-[500px] object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-600/80 to-transparent flex items-center">
              <div className="text-white p-12 max-w-2xl">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl font-bold mb-6"
                >
                  Your Impact Starts Here
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-white/90 text-lg mb-8 leading-relaxed"
                >
                  Every volunteer brings unique skills and perspectives that strengthen our mission. 
                  Whether you have 2 hours a week or 20, whether you're a student or a professional, 
                  there's a meaningful way for you to contribute to transforming lives across Africa.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* How You Can Help */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                How You Can <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Make a Difference</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the volunteer opportunity that aligns with your skills and schedule
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${opportunity.color} text-white flex items-center justify-center mb-6`}>
                      <opportunity.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                    <div className="flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                      <Clock size={16} className="mr-1" />
                      <span>{opportunity.commitment}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  We're looking for passionate individuals to fill these key roles
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerPositions.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${position.color} text-white flex items-center justify-center mr-4`}>
                        <position.icon size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{position.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {position.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={handleVolunteerClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Apply Now
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Host an Outreach */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white/20 p-6 rounded-full">
                  <Handshake size={48} className="text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">Bring Change to Your Community</h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Host a Diamond Foundation outreach event in your area. Connect us with your local community 
                    and help us extend our impact to reach more children who need our support.
                  </p>
                  <Button 
                    onClick={handleOutreachClick}
                    className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3 font-semibold"
                  >
                    Host an Outreach
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make Your Mark?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of volunteers who are already transforming lives across Africa. 
              Your journey of impact starts with a single step.
            </p>
            <Button 
              onClick={handleVolunteerClick}
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Join Our Team Today <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
