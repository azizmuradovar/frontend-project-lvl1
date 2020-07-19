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

const printExercise = (value) => {
  console.log(`Question: ${value}`);
};

const startGame = (getExerciseInfo) => {
  let counter = 0;
  let isWinner = true;
  while (counter < 3 && isWinner === true) {
    const { exercise, rightAnswer } = getExerciseInfo();
    printExercise(exercise);
    const userAnswer = getUserAnswer();
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

export default (rules, getExerciseInfo) => {
  welcome();
  const name = getUserName();
  greetingUser(name);
  printRules(rules);
  const isWinner = startGame(getExerciseInfo);
  finishGame(isWinner, name);
};
