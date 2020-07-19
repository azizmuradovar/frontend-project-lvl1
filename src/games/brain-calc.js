// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFormRange } from '../lib.js';

const expressionSymbols = ['+', '-', '*'];

const getQuestionStr = (value1, value2, expressionSymbol) => (
  `${value1} ${expressionSymbol} ${value2}`
);

const getRightAnswer = (value1, value2, expressionSymbol) => {
  let rightAnswer = '';

  switch (expressionSymbol) {
    case '+':
      rightAnswer = `${value1 + value2}`;
      break;
    case '-':
      rightAnswer = `${value1 - value2}`;
      break;
    case '*':
      rightAnswer = `${value1 * value2}`;
      break;
    default:
      break;
  }
  return rightAnswer;
};

const getExerciseInfo = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();
  const randomIndexSymbol = getRandomIntFormRange(0, expressionSymbols.length - 1);
  const expressionSymbol = expressionSymbols[randomIndexSymbol];
  const exercise = getQuestionStr(value1, value2, expressionSymbol);
  return {
    exercise,
    rightAnswer: getRightAnswer(value1, value2, expressionSymbol),
  };
};

export default () => {
  const rules = 'What is the result of the expression?';
  initGame(rules, getExerciseInfo);
};
