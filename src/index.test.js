import { loadGrainLinear, loadGrainQuadratic } from ".";

test.each([
  [[], 0],
  [[1, 2], 0],
  [[2, 4, 2], 0],
  [[4, 1, 3], 2],
  [[4, 1, 3, 1, 2], 3],
  [[2, 1, 5, 2, 7, 4, 10], 7],
  [[4, 3, 0, 2, 5], 7],
  [[4, 3, 0, 2, 5, 1, 2, 3], 10],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 0, 1, 2, 5, 1, 7], 35],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 0, 1, 2, 5, 1, 2], 32],
  [[4, 0, 1, 3], 5],
  [[2, 0, 1, 5, 2, 7], 6],
  [[4, 3, 1, 2, 5], 6],
  [[3, 1, 2, 4, 1, 3, 1, 2], 6],
  [[2, 1, 4, 1, 3, 1, 2], 4],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 3, 1, 2, 5, 1, 2], 29],
  [[5, 1, 7], 4],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 4, 1, 2, 6, 1, 2], 28],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 4, 1, 2, 2, 1, 2], 17],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 6, 1, 2, 1, 7, 1, 2, 1, 4, 1, 2], 42],
  [[4, 3, 0, 2, 5, 1, 2, 3, 2, 4, 1, 2, 1, 2, 1, 2], 18],
  [[5, 5, 5, 5, 5], 0],
  [[2, 0, 3, 4, 0, 5], 6],
])("loadGrain(%j)", (levels, expected) => {
  expect(loadGrainLinear(levels)).toBe(expected);
  expect(loadGrainQuadratic(levels)).toBe(expected);
});