
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Target, Award, CheckCircle, Star, Lightbulb, HandHeart, BookOpen, Sparkles, ArrowRight, Trophy, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in the transformative power of love and compassion to heal communities and create lasting change.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Every initiative is designed with the community at its heart, ensuring sustainable and meaningful impact.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "While we start locally, our vision extends globally, connecting hearts and minds across continents.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every action we take is guided by our mission to uplift and empower the next generation.",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation Established",
      description: "Diamond Foundation was born with a vision to transform lives through love and compassion.",
      icon: Star
    },
    {
      year: "2021",
      title: "First Outreach",
      description: "Our inaugural community outreach program reached over 500 children in rural Nigeria.",
      icon: HandHeart
    },
    {
      year: "2022",
      title: "Educational Initiative",
      description: "Launched our scholarship program, providing education opportunities to underprivileged youth.",
      icon: BookOpen
    },
    {
      year: "2023",
      title: "Regional Expansion",
      description: "Extended our reach across West Africa, impacting thousands of lives through various programs.",
      icon: Globe
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Received international recognition for our innovative approach to community development.",
      icon: Award
    }
  ];

  const achievements = [
    { number: "2,500+", label: "Lives Transformed", icon: Heart },
    { number: "50+", label: "Communities", icon: Globe },
    { number: "₦100M+", label: "Resources Mobilized", icon: Trophy },
    { number: "15+", label: "Awards Received", icon: Shield }
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-yellow-300/30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-pink-300/30 blur-3xl animate-pulse"></div>
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
              className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-8 sm:py-4 mb-6 sm:mb-8 shadow-lg"
            >
              <Sparkles className="text-white" size={20} />
              <span className="text-white font-bold text-sm sm:text-base lg:text-xl">Our Story</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Transforming Lives Through 
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent mt-2 sm:mt-4">
                Love & Compassion
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-5xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light px-4 sm:px-0">
              Diamond Foundation is more than an organization—we're a movement of hearts united by the belief that every child deserves a chance to shine, dream, and thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Button className="w-full sm:w-auto bg-white text-blue-800 hover:bg-blue-50 text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 h-auto font-bold hover:scale-105 transition-all duration-300 shadow-2xl" size="lg" asChild>
                <a href="/volunteer">
                  Join Our Mission <Heart size={20} className="ml-2 sm:ml-3" />
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white border-2 text-white hover:bg-white hover:text-blue-800 text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 h-auto font-bold hover:scale-105 transition-all duration-300 bg-transparent" size="lg" asChild>
                <a href="/donate">
                  Make Impact <ArrowRight size={20} className="ml-2 sm:ml-3" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-600 mb-2 sm:mb-3">{achievement.number}</div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision - Enhanced */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 sm:mb-8">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <div className="w-24 sm:w-32 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-none h-full hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 sm:mr-6 shadow-xl">
                      <Target className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-black text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl font-medium">
                    To uplift and empower underprivileged children and communities across Africa through comprehensive programs in education, healthcare, and community development, fostering hope and creating pathways to a brighter future.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-none h-full hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mr-4 sm:mr-6 shadow-xl">
                      <Lightbulb className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-black text-gray-800">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl font-medium">
                    To create a world where every child, regardless of their circumstances, has access to quality education, healthcare, and opportunities to reach their full potential, building thriving communities across Africa and beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section - Enhanced */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 sm:mb-8">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 sm:px-0">
              These core values guide everything we do and shape how we approach our mission of transformation
            </p>
            <div className="w-24 sm:w-32 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Card className="bg-white shadow-2xl border-none hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 h-full">
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-800 mb-4 sm:mb-6">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm sm:text-base lg:text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Journey Timeline - Enhanced */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 sm:mb-8">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 sm:px-0">
              From humble beginnings to transformative impact—discover the milestones that have shaped our mission
            </p>
            <div className="w-24 sm:w-32 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block rounded-full shadow-lg"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12 lg:space-y-16"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-6 sm:gap-8`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <Card className={`bg-white/95 backdrop-blur-sm shadow-2xl border-none hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <CardContent className="p-6 sm:p-8 lg:p-10">
                        <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 sm:mr-6 shadow-xl">
                            <milestone.icon className="text-white" size={20} />
                          </div>
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-800 mb-4 sm:mb-6">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg font-medium">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Enhanced Timeline dot - hidden on mobile */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-2xl hidden lg:block relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
