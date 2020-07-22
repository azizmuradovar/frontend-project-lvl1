import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer: ');

const greetingUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const printDescription = (description) => {
  console.log(description);
};

const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const startGame = (genRoundData) => {
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, rightAnswer } = genRoundData();
    printQuestion(question);
    const userAnswer = getUserAnswer();
    const isWrongAnswer = userAnswer !== rightAnswer;
    if (isWrongAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const finishGame = (isWinner, name) => {
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default (description, genRoundData) => {
  welcome();
  const name = getUserName();
  greetingUser(name);
  printDescription(description);
  const isWinner = startGame(genRoundData);
  finishGame(isWinner, name);
};
