
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from './OverviewTab';
import LocationsTab from './LocationsTab';
import FinancesTab from './FinancesTab';

interface OutreachDetailTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stateData: {
    name: string;
    children: number;
    amount: number;
  }[];
  pieData: {
    name: string;
    value: number;
  }[];
  COLORS: string[];
  financialData: {
    target: number;
    raised: number;
    expenses: number;
    balance: number;
  };
}

const OutreachDetailTabs = ({ 
  activeTab, 
  setActiveTab, 
  stateData, 
  pieData, 
  COLORS,
  financialData
}: OutreachDetailTabsProps) => {
  return (
    <Tabs defaultValue="overview" value={activeTab} className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="locations">Locations</TabsTrigger>
        <TabsTrigger value="finances">Finances</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewTab />
      </TabsContent>
      
      <TabsContent value="locations">
        <LocationsTab stateData={stateData} COLORS={COLORS} />
      </TabsContent>
      
      <TabsContent value="finances">
        <FinancesTab stateData={stateData} pieData={pieData} financialData={financialData} />
      </TabsContent>
    </Tabs>
  );
};

export default OutreachDetailTabs;
