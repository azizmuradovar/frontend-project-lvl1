import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const welcomeUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  welcomeUser(name);
};
