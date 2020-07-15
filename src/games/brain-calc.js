// import readlineSync from 'readline-sync';
import initGame from '../index.js';

const expressionSymbols = ['+', '-', '*'];

const getRandomInt = () => Math.ceil(Math.random() * 100);

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getQuestion = () => {
  const value1 = getRandomInt();
  const value2 = getRandomInt();
  const expressionSymbol = expressionSymbols[randomInteger(0, expressionSymbols.length - 1)];
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
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  initGame(rules, getQuestion, getRightAnswer);
};
