import React from 'react';
import { Palette } from 'lucide-react';
import { ColorScheme } from '../../types';

interface ColorPaletteProps {
  colors: ColorScheme[];
  selectedColor: ColorScheme;
  onColorSelect: (color: ColorScheme) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  selectedColor,
  onColorSelect,
}) => {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-xl mb-4">
        <Palette className="w-5 h-5" />
        Color Palette
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onColorSelect(color)}
            className={`w-full aspect-square rounded-lg transition-all duration-300 transform hover:scale-105 ${
              color === selectedColor
                ? 'ring-2 ring-purple-400 scale-105'
                : 'hover:ring-1 hover:ring-purple-400/50'
            }`}
            style={{
              backgroundColor: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`,
              boxShadow:
                color === selectedColor
                  ? `0 0 20px hsla(${color[0]}, ${color[1]}%, ${color[2]}%, 0.3)`
                  : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};