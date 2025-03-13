import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

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

  return (
    <footer className="bg-blue-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Diamond Foundation</h3>
            <p className="text-white/80">
              Transforming lives through love, compassion, and empowerment.
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
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="text-white/80">
              123 Charity Lane<br />
              Compassion City, CC 12345<br />
              contact@diamondfoundation.org
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
    </footer>
  );
};

export default Footer; 
