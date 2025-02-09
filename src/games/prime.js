#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const getGameRound = () => {
  const num = getRandomNum();
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
