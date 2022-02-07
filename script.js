'use strict';


let secretnumb = Math.trunc(Math.random() * 20) + 1;
console.log(document.querySelector('.number').textContent);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number available 😡';
  }
  //When player wins
  else if (guess == secretnumb) {
    document.querySelector('.message').textContent = 'WOHOO RIGHT GUESS 😎 ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumb;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is higher
  else if (guess > secretnumb) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 😱';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game 😿';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess is lower
  else if (guess < secretnumb) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 💀';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game 😿';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  let secretnumb = Math.trunc(Math.random() * 20) + 1;
});
