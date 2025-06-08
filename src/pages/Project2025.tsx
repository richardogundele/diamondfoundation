
import Navbar from "../components/Navbar";
import { School, Building, Users, Calendar, DollarSign, Heart, Target, ArrowRight, Check, ExternalLink, MapPin, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Project2025 = () => {
  const projectStats = [
    { icon: School, value: "10", label: "Schools to Renovate" },
    { icon: Users, value: "1000+", label: "Children Impacted" },
    { icon: DollarSign, value: "₦50M", label: "Total Budget" },
    { icon: Calendar, value: "Aug 2025", label: "Launch Date" }
  ];

  const renovationAreas = [
    {
      icon: Building,
      title: "Structural Repairs",
      description: "Complete classroom renovation with roof repairs, wall reinforcement, and foundation work"
    },
    {
      icon: School,
      title: "Learning Environment",
      description: "Installing windows, doors, proper lighting, and ventilation systems"
    },
    {
      icon: Users,
      title: "Furniture & Equipment",
      description: "Providing desks, chairs, whiteboards, bookshelves, and teaching materials"
    },
    {
      icon: Heart,
      title: "Safety & Comfort",
      description: "Adding ceiling fans, proper flooring, and creating safe outdoor spaces"
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
      ]
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
      ]
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
      ]
    }
  ];

  const timeline = [
    {
      phase: "Planning & Selection",
      period: "Jan - Mar 2025",
      description: "Identify and assess schools, finalize partnerships"
    },
    {
      phase: "Preparation",
      period: "Apr - Jul 2025",
      description: "Procurement, logistics planning, and team mobilization"
    },
    {
      phase: "Implementation",
      period: "Aug 2025",
      description: "Execute renovations during school break period"
    },
    {
      phase: "Completion & Handover",
      period: "Sep 2025",
      description: "Final inspections, handover, and celebration events"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20"></div>
          <div className="absolute top-60 right-40 w-24 h-24 rounded-full bg-white/15"></div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 rounded-full bg-white/10"></div>
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
              Rebuild 10: A Vision to Transform Education
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Renovating 10 underserved schools across Nigeria to restore dignity to education, 
              improve learning environments, and let children see Jesus through love in action.
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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* The Need Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-textPrimary mb-6">The Urgent Need</h2>
              <p className="text-lg text-textSecondary mb-6">
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
                  <li key={index} className="flex items-center">
                    <Target className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-textSecondary">{item}</span>
                  </li>
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
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Renovation Areas */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-textPrimary mb-4">Our Renovation Focus</h2>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              We're committed to comprehensive school transformation that addresses every aspect of the learning environment.
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
                className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">{area.title}</h3>
                <p className="text-textSecondary">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Opportunities</h2>
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{tier.amount}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.title}</h3>
                  <p className="text-white/80">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-white/90">
                      <Check size={16} className="text-blue-200 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <a href="mailto:hello@diamondfoundation.org">
                    Choose This Level
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-textPrimary mb-4">Project Timeline</h2>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Our carefully planned approach ensures maximum impact and efficiency in transforming these schools.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-textPrimary mb-2">{phase.phase}</h3>
                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                      <Clock size={16} />
                      <span className="font-medium">{phase.period}</span>
                    </div>
                    <p className="text-textSecondary">{phase.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Lives?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Join us in this ambitious mission to renovate 10 schools and impact over 1000 children. 
              Together, we can restore dignity to education and create lasting change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center justify-center gap-3">
                <Award size={24} />
                <span>CSR Recognition</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users size={24} />
                <span>1000+ Lives Impacted</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Heart size={24} />
                <span>Transparent Reporting</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project2025;
