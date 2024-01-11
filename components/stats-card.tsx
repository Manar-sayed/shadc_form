import React from 'react';
import ProgressBar from "@/components/progress-bar"; // Make sure to adjust the import path based on your project structure

interface StatsCardProps {
  title: string;
  value: number;
  progress: number;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, progress, bgColor }) => {
  return (
    <div className="px-3 py-5 bg-white shadow">
      <h4 className="mb-3 text-gray-600">{title}</h4>
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{value}</p>
      </div>
      <ProgressBar progress={progress} bg={bgColor} />
    </div>
  );
};

export default StatsCard;
