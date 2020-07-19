// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, isEven } from '../lib.js';

const getQuestion = () => getRandomInt();

const getRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

const getExerciseInfo = () => {
  const exercise = getQuestion();
  return {
    exercise,
    rightAnswer: getRightAnswer(exercise),
  };
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  initGame(rules, getExerciseInfo);
};
