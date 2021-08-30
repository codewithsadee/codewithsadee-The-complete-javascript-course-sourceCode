'use strict'
/*
Understanding the problem

1 +Get a number from user
2 +Compare the number with machine number
3 +Give an output besed on user input


Breaking into the sub problem

Get a number from user:
  +select input element
  +collect the value

Compare the number with machine number:

  +create the machine number between 1 to 20
  +store in a variable
  -create a condition to check user input
    |check equality
    |check greater than
    |check less than
    |check falsy value

Give an output based on user input:

  -condition is falsy:
    |print '⛔️ No number'

  -condition is truthy:
    -condition is equal:
      |print '🎉 Correct number' in messageBox
      |change body background color 'green'
      |show machine number in hiddenNumberBox
      |change hiddenNumberBox size to '30rem'
      |if score is greater than highscore, print highscore value

    -condition is not equal:
      |decrease score by 1
      | -condition is greater than:
          |print '📈 Too high!' in messageBox
      | -condition is less than:
          |print '📉 Too low!' in messageBox
      | -if score is 0:
          |print '💥 You lose the game'



*/

let
  againBtn = document.querySelector('.again'),
  userNumber = document.querySelector('.guess'),
  checkBtn = document.querySelector('.check'),
  hiddenNumberBox = document.querySelector('.number'),
  messageBox = document.querySelector('.message'),
  scoreBox = document.querySelector('.score'),
  highScoreBox = document.querySelector('.highscore'),
  hiddenNumber = Math.trunc(Math.random() * 20) + 1,
  score = Number(scoreBox.textContent);

// When check button is clicked
checkBtn.addEventListener('click', function () {
  const collectedUserNumber = Number(userNumber.value);
  const message = displayMessage(collectedUserNumber, hiddenNumber);
  messageBox.textContent = message;
});

const displayMessage = function (userNumber, hiddenNumber) {
  // When there will be no number
  if (!userNumber) {
    return '⛔️ No number';
    // When win
  } else if (userNumber === hiddenNumber) {
    winCelebration();
    highScoreBox.textContent = isHighscore(score);
    checkBtn.setAttribute('disabled', '');
    return '🎉 Correct number';
  } else {
    scoreBox.textContent = --score;
    // When lose
    if (score === 0) {
      checkBtn.setAttribute('disabled', '');
      hiddenNumberBox.textContent = '😈';
      document.body.style.backgroundColor = '#b34747';
      return '💥 You lose the game';
    }
    return userNumber > hiddenNumber ? '📈 Too high!' : '📉 Too low!';
  }
}
const winCelebration = function () {
  document.body.style.backgroundColor = '#60b347';
  hiddenNumberBox.textContent = hiddenNumber;
  hiddenNumberBox.style.width = '30rem';
}
const isHighscore = function (score) {
  if (score > highScoreBox.textContent) return score;
}

// Game restart event
againBtn.addEventListener('click', function () {
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222222';
  hiddenNumberBox.textContent = '?';
  hiddenNumberBox.style.width = '15rem';
  scoreBox.textContent = score = 20;
  messageBox.textContent = 'Start guessing...';
  checkBtn.removeAttribute('disabled');
  userNumber.value = '';
});