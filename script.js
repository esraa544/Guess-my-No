'use strict';
let secretNumber = Math.trunc((Math.random()*20)+1);
let score = 20;
let highScore = 0 ;
document.querySelector(".check").addEventListener('click', function(){
    let x = document.querySelector('.guess').value;
    // 
    console.log(x);
    //
//    document.querySelector('.image').;
    const guess = Number(document.querySelector('.guess').value)
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number';
        
        }else if(guess === secretNumber){
            document.querySelector('.message').textContent = 'correct';
            document.querySelector('.number').textContent = secretNumber;
//            document.querySelector('.HighScore').textContent = score;
            document.querySelector('.background').style.animation = 'ani .7s linear infinite';
            
        }else if(guess > secretNumber){
            document.querySelector('.background').style.animation = 'none';
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score1').textContent = score;
            score--;
        }else if(guess < secretNumber){
            document.querySelector('.background').style.animation = 'none';
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('.score1').textContent = score;
            score--;
        }
});

document.querySelector(".Again").addEventListener('click', function(){
    secretNumber = Math.trunc((Math.random()*20)+1);
    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score1').textContent = score;
    document.querySelector('.number').textContent = '?' ;            
    document.querySelector('.background').style.animation = 'none';
//    document.querySelector('.background').style.hover="#fff"
    document.querySelector('.guess').value = ' ';
});


//'use strict';
////Coding Challenge #1
////data1
//
//const calcAverage = (a, b, c) =>{
//    const avg=(a + b + c) / 3;
//    return avg
//}
//let dolphinsScore = calcAverage(44, 23, 71);
//let koalasScore = calcAverage(65, 54, 49);
//console.log(dolphinsScore, koalasScore)
//function checkWinner (avgDolphins, avgKoalas) {
//    if(avgDolphins >= 2 * avgKoalas ){
//       console.log(`Doplhins win (${avgDolphins} vs. ${avgKoalas})`)
//       }else if(avgKoalas >= 2 * avgDolphins ){
//           console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//       }else{
//           console.log("Neither of them won");
//       }
//}
//console.log(checkWinner(dolphinsScore, koalasScore));
////data2
//dolphinsScore = calcAverage(85, 54, 41);
//koalasScore = calcAverage(23, 34, 27);
//console.log(checkWinner(dolphinsScore, koalasScore));
//console.log(" ");
////Coding Challenge #2
//let tip;
//function calcTip(bill) {
//    if(bill >= 50 && bill <= 300){
//         tip = bill * 0.15;
//    }else{
//        tip = bill * 0.2 ;
//    }
//    return tip;
//}
//const bills = [125,555,44] ;
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])] ;
//const total = bills + tips
//console.log (bills);
//console.log (tips)
//console.log (total);
//console.log(" ");
//
////Coding Challenge #3
// const markInfo = {
//     name : 'Mark Miller' ,
//     mass : 78 ,
//     height : 1.69 ,
//     bmi: function() {
//          return this.mass/ this.height ** 2;
//     }
//}
// console.log(markInfo);
//     
// const johnInfo = {
//     name : 'John Smith' ,
//     mass : 92 ,
//     height : 1.95 ,
//     bmi: function() {
//          return this.mass/ this.height ** 2;
//     }
// };
// console.log(johnInfo.bmi());
//
////Coding Challenge #4
//
//bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//tips = [];
//total = [];