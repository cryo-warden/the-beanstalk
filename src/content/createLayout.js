import {
  createRange,
  createRNG,
  mapCount,
} from '../utils';

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
    // TODO Implement one-way layout portions.
    // TODO Implement locks.
    // TODO Use layout for larger-scale meta-layout. Make a big layout for the whole game, where the locks are based on major items.
    return {
      entryIndex: rng.nextIntFromRange(createRange(0, size)),
      exitIndex: (rng.nextUnity() < complexity
        ? rng.nextIntFromRange(createRange(0, size))
        : null
      ),
      layout: createLayout({
        address: [
          ...address,
          ['branch', i],
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
