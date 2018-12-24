import {
  createRange,
  createRNG,
  mapCount,
} from "../utils";

const createLayout = ({
  address,
  sizeRange,
  branchCountRange,
  complexity,
}) => {
  const rng = createRNG(JSON.stringify(address));
  const size = rng.nextIntFromRange(sizeRange);
  const branchCount = rng.nextIntFromRange(branchCountRange);

  const branches = mapCount(branchCount, (i) => {
    return {
      entryIndex: rng.nextIntFromRange(createRange(0, size)),
      exitIndex: (rng.nextUnity() < complexity
        ? rng.nextIntFromRange(createRange(0, size))
        : null
      ),
      layout: createLayout({
        address: [
          ...address,
          ["branch", i],
        ],
        sizeRange: createRange(1, complexity * size),
        branchCountRange: createRange(
          0,
          complexity * rng.nextFromRange(branchCountRange),
        ),
        complexity: complexity * rng.nextUnity(),
      }),
    };
  });

  return {
    size,
    branches,
  };
};

export default createLayout;
