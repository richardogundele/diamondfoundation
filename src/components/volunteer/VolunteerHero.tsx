
import { motion } from "framer-motion";
import { Heart, Users, Globe, Sparkles, ArrowRight, Star, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const VolunteerHero = () => {
  return (
    <div className="pt-32 pb-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-background blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-background blur-3xl animate-pulse"></div>
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
            <span className="text-white font-bold text-xl">Join Our Mission</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Be the Change 
            <span className="block text-primary-foreground mt-4">
              Africa Needs
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
            Join thousands of passionate volunteers making a real difference in communities across Africa. Your skills, time, and heart can transform lives.
          </p>

          {/* Volunteer impact stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, number: "500+", label: "Active Volunteers" },
              { icon: Globe, number: "15+", label: "Countries" },
              { icon: Heart, number: "10K+", label: "Lives Touched" },
              { icon: Award, number: "50+", label: "Projects Completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-background text-primary hover:bg-secondary text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300" size="lg">
              Start Volunteering <Heart size={24} className="ml-3" />
            </Button>
            <Button variant="outline" className="border-primary-foreground border-2 text-primary-foreground hover:bg-background hover:text-primary text-xl px-12 py-8 h-auto font-bold hover:scale-105 transition-all duration-300 bg-transparent" size="lg">
              Watch Impact Stories <ArrowRight size={24} className="ml-3" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerHero;
