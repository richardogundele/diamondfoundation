
import { motion } from "framer-motion";
import { School, ArrowRight, Calendar, DollarSign, Star, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const NewsFlash = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 overflow-hidden shadow-2xl">
            <CardContent className="p-8 md:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-white">
                  {/* Enhanced News Badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-6 py-3 mb-8 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-bold tracking-wide">TRANSFORMING LIVES</span>
                  </motion.div>

                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      Educational Excellence:
                    </span>
                    <br />
                    <span className="text-white">
                      Transforming Lives Through Education
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-white/90 text-xl mb-8 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    We're committed to providing quality education and support to underserved communities. 
                    Join us in creating lasting change, empowering children, and building a brighter future 
                    for communities across Africa.
                  </motion.p>

                  {/* Enhanced Quick Stats */}
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <School className="w-6 h-6 text-yellow-300" />
                      <div>
                        <div className="font-bold text-lg">50+ Schools</div>
                        <div className="text-white/70 text-sm">Supported</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Users className="w-6 h-6 text-green-300" />
                      <div>
                        <div className="font-bold text-lg">5,000+</div>
                        <div className="text-white/70 text-sm">Students</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <MapPin className="w-6 h-6 text-blue-300" />
                      <div>
                        <div className="font-bold text-lg">15+ Cities</div>
                        <div className="text-white/70 text-sm">Across Africa</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Link to="/impact">
                      <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-6 h-auto text-xl group transition-all duration-300 hover:scale-105 shadow-2xl">
                        <span className="flex items-center gap-3">
                          See Our Impact
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                <div className="lg:w-96">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-white mb-2">$500,000</div>
                        <div className="text-white/80">Annual Impact Goal</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-2xl p-6 text-center">
                          <div className="text-2xl font-bold text-yellow-300 mb-1">2026</div>
                          <div className="text-white/80 text-sm">Active Year</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded-xl p-4 text-center">
                            <div className="text-xl font-bold text-green-300">1000+</div>
                            <div className="text-white/70 text-xs">Students</div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-4 text-center">
                            <div className="text-xl font-bold text-blue-300">25+</div>
                            <div className="text-white/70 text-xs">Programs</div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 text-center border border-green-400/30">
                          <div className="text-lg font-bold text-white">Community Impact</div>
                          <div className="text-white/80 text-sm">Education • Healthcare • Empowerment</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced floating elements */}
                    <motion.div 
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"
                      animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg"
                      animate={{ y: [5, -5, 5], rotate: [360, 180, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    ></motion.div>
                    <motion.div 
                      className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg"
                      animate={{ x: [-3, 3, -3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsFlash;
