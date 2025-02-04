import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Impact", path: "/impact" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png" alt="Diamond Foundation Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-primary">Diamond Foundation</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-textPrimary hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textPrimary hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-textPrimary hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;