
import { Container } from "./ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-diamond-950 text-white">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-serif font-medium tracking-tight mb-4">
              Richie Diamond <span className="font-sans font-light">Foundation</span>
            </h2>
            <p className="text-diamond-300 max-w-md">
              A legacy of excellence in fine jewelry, where exceptional craftsmanship meets timeless elegance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "About", "Collections", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-diamond-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-diamond-300">
              <li>info@richiediamond.com</li>
              <li>+1 (800) 123-4567</li>
              <li>123 Luxury Avenue,<br /> New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-diamond-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-diamond-400">
            © {currentYear} Richie Diamond Foundation. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-diamond-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-diamond-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
