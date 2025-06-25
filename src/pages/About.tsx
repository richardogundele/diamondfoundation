
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Heart, Target, Globe, Users, Award, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: "Educational Support",
      description: "Provide scholarships, learning materials, and skill acquisition programs to ensure quality education for disadvantaged children."
    },
    {
      icon: Target,
      title: "Healthcare Access", 
      description: "Offer basic health services, awareness programs, and medical support to improve the well-being of children in need."
    },
    {
      icon: Sparkles,
      title: "Spiritual Growth",
      description: "Share messages of hope and faith through spiritual mentoring, prayer sessions, and outreach campaigns."
    },
    {
      icon: Users,
      title: "Empowerment Programs",
      description: "Equip children with life skills, mentorship, and leadership training to build confidence and independence."
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description: "Reach underserved communities through regular orphanage visits, donation drives, and care programs."
    },
    {
      icon: Award,
      title: "Partnerships",
      description: "Collaborate with local and international organizations to expand the foundation's impact and reach."
    }
  ];

  const achievements = [
    { number: "1000+", label: "Children Impacted", icon: Users },
    { number: "50+", label: "Communities Reached", icon: Globe },
    { number: "10", label: "Partner Organizations", icon: Award },
    { number: "5", label: "Years of Service", icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"></div>
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
              <span className="text-white font-semibold text-lg">Our Story</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Lives Through <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Love & Compassion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Diamond Foundation is dedicated to creating lasting change in communities across Africa through education, empowerment, and spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                <Link to="/impact">
                  See Our Impact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                <Link to="/volunteer">Join Our Mission</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To transform lives through love and compassion, creating lasting positive change in communities across Africa through education, digital literacy, and spiritual empowerment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a leading force in creating self-sustaining communities where every individual has access to quality education, digital skills, and opportunities for personal growth.
              </p>
            </motion.div>
          </div>

          {/* Core Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              How We Make a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Difference</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <point.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Every child deserves a chance to dream, learn, and grow. Together, we can make that dream a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                <Link to="/donate">
                  Donate Now <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                <Link to="/volunteer">
                  Volunteer With Us <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
