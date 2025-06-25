
import Navbar from "../components/Navbar";
import Impact from "../components/Impact";
import { GraduationCap, Heart, BookOpen, Users, Target, Globe, ArrowDown, Sparkles, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ImpactPage = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Educational Support",
      description: "Providing scholarships, learning materials, and digital skills training to empower the next generation.",
      impact: "500+ Students Supported"
    },
    {
      icon: BookOpen,
      title: "Spiritual Growth",
      description: "Offering faith-based mentorship, prayer sessions, and community outreach programs.",
      impact: "200+ Lives Touched"
    },
    {
      icon: Users,
      title: "Empowerment Programs",
      description: "Facilitating life skills training, mentorship, and leadership development initiatives.",
      impact: "300+ Youth Empowered"
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description: "Implementing long-term strategies to ensure lasting community impact and growth.",
      impact: "50+ Communities"
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Supporting physical and mental health through medical outreach and wellness programs.",
      impact: "1000+ Beneficiaries"
    },
    {
      icon: Target,
      title: "Community Building",
      description: "Creating safe spaces where children can thrive and develop meaningful relationships.",
      impact: "25+ Safe Spaces Created"
    },
  ];

  const impactStats = [
    { number: "2,000+", label: "Lives Transformed", icon: Heart },
    { number: "75", label: "Communities Reached", icon: Globe },
    { number: "₦50M", label: "Resources Mobilized", icon: TrendingUp },
    { number: "15", label: "Partner Organizations", icon: Award }
  ];

  const scrollToReport = () => {
    document.getElementById('outreach-report')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-pink-300/20 blur-3xl animate-pulse"></div>
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
              <Sparkles className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Measuring Our Impact</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Lives Transformed, <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Communities Empowered</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Every number tells a story of hope, transformation, and lasting change. See how your support creates ripple effects across communities.
            </p>

            <Button 
              onClick={scrollToReport}
              className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              View Impact Report <ArrowDown size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Impact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">by Numbers</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Outreach Report */}
      <div id="outreach-report" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Impact />
        </div>
      </div>
      
      {/* Key Initiatives */}
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
              Our Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Initiatives</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting change in communities across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <initiative.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-full inline-block">
                  {initiative.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Be Part of This Transformation</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Your support doesn't just change numbers—it changes lives. Join us in creating lasting impact across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                <a href="/donate">Donate Now</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
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
