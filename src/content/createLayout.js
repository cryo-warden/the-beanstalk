import {
  createRange,
  mapCount,
} from "../utils";

const createLayout = (rng, sizeRange, branchCountRange, complexity) => {
  const size = rng.nextIntFromRange(sizeRange);
  const branchCount = rng.nextIntFromRange(branchCountRange);

  const branches = mapCount(branchCount, (i) => {
    const branchRNG = rng.createRNG(i);

    return {
      entryIndex: branchRNG.nextIntFromRange(createRange(0, size)),
      exitIndex: branchRNG.nextUnity() < complexity ? branchRNG.nextIntFromRange(createRange(0, size)) : null,
      layout: createLayout(
        branchRNG,
        createRange(1, complexity * size),
        createRange(0, complexity * branchRNG.nextFromRange(branchCountRange)),
        complexity * branchRNG.nextUnity()),
    };
  });

  return {
    size,
    branches,
  };
};

export default createLayout;
