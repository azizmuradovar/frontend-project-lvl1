// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFromRange } from '../lib.js';

const description = 'What is the result of the expression?';

const expressionSymbols = ['+', '-', '*'];

const getQuestion = (value1, value2, expressionSymbol) => (
  `${value1} ${expressionSymbol} ${value2}`
);

const getRightAnswer = (value1, value2, expressionSymbol) => {
  switch (expressionSymbol) {
    case '+':
      return `${value1 + value2}`;
    case '-':
      return `${value1 - value2}`;
    case '*':
      return `${value1 * value2}`;
    default:
      throw new Error(`Unknown expression Symbol: '${expressionSymbol}'!`);
  }
};

const genRoundData = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();
  const randomIndexSymbol = getRandomIntFromRange(0, expressionSymbols.length - 1);
  const expressionSymbol = expressionSymbols[randomIndexSymbol];
  const question = getQuestion(value1, value2, expressionSymbol);
  return {
    question,
    rightAnswer: getRightAnswer(value1, value2, expressionSymbol),
  };
};

export default () => {
  initGame(description, genRoundData);
};
