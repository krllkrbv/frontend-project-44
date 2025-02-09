#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameRound = () => {
  const num = getRandomNum(1, 100);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
