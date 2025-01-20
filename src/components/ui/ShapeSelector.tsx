import React from 'react';
import { ShapePaths } from '../../types';

interface ShapeSelectorProps {
  currentShape: keyof typeof ShapePaths;
  onShapeSelect: (shape: keyof typeof ShapePaths) => void;
}

export const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  currentShape,
  onShapeSelect,
}) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Morph Path</h2>
      <div className="space-y-2">
        {Object.values(ShapePaths).map((path) => (
          <button
            key={path}
            onClick={() => onShapeSelect(path)}
            className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${
              currentShape === path
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};