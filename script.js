'use strict';

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 7;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const backgroundColor = function(bgColor) {
    document.querySelector('body').style.backgroundColor = bgColor;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    //When there is no input
    if(!guess){
        displayMessage('⛔ No number !');

        //when player wins
    } else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number !');
        document.querySelector('.number').textContent = secretNumber;
        backgroundColor('#0b8d4e');
        document.querySelector('.number').style.width = '50%'
        
        // highscore
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 

        //when guess is wrong
    }else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
            score--;
            document.querySelector('.score').textContent = score; 
        } else{
            displayMessage('⚡ You Lost the game!');     
            document.querySelector('.score').textContent = 0;
            backgroundColor('#d40000');
        }
    } 
});

//Restart functionality
document.querySelector('.again').addEventListener('click', function() {
    score = 7;
    secretNumber =  Math.trunc(Math.random() * 15) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // styles
    backgroundColor('#091620');
    document.querySelector('.number').style.width = '15rem'
});
 























