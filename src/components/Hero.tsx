
import { ArrowRight, Heart, Users, Globe } from "lucide-react";
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
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-purple-600/20"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-200/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative bg-gradient-to-b from-transparent to-white/50 pt-24 pb-16">
        <Carousel images={carouselImages} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mission badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-100"
            >
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-gray-800">Transforming Lives Since 2020</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight"
              variants={itemVariants}
            >
              Every Child Deserves
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-500">
                Hope, Love & Opportunity
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Join us in creating lasting change across Africa. Through education, healthcare, and community empowerment, 
              we're building a brighter future for underprivileged children and their families.
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
              variants={itemVariants}
            >
              <Link to="/donate">
                <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold min-w-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Heart className="w-5 h-5" />
                  Make a Donation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/volunteer">
                <button className="group bg-white/90 backdrop-blur-sm border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold min-w-[200px]">
                  <Users className="w-5 h-5" />
                  Join Our Mission
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Impact Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-white/20"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
                  <Counter end={500} suffix="+" duration={2500} />
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-800">Lives Transformed</p>
                <p className="text-sm text-gray-600 mt-1">Children & Families</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-white/20"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl"></div>
              <div className="relative">
                <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
                  <Counter end={10} suffix="+" duration={2000} />
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-800">States Reached</p>
                <p className="text-sm text-gray-600 mt-1">Across Nigeria</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-white/20"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
              <div className="relative">
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
                  <Counter end={7} suffix="+" duration={1500} />
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-800">Core Programs</p>
                <p className="text-sm text-gray-600 mt-1">Holistic Development</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-white/20"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl"></div>
              <div className="relative">
                <Globe className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
                  <Counter end={6} suffix="+" duration={1500} />
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-800">Countries</p>
                <p className="text-sm text-gray-600 mt-1">Expanding Impact</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4">Trusted by communities across Africa</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-semibold text-gray-500">Nigeria</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="text-sm font-semibold text-gray-500">Ghana</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="text-sm font-semibold text-gray-500">Kenya</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="text-sm font-semibold text-gray-500">Uganda</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
