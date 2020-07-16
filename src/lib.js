export const getRandomInt = () => Math.ceil(Math.random() * 100);

export const getRandomIntFormRange = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (number) => (number % 2 === 0);

export const getGCD = (number1, number2) => {
  if (number1 === 0 || number2 === 0) {
    return null;
  }
  let result = 1;
  const end = number1 > number2 ? number2 : number1;
  for (let i = 1; i <= end; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};
