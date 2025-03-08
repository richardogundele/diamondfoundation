
import Navbar from "../components/Navbar";
import ImpactStats from "../components/Impact";
import OutreachReport from "../components/OutreachReport";
import { GraduationCap, Heart, BookOpen, Users, Target, Globe, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ImpactPage = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Educational Support",
      description: "Providing scholarships, learning materials, and digital skills training to empower the next generation.",
    },
    {
      icon: BookOpen,
      title: "Spiritual Growth",
      description: "Offering faith-based mentorship, prayer sessions, and community outreach programs.",
    },
    {
      icon: Users,
      title: "Empowerment Programs",
      description: "Facilitating life skills training, mentorship, and leadership development initiatives.",
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description: "Implementing long-term strategies to ensure lasting community impact and growth.",
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Supporting physical and mental health through medical outreach and wellness programs.",
    },
    {
      icon: Target,
      title: "Community Building",
      description: "Creating safe spaces where children can thrive and develop meaningful relationships.",
    },
  ];

  const scrollToReport = () => {
    document.getElementById('outreach-report')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-blue-600 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Impact</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              We measure our success by the lives transformed through our initiatives.
              Every child reached is a step toward our vision of a brighter future.
            </p>
            <Button 
              onClick={scrollToReport}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              View Outreach Report <ArrowDown size={16} className="ml-2" />
            </Button>
          </motion.div>
          
          <ImpactStats />
          
          <div className="mt-24">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-textPrimary text-center mb-12"
            >
              Our Key Initiatives
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-primary mr-4">
                      <initiative.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary">{initiative.title}</h3>
                  </div>
                  <p className="text-textSecondary">{initiative.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Outreach Report Section */}
      <div id="outreach-report" className="pt-10">
        <OutreachReport />
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Whether you donate, volunteer, or spread the word, your support helps us continue our mission
              of transforming young lives across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <a href="/donate">Donate Now</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg" asChild>
                <a href="/volunteer">Volunteer With Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
