import runGame from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const remainder = num2;
    num2 = num1 % num2;
    num1 = remainder;
  }
  return num1;
};

const getGameRound = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer];
};

const runGcdGame = () => runGame(gameDescription, getGameRound);

export default runGcdGame;
