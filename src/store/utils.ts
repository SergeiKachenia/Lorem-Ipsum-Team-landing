export const setDelay = async (cb: () => any): Promise<any> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, Math.random() * 2000);
  });
};
