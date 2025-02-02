import readlineSync from 'readline-sync';

function userName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function randomNumber() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function answer(name) {
  for (let i = 0; i < 3; i += 1) {
    const currentNum = randomNumber();
    console.log(`Question: ${currentNum}`);
    const isEven = currentNum % 2 === 0;
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { userName, randomNumber, answer };
