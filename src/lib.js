export const getRandomInt = () => Math.ceil(Math.random() * 100);

export const getRandomIntFromRange = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
