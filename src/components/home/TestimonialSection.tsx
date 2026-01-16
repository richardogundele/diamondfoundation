import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amara Johnson",
      role: "Parent, Lagos",
      content: "Diamond Foundation didn't just help my daughter get an education—they gave our entire family hope for a better future. The scholarship program transformed our lives completely.",
      rating: 5,
      image: "/lovable-uploads/a071ffa0-3f81-4ddd-b75f-3ddbecc5213c.png"
    },
    {
      name: "Dr. Emmanuel Okafor",
      role: "Headmaster, Enugu",
      content: "The school renovation project brought our community together. Seeing children excited to learn again in their beautiful new classrooms fills my heart with joy every single day.",
      rating: 5,
      image: "/lovable-uploads/962bb112-3a7c-40ae-96b5-07928ab6a2f3.png"
    },
    {
      name: "Sister Mary Grace",
      role: "Community Leader, Abuja",
      content: "I've watched Diamond Foundation work tirelessly for our children. Their dedication and genuine love for what they do is evident in every project they undertake.",
      rating: 5,
      image: "/lovable-uploads/ee2f541f-04ca-4f47-95a8-639911395629.png"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Stories of Hope</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-foreground mb-6">
            Voices from Our <span className="text-gradient">Community</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from the families and communities we've had the privilege to serve
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-3xl p-8 relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Accent border */}
              <div className="absolute inset-0 rounded-3xl gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground/80 mb-8 leading-relaxed text-base">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-2xl object-cover ring-4 ring-background shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to share your story or learn more about our impact?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-premium text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group">
                Share Your Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link to="/impact">
              <button className="glass-card px-8 py-4 rounded-full font-bold text-foreground flex items-center justify-center gap-2 group hover:bg-muted transition-all">
                View All Testimonials
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;