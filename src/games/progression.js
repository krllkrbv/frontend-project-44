#!/usr/bin/env node
const gameDescription = 'What number is missing in the progression?';

const getRandomNum = (max) => {
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProgression = (a, d) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(a + i * d);
  }
  return progression;
};

const getGameRound = () => {
  const a = getRandomNum(50);
  const d = getRandomNum(10);
  const progression = generateProgression(a, d);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = String(progression.join(' '));
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
