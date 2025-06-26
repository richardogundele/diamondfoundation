
import Navbar from "../components/Navbar";
import { School, Building, Users, Calendar, DollarSign, Heart, Target, ArrowRight, Check, ExternalLink, MapPin, Clock, Award, Zap, Star, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Project2025 = () => {
  const projectStats = [
    { icon: School, value: "10", label: "Schools to Renovate", color: "from-blue-500 to-cyan-600" },
    { icon: Users, value: "1000+", label: "Children Impacted", color: "from-green-500 to-emerald-600" },
    { icon: DollarSign, value: "₦50M", label: "Total Budget", color: "from-purple-500 to-violet-600" },
    { icon: Calendar, value: "Aug 2025", label: "Launch Date", color: "from-rose-500 to-pink-600" }
  ];

  const renovationAreas = [
    {
      icon: Building,
      title: "Structural Repairs",
      description: "Complete classroom renovation with roof repairs, wall reinforcement, and foundation work",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: School,
      title: "Learning Environment",
      description: "Installing windows, doors, proper lighting, and ventilation systems",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Furniture & Equipment",
      description: "Providing desks, chairs, whiteboards, bookshelves, and teaching materials",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Heart,
      title: "Safety & Comfort",
      description: "Adding ceiling fans, proper flooring, and creating safe outdoor spaces",
      color: "from-rose-500 to-pink-600"
    }
  ];

  const partnershipTiers = [
    {
      amount: "₦2M",
      title: "School Champion",
      description: "Fully renovate one entire school",
      benefits: [
        "Complete school transformation",
        "Naming rights for the school project",
        "Prominent branding on school premises",
        "Dedicated media coverage",
        "Progress reports and photo updates",
        "Certificate of recognition"
      ],
      color: "from-blue-600 to-cyan-600",
      featured: true
    },
    {
      amount: "₦500K",
      title: "Classroom Hero",
      description: "Furnish a school with essential learning materials",
      benefits: [
        "Furnish multiple classrooms",
        "Brand recognition on furniture",
        "Social media feature",
        "Progress updates",
        "Certificate of appreciation"
      ],
      color: "from-green-500 to-emerald-600",
      featured: false
    },
    {
      amount: "₦100K",
      title: "Community Builder",
      description: "Support essential repairs and improvements",
      benefits: [
        "Classroom painting and repairs",
        "Window and fan installation",
        "Social media recognition",
        "Impact report"
      ],
      color: "from-purple-500 to-violet-600",
      featured: false
    }
  ];

  const timeline = [
    {
      phase: "Planning & Selection",
      period: "Jan - Mar 2025",
      description: "Identify and assess schools, finalize partnerships",
      icon: Target,
      color: "from-blue-500 to-cyan-600"
    },
    {
      phase: "Preparation",
      period: "Apr - Jul 2025",
      description: "Procurement, logistics planning, and team mobilization",
      icon: Zap,
      color: "from-green-500 to-emerald-600"
    },
    {
      phase: "Implementation",
      period: "Aug 2025",
      description: "Execute renovations during school break period",
      icon: Building,
      color: "from-purple-500 to-violet-600"
    },
    {
      phase: "Completion & Handover",
      period: "Sep 2025",
      description: "Final inspections, handover, and celebration events",
      icon: Award,
      color: "from-rose-500 to-pink-600"
    }
  ];

  const impactFeatures = [
    { icon: Globe, title: "Wide Reach", description: "10 schools across Nigeria" },
    { icon: Users, title: "Direct Impact", description: "1000+ children benefiting" },
    { icon: Shield, title: "Quality Assurance", description: "Professional oversight & standards" },
    { icon: Star, title: "Long-term Value", description: "Sustainable improvements" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
          <div className="absolute top-60 right-40 w-24 h-24 rounded-full bg-white/15 animate-pulse"></div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <School className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">PROJECT 2025</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Rebuild 10: <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Transform Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Renovating 10 underserved schools across Nigeria to restore dignity to education, 
              improve learning environments, and let children see hope through love in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                <Link to="/donate#rebuild10">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                <a href="mailto:hello@diamondfoundation.org" className="flex items-center">
                  Contact Us <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* The Need Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">The Urgent Need</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Across Nigeria, countless children attend schools with deteriorating infrastructure. 
                Leaking roofs, broken windows, inadequate furniture, and unsafe learning environments 
                hinder their educational journey and limit their potential.
              </p>
              <ul className="space-y-4">
                {[
                  "Dilapidated classrooms with leaking roofs",
                  "Broken or missing furniture affecting learning",
                  "Poor ventilation and lighting conditions",
                  "Lack of proper educational materials",
                  "Unsafe learning environments"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Target className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png"
                alt="School renovation need"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>

          {/* Impact Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {impactFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Renovation Areas */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Renovation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Focus</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive school transformation addressing every aspect of the learning environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renovationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <area.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Opportunities</h2>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join us in this transformative journey. Choose a partnership level that aligns with your vision for impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={tier.featured ? 'md:scale-105 md:-translate-y-4' : ''}
              >
                <Card className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full ${tier.featured ? 'ring-2 ring-white/50' : ''}`}>
                  <CardContent className="p-8">
                    {tier.featured && (
                      <div className="text-center mb-4">
                        <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          <Star size={16} />
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                        {tier.amount}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{tier.title}</h3>
                      <p className="text-white/80">{tier.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-white/90">
                          <Check size={16} className="text-green-300 mr-3 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${tier.featured ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-white/20 text-white border border-white/30 hover:bg-white hover:text-blue-600'} transition-all duration-300`} asChild>
                      <a href="mailto:hello@diamondfoundation.org">
                        Choose This Level
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Project <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our carefully planned approach ensures maximum impact and efficiency
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200"></div>
            
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-white shadow-xl border-none hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} shadow-lg`}>
                        <phase.icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{phase.phase}</h3>
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                        <Clock size={16} />
                        <span className="font-medium">{phase.period}</span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-600 shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Transform Lives Today</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Lives?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Join us in this ambitious mission to renovate 10 schools and impact over 1000 children. 
              Together, we can restore dignity to education and create lasting change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" size="lg" asChild>
                <Link to="/donate#rebuild10">
                  Start Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" size="lg" asChild>
                <a href="mailto:hello@diamondfoundation.org">
                  Learn More <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
              <div className="flex items-center justify-center gap-3">
                <Award size={24} className="text-yellow-300" />
                <span className="text-lg">CSR Recognition</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users size={24} className="text-green-300" />
                <span className="text-lg">1000+ Lives Impacted</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield size={24} className="text-blue-300" />
                <span className="text-lg">Transparent Reporting</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project2025;
