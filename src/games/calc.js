#!/usr/bin/env node
import getRandomNum from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operations[operator] ? operations[operator](num1, num2) : null;
};

const getGameRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const operatorsIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorsIndex];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return [question, correctAnswer];
};

export { getGameRound, gameDescription };
