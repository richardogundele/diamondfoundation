
import React from 'react';

interface OutreachStatsProps {
  title: string;
  description: string;
  imageCarousel: React.ReactNode;
}

const OutreachStats = ({ title, description, imageCarousel }: OutreachStatsProps) => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            {imageCarousel}
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Project Overview</h3>
            <div className="space-y-4 text-textSecondary">
              <p>
                In the joy of the Christmas season, the Diamond Foundation partnered to raise <span className="font-semibold">£1,030</span> to provide educational resources and food items to orphaned children.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">100+</h4>
                  <p className="text-sm">Children Impacted</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">60+</h4>
                  <p className="text-sm">Volunteers</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">8</h4>
                  <p className="text-sm">Orphanages</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">6</h4>
                  <p className="text-sm">Geopolitical Zones</p>
                </div>
              </div>
              <blockquote className="italic border-l-4 border-primary pl-4 mt-6">
                "The love of Christ has compelled us to reach out to orphaned kids this Christmas, showing them love, kindness, and compassion in His name."
                <footer className="text-sm mt-2">- Director</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachStats;
