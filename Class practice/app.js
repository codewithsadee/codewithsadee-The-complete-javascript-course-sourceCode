`use strict`;
// const prompt = require('prompt-sync')();


const userInput = document.querySelector('#userInput');
const submitBtn = document.querySelector('#submit');
const resultBox = document.querySelector('#result');

let key = '';

// Random number machine
const generateRandom = function () {
  const machine = Math.ceil(Math.random() * 5);
  return machine;
}

const chackUserInput = function () {
  return Number(userInput.value);
}

const isUserTrue = (random, input) => {
  return random === input ? true : false;
}

document.addEventListener('keypress', e => {
  key = e.key;
  if (key === 'Enter') {
    const showResult = isUserTrue(generateRandom(), chackUserInput());
    resultBox.innerText = `${String(showResult).toUpperCase()} ${showResult ? '💪' : '👿'}`;
    resultBox.style.background = showResult ? '#0dc426' : '#c40d0d';
  }
});
