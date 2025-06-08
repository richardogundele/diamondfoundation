
import { motion } from "framer-motion";
import { School, ArrowRight, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const NewsFlash = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-none overflow-hidden shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  {/* News Badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-semibold">BREAKING NEWS</span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Rebuild 10: Our Biggest Project Yet!
                  </h2>
                  
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    We're launching an ambitious mission to renovate 10 underserved schools across Nigeria in 2025. 
                    Join us in restoring dignity to education and transforming thousands of young lives.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-white">
                      <School size={20} className="text-blue-200" />
                      <span className="font-semibold">10 Schools</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Calendar size={20} className="text-blue-200" />
                      <span className="font-semibold">August 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <DollarSign size={20} className="text-blue-200" />
                      <span className="font-semibold">₦20M Goal</span>
                    </div>
                  </div>

                  <Link to="/donate#rebuild10">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 h-auto text-lg group transition-all duration-300 hover:scale-105">
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="lg:w-80">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white/10 rounded-xl p-4">
                          <div className="text-2xl font-bold text-white">1000+</div>
                          <div className="text-white/80 text-sm">Students</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                          <div className="text-2xl font-bold text-white">10</div>
                          <div className="text-white/80 text-sm">Communities</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 col-span-2">
                          <div className="text-xl font-bold text-white">Complete Transformation</div>
                          <div className="text-white/80 text-sm">Classrooms • Roofs • Furniture</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-200 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-1000"></div>
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
