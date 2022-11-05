import { loadGrainLinear, loadGrainQuadratic } from "./index";

const ITERATIONS = 10000;

function generateRandomLevels() {
  return Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10));
}

console.time("loadGrainLinear");
for (let i = 0; i < ITERATIONS; i++) {
  loadGrainLinear(generateRandomLevels());
}
console.timeEnd("loadGrainLinear");

console.time("loadGrainQuadratic");
for (let i = 0; i < ITERATIONS; i++) {
  loadGrainQuadratic(generateRandomLevels());
}
console.timeEnd("loadGrainQuadratic");
