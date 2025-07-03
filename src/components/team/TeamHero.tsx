
import { motion } from "framer-motion";
import { Users, Heart, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamHero = () => {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-pink-300/30 blur-3xl animate-pulse"></div>
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
            <Users className="text-white" size={28} />
            <span className="text-white font-bold text-xl">Meet Our Team</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            The Hearts Behind the 
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent mt-4">
              Mission
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
            Meet the passionate individuals who dedicate their time, skills, and hearts to transforming lives across Africa through love and compassion.
          </p>

          {/* Team stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, number: "50+", label: "Volunteers" },
              { icon: Heart, number: "10+", label: "Core Team" },
              { icon: Star, number: "25+", label: "Departments" },
              { icon: Award, number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <Button className="bg-white text-blue-800 hover:bg-blue-50 text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300 shadow-2xl" size="lg" asChild>
            <a href="/volunteer">
              Join Our Team <Heart size={24} className="ml-3" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamHero;
