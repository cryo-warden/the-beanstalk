export default (start, end) => {
  return {
    start,
    size: Math.max(0, end - start),
  };
};
