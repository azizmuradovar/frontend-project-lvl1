// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, isEven } from '../lib.js';

const getQuestion = () => getRandomInt();

const getRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  initGame(rules, getQuestion, getRightAnswer);
};
