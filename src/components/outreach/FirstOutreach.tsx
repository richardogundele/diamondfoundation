
import React from 'react';

interface FirstOutreachProps {
  title: string;
  imageSrc: string;
}

const FirstOutreach = ({ title, imageSrc }: FirstOutreachProps) => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src={imageSrc} 
              alt="First Ever Premier Outreach 2020" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 bg-blue-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">The Birth of Diamond Foundation</h3>
            <div className="space-y-4 text-textSecondary">
              <p className="font-semibold text-lg text-primary">
                "Every child deserves to be the best; that child in the orphanage has the potential to transform our society."
              </p>
              <p>
                The Diamond Foundation was born on November 27th, 2020, with our first ever premier outreach to orphaned children in Nigeria. 
                What began as a small initiative by our founder, Richard Ogundele, quickly blossomed into a movement of compassion and hope.
              </p>
              <p>
                During this inaugural outreach, we visited two orphanages in Lagos State, bringing joy, essential supplies, and educational materials to over 
                30 children. This humble beginning marked the foundation of our mission to transform the lives of orphaned and vulnerable children across Africa.
              </p>
              <p>
                The overwhelming response from volunteers and donors inspired us to expand our vision and formalize the Diamond Foundation 
                with a commitment to regular outreach programs across Nigeria's six geopolitical zones.
              </p>
              <p className="italic">
                "All they need is people who will help them become better. Children are gifts from God!"
              </p>
              
              <div className="bg-white p-4 rounded-lg mt-4">
                <h4 className="font-bold text-primary">Key Achievements:</h4>
                <ul className="list-disc pl-5 mt-2">
                  <li>Reached 30+ children in our first outreach</li>
                  <li>Mobilized 15 dedicated volunteers</li>
                  <li>Provided educational materials and essential supplies</li>
                  <li>Established our core vision and mission</li>
                  <li>Laid the groundwork for future nationwide outreach programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">From Small Beginnings to National Impact</h3>
            <p className="mb-4">
              Our journey began with the simple belief that every child deserves opportunity, regardless of their circumstances. 
              From our first outreach in 2020 to our current operations spanning multiple states, the Diamond Foundation has remained 
              committed to transforming lives one child at a time.
            </p>
            <p>
              As we continue to grow, we invite you to join us in our mission. Whether through financial support, volunteering, or 
              raising awareness, you can help us create lasting change in the lives of orphaned children across Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstOutreach;
