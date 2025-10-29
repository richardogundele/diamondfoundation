
import Hero from "../components/Hero";
import ExploreSection from "../components/home/ExploreSection";
import CommitmentSection from "../components/home/CommitmentSection";
import AnimationObserver from "../components/home/AnimationObserver";
import TestimonialSection from "../components/home/TestimonialSection";
import FAQSection from "../components/FAQSection";

import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background decorative elements
         - Reduce blur and size on very small screens to prevent jank and overflow
         - Use heavier blur/animation only from `sm` and above */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl sm:w-96 sm:h-96 sm:blur-3xl sm:animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl sm:w-96 sm:h-96 sm:blur-3xl sm:animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl sm:w-64 sm:h-64 sm:blur-3xl sm:animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Hero />
      <AnimationObserver />
      
      <ExploreSection />
      <TestimonialSection />
      <CommitmentSection />
      <FAQSection />
    </motion.div>
  );
};

export default Index;
