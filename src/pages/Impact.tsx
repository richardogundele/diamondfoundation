
import Navbar from "../components/Navbar";
import Impact from "../components/Impact";
import { GraduationCap, Heart, BookOpen, Users, Target, Globe, ArrowDown, Sparkles, Award, TrendingUp, Star, Zap, Shield, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ImpactPage = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Education Access & Equity",
      description: "School renovations, scholarships, learning materials, exam sponsorship, and creating pathways to quality education for all children.",
      impact: "500+ Students Supported",
      color: "from-blue-500 to-cyan-600",
      stats: { primary: "500+", secondary: "Students", tertiary: "Education Access" }
    },
    {
      icon: Globe,
      title: "Digital Literacy & Innovation",
      description: "Tech training, digital hubs, future-ready courses, and equipping children with skills for the digital economy.",
      impact: "300+ Digital Skills Trained",
      color: "from-purple-500 to-violet-600",
      stats: { primary: "300+", secondary: "Youth", tertiary: "Digital Skills" }
    },
    {
      icon: Target,
      title: "Enterprise Pathways",
      description: "Freelancing opportunities, entrepreneurship support, job readiness programs, and creating sustainable income streams.",
      impact: "150+ Enterprise Ready",
      color: "from-amber-500 to-orange-600",
      stats: { primary: "150+", secondary: "Youth", tertiary: "Enterprise Skills" }
    },
    {
      icon: Heart,
      title: "Faith in Action",
      description: "Making Jesus visible through service and love, providing spiritual mentorship, and reflecting Christian values in all our work.",
      impact: "200+ Lives Touched",
      color: "from-rose-500 to-pink-600",
      stats: { primary: "200+", secondary: "Lives", tertiary: "Faith Impact" }
    },
    {
      icon: Users,
      title: "Sustainability & Growth",
      description: "Strong partnerships, transparent governance, enterprise-linked models, and building systems for long-term impact.",
      impact: "50+ Partnerships Built",
      color: "from-green-500 to-emerald-600",
      stats: { primary: "50+", secondary: "Partners", tertiary: "Sustainable Growth" }
    }
  ];

  const impactStats = [
    { number: "500+", label: "Lives Transformed", icon: Heart, color: "from-red-500 to-rose-600" },
    { number: "7", label: "Communities Reached", icon: Globe, color: "from-blue-500 to-cyan-600" },
    { number: "3M", label: "Resources Mobilized", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { number: "5", label: "Partner Organizations", icon: Award, color: "from-purple-500 to-violet-600" }
  ];

  const testimonials = [
    {
      name: "Grace Adeleke",
      role: "Scholarship Recipient",
      quote: "Diamond Foundation gave me hope when I had none. Their scholarship program allowed me to pursue my education and now I'm studying medicine.",
      avatar: "GA",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Pastor Michael",
      role: "Community Leader",
      quote: "The spiritual mentorship program has transformed our entire community. Young people now have direction and purpose.",
      avatar: "PM",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "Sarah Okonkwo",
      role: "Skills Training Graduate",
      quote: "The empowerment program taught me digital skills that changed my life. I now run my own online business and employ others.",
      avatar: "SO",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const scrollToReport = () => {
    document.getElementById('outreach-report')?.scrollIntoView({ behavior: 'smooth' });
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
              <Sparkles className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Measuring Our Impact</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Beyond Charity, <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Building Futures</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Through our 5 Impact Pillars, we create sustainable solutions that empower children to break free from poverty and thrive in the digital age.
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
                <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <stat.icon className="text-white" size={36} />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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
              Stories of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transformation</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real voices from the communities we serve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-lg font-bold mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Outreach Report */}
      <div id="outreach-report" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Impact />
        </div>
      </div>
      
      {/* Key Initiatives */}
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
              Our 5 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact Pillars</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic pillars that combine immediate impact with sustainable solutions, empowering children to break free from poverty and thrive in the digital age
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
                className="group"
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${initiative.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <initiative.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{initiative.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
                    
                    
                    <div className={`text-sm font-semibold text-white bg-gradient-to-r ${initiative.color} px-4 py-2 rounded-full text-center`}>
                      {initiative.impact}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
