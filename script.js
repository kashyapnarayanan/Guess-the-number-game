'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const setBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setGuessWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  //when there is no input

  if (!guess) {
    displayMessage('😕 No Number');
  }
  //when enter invalid number
  else if (guess < 0 || guess > 20) {
    setBackground('#cc3300');
    displayMessage('❌ Enter a Value Between 1 and 20');
  }
  //when enter valid number
  else if (guess <= 20) {
    if (guess === secretNumber) {
      setGuessWidth('30rem');
      displaySecretNumber(secretNumber);
      setBackground('#60b347');
      displayMessage('😍 Correct Number');
      displayScore(score);
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //Less code
      //When user enter low value
    } else if (guess !== secretNumber) {
      if (score > 1) {
        const backgroundColor = guess < secretNumber ? '#b38600' : '#800060';
        setBackground(backgroundColor);

        const message = guess < secretNumber ? '📉 Too Low' : '📈 Too High';
        displayMessage(message);

        score--;
        displayScore(score);
      } else {
        setBackground('#cc3300');
        displayMessage('You lost the game');
        displayScore(0);
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  setBackground('#222');
  setGuessWidth('15rem');
  displayMessage('Start guessing...');
  displayScore(score);
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
});
