"use strict";

//Randomise Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameOver = 'Try Again!';

//Input + Guess Logic
document.querySelector('.input-button').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        console.log(document.querySelector('.message').textContent = 'No Number');
        document.querySelector('.message').style.fontWeight = 900;
    }
    // When Player wins
    else if (guess === secretNumber) {
        console.log(document.querySelector('.message').textContent = 'Correct Number!!!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.backgroundColor = '#000'
        document.querySelector('.message').style.fontWeight = 900;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too low'
            document.querySelector('.message').style.fontWeight = 900;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over';
            document.querySelector('.score').textContent = gameOver;
            document.querySelector('.label-score').textContent = null;
        }
    }
})

// Reset all logic
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = ''
    document.querySelector('.number').style.backgroundColor = '#011ffd'
})