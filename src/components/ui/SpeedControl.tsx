import React from 'react';
import { Settings2 } from 'lucide-react';

interface SpeedControlProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export const SpeedControl: React.FC<SpeedControlProps> = ({
  speed,
  onSpeedChange,
}) => {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-xl mb-4">
        <Settings2 className="w-5 h-5" />
        Controls
      </h2>
      <div className="space-y-2">
        <label className="block text-sm">Transformation Speed</label>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="w-full accent-purple-500"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>Slower</span>
          <span>Faster</span>
        </div>
      </div>
    </div>
  );
};