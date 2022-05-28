'use strict';

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 7;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    //When there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number !';

        //when player wins
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#0b8d4e';
        document.querySelector('.number').style.width = '50%'
        
        // highscore
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high
    } else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High'
            score--;
            document.querySelector('.score').textContent = score; 
        } else{
            document.querySelector('.message').textContent = '⚡ You Lost the game!';        
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#d40000';
        }

        //when guess is too low
    } else if(guess < secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = '📉 Too Low'
            score--;
            document.querySelector('.score').textContent = score; 
        } else{
            document.querySelector('.message').textContent = '⚡ You Lost the game!';        
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#d40000';
        }
    }    
});

//Restart functionality
document.querySelector('.again').addEventListener('click', function() {
    score = 7;
    secretNumber =  Math.trunc(Math.random() * 15) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // styles
    document.querySelector('body').style.backgroundColor = '#091620';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#091620';
    document.querySelector('body').style.backgroundColor = '#091620';
});
 























