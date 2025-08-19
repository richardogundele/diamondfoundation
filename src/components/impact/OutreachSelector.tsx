
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OutreachSelectorProps {
  selectedOutreach: string;
  setSelectedOutreach: (outreach: string) => void;
}

const outreachOptions = [
  "December Outreach 2024",
  "Mega Outreach 2024",
  "May 2025 Outreach",
  "November Outreach 2023",
  "November Outreach 2022",
  "November Outreach 2020"
];

const OutreachSelector = ({ selectedOutreach, setSelectedOutreach }: OutreachSelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-textPrimary mb-6"
      >
        Select an Outreach Report
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-md"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full flex items-center justify-between gap-2 bg-white border-primary text-primary hover:bg-primary hover:text-white py-6">
              {selectedOutreach}
              <ChevronDown className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full max-w-md bg-white shadow-lg rounded-md border border-gray-200">
            {outreachOptions.map((option, index) => (
              <DropdownMenuItem 
                key={index}
                className="cursor-pointer py-3 px-4 hover:bg-blue-50 w-full"
                onClick={() => setSelectedOutreach(option)}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
};

export default OutreachSelector;
