import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};
