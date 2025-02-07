#!/usr/bin/env node
const gameDescription = 'What is the result of the expression?';

const getRandomNum = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
