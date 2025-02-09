import readlineSync from 'readline-sync';
import getRandomNum from '../utils.js';

function isAnswerCorrect(currentNum, userAnswer) {
  const isEven = currentNum % 2 === 0;
  return (isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no');
}

function displayResult(userAnswer, isEven) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
}

function askQuestion() {
  const currentNum = getRandomNum();
  console.log(`Question: ${currentNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { currentNum, userAnswer };
}

const answer = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const { currentNum, userAnswer } = askQuestion();
    if (isAnswerCorrect(currentNum, userAnswer)) {
      console.log('Correct!');
    } else {
      displayResult(userAnswer, currentNum % 2 === 0);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default answer;
