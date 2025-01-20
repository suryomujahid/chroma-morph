export const lerp = (start: number, end: number, amt: number): number => {
  return (1 - amt) * start + amt * end;
};

export const generateNoise = (
  p5: any,
  time: number,
  index: number,
  baseFreq: number = 0.1,
  timeScale: number = 0.5
): number => {
  return p5.noise(time + index * baseFreq, time * timeScale) * 0.2;
};