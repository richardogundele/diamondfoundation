
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
      transition={{ duration: 0.4 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Simplified background - single decorative element */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
