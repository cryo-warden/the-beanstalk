export default () => {
  let nextID = 0;

  return () => nextID++;
};
