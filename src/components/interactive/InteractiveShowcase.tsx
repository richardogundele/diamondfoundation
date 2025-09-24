import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import ProgressBar from '../ui/progress-bar';
import PhotoGallery from '../ui/photo-gallery';
import { Camera, TrendingUp, Heart, Users, Target } from 'lucide-react';

const InteractiveShowcase: React.FC = () => {
  // Photos from impact outreach programs
  const impactPhotos = [
    {
      id: '1',
      src: '/lovable-uploads/ee2f541f-04ca-4f47-95a8-639911395629.png',
      alt: 'December 2024 outreach program',
      title: 'December Outreach 2024',
      description: 'Reaching children across 6 geopolitical zones in Nigeria',
      category: 'outreach'
    },
    {
      id: '2',
      src: '/lovable-uploads/a58379e3-1bb5-43b3-a5ba-4dfa05a5a62c.png',
      alt: 'Community education initiative',
      title: 'Educational Support Program',
      description: 'Providing learning materials and educational resources',
      category: 'education'
    },
    {
      id: '3',
      src: '/lovable-uploads/2db47a69-8efb-4a10-9470-d1cd1e723988.png',
      alt: 'Children empowerment program',
      title: 'Child Empowerment Initiative',
      description: 'Empowering children with skills and opportunities',
      category: 'empowerment'
    },
    {
      id: '4',
      src: '/lovable-uploads/a3208aad-45ff-4f26-8956-f840a9408f3b.png',
      alt: 'Bayelsa state outreach',
      title: 'South South Outreach',
      description: 'Reaching communities in Bayelsa state',
      category: 'outreach'
    },
    {
      id: '5',
      src: '/lovable-uploads/9217d915-9380-4892-a5c8-89c86e2f12cc.png',
      alt: 'Ilorin outreach program',
      title: 'North Central Outreach',
      description: 'Community impact in Kwara state',
      category: 'outreach'
    },
    {
      id: '6',
      src: '/lovable-uploads/7fa8b40c-d370-4fb9-9665-0d98c125ae91.png',
      alt: 'Mega outreach 2024',
      title: 'Mega Outreach 2024',
      description: 'Our largest community impact program',
      category: 'mega-outreach'
    },
    {
      id: '7',
      src: '/lovable-uploads/5157c3be-67c1-416b-b8a7-09aa555ab73c.png',
      alt: 'First outreach program',
      title: 'November Outreach 2020',
      description: 'Where it all began - our first outreach program',
      category: 'first-outreach'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Interactive Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our real-time impact metrics, outreach locations, and community stories through interactive visualizations
          </p>
        </motion.div>

        {/* Progress Bars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">2024 Impact Goals</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ProgressBar
                  value={8500}
                  max={10000}
                  label="Children Reached"
                  color="primary"
                  size="lg"
                />
                <ProgressBar
                  value={750000}
                  max={1000000}
                  label="Funds Raised (₦)"
                  color="success"
                  size="lg"
                />
                <ProgressBar
                  value={42}
                  max={50}
                  label="Communities Served"
                  color="warning"
                  size="lg"
                />
              </div>
              
              <div className="space-y-6">
                <ProgressBar
                  value={125}
                  max={150}
                  label="Active Volunteers"
                  color="secondary"
                  size="lg"
                />
                <ProgressBar
                  value={18}
                  max={25}
                  label="Partner Organizations"
                  color="primary"
                  size="lg"
                />
                <ProgressBar
                  value={5200}
                  max={6000}
                  label="Meals Provided"
                  color="success"
                  size="lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>


        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Impact Stories Gallery</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Visual stories from our community outreach programs. Click any image for a closer look.
            </p>
            <PhotoGallery photos={impactPhotos} columns={3} />
          </Card>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="p-6 text-center hover-lift hover-glow group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:animate-bounce-in">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Real-time Impact</h4>
            <p className="text-muted-foreground">
              Track our progress with live updates on donations, volunteer activities, and community reach
            </p>
          </Card>

          <Card className="p-6 text-center hover-lift hover-glow group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:animate-bounce-in">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Community Stories</h4>
            <p className="text-muted-foreground">
              Explore authentic stories and photos from the communities we serve across Nigeria
            </p>
          </Card>

          <Card className="p-6 text-center hover-lift hover-glow group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:animate-bounce-in">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Goal Tracking</h4>
            <p className="text-muted-foreground">
              Visual progress bars show how close we are to achieving our annual impact goals
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveShowcase;