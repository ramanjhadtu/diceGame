'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScores = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dicee = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dicee}.png`;
  if (dicee !== 1) {
    currentScores += dicee;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScores;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScores = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

btnHold.addEventListener('click', function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
}); 
