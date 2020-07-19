// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { isPrime, getRandomInt } from '../lib.js';

const getExerciseInfo = () => {
  const exercise = getRandomInt();
  const rightAnswer = `${isPrime(exercise) ? 'yes' : 'no'}`;
  return {
    exercise,
    rightAnswer,
  };
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  initGame(rules, getExerciseInfo);
};
