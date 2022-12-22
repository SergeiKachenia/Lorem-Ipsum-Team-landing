export const setDelay = async (cb: () => unknown): Promise<unknown> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, Math.random() * 2000);
  });
};
