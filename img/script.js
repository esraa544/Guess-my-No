'use strict';
//DOM
let secretNumber = Math.trunc((Math.random()*6)+1);
let score = 20;
let highScore = 0 ;
document.querySelector('.check').addEventListener('click', function() {
    let x = document.querySelector('.guess').value;
    console.log(x);
//    document.querySelector('.message').textContent = 'welcome';
//    document.querySelector('body').style.backgroundColor = 'white';
    const guess = Number(document.querySelector('.guess').value)
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number';
        }else if(guess === secretNumber){
            document.querySelector('.message').textContent = 'correct';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#29d229';
        }else if(guess > secretNumber){
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score').textContent = score;
            score--;
        }else if(guess < secretNumber){
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('.score').textContent = score;
            score--;
        }
});
