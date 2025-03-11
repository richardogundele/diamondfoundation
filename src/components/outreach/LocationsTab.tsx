
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface LocationsTabProps {
  stateData: {
    name: string;
    children: number;
    amount: number;
  }[];
  COLORS: string[];
}

const LocationsTab = ({ stateData, COLORS }: LocationsTabProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default LocationsTab;
