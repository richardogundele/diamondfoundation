
import { motion } from "framer-motion";
import { Quote, Star, Heart } from "lucide-react";

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
    <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-gray-800 font-semibold">Stories of Hope</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Voices from Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from the families and communities we've had the privilege to serve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Quote icon */}
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-blue-500 mb-6 opacity-60" />
                
                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Want to share your story or learn more about our impact?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Story
            </motion.button>
            <motion.button
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Testimonials
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
