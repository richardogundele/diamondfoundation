
import { useState } from "react";
import { Container } from "./ui/container";
import { FadeIn } from "./animations/FadeIn";

export function Collections() {
  const collections = [
    {
      id: 1,
      name: "Celestial",
      description: "Inspired by the cosmos, each piece captures the brilliance of stars and galaxies.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80",
    },
    {
      id: 2,
      name: "Ethereal",
      description: "Delicate designs that embody lightness and grace for everyday elegance.",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80",
    },
    {
      id: 3,
      name: "Regal",
      description: "Bold, statement pieces that exude confidence and timeless sophistication.",
      image: "https://images.unsplash.com/photo-1586878341535-71217c38757b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80",
    },
    {
      id: 4,
      name: "Heritage",
      description: "A nod to classic craftsmanship, reimagined for the modern connoisseur.",
      image: "https://images.unsplash.com/photo-1574507447521-b71d0d7df747?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 bg-diamond-50 bg-opacity-50 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border border-diamond-200 rounded-full mb-6">
              Exquisite Selection
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Our Premium <span className="text-gradient bg-text-gradient">Collections</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-diamond-700">
              Each collection tells a unique story through exceptional design and unparalleled craftsmanship, 
              offering a diverse range of styles to suit every personality and occasion.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <FadeIn key={collection.id} delay={0.2 + index * 0.1} direction="up">
              <div 
                className="diamond-card group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="object-cover w-full h-full transition-transform duration-700 ease-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
                  <p className="text-sm text-diamond-600">{collection.description}</p>
                  <div className="mt-4 pt-4 border-t border-diamond-100">
                    <button className="text-sm font-medium text-diamond-800 hover:text-diamond-950 transition-colors">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
