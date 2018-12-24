export default (count, fn) => {
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
};
