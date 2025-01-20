import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import Canvas from './components/Canvas';
import { ColorPalette } from './components/ui/ColorPalette';
import { SpeedControl } from './components/ui/SpeedControl';
import { ShapeSelector } from './components/ui/ShapeSelector';
import { COLOR_PALETTES } from './constants/colors';
import { ColorScheme, ShapePaths } from './types';

function App() {
  const [speed, setSpeed] = useState(1);
  const [colorScheme, setColorScheme] = useState<ColorScheme>([200, 80, 60]);
  const [morphPath, setMorphPath] = useState<keyof typeof ShapePaths>(ShapePaths.Circle);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Wand2 className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ChromaMorph
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Controls Panel */}
          <div className="lg:w-1/4 space-y-6 bg-gray-800 p-6 rounded-lg">
            <SpeedControl speed={speed} onSpeedChange={setSpeed} />
            <ColorPalette
              colors={COLOR_PALETTES}
              selectedColor={colorScheme}
              onColorSelect={setColorScheme}
            />
            <ShapeSelector
              currentShape={morphPath}
              onShapeSelect={setMorphPath}
            />
          </div>

          {/* Canvas */}
          <div className="lg:w-3/4 grid place-content-center overflow-hidden rounded-lg">
            <Canvas
              speed={speed}
              colorScheme={colorScheme}
              morphPath={morphPath}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;