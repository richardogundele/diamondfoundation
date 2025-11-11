
import { motion } from "framer-motion";
import { Heart, Users, Globe, Sparkles, ArrowRight, Star, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const VolunteerHero = () => {
  return (
    <div className="pt-32 pb-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-white blur-3xl"></div>
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
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-lg"
          >
            <Sparkles className="text-white" size={24} />
            <span className="text-white font-bold text-lg">Launch Your Career</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Unpaid Internships
            <span className="block text-yellow-300 mt-4">
              Build Skills. Create Impact.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-5xl mx-auto mb-16 leading-relaxed">
            Explore meaningful unpaid internships that develop real-world skills while contributing to our mission across Africa. Gain experience, mentorship, and purpose.
          </p>

          {/* Internship impact stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              // Rename stat label from Volunteers to Interns
              { icon: Users, number: "50+", label: "Active Interns" },
              { icon: Globe, number: "3+", label: "Countries" },
              { icon: Heart, number: "500+", label: "Lives Touched" },
              { icon: Award, number: "10+", label: "Projects Completed" }
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
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 h-auto font-bold hover:scale-[1.02] transition-all duration-200" size="lg" asChild>
              <a href="mailto:admin@thediamondfoundation.org?subject=Internship%20Application&body=Please%20attach%20your%20CV%20and%20cover%20letter.">
                Apply by Email <Heart size={20} className="ml-3" />
              </a>
            </Button>
            <Button variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-primary text-lg px-12 py-6 h-auto font-bold hover:scale-[1.02] transition-all duration-200 bg-transparent" size="lg">
              Watch Impact Stories <ArrowRight size={20} className="ml-3" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerHero;
