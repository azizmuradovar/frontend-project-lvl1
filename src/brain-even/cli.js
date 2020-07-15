import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const welcomeUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const printQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const getRandomInt = () => (Math.ceil(Math.random() * 100));

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isEven = (number) => (number % 2 === 0);

const getRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

const finishGame = (isWinner, name) => {
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

const initGame = (name) => {
  let counter = 0;
  let isWinner = true;
  while (counter < 3 && isWinner === true) {
    const number = getRandomInt();
    printQuestion(number);
    const answer = getAnswer();
    const rightAnswer = getRightAnswer(number);
    const isRightAnswer = answer === rightAnswer;
    if (isRightAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      isWinner = false;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    }
  }
  finishGame(isWinner, name);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  welcomeUser(name);
  printRules();
  initGame(name);
};
