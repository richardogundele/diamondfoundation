import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/tdiamondfoundation", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/tdfoundation_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/diamondfoundation_/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/diamond-foundation/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:admin@thediamondfoundation.org", label: "Email" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Impact", path: "/impact" },
    { name: "Careers", path: "/careers" },
    { name: "Our Team", path: "/team" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
                  Ready to make a difference?
                </h3>
                <p className="text-primary-foreground/70 text-lg">
                  Join us in transforming lives across Africa
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <button className="btn-gold px-8 py-4 rounded-full font-bold flex items-center gap-2 group">
                    <Heart className="w-5 h-5" />
                    Donate Now
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Link>
                <Link to="/volunteer">
                  <button className="glass-card px-8 py-4 rounded-full font-bold text-foreground flex items-center gap-2 group hover:bg-primary-foreground/20 transition-all">
                    Volunteer
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/7d53621f-7c4c-42e4-8365-472adf38f92e.png" 
                  alt="Diamond Foundation Logo" 
                  className="h-12 w-12" 
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary-foreground leading-tight">THE DIAMOND</span>
                  <span className="text-sm font-bold text-accent leading-tight">FOUNDATION</span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Beyond charity, building futures. We transform lives through education, digital literacy, and enterprise opportunities.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Email</p>
                    <a href="mailto:admin@thediamondfoundation.org" className="hover:text-primary-foreground transition-colors">
                      admin@thediamondfoundation.org
                    </a>
                  </div>
                </li>
                <li>
                  <p className="text-primary-foreground font-medium mb-1">Location</p>
                  <p>Ilorin, Kwara State, Nigeria</p>
                </li>
                <li>
                  <p className="text-primary-foreground font-medium mb-1">Website</p>
                  <p>thediamondfoundation.org</p>
                </li>
              </ul>
            </div>

            {/* Registration */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-6">Legal</h4>
              <div className="glass-card-dark rounded-2xl p-5">
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  <strong className="text-primary-foreground/80">Registered Name:</strong><br />
                  The Diamond Children Foundation Initiative
                </p>
                <div className="w-full h-px bg-primary-foreground/10 my-3" />
                <p className="text-primary-foreground/60 text-xs">
                  <strong className="text-primary-foreground/80">Registration No:</strong><br />
                  8324538
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Diamond Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-coral fill-current" />
              <span>for Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;