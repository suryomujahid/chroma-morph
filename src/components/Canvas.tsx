import React, { useRef, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { CanvasProps, Point } from '../types';
import { SHAPES } from '../constants/shapes';
import { lerp, generateNoise } from '../utils/animation';

const Canvas: React.FC<CanvasProps> = ({ speed, colorScheme, morphPath }) => {
  const timeRef = useRef(0);
  const currentColorRef = useRef(colorScheme);
  const currentSpeedRef = useRef(speed);
  const currentShapeRef = useRef<Point[]>([]);

  useEffect(() => {
    // Initialize shape if empty
    if (!currentShapeRef.current.length) {
      currentShapeRef.current = [...SHAPES[morphPath]];
    }
  }, [morphPath]);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvas = p5.createCanvas(800, 800);
    canvas.parent(canvasParentRef);
    p5.colorMode(p5.HSL, 360, 100, 100);
    canvas.addClass('rounded-lg');

    // Set the current shape right away
    currentShapeRef.current = SHAPES[morphPath];
  };

  const draw = (p5: p5Types) => {
    // Canvas prep
    p5.background(20);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(150);

    // Smoothly move currentSpeedRef to 'speed'
    currentSpeedRef.current = lerp(currentSpeedRef.current, speed, 0.1);

    // Let time increment be influenced by speed
    timeRef.current += currentSpeedRef.current * 0.01;

    // Define how fast shapes/colors morph based on speed
    // Increase the base factors (0.05, etc.) if you want them faster still
    const shapeLerpFactor = 0.05 * currentSpeedRef.current;
    const colorLerpFactor = 0.05 * currentSpeedRef.current;

    // Smooth color transition, scaled by speed
    currentColorRef.current = [
      lerp(currentColorRef.current[0], colorScheme[0], colorLerpFactor),
      lerp(currentColorRef.current[1], colorScheme[1], colorLerpFactor),
      lerp(currentColorRef.current[2], colorScheme[2], colorLerpFactor),
    ] as [number, number, number];

    // Shape morphing
    const targetShape = SHAPES[morphPath];
    currentShapeRef.current = currentShapeRef.current.map((point, i) => {
      const target = targetShape[i] || targetShape[targetShape.length - 1];
      return [
        lerp(point[0], target[0], shapeLerpFactor),
        lerp(point[1], target[1], shapeLerpFactor),
      ] as Point;
    });

    // Draw shape
    p5.beginShape();
    p5.noFill();
    p5.strokeWeight(0.02);

    currentShapeRef.current.forEach((point, i) => {
      const t = i / currentShapeRef.current.length;
      // Subtle hue shift “wave”
      const hueOffset = p5.map(
        Math.sin(timeRef.current * 2 + t * Math.PI * 2),
        -1,
        1,
        -30,
        30
      );

      p5.stroke(
        currentColorRef.current[0] + hueOffset,
        currentColorRef.current[1],
        currentColorRef.current[2]
      );

      // Noise-based wobble
      const noise = generateNoise(p5, timeRef.current, i);
      const x = point[0] * (1 + noise * Math.sin(timeRef.current));
      const y = point[1] * (1 + noise * Math.cos(timeRef.current));

      p5.vertex(x, y);
    });

    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} draw={draw} removeOnUnmount />;
};

export default Canvas;
