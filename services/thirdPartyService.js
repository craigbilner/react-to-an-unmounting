export const makeARequest = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1500);
  });
};
