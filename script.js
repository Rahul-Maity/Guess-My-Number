'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 14;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
    console.log()
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess)
    // When there is no guess
    if (!guess) {
        document.querySelector('.message').textContent='⚠️ No number'
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too high' : '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😒You loose the game';
            document.querySelector('.score').textContent = 0;
        }
       
    }
    // When the guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
       
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // When the guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }



    //     else {
    //         document.querySelector('.message').textContent = '😒You loose the game';
    //         document.querySelector('.score').textContent = 0;
    //         // document.querySelector('body').style.color = 'red';
    //         // document.querySelector('title').textContent = `Correct Number is :`;
    //         // document.querySelector('.number').textContent = secretNumber;
    //     }

    // }
    // // When the guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '😒You loose the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing..';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent = 0;

})
