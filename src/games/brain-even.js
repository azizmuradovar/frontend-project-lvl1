// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt } from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomInt();

const isEven = (number) => (number % 2 === 0);

const getRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

const genRoundData = () => {
  const question = getQuestion();
  return {
    question,
    rightAnswer: getRightAnswer(question),
  };
};

export default () => {
  initGame(description, genRoundData);
};
