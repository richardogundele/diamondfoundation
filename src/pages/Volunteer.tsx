
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Heart, Users, Calendar, Handshake, Star, Award, Zap, BookOpen, Settings, Globe, MessageSquare, Clock, CheckCircle, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Volunteer = () => {
  const { toast } = useToast();
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";
  const outreachFormLink = "https://forms.gle/eL8srxPPKymywvtk8";

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleVolunteerClick = () => {
    window.open(volunteerFormLink, "_blank");
    toast({
      title: "Opening application form",
      description: "You're being redirected to our volunteer application form.",
    });
  };

  const handleOutreachClick = () => {
    window.open(outreachFormLink, "_blank");
    toast({
      title: "Opening outreach host form",
      description: "You're being redirected to our community outreach host application form.",
    });
  };

  const stats = [
    { icon: Heart, value: "1,500+", label: "Lives Impacted", color: "from-red-500 to-rose-600" },
    { icon: Users, value: "200+", label: "Active Volunteers", color: "from-blue-500 to-cyan-600" },
    { icon: Calendar, value: "36+", label: "Annual Events", color: "from-green-500 to-emerald-600" },
  ];

  const opportunities = [
    {
      icon: Heart,
      title: "Mentoring",
      description: "Guide and support children and young adults in their personal development",
      commitment: "4-6 hours/week",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs and events in local communities",
      commitment: "Flexible hours",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Professional Expertise",
      description: "Contribute your skills in education, healthcare, or fundraising",
      commitment: "Project-based",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: MessageSquare,
      title: "Advocacy",
      description: "Spread awareness about our cause through social media and networking",
      commitment: "2-3 hours/week",
      color: "from-amber-500 to-orange-600"
    },
  ];

  const volunteerPositions = [
    {
      title: "Content Creator",
      skills: ["Writing", "Design", "Social Media"],
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      description: "Create compelling content that tells our story"
    },
    {
      title: "Fundraising Manager",
      skills: ["Fundraising", "Communication", "Networking"],
      icon: Star,
      color: "from-green-500 to-emerald-600",
      description: "Lead initiatives to secure funding for our programs"
    },
    {
      title: "Head of Education",
      skills: ["Teaching", "Curriculum Development", "Leadership"],
      icon: BookOpen,
      color: "from-red-500 to-rose-600",
      description: "Design and oversee educational programs"
    },
    {
      title: "Website Manager",
      skills: ["Web Development", "Design", "Content Management"],
      icon: Award,
      color: "from-purple-500 to-violet-600",
      description: "Maintain and enhance our digital presence"
    },
    {
      title: "Project Manager",
      skills: ["Organization", "Leadership", "Strategic Planning"],
      icon: Settings,
      color: "from-amber-500 to-orange-600",
      description: "Coordinate projects and ensure successful delivery"
    },
    {
      title: "Country Representative",
      skills: ["Local Knowledge", "Communication", "Community Engagement"],
      icon: Globe,
      color: "from-teal-500 to-cyan-600",
      description: "Represent our foundation in local communities"
    },
  ];

  const benefits = [
    { icon: Award, title: "Recognition", description: "Certificates and recognition for your contributions" },
    { icon: BookOpen, title: "Skills Development", description: "Gain valuable experience and professional skills" },
    { icon: Users, title: "Community", description: "Join a network of like-minded changemakers" },
    { icon: Heart, title: "Impact", description: "See the direct result of your efforts in communities" }
  ];

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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Heart className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Join Our Mission</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Lives <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Through Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join our global community of changemakers. Your skills, passion, and time can create ripple effects that transform entire communities across Africa.
            </p>

            <Button 
              onClick={handleVolunteerClick}
              className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Start Your Journey <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-full text-white shadow-lg`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How You Can Help */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                How You Can <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Make a Difference</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the volunteer opportunity that aligns with your skills and schedule
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${opportunity.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <opportunity.icon size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{opportunity.description}</p>
                      <div className="flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                        <Clock size={16} className="mr-2" />
                        <span>{opportunity.commitment}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Current Openings</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-xl">
                We're looking for passionate individuals to fill these key roles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${position.color} text-white flex items-center justify-center mr-4 shadow-lg`}>
                          <position.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{position.title}</h3>
                          <p className="text-gray-600 text-sm">{position.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {position.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Button 
                        onClick={handleVolunteerClick}
                        className={`w-full bg-gradient-to-r ${position.color} hover:opacity-90 text-white`}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Volunteer Benefits */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Volunteer With Us?</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the joy of helping others, volunteering with us offers personal and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-none hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Host an Outreach - Made Bigger */}
      <div className="py-32 bg-gradient-to-br from-green-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-12"
            >
              <Handshake className="text-white" size={32} />
              <span className="text-white font-semibold text-xl">Community Partnership</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Host an <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Outreach Event</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Bring the transformative power of Diamond Foundation directly to your community. Partner with us to 
              organize outreach events that will touch lives and create lasting change in your local area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Community Impact</h3>
                <p className="text-white/90">Directly serve children and families in your neighborhood</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Local Leadership</h3>
                <p className="text-white/90">Take the lead in bringing positive change to your area</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Network Building</h3>
                <p className="text-white/90">Connect with other changemakers and expand our reach</p>
              </div>
            </div>

            <Button 
              onClick={handleOutreachClick}
              className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-8 h-auto font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              size="lg"
            >
              Host an Outreach Event <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Final CTA with Footer Content */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Mark?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of volunteers who are already transforming lives across Africa. 
              Your journey of impact starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                onClick={handleVolunteerClick}
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Join Our Team Today <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto font-semibold transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="/contact">
                  Have Questions? <Mail size={20} className="ml-2" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90 mb-16">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span className="text-lg">Flexible Commitment</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span className="text-lg">Skill Development</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span className="text-lg">Global Impact</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Content */}
          <div className="border-t border-white/20 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* About Section */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white">Diamond Foundation</h3>
                <p className="text-white/80">
                  Transforming lives through love, compassion, and empowerment.
                </p>
                <p className="text-white/80 text-sm">
                  Our Certificate of Incorporation Name is THE DIAMOND CHILDREN FOUNDATION INITIATIVE and Registration Number is 8324538
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/impact" className="text-white/80 hover:text-white transition-colors">Our Impact</a></li>
                  <li><a href="/volunteer" className="text-white/80 hover:text-white transition-colors">Volunteer</a></li>
                  <li><a href="/team" className="text-white/80 hover:text-white transition-colors">Our Team</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 text-center md:text-left">
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
                  className="text-white/80 hover:text-white transition-colors"
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
      </div>
    </div>
  );
};

export default Volunteer;
