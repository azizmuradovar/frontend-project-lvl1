// import readlineSync from 'readline-sync';
import initGame from '../index.js';

const getRandomInt = () => Math.ceil(Math.random() * 100);

const isEven = (number) => (number % 2 === 0);

const getRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  initGame(rules, getRandomInt, getRightAnswer);
};
