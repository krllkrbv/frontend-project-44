import runGame from '../index.js';
import getRandomNum from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getGameRound = () => {
  const progressionLength = getRandomNum(5, 10);
  const start = getRandomNum(0, 9);
  const step = getRandomNum(1, 10);
  const progression = generateProgression(start, step, progressionLength);

  const randomIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[randomIndex];

  progression[randomIndex] = '..';
  const question = String(progression.join(' '));
  const correctAnswer = String(hiddenElement);

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(gameDescription, getGameRound);

export default runProgressionGame;
