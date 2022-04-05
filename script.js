'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);
  
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😕 No Number';
  }
  //when enter invalid number
  else if (guess < 0 || guess > 20) {
    document.querySelector('body').style.backgroundColor = '#cc3300';
    document.querySelector('.message').textContent =
      '❌ Enter a Value Between 1 and 20';
  }
  //when enter valid number
  else if (guess <= 20) {
    if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent = '😍 Correct Number';
      document.querySelector('.score').textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      //When user enter low value
    } else if (guess < secretNumber) {
      if (score > 0) {
        document.querySelector('body').style.backgroundColor = '#b38600';
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('body').style.backgroundColor = '#cc3300';
        document.querySelector('.message').textContent =
          'You exceeded the maximum attempts';
      }

      //When user enter high value
    } else if (guess > secretNumber) {
      if (score > 0) {
        document.querySelector('body').style.backgroundColor = '#800060';
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('body').style.backgroundColor = '#cc3300';
        document.querySelector('.message').textContent =
          'You exceeded the maximum attempts';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
