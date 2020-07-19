// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getGCD } from '../lib.js';

const getExerciseInfo = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  return {
    exercise: `${number1} ${number2}`,
    rightAnswer: `${getGCD(number1, number2)}`,
  };
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  initGame(rules, getExerciseInfo);
};
