
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface FinancesTabProps {
  stateData: {
    name: string;
    children: number;
    amount: number;
  }[];
  pieData: {
    name: string;
    value: number;
  }[];
  financialData: {
    target: number;
    raised: number;
    expenses: number;
    balance: number;
  };
}

const FinancesTab = ({ stateData, pieData, financialData }: FinancesTabProps) => {
  return (
    <div className="space-y-6">
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
                    <span className="font-bold">£{financialData.target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Amount Raised</span>
                    <span className="font-bold text-green-600">£{financialData.raised}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nigerian Naira</span>
                    <span className="font-bold">₦{(financialData.raised * 2008.5).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Expenses</span>
                    <span className="font-bold">₦{(financialData.expenses * 2008.5).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Balance</span>
                    <span className="font-bold text-blue-600">₦{(financialData.balance * 2008.5).toLocaleString()}</span>
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
    </div>
  );
};

export default FinancesTab;
