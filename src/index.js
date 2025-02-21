import readlineSync from 'readline-sync';
import getNameUser from './cli.js';

const runGame = (gameDescription, getGameRound) => {
  console.log('Welcome to the Brain games!');
  const name = getNameUser();
  console.log(gameDescription);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
