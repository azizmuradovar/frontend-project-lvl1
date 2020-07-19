// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFormRange } from '../lib.js';

const getExerciseInfo = () => {
  const hideElementIndex = getRandomIntFormRange(0, 9);
  const progressionValue = getRandomInt();
  const exercise = [getRandomInt()];
  for (let i = 1; i <= 9; i += 1) {
    exercise.push(exercise[i - 1] + progressionValue);
  }
  const rightAnswer = `${exercise[hideElementIndex]}`;
  exercise[hideElementIndex] = '..';
  return {
    exercise,
    rightAnswer,
  };
};

export default () => {
  const rules = 'What number is missing in the progression?';
  initGame(rules, getExerciseInfo);
};
