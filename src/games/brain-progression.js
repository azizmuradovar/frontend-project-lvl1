// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFromRange } from '../lib.js';

const description = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const buildProgression = (firstElem, step, length) => {
  const progression = [];
  for (let i = 0; i <= length - 1; i += 1) {
    progression.push(firstElem + step * i);
  }
  return progression;
};

const genRoundData = () => {
  const hideElementIndex = getRandomIntFromRange(0, PROGRESSION_LENGTH - 1);
  const step = getRandomInt();
  const firstElem = getRandomInt();
  const progression = buildProgression(firstElem, step, PROGRESSION_LENGTH);
  const rightAnswer = String(progression[hideElementIndex]);
  progression[hideElementIndex] = '..';
  const question = progression.join(', ');
  return {
    question,
    rightAnswer,
  };
};

export default () => {
  initGame(description, genRoundData);
};
