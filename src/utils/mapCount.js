export default (count, fn) => {
  const result = [];

  for (let i = 0; i < count; ++i) {
    result[i] = fn(i);
  }

  return result;
};
