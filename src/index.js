import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer: ');

const greetingUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const printRules = (rule) => {
  console.log(rule);
};

const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const startGame = (getQuestionValue, getRightAnswer) => {
  let counter = 0;
  let isWinner = true;
  while (counter < 3 && isWinner === true) {
    const questionValue = getQuestionValue();
    printQuestion(questionValue);
    const userAnswer = getUserAnswer();
    const rightAnswer = getRightAnswer(questionValue);
    const isRightAnswer = userAnswer === rightAnswer;
    if (isRightAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      isWinner = false;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    }
  }
  return isWinner;
};

const finishGame = (isWinner, name) => {
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default (rules, getQuestion, getRightAnswer) => {
  welcome();
  const name = getUserName();
  greetingUser(name);
  printRules(rules);
  const isWinner = startGame(getQuestion, getRightAnswer);
  finishGame(isWinner, name);
};
