// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFormRange } from '../lib.js';

const expressionSymbols = ['+', '-', '*'];

const getQuestion = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();
  const randomIndexSymbol = getRandomIntFormRange(0, expressionSymbols.length - 1);
  const expressionSymbol = expressionSymbols[randomIndexSymbol];
  return `${value1} ${expressionSymbol} ${value2}`;
};

const getRightAnswer = (expression) => {
  const [value1, expressionSymbol, value2] = expression.split(' ');
  let rightAnswer = '';

  switch (expressionSymbol) {
    case '+':
      rightAnswer = `${Number(value1) + Number(value2)}`;
      break;
    case '-':
      rightAnswer = `${Number(value1) - Number(value2)}`;
      break;
    case '*':
      rightAnswer = `${Number(value1) * Number(value2)}`;
      break;
    default:
      break;
  }
  return rightAnswer;
};

export default () => {
  const rules = 'What is the result of the expression?';
  initGame(rules, getQuestion, getRightAnswer);
};
