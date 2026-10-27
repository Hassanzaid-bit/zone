import test from 'node:test';
import assert from 'node:assert/strict';
import { createPestRun } from '../src/utils/pestMotion.js';

function sequenceRandom(values) {
  let index = 0;
  return () => {
    const value = values[index % values.length];
    index += 1;
    return value;
  };
}

test('createPestRun creates a varied off-screen route with natural timing', () => {
  const random = sequenceRandom([
    0.10, 0.72, 0.31, 0.88, 0.42, 0.66, 0.25, 0.91,
    0.54, 0.13, 0.79, 0.37, 0.61, 0.20, 0.84, 0.47,
  ]);

  const run = createPestRun(1440, 900, random);

  assert.ok(run.durationMs >= 6500 && run.durationMs <= 11500);
  assert.ok(run.idleMs >= 18000 && run.idleMs <= 38000);
  assert.ok(run.keyframes.length >= 5 && run.keyframes.length <= 8);

  const first = run.points[0];
  const last = run.points.at(-1);
  const isOutside = ({ x, y }) => x < 0 || x > 1440 || y < 0 || y > 900;
  assert.equal(isOutside(first), true);
  assert.equal(isOutside(last), true);

  const interior = run.points.slice(1, -1);
  assert.equal(
    interior.every(({ x, y }) => x >= 0 && x <= 1440 && y >= 0 && y <= 900),
    true,
  );

  for (const frame of run.keyframes) {
    assert.match(frame.transform, /^translate3d\(-?\d+(?:\.\d+)?px, -?\d+(?:\.\d+)?px, 0\) rotate\(-?\d+(?:\.\d+)?deg\)$/);
    assert.ok(frame.offset >= 0 && frame.offset <= 1);
  }

  assert.equal(run.keyframes[0].offset, 0);
  assert.equal(run.keyframes.at(-1).offset, 1);
  assert.equal(run.keyframes[0].opacity, 0);
  assert.equal(run.keyframes.at(-1).opacity, 0);

  const offsets = run.keyframes.map(({ offset }) => offset);
  assert.equal(new Set(offsets).size, offsets.length);
});
