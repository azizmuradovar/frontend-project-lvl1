import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const makeHello = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};