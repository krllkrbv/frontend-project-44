import runGame from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getGameRound = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 100);
  const progression = generateProgression(start, step);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = String(progression.join(' '));
  const correctAnswer = String(hiddenElement);

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(gameDescription, getGameRound);

export default runProgressionGame;
