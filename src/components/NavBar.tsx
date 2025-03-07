
import { useState, useEffect } from "react";
import { Container } from "./ui/container";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-10">
            <h2 className="text-xl font-serif font-medium tracking-tight">
              Richie Diamond <span className="font-sans font-light">Foundation</span>
            </h2>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Collections", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center w-6 h-5">
              <span
                className={cn(
                  "w-6 h-px bg-black block transition-transform duration-300",
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-6 h-px bg-black block transition-opacity duration-300 my-1",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span
                className={cn(
                  "w-6 h-px bg-black block transition-transform duration-300",
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                )}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white flex flex-col justify-center items-center transition-all duration-500 md:hidden",
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            {["Home", "About", "Collections", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
