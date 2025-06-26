
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/tdiamondfoundation", 
      label: "Facebook" 
    },
    { 
      icon: Twitter, 
      href: "https://x.com/tdfoundation_", 
      label: "Twitter" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/diamondfoundation_/", 
      label: "Instagram" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/diamond-foundation/", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:thediamondfoundation2020@gmail.com", 
      label: "Email" 
    }
  ];

  const trustIndicators = [
    { icon: CheckCircle, text: "Transparent Operations" },
    { icon: CheckCircle, text: "Direct Impact" },
    { icon: CheckCircle, text: "Global Community" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative">
      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-pink-300/20 blur-2xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            >
              <Heart className="text-white" size={20} />
              <span className="text-white font-medium">Join the Movement</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Join Our Mission?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Every child deserves a chance to dream, learn, and grow. Together, we can make that dream a reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="/donate">
                  Donate Now <Heart className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="/volunteer">
                  Volunteer Today
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-center gap-3 text-white/90"
                >
                  <indicator.icon className="text-green-300" size={24} />
                  <span className="font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Diamond Foundation</h3>
              <p className="text-white/80">
                Transforming lives through love, compassion, and empowerment.
              </p>
              <p className="text-white/80 text-sm">
                Our Certificate of Incorporation Name is THE DIAMOND CHILDREN FOUNDATION INITIATIVE and Registration Number is 8324538
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/impact" className="text-white/80 hover:text-white transition-colors">Our Impact</a></li>
                <li><a href="/volunteer" className="text-white/80 hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="/team" className="text-white/80 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="/project-2025" className="text-white/80 hover:text-white transition-colors">Project 2025</a></li>
                <li><a href="/donate" className="text-white/80 hover:text-white transition-colors">Donate</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <p className="text-white/80">
                Ilorin Kwara state Nigeria<br />
                thediamondfoundation2020@gmail.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-white/80 border-t border-white/10 pt-8">
            <p>© {new Date().getFullYear()} Diamond Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
