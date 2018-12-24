export default (start, end = start) => {
  return {
    start,
    size: Math.max(0, end - start),
  };
};
