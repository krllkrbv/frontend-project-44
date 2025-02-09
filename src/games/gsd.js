#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getGameRound = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
