'use strict'

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const scoreElems = document.querySelectorAll('.score');
const players = document.querySelectorAll('.player');
const currentScoreElems = document.querySelectorAll('.current-score');

const playerNameElems = document.querySelectorAll('.name');
const setNameInput = document.querySelectorAll('.player-name');
const cancelBtn = document.querySelector('.cancel');
const confirmBtn = document.querySelector('.confirm');
const overlay = document.querySelector('.overlay');
const setNameElem = document.querySelector('.set-name');

let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let isPlaying = false;

// player switching function
const switchPlayer = function () {
  // currentscore reassign to 0 and show currentscore in active player currentscore elem
  currentScore = 0;
  currentScoreElems[activePlayer].textContent = currentScore;
  // change active player value
  activePlayer = activePlayer === 0 ? 1 : 0;
  // switch player--active class in player card elem
  players[0].classList.toggle('player--active');
  players[1].classList.toggle('player--active');
}

// dice rolling function
const rollDice = function () {
  if (isPlaying) {
    // Genarate a random dice roll 1 to 6
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `./images/dice-${randomDice}.png`;

    if (randomDice !== 1) {
      // add random dice to currentscore and show in active player current socre
      currentScore += randomDice;
      currentScoreElems[activePlayer].textContent = currentScore;
    } else {
      // switch into the next player
      switchPlayer();
    }
  }
}

// score holding function
const holdScore = function () {
  if (isPlaying) {
    // add currentscore to active player totalscore
    totalScore[activePlayer] += currentScore;
    // and show totalscore to active player elem
    scoreElems[activePlayer].textContent = totalScore[activePlayer];
    // checking win condition
    if (totalScore[activePlayer] >= 100) {
      // add player--winner class to active player elem
      players[activePlayer].classList.add('player--winner');
      // hide the dice elem
      diceImg.classList.add('hidden');
      // change play status
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
}

const restartGame = function () {
  // remove player--winner class from active player elem
  players[activePlayer].classList.remove('player--winner');
  // change play status
  isPlaying = true
  // set player1 by default
  activePlayer = 0;
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
  // reset all player totalscore and currentscore to 0
  currentScore = 0;
  totalScore = [0, 0];
  // and show
  for (let i = 0; i < scoreElems.length; i++) {
    scoreElems[i].textContent = totalScore[i];
    currentScoreElems[i].textContent = currentScore;
  }
}

// User rolls dice
rollDiceBtn.addEventListener('click', rollDice);
// User holds score
holdBtn.addEventListener('click', holdScore);
// Start new game
newGameBtn.addEventListener('click', restartGame);

// Keyboard accessibility
document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    rollDice();
  } else if (e.code === 'Enter' && !e.ctrlKey) {
    holdScore();
  } else if (e.code === 'Enter' && e.ctrlKey) {
    restartGame();
  }
});

const setName = function () {
  for (let i = 0; i < playerNameElems.length; i++) {
    if (this.textContent === 'Confirm') {
      playerNameElems[i].textContent = setNameInput[i].value ? setNameInput[i].value : `Player ${i + 1}`;
    } else {
      playerNameElems[i].textContent = `Player ${i + 1}`;
    }
  }

  overlay.classList.add('hidden');
  setNameElem.classList.add('hidden');
  isPlaying = true;
}

confirmBtn.addEventListener('click', setName);

cancelBtn.addEventListener('click', setName);
