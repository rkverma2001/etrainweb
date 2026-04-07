import React from "react";

interface MiniProgressProps {
  percent?: number;
  label: string;
}

const MiniProgress: React.FC<MiniProgressProps> = ({ percent = 0, label }) => {
  return (
    <div className="w-full">
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-green-600"
        ></div>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {label} • {percent}%
      </div>
    </div>
  );
};

export default MiniProgress;
