
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const TeamHero = () => {
  return (
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
  );
};

export default TeamHero;
