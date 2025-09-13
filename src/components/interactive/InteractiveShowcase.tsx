import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import ProgressBar from '../ui/progress-bar';
import InteractiveMap from '../ui/interactive-map';
import PhotoGallery from '../ui/photo-gallery';
import { MapPin, Camera, TrendingUp, Heart, Users, Target } from 'lucide-react';

const InteractiveShowcase: React.FC = () => {
  // Sample photos for gallery
  const samplePhotos = [
    {
      id: '1',
      src: '/public/lovable-uploads/1677421e-6072-4f0d-8e68-bbbdda9002dc.png',
      alt: 'Community outreach program',
      title: 'Educational Support Program',
      description: 'Teaching underprivileged children in Lagos community',
      category: 'education'
    },
    {
      id: '2',
      src: '/public/lovable-uploads/2259d445-c196-4b42-98b7-e5a0a2d02aee.png',
      alt: 'Healthcare initiative',
      title: 'Free Medical Checkups',
      description: 'Providing healthcare services to rural communities',
      category: 'healthcare'
    },
    {
      id: '3',
      src: '/public/lovable-uploads/5157c3be-67c1-416b-b8a7-09aa555ab73c.png',
      alt: 'Skills development workshop',
      title: 'Youth Empowerment Workshop',
      description: 'Vocational training for sustainable livelihoods',
      category: 'skills'
    },
    {
      id: '4',
      src: '/public/lovable-uploads/7857c809-6a1f-4223-9a63-2568304b72dc.png',
      alt: 'Community gathering',
      title: 'Community Engagement',
      description: 'Building stronger communities together',
      category: 'community'
    },
    {
      id: '5',
      src: '/public/lovable-uploads/8d3d1c7a-227e-4b33-8b22-23fee6ca4d5c.png',
      alt: 'Food distribution',
      title: 'Food Security Program',
      description: 'Ensuring no child goes to bed hungry',
      category: 'nutrition'
    },
    {
      id: '6',
      src: '/public/lovable-uploads/9217d915-9380-4892-a5c8-89c86e2f12cc.png',
      alt: 'Water project',
      title: 'Clean Water Initiative',
      description: 'Providing access to clean drinking water',
      category: 'water'
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

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Our Outreach Locations</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Explore our active outreach locations across Nigeria. Click on markers to see details about each program.
            </p>
            <InteractiveMap />
          </Card>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            <PhotoGallery photos={samplePhotos} columns={3} />
          </Card>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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