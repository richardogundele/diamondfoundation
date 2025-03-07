
import { Container } from "./ui/container";
import { FadeIn } from "./animations/FadeIn";

export function About() {
  const values = [
    {
      title: "Unparalleled Quality",
      description: "We source only the finest diamonds, adhering to the most stringent quality standards in the industry."
    },
    {
      title: "Timeless Elegance",
      description: "Our designs blend contemporary aesthetics with classic elements to create pieces that transcend trends."
    },
    {
      title: "Ethical Sourcing",
      description: "We are committed to responsible mining practices and full transparency throughout our supply chain."
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <FadeIn direction="right">
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-diamond-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-diamond-gradient opacity-60"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-diamond-50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-diamond-gradient opacity-80"></div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.1}>
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border border-diamond-200 rounded-full mb-6">
                Our Story
              </span>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                A Legacy of <span className="text-gradient bg-text-gradient">Excellence</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <p className="text-diamond-700 mb-8">
                Established with a vision to redefine luxury, Richie Diamond Foundation stands as a testament to exceptional craftsmanship and innovation in the world of fine jewelry. Our journey began with a simple yet profound belief: that every diamond tells a unique story.
              </p>
              <p className="text-diamond-700 mb-8">
                Today, we continue to honor that vision by creating pieces that not only captivate the eye but also touch the heart, becoming cherished heirlooms passed down through generations.
              </p>
            </FadeIn>
            
            <div className="space-y-6 mt-10">
              {values.map((value, index) => (
                <FadeIn key={index} delay={0.6 + index * 0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-diamond-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-diamond-500"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{value.title}</h3>
                      <p className="text-diamond-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
