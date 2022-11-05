export function loadGrainQuadratic(levels) {
  if (levels.length < 3) return 0;

  let total = 0;
  let nextPeekIdx = 0;
  let minPeek;

  for (let i = 0; i < levels.length; i++) {
    if (i === nextPeekIdx) {
      nextPeekIdx = i + 1;

      for (let j = nextPeekIdx; j < levels.length; j++) {
        if (levels[j] > levels[nextPeekIdx]) {
          nextPeekIdx = j;
        }
        if (levels[j] > levels[i]) {
          break;
        }
      }

      minPeek = Math.min(levels[i], levels[nextPeekIdx]);
    } else {
      total += minPeek - levels[i];
    }
  }

  return total;
}

export function loadGrainLinear(levels) {
  if (levels.length < 3) return 0;

  let total = 0;
  let l = 0;
  let r = levels.length - 1;

  while (l < r) {
    let nextL = l;
    let nextR = r;

    if (levels[l] < levels[r]) {
      while (true) {
        nextL += 1;
        if (levels[nextL] >= levels[l]) {
          break;
        }
        total += levels[l] - levels[nextL];
      }
      l = nextL;
    } else {
      while (true) {
        nextR -= 1;
        if (levels[nextR] >= levels[r]) {
          break;
        }
        total += levels[r] - levels[nextR];
      }
      r = nextR;
    }
  }

  return total;
}
