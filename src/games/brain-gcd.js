// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getGCD } from '../lib.js';

const getQuestion = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  return `${number1} ${number2}`;
};

const getRightAnswer = (numbers) => {
  const [number1, number2] = numbers.split(' ');
  const rightAnswer = getGCD(Number(number1), Number(number2));
  return `${rightAnswer}`;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  initGame(rules, getQuestion, getRightAnswer);
};
