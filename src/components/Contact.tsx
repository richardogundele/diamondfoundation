
import { Container } from "./ui/container";
import { FadeIn } from "./animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border border-diamond-200 rounded-full mb-6">
                Get In Touch
              </span>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Experience Our <span className="text-gradient bg-text-gradient">Exceptional</span> Service
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-diamond-700 mb-10">
                We invite you to connect with our team of experts who are dedicated to providing personalized assistance 
                and guidance in helping you find the perfect piece that resonates with your unique style.
              </p>
            </FadeIn>
            
            <div className="space-y-8">
              <FadeIn delay={0.5}>
                <div>
                  <h3 className="text-lg font-medium mb-2">Schedule a Consultation</h3>
                  <p className="text-diamond-600">
                    Our diamond specialists are available for private consultations to help you find or create 
                    the perfect piece that aligns with your vision.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <div>
                  <h3 className="text-lg font-medium mb-2">Visit Our Showroom</h3>
                  <p className="text-diamond-600">
                    Experience our collections firsthand in an elegant setting designed to showcase each piece's unique beauty.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.7}>
                <div>
                  <h3 className="text-lg font-medium mb-2">Custom Creations</h3>
                  <p className="text-diamond-600">
                    Collaborate with our master craftsmen to bring your unique vision to life through our bespoke design service.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div>
            <FadeIn direction="left">
              <div className="glass-effect rounded-lg p-8 md:p-10">
                <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-diamond-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white bg-opacity-70 border border-diamond-200 rounded-md focus:ring-1 focus:ring-diamond-500 focus:border-diamond-500 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-diamond-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white bg-opacity-70 border border-diamond-200 rounded-md focus:ring-1 focus:ring-diamond-500 focus:border-diamond-500 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-diamond-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white bg-opacity-70 border border-diamond-200 rounded-md focus:ring-1 focus:ring-diamond-500 focus:border-diamond-500 outline-none transition-all resize-none"
                      placeholder="How can we assist you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-diamond-950 text-white rounded-md transition-all hover:bg-diamond-800"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
