
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Target, Award, CheckCircle, Star, Lightbulb, HandHeart, BookOpen, Sparkles, ArrowRight, Trophy, Shield, GraduationCap, Monitor, Building, TrendingUp, Zap, Home, School, Laptop, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Charity + Enterprise",
      description: "We don't just give aid — we build systems that enable children to rise above dependency.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "Renovating schools, funding exam fees, and rewarding excellence.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Equipping children with future-ready skills through sponsored tech courses and digital literacy hubs.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Pathways to Opportunity",
      description: "Creating scholarships, entrepreneurship support, and links to jobs or freelancing.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Faith in Action",
      description: "Impact rooted in Christian love, dignity, and compassion.",
      color: "from-red-500 to-pink-600"
    }
  ];

  const milestones = [
    {
      year: "2020-2022",
      title: "Foundation & Growth",
      description: "Our inaugural community outreach program reached over 50 children in southwest Nigeria, followed by launching our scholarship program providing education opportunities to over 10 underprivileged youth.",
      icon: Star
    },
    {
      year: "2023-2024",
      title: "Regional Expansion",
      description: "Extended our reach across all the geopolitical zones in Nigeria, impacting thousands of lives through various programs and establishing our presence nationwide.",
      icon: Globe
    },
    {
      year: "2025",
      title: "Community Host Program & Tech Support",
      description: "Launch of Host an Outreach in Your Community Program and PC Donations to Orphanages pilot tech support project.",
      icon: Award
    },
    {
      year: "2026",
      title: "Educational Infrastructure & Digital Access",
      description: "Renovate 5 schools, pay exam fees for 200 students, distribute materials to 1,000 children, and donate 50 PCs/laptops to orphanages and partner schools.",
      icon: Building
    },
    {
      year: "2027",
      title: "Scaling Impact & Digital Literacy",
      description: "Renovate 10 more schools, pay exam fees for 500 students, launch 1st Digital Literacy Hub serving 100 students, and expand school kits distribution to 2,000 children.",
      icon: Laptop
    },
    {
      year: "2028",
      title: "Expanding Digital Infrastructure",
      description: "Renovate 10 more schools, support 1,000 students with tuition/exam fees, and add 2 more Digital Literacy Hubs bringing our total to 3 hubs.",
      icon: School
    },
    {
      year: "2029-2030",
      title: "Sustainable Growth & Enterprise",
      description: "Renovate 25 more schools (50 total), reach 10,000 supported students, operate 5 Digital Literacy Hubs across Africa, and generate 30% of yearly income through our enterprise arm.",
      icon: BarChart3
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
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
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 shadow-lg"
            >
              <Sparkles className="text-white" size={24} />
              <span className="text-white font-bold text-lg">Our Story</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Beyond Charity.
              <span className="block text-cyan-300 mt-4">
                Building Futures.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-5xl mx-auto mb-12 leading-relaxed">
              The Diamond Foundation is a registered nonprofit dedicated to transforming lives through education, digital literacy, and enterprise opportunities. We go beyond charity by combining immediate impact with sustainable solutions that empower children and communities to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 h-auto font-bold hover:scale-[1.02] transition-all duration-200" size="lg" asChild>
                <Link to="/volunteer">
                  Join Our Mission <Heart size={20} className="ml-3" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-primary text-lg px-12 py-6 h-auto font-bold hover:scale-[1.02] transition-all duration-200 bg-transparent" size="lg" asChild>
                <Link to="/donate">
                  Make Impact <ArrowRight size={20} className="ml-3" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Mission & Vision */}
      <div className="section-padding bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-gradient">Purpose</span>
            </h2>
            <div className="w-32 h-1 gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="card-elevated h-full hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mr-4 shadow-lg">
                      <Target className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To transform lives through education, digital literacy, and enterprise pathways — meeting immediate needs while building long-term solutions that empower children and communities to thrive.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="card-elevated h-full hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mr-4 shadow-lg">
                      <Lightbulb className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A future where every child has the knowledge, confidence, and opportunities to break free from poverty, thrive in the digital age, and create lasting change for their communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="section-padding bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We believe charity alone cannot create lasting change. By merging compassion with innovation, we create spaces where children can learn, dream, and lead their communities into the future.
            </p>
            <div className="w-32 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Card className="bg-white shadow-2xl border-none hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 h-full">
                  <CardContent className="p-10 text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <value.icon className="text-white" size={36} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-6">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="section-padding bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-gray-800 mb-8">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              From humble beginnings to transformative impact—discover the milestones that have shaped our mission
            </p>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block rounded-full shadow-lg"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
                >
                  <div className="flex-1 lg:text-right text-center">
                    <Card className={`bg-white/95 backdrop-blur-sm shadow-2xl border-none hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <CardContent className="p-10">
                        <div className="flex items-center justify-center lg:justify-start mb-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-6 shadow-xl">
                            <milestone.icon className="text-white" size={28} />
                          </div>
                          <span className="text-4xl font-black text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-3xl font-black text-gray-800 mb-6">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg font-medium">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Enhanced Timeline dot */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-2xl hidden lg:block relative z-10"></div>
                  
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
