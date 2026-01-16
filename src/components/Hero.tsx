import { ArrowRight, Heart, Users, Globe, Sparkles } from "lucide-react";
import Carousel from "./Carousel";
import Counter from "./Counter";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import image1 from "../images/1.png";
import image2 from "../images/2.png";

const Hero = () => {
  const carouselImages = [image1, image2];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    { icon: Heart, number: 500, label: "Lives Transformed", accent: "from-primary to-primary-light" },
    { icon: Globe, number: 10, label: "States Reached", accent: "from-accent to-accent-light" },
    { icon: Users, number: 7, label: "Core Programs", accent: "from-coral to-primary" },
    { icon: Globe, number: 6, label: "Countries", accent: "from-primary-light to-accent" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Carousel with enhanced overlay */}
      <Carousel images={carouselImages} />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80 z-[1]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-coral/10 rounded-full blur-2xl" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground/90">Transforming Lives Since 2020</span>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="font-display font-bold text-primary-foreground mb-6 leading-[0.95] tracking-tight"
              variants={itemVariants}
            >
              <span className="block">Beyond Charity.</span>
              <span className="block mt-2 text-gradient-gold">
                Building Futures.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Empowering children through education, digital skills, and enterprise pathways. 
              Join us in creating lasting change across Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-4"
              variants={itemVariants}
            >
              <Link to="/donate">
                <button className="btn-gold text-foreground px-10 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-bold w-full sm:w-auto group">
                  <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Make a Donation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/volunteer">
                <button className="glass-card text-foreground px-10 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-bold w-full sm:w-auto group hover:bg-primary-foreground/20 transition-all duration-300">
                  <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Impact Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-3xl p-6 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.accent} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2 stat-glow">
                  <Counter end={stat.number} suffix="+" duration={2000} />
                </h3>
                <p className="text-sm md:text-base font-semibold text-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;