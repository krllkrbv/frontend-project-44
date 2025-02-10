#!/usr/bin/env node
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
  const a = getRandomNum();
  const b = getRandomNum();
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
