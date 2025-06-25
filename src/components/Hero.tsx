
import { ArrowRight } from "lucide-react";
import Carousel from "./Carousel";
import Counter from "./Counter";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import image1 from "../images/1.png";
import image2 from "../images/2.png";

const Hero = () => {
  const carouselImages = [image1, image2];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-b from-blue-600/10 to-white pt-20 pb-8">
        <Carousel images={carouselImages} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 leading-tight"
              variants={itemVariants}
            >
              Transforming Lives Through
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-300 transition-all duration-300"> Love & Compassion</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-6"
              variants={itemVariants}
            >
              Empowering underprivileged children across Africa with education, healthcare, and opportunities to thrive.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              <Link to="/about">
                <button className="group bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  Support Our Mission
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/volunteer">
                <button className="group bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  Volunteer With Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={500} suffix="+" duration={2500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Children Impacted</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={10} suffix="+" duration={2000} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">States Reached</p>
              <p className="text-sm md:text-base text-gray-600">Across Nigeria</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={7} suffix="+" duration={1500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Core Objectives</p>
              <p className="text-sm md:text-base text-gray-600">Focused on holistic development</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center transform hover:scale-105 transition-transform">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={6} suffix="+" duration={1500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Countries</p>
              <p className="text-sm md:text-base text-gray-600">Expanding across Africa</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
