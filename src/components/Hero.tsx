
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
    <div className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="relative pt-24 pb-16">
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
              className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 mb-8 shadow-sm border border-border"
            >
              <Heart className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-foreground">Transforming Lives Since 2020</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight px-2"
              variants={itemVariants}
            >
              Beyond Charity.
              <span className="block text-gradient mt-2">
                Building Futures.
              </span>
            </motion.h1>


            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-4"
              variants={itemVariants}
            >
              <Link to="/donate">
                <button className="gradient-primary text-primary-foreground px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 text-lg font-semibold w-full sm:min-w-[200px]">
                  <Heart className="w-5 h-5" />
                  Make a Donation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/volunteer">
                <button className="bg-card border-2 border-primary text-primary px-10 py-4 rounded-full hover:bg-secondary shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 text-lg font-semibold w-full sm:min-w-[200px]">
                  <Users className="w-5 h-5" />
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {[
              { icon: Heart, number: 500, label: "Lives Transformed", sublabel: "Children & Families" },
              { icon: Globe, number: 10, label: "States Reached", sublabel: "Across Nigeria" },
              { icon: Users, number: 7, label: "Core Programs", sublabel: "Holistic Development" },
              { icon: Globe, number: 6, label: "Countries", sublabel: "Expanding Impact" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="card-elevated p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-4xl font-bold text-foreground mb-2">
                  <Counter end={stat.number} suffix="+" duration={2000} />
                </h3>
                <p className="text-base font-semibold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
