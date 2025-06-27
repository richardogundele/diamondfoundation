
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const volunteerFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeR9DNBg8o8yabMU7r8P0UUhEEgZG5H9pllyRmurXZwIf2wGw/viewform?usp=header";

  const handleVolunteerClick = () => {
    window.open(volunteerFormLink, "_blank");
    toast({
      title: "Opening application form",
      description: "You're being redirected to our volunteer application form.",
    });
  };

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
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      {/* Call to Action Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
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
          </div>

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
    </footer>
  );
};

export default Footer;
