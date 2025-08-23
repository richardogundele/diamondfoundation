
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
      href: "mailto:admin@thediamondfoundation.org", 
      label: "Email" 
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Diamond Foundation</h3>
            <p className="text-white/80 text-sm mb-2">
              Beyond Charity. Building Futures through education, digital literacy, and enterprise pathways.
            </p>
            <p className="text-white/70 text-xs">
              Our Certificate of Incorporation Name is THE DIAMOND CHILDREN FOUNDATION INITIATIVE and Registration Number is 8324538
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/impact" className="text-white/80 hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="/volunteer" className="text-white/80 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="/team" className="text-white/80 hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-white/80 text-sm">
              Ilorin Kwara state Nigeria<br />
              admin@thediamondfoundation.org<br />
              Website: thediamondfoundation.org
            </p>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center space-y-4 border-t border-white/10 pt-6">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-center text-white/70 text-sm">
            © {new Date().getFullYear()} Diamond Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
