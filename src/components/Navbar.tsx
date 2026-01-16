import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Impact", path: "/impact" },
    { name: "Careers", path: "/careers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7d53621f-7c4c-42e4-8365-472adf38f92e.png" 
                  alt="Diamond Foundation Logo" 
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-bold leading-tight tracking-wide transition-colors ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}>THE DIAMOND</span>
                <span className="text-sm font-bold text-primary leading-tight tracking-wide">FOUNDATION</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : scrolled 
                        ? 'text-foreground/80 hover:text-primary hover:bg-primary/5' 
                        : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="ml-4"
            >
              <Link to="/donate">
                <button className="btn-gold px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 group">
                  <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Donate
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden absolute left-4 right-4 glass-card rounded-3xl mt-4 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3.5 rounded-2xl font-medium transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-foreground hover:bg-muted'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-2"
                >
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    <button className="w-full btn-gold py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;