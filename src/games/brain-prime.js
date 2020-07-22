// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt } from '../lib.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let counter = 2; counter < num; counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const question = getRandomInt();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => {
  initGame(description, genRoundData);
};
