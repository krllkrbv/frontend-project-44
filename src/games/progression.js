#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (a, d) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(a + i * d);
  }
  return progression;
};

const getGameRound = () => {
  const a = getRandomNum(1, 100);
  const d = getRandomNum(1, 100);
  const progression = generateProgression(a, d);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = String(progression.join(' '));
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
