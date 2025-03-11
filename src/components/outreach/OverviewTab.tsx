
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold text-textPrimary mb-4">Year in Review</h3>
          <p className="text-textSecondary mb-4">
            This year, Diamond Foundation made remarkable strides in transforming the lives of underprivileged children through six impactful orphanage outreaches across Nigeria's geopolitical zones. From spiritual impartation and personal development to health services and gift distribution, we brought hope and practical support to hundreds of children.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-textPrimary mb-2">Challenges Faced</h4>
              <ul className="list-disc pl-5 text-textSecondary space-y-1">
                <li>Logistical hurdles in reaching remote areas</li>
                <li>Limited resources to meet growing needs</li>
                <li>Regional-specific issues including language barriers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-textPrimary mb-2">Future Plans</h4>
              <ul className="list-disc pl-5 text-textSecondary space-y-1">
                <li>Expanding outreach programs across Africa</li>
                <li>Applying for grants and building partnerships</li>
                <li>Developing long-term skill acquisition initiatives</li>
                <li>Establishing impact tracking systems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="pt-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-textPrimary">Our Supporters</h3>
          <p className="text-textSecondary mt-2">
            We extend our heartfelt gratitude to all donors and volunteers.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg shadow text-textSecondary">
          <p className="mb-4">
            We extend our heartfelt gratitude to all the individual donors whose generosity brought smiles to the faces of these orphaned kids. Your support has not only provided them with the materials and resources they need to succeed at their educational endeavours but also reinforced their belief in a brighter future.
          </p>
          <p className="mb-4">
            A special thank you to our fundraiser manager, Miss Uche, for her unwavering support throughout the event.
          </p>
          <p className="mb-4">
            Additionally, we appreciate all the orphanage administrators and their staffs for their valuable contribution efforts to making the event memorable and taking care of these kids. We couldn't have achieved this without your great support.
          </p>
          <p>
            A very big Thank you to all our Volunteers for believing in our mission and partnering with Us. We love and appreciate your efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
