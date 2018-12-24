import createSeedRandomRNG from "seedrandom";

const createRNG = (seed) => {
  const seedRandomRNG = createSeedRandomRNG(seed);

  return {
    nextInt: () => seedRandomRNG.int32(),
    nextUnity: () => seedRandomRNG.double(),
    nextFromRange: (range) => range.start + range.size * seedRandomRNG.double(),
    nextIntFromRange: (range) => Math.floor(range.start + range.size * seedRandomRNG.double()),
  };
};

export default createRNG;
