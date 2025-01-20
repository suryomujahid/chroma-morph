// Shape Types
export type Point = [number, number];
export type Shape = Point[];

export type ColorScheme = [number, number, number];

export interface CanvasProps {
  speed: number;
  colorScheme: ColorScheme;
  morphPath: keyof typeof ShapePaths;
}

// Enum for available shape paths
export enum ShapePaths {
  Circle = 'circle',
  Square = 'square',
  Star = 'star',
  Triangle = 'triangle',
  Pentagon = 'pentagon'
}