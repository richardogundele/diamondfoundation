
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Target, Award, CheckCircle, Star, Lightbulb, HandHeart, BookOpen } from "lucide-react";
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
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
              <Heart className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Our Story</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Lives Through <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Love & Compassion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Diamond Foundation is more than an organization—we're a movement of hearts united by the belief that every child deserves a chance to shine, dream, and thrive.
            </p>

            <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
              <a href="/volunteer">
                Join Our Mission <Heart size={20} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none h-full hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <Target className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
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
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none h-full hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mr-4">
                      <Lightbulb className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To create a world where every child, regardless of their circumstances, has access to quality education, healthcare, and opportunities to reach their full potential, building thriving communities across Africa and beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach our mission of transformation
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Card className="bg-white shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to transformative impact—discover the milestones that have shaped our mission
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}
                >
                  <div className="flex-1 lg:text-right text-center">
                    <Card className={`bg-white/80 backdrop-blur-sm shadow-xl border-none hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'lg:mr-6' : 'lg:ml-6'}`}>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                            <milestone.icon className="text-white" size={20} />
                          </div>
                          <span className="text-3xl font-bold text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-lg hidden lg:block relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
