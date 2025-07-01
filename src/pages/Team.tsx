import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { User, Users, Heart, Shield, Star, Target, Globe, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const organizationData = {
    founder: {
      title: "CEO & Founder",
      name: "Richard Ogundele",
      description: "Visionary leader who established the foundation with a passion for transforming lives through education and compassion.",
      avatar: "RO",
      color: "from-blue-600 to-purple-600"
    },
    directors: [
      {
        title: "Director, Africa",
        name: "Kehinde Afolabi",
        description: "Handles operations and initiatives across Africa",
        avatar: "KA",
        color: "from-green-500 to-teal-600"
      },
      {
        title: "Director, Asia",
        name: "To be appointed",
        description: "Oversees expansion and operations in Asia",
        avatar: "?",
        color: "from-gray-400 to-gray-600"
      }
    ],
    departments: [
      {
        head: {
          title: "Head of Social Media/Publicity",
          name: "Ololade Gbadamosi",
          description: "Promotes the foundation's work through digital channels",
          avatar: "OG",
          color: "from-pink-500 to-rose-600",
          icon: Globe
        },
        team: ["Graphic Designers", "Social Media Managers", "Content Creators"]
      },
      {
        head: {
          title: "Head of Volunteers",
          name: "Blessing Adeoye",
          description: "Manages recruitment, training, and engagement of volunteers",
          avatar: "BA",
          color: "from-amber-500 to-orange-600",
          icon: Users
        },
        team: ["Volunteer Coordinators", "Training Specialists"]
      },
      {
        head: {
          title: "Head of Prayer Team",
          name: "Oluwaseun Asonibare",
          description: "Provides spiritual support and intercession for our mission",
          avatar: "OA",
          color: "from-purple-500 to-indigo-600",
          icon: Heart
        },
        team: ["Prayer Coordinators", "Spiritual Support Team"]
      },
      {
        head: {
          title: "Legal Adviser",
          name: "Lawrence Ogundele",
          description: "Provides legal guidance and ensures compliance",
          avatar: "LO",
          color: "from-slate-600 to-slate-800",
          icon: Shield
        },
        team: ["Legal Consultants", "Compliance Specialists"]
      },
      {
        head: {
          title: "Head of Finances",
          name: "To be appointed",
          description: "Manages financial planning and resource allocation",
          avatar: "?",
          color: "from-emerald-500 to-green-600",
          icon: Target
        },
        team: ["Financial Analysts", "Accounting Specialists"]
      }
    ]
  };

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
              <Users className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Meet Our Team</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Hearts Behind the <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Meet the passionate individuals who dedicate their time, skills, and hearts to transforming lives across Africa through love and compassion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-20"
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-none max-w-md hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${organizationData.founder.color} flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg`}>
                  {organizationData.founder.avatar}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{organizationData.founder.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{organizationData.founder.title}</p>
                <p className="text-gray-600 leading-relaxed">{organizationData.founder.description}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Directors */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-20"
          >
            {organizationData.directors.map((director, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${director.color} flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg`}>
                      {director.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{director.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{director.title}</p>
                    <p className="text-gray-600">{director.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Department Heads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Department Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {organizationData.departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dept.head.color} flex items-center justify-center mr-4 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {dept.head.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{dept.head.name}</h3>
                        <p className="text-blue-600 font-semibold text-sm">{dept.head.title}</p>
                      </div>
                      {dept.head.icon && (
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <dept.head.icon className="text-blue-600" size={20} />
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{dept.head.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Team Members:</h4>
                      <ul className="space-y-2">
                        {dept.team.map((member, i) => (
                          <li key={i} className="flex items-center text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
