import { Point, Shape } from '../types';

function subdivideCornersExact(corners: Point[], desiredCount: number): Shape {
  const edgeCount = corners.length;
  const extraNeeded = desiredCount - edgeCount;
  if (extraNeeded < 0) {
    // More corners than desiredCount => just truncate
    return corners.slice(0, desiredCount);
  }
  if (extraNeeded === 0) {
    // Already matches
    return corners;
  }

  const baseSubs = Math.floor(extraNeeded / edgeCount);
  let remainder = extraNeeded % edgeCount;

  let result: Shape = [];
  for (let e = 0; e < edgeCount; e++) {
    const curr = corners[e];
    const next = corners[(e + 1) % edgeCount];

    // Push the corner, except skip if not e=0 to avoid double.
    if (e === 0) {
      result.push(curr);
    } else {
      // If the previous loop ended by adding next corner, 
      // we might skip. But let's keep it simple & accept 
      // a possible duplicate, or handle carefully:
      result.push(curr);
    }

    let thisEdgeSubs = baseSubs;
    if (remainder > 0) {
      thisEdgeSubs++;
      remainder--;
    }

    for (let i = 1; i <= thisEdgeSubs; i++) {
      const t = i / (thisEdgeSubs + 1);
      const x = curr[0] * (1 - t) + next[0] * t;
      const y = curr[1] * (1 - t) + next[1] * t;
      result.push([x, y]);
    }
  }
  return result.slice(0, desiredCount);
}

/**
 * Generates a 5-point star with outer radius=1 and inner radius=0.5.
 * => 10 corners total.
 */
function generateStarCorners(outer = 1, inner = 0.5): Shape {
  const corners: Shape = [];
  for (let i = 0; i < 10; i++) {
    // 10 corners for a 5-point star
    const angle = (Math.PI * 2 * i) / 10;
    // Even corners = outer radius, odd corners = inner radius
    const r = i % 2 === 0 ? outer : inner;
    corners.push([r * Math.cos(angle), r * Math.sin(angle)]);
  }
  return corners;
}

/**
 * Generates an equilateral triangle with corners at:
 *   top: (0, -1)
 *   bottom-right: (√3/2, 0.5)
 *   bottom-left : (-√3/2, 0.5)
 */
function generateTriangleCorners(): Shape {
  return [
    [0, -1],
    [Math.sqrt(3) / 2, 0.5],
    [-Math.sqrt(3) / 2, 0.5],
  ];
}

/**
 * Generates a regular pentagon: 5 corners around a unit circle,
 * starting with angle= -90° so the top corner is at (0, -1).
 */
function generatePentagonCorners(): Shape {
  const corners: Shape = [];
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    corners.push([Math.cos(angle), Math.sin(angle)]);
  }
  return corners;
}

// STILL keep your circle & square
// circle = 36 equally spaced points
// square = 4 corners subdivided so total=36
export const SHAPES = {
  circle: (() => {
    // 36 evenly spaced around radius=1
    const count = 36;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * Math.PI * 2) / count;
      return [Math.cos(angle), Math.sin(angle)] as Point;
    });
  })(),

  square: (() => {
    // 4 corners => we want total=36 => so 32 extra points
    const corners: Shape = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1]
    ];
    return subdivideCornersExact(corners, 36);
  })(),

  star: (() => {
    // 10 corners => we want total=36 => 26 extras
    const corners = generateStarCorners(1, 0.5);
    return subdivideCornersExact(corners, 36);
  })(),

  triangle: (() => {
    // 3 corners => 36 => 33 extras
    const corners = generateTriangleCorners();
    return subdivideCornersExact(corners, 36);
  })(),

  pentagon: (() => {
    // 5 corners => 36 => 31 extras
    const corners = generatePentagonCorners();
    return subdivideCornersExact(corners, 36);
  })()
};
