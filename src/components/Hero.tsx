
import { useEffect, useRef } from "react";
import { Container } from "./ui/container";
import { FadeIn } from "./animations/FadeIn";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        '--move-x': '0px',
        '--move-y': '0px',
      } as React.CSSProperties}
    >
      {/* Abstract diamond shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full opacity-20 bg-diamond-50" 
          style={{ transform: 'translate(calc(var(--move-x) * 0.2), calc(var(--move-y) * 0.2))' }}
        />
        <div 
          className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] rounded-full opacity-10 bg-diamond-200" 
          style={{ transform: 'translate(calc(var(--move-x) * 0.4), calc(var(--move-y) * 0.4))' }}
        />
        <div 
          className="absolute bottom-[10%] right-[20%] w-[25%] h-[25%] rounded-full opacity-10 bg-diamond-100" 
          style={{ transform: 'translate(calc(var(--move-x) * 0.6), calc(var(--move-y) * 0.6))' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <FadeIn delay={0.1}>
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border border-diamond-200 rounded-full mb-6">
                Exquisite Quality
              </span>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                The Brilliance of <br />
                <span className="text-gradient bg-text-gradient">Richie Diamond</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <p className="text-lg text-diamond-700 mb-8 max-w-md">
                Experience the unparalleled craftsmanship and timeless elegance of our premium diamond collections.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#collections" 
                  className="px-6 py-3 bg-diamond-950 text-white rounded-md transition-all hover:bg-diamond-800"
                >
                  Explore Collections
                </a>
                <a 
                  href="#about" 
                  className="px-6 py-3 border border-diamond-300 rounded-md transition-all hover:bg-diamond-50"
                >
                  Our Story
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full animate-float" style={{ 
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0) 70%)',
                  transform: 'translate(calc(var(--move-x) * -0.8), calc(var(--move-y) * -0.8))'
                }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" style={{ filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))' }}>
                    <defs>
                      <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                        <stop offset="50%" stopColor="rgba(240, 240, 240, 0.8)" />
                        <stop offset="100%" stopColor="rgba(230, 230, 230, 0.9)" />
                      </linearGradient>
                    </defs>
                    <path d="M100,10 L10,70 L100,190 L190,70 Z" fill="url(#diamondGradient)" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
