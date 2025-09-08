import { useState, useEffect } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

const InstagramSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock Instagram posts for demo - replace with actual Instagram API integration
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      caption: "🌟 Exciting news! Our latest community outreach program in Lagos reached over 500 families with essential healthcare services. Thank you to all our amazing volunteers! #DiamondFoundation #CommunityOutreach #Lagos",
      media_url: "/lovable-uploads/7857c809-6a1f-4223-9a63-2568304b72dc.png",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example1",
      timestamp: "2024-01-15T10:30:00Z"
    },
    {
      id: "2", 
      caption: "📚 Education is the foundation of progress! Our scholarship program now supports 150+ students across West Africa. Every child deserves access to quality education. #Education #Scholarship #Africa",
      media_url: "/lovable-uploads/2db47a69-8efb-4a10-9470-d1cd1e723988.png",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example2",
      timestamp: "2024-01-12T14:20:00Z"
    },
    {
      id: "3",
      caption: "💧 Clean water changes everything! Our water project in rural Ghana is now complete, providing safe drinking water to 2,000+ people. #CleanWater #Ghana #SustainableDevelopment",
      media_url: "/lovable-uploads/5157c3be-67c1-416b-b8a7-09aa555ab73c.png",
      media_type: "IMAGE", 
      permalink: "https://instagram.com/p/example3",
      timestamp: "2024-01-10T09:15:00Z"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setPosts(mockPosts);
      } catch (err) {
        setError("Failed to load Instagram posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 120) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest from Instagram
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our journey and see the real impact we're making in communities across Africa
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 mb-4">{error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeletons
            [...Array(3)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.media_url}
                      alt="Instagram post"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4 text-white">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">234</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {truncateCaption(post.caption)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.timestamp)}
                      </span>
                      
                      <Button
                        variant="outline" 
                        size="sm"
                        className="group/btn hover:bg-pink-50 hover:border-pink-300"
                        onClick={() => window.open(post.permalink, '_blank')}
                      >
                        View Post
                        <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://instagram.com/diamondfoundation', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-3" />
            Follow Us on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;