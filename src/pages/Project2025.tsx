
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Target, Calendar, MapPin, Users, Heart, Globe, Star, Award, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Project2025 = () => {
  const goals = [
    {
      icon: Users,
      title: "Reach 10,000 Children",
      description: "Expand our impact to directly serve 10,000 underprivileged children across Africa",
      progress: 75,
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "15 New Countries",
      description: "Establish presence in 15 additional African countries by end of 2025",
      progress: 60,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "₦500M Impact Fund",
      description: "Mobilize ₦500 million in resources for sustainable community development",
      progress: 45,
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Star,
      title: "100 Partnerships",
      description: "Build strategic partnerships with 100 organizations for greater impact",
      progress: 85,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const initiatives = [
    {
      title: "Digital Education Hub",
      description: "Establishing tech-enabled learning centers in rural communities",
      timeline: "Q1-Q2 2025",
      budget: "₦50M",
      beneficiaries: "2,000 students",
      status: "In Progress",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Healthcare Mobile Clinics",
      description: "Deploying mobile health units to underserved areas",
      timeline: "Q2-Q3 2025",
      budget: "₦75M",
      beneficiaries: "5,000 people",
      status: "Planning",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Youth Empowerment Centers",
      description: "Creating skill development and entrepreneurship hubs",
      timeline: "Q3-Q4 2025",
      budget: "₦60M",
      beneficiaries: "1,500 youth",
      status: "Fundraising",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Clean Water Projects",
      description: "Installing solar-powered water systems in 50 communities",
      timeline: "Q1-Q4 2025",
      budget: "₦100M",
      beneficiaries: "25,000 people",
      status: "Approved",
      color: "from-cyan-500 to-teal-600"
    }
  ];

  const milestones = [
    { month: "Jan", event: "Launch Digital Education Initiative", completed: true },
    { month: "Mar", event: "Deploy First Mobile Clinic", completed: true },
    { month: "May", event: "Open 5 Youth Centers", completed: false },
    { month: "Jul", event: "Water Project Phase 1", completed: false },
    { month: "Sep", event: "Partnership Summit", completed: false },
    { month: "Nov", event: "Impact Assessment", completed: false },
    { month: "Dec", event: "2025 Goals Review", completed: false }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/30 blur-3xl animate-pulse"></div>
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
              className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-lg"
            >
              <Sparkles className="text-white" size={28} />
              <span className="text-white font-bold text-xl">Project 2025</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Transforming Africa 
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent mt-4">
                One Community at a Time
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
              Our most ambitious initiative yet - reaching 10,000 children across 15 countries with ₦500 million in sustainable impact investments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300 shadow-2xl" size="lg" asChild>
                <a href="/donate">
                  Fund Project 2025 <Heart size={24} className="ml-3" />
                </a>
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-blue-800 text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300 bg-transparent" size="lg">
                Download Plan <ArrowRight size={24} className="ml-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Goals Progress */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-gray-800 mb-8">
              2025 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Goals Progress</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-2xl border-none hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${goal.color} flex items-center justify-center mr-6 shadow-xl`}>
                        <goal.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-800 mb-2">{goal.title}</h3>
                        <p className="text-gray-600 font-medium">{goal.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">Progress</span>
                        <span className="text-sm font-bold text-blue-600">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div 
                          className={`h-3 rounded-full bg-gradient-to-r ${goal.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Initiatives */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-gray-800 mb-8">
              Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Initiatives</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-none hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-10">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${initiative.color} mb-8`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-black text-gray-800">{initiative.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        initiative.status === 'In Progress' ? 'bg-green-100 text-green-800' :
                        initiative.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                        initiative.status === 'Fundraising' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {initiative.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-8 font-medium text-lg leading-relaxed">{initiative.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Timeline</div>
                        <div className="font-bold text-gray-800">{initiative.timeline}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Budget</div>
                        <div className="font-bold text-gray-800">{initiative.budget}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm font-semibold text-gray-500 mb-1">Beneficiaries</div>
                        <div className="font-bold text-gray-800">{initiative.beneficiaries}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-gray-800 mb-8">
              2025 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center min-w-[120px]"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    milestone.completed 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg' 
                      : 'bg-gray-200'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle className="text-white" size={20} />
                    ) : (
                      <Calendar className="text-gray-500" size={20} />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800 mb-2">{milestone.month}</div>
                    <div className="text-sm text-gray-600 text-center leading-tight">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="w-full h-1 bg-gray-200 rounded-full relative">
              <motion.div 
                className="h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '30%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2025;
