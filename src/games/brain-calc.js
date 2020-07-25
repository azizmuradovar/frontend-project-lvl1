// import readlineSync from 'readline-sync';
import initGame from '../index.js';
import { getRandomInt, getRandomIntFromRange } from '../lib.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestion = (value1, value2, operator) => (
  `${value1} ${operator} ${value2}`
);

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown expression Symbol: '${operator}'!`);
  }
};

const getAnswer = (num) => num.toString();

const genRoundData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const randomIndexOperator = getRandomIntFromRange(0, operators.length - 1);
  const operator = operators[randomIndexOperator];
  const question = getQuestion(num1, num2, operator);
  return {
    question,
    rightAnswer: getAnswer(calculate(num1, num2, operator)),
  };
};

export default () => {
  initGame(description, genRoundData);
};
