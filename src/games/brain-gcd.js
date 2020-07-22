// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt } from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  if (number1 === 0 && number2 === 0) {
    return null;
  }
  if (number1 === 0 || number2 === 0) {
    return number1 || number2;
  }
  let result = 1;
  const end = Math.min(number1, number2);
  for (let i = 1; i <= end; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const genRoundData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  return {
    question: `${number1} ${number2}`,
    rightAnswer: String(getGCD(number1, number2)),
  };
};

export default () => {
  initGame(description, genRoundData);
};
