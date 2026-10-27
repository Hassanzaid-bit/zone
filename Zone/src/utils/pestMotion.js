const EDGE_MARGIN = 64;
const EASINGS = [
  'cubic-bezier(0.33, 0.02, 0.32, 1)',
  'cubic-bezier(0.18, 0.72, 0.24, 1)',
  'cubic-bezier(0.42, 0, 0.58, 1)',
  'cubic-bezier(0.22, 0.61, 0.36, 1)',
];

const randomBetween = (min, max, randomFn) => min + ((max - min) * randomFn());

const pointOnEdge = (edge, width, height, randomFn) => {
  const x = randomBetween(width * 0.08, width * 0.92, randomFn);
  const y = randomBetween(height * 0.08, height * 0.92, randomFn);

  switch (edge) {
    case 0:
      return { x, y: -EDGE_MARGIN };
    case 1:
      return { x: width + EDGE_MARGIN, y };
    case 2:
      return { x, y: height + EDGE_MARGIN };
    default:
      return { x: -EDGE_MARGIN, y };
  }
};

const rotationBetween = (from, to) => {
  const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
  return Math.round((angle + 90) * 10) / 10;
};

const normalizedOffsets = (pointCount, randomFn) => {
  const weights = Array.from({ length: pointCount - 1 }, () => randomBetween(0.65, 1.45, randomFn));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let elapsed = 0;

  return [
    0,
    ...weights.slice(0, -1).map((weight) => {
      elapsed += weight;
      return Math.round((elapsed / total) * 1000) / 1000;
    }),
    1,
  ];
};

export function createPestRun(viewportWidth, viewportHeight, randomFn = Math.random) {
  const width = Math.max(320, viewportWidth);
  const height = Math.max(320, viewportHeight);
  const startEdge = Math.floor(randomFn() * 4);
  const edgeOffset = 1 + Math.floor(randomFn() * 3);
  const exitEdge = (startEdge + edgeOffset) % 4;
  const intermediateCount = 3 + Math.floor(randomFn() * 4);

  const points = [pointOnEdge(startEdge, width, height, randomFn)];

  for (let index = 0; index < intermediateCount; index += 1) {
    points.push({
      x: Math.round(randomBetween(width * 0.06, width * 0.94, randomFn) * 10) / 10,
      y: Math.round(randomBetween(height * 0.08, height * 0.92, randomFn) * 10) / 10,
    });
  }

  points.push(pointOnEdge(exitEdge, width, height, randomFn));

  const offsets = normalizedOffsets(points.length, randomFn);
  const keyframes = points.map((point, index) => {
    const nextPoint = points[Math.min(index + 1, points.length - 1)];
    const previousPoint = points[Math.max(index - 1, 0)];
    const rotation = rotationBetween(
      index === points.length - 1 ? previousPoint : point,
      index === points.length - 1 ? point : nextPoint,
    );

    return {
      transform: `translate3d(${point.x}px, ${point.y}px, 0) rotate(${rotation}deg)`,
      opacity: index === 0 || index === points.length - 1 ? 0 : 0.94,
      offset: offsets[index],
      easing: EASINGS[Math.floor(randomFn() * EASINGS.length)],
    };
  });

  return {
    points,
    keyframes,
    durationMs: Math.round(randomBetween(6500, 11500, randomFn)),
    idleMs: Math.round(randomBetween(18000, 38000, randomFn)),
  };
}
