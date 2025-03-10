
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "./ImageCarousel";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface OutreachReportProps {
  selectedOutreach: string;
}

const OutreachReport = ({ selectedOutreach }: OutreachReportProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const outreachImages = [
    "/lovable-uploads/2fae06fe-1440-49de-9f5d-79d7819eda9c.png",
    "/lovable-uploads/8d3d1c7a-227e-4b33-8b22-23fee6ca4d5c.png",
    "/lovable-uploads/0584152a-24e5-48be-90d8-d52a14113dea.png",
    "/lovable-uploads/e5c8ad4c-044e-4b93-adc7-b5ffb2461de7.png",
    "/lovable-uploads/2259d445-c196-4b42-98b7-e5a0a2d02aee.png",
    "/lovable-uploads/1677421e-6072-4f0d-8e68-bbbdda9002dc.png",
    "/lovable-uploads/fd3b25bf-364e-441e-8941-e1f39a572347.png"
  ];
  
  const stateData = [
    { name: "North Central (Kwara)", children: 45, amount: 220361 },
    { name: "North East (Bauchi)", children: 25, amount: 194800 },
    { name: "North West (Kano)", children: 10, amount: 189070 },
    { name: "South South (Bayelsa)", children: 20, amount: 193000 },
    { name: "South East (Anambra)", children: 20, amount: 193800 },
    { name: "South West (Oyo)", children: 20, amount: 194470 },
    { name: "South West (Lagos)", children: 10, amount: 277700 }
  ];
  
  const financialData = {
    target: 1000,
    raised: 1030,
    expenses: 1463201 / 2008.5, // Convert to pounds for comparison
    balance: 545299 / 2008.5 // Convert to pounds for comparison
  };
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  
  const pieData = [
    { name: 'Target', value: financialData.target },
    { name: 'Raised', value: financialData.raised },
  ];
  
  // Currently we only have data for December Outreach 2024
  // For other outreaches, display a placeholder message
  if (selectedOutreach !== "December Outreach 2024") {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">{selectedOutreach}</h3>
            <p className="text-lg text-textSecondary">
              Report for this outreach is coming soon. Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{selectedOutreach}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Last year's outreach reached 8 orphanages across 6 geopolitical zones in Nigeria, 
            impacting over 100 children with educational resources and essential supplies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <ImageCarousel images={outreachImages} />
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
        
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="finances">Finances</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="locations" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-textPrimary mb-6">Events Highlights by Location</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Location</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Activities</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Impact</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">North Central<br/>Kwara State</td>
                        <td className="py-3 px-4">A team of 5 volunteers coordinated spiritual impartation, interactive skill-building sessions, and educational materials distribution.</td>
                        <td className="py-3 px-4">Over 45 children received specific gifts like educational materials, hygiene kits and food items.</td>
                      </tr>
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">North East<br/>Bauchi State</td>
                        <td className="py-3 px-4">7 volunteers oversaw health awareness, personal development sessions, spiritual impartation and materials donation.</td>
                        <td className="py-3 px-4">Empowered 25+ children with resources to continue their education and experience the love of Christ.</td>
                      </tr>
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">North West<br/>Kano State</td>
                        <td className="py-3 px-4">5 volunteers on ground oversaw educational materials distribution, spiritual impartation, career development and emotional support.</td>
                        <td className="py-3 px-4">Empowered over 10 kids with resources to continue their education and distribution of food items.</td>
                      </tr>
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">South South<br/>Bayelsa State</td>
                        <td className="py-3 px-4">Partnership with 50 volunteers from NCCF coordinated spiritual impartation, altar call, interactive life skills training.</td>
                        <td className="py-3 px-4">Empowered over 20 children with resources to continue their education and develop their career and God-given talents.</td>
                      </tr>
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">South East<br/>Anambra State</td>
                        <td className="py-3 px-4">4 volunteers coordinated materials donation, sharing of the gospel and emotional/career support.</td>
                        <td className="py-3 px-4">Empowered 20 kids with necessary support and materials to keep their love for Christ, dreams and career aspirations alive.</td>
                      </tr>
                      <tr className="border-b hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">South West<br/>Oyo State</td>
                        <td className="py-3 px-4">4 volunteers including the legal team head and director coordinated spiritual impartation, prayer sessions, and life skills training.</td>
                        <td className="py-3 px-4">Empowered over 20 kids and boosted their confidence and spiritual connection with God.</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="py-3 px-4 font-semibold">South West<br/>Lagos State</td>
                        <td className="py-3 px-4">5 volunteers handled the Lagos Christmas outreach with Word & prayer sessions, interactive sessions, and career & emotional support.</td>
                        <td className="py-3 px-4">Spiritual and career empowerment of over 10 kids, donation of resources to the kids and the orphanage.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Children Reached by State</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={stateData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" tick={{fontSize: 10}} angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="children" fill="#4A90E2" name="Children Reached" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Geographic Distribution</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stateData.map((state, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="font-medium text-sm">{state.name.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
                <div className="h-60 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stateData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="children"
                        label={({ name, percent }) => `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`}
                      >
                        {stateData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="finances" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-textPrimary mb-6">Financial Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Campaign Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Target</span>
                          <span className="font-bold">£1,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Amount Raised</span>
                          <span className="font-bold text-green-600">£1,030</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Nigerian Naira</span>
                          <span className="font-bold">₦2,008,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Total Expenses</span>
                          <span className="font-bold">₦1,463,201</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="font-medium">Balance</span>
                          <span className="font-bold text-blue-600">₦545,299</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Expenses by State</h4>
                      <ul className="space-y-2">
                        {stateData.map((state, index) => (
                          <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>{state.name}</span>
                            <span className="font-semibold">₦{state.amount.toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="h-60">
                      <h4 className="text-lg font-semibold mb-3 text-center">Target vs. Raised</h4>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, value }) => `${name}: £${value}`}
                          >
                            <Cell fill="#4A90E2" />
                            <Cell fill="#48BB78" />
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold mb-3">Fund Utilization</h4>
                      <p className="text-textSecondary mb-4">
                        The funds were used to provide educational resources such as notebooks, other essential
                        school supplies, and food items like beverages, noodles, rice, vegetable oil, etc., to the orphaned
                        children in eight orphanages across Nigeria.
                      </p>
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '73%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>73% Utilized</span>
                          <span>27% Balance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OutreachReport;
