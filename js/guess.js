'use strict';

// console.log(document.querySelector('.message').textContent);

//  console.log(document.querySelector('.message').textContent);


//  document.querySelector('.number').textContent =13; 
//  document.querySelector('.score').textContent =10; 

//  document.querySelector('.guess').value=13;

 let answer = Math.trunc(Math.random()*20)+1;  // 1~20 사이 랜덤 정수
 let score= 20;
 let highscore=0;
 const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
 }

document.querySelector('.check').addEventListener('click',function(){
    const guess= document.querySelector('.guess').value;
    // console.log(guess);
    if(!guess){
        displayMessage('⛔No number!');
    }
    else if(guess==answer){
       displayMessage('😎Correct Number!!');
        document.querySelector('body').style.backgroundColor = '#60b347'; // 배경색 변경
        document.querySelector('.number').style.width='30rem'; //숫자 너비 변경
        document.querySelector('.number').textContent=answer; // '?'에 랜덤숫자 들어감
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess !=answer){
        if(score>1){
            displayMessage( guess>answer?'Number is  high!': 'Number is low!');
            score--;   
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You lost😥');
            document.querySelector('.score').textContent=0;
        }
      
    }
});


 document.querySelector('.again').addEventListener('click',function(){
   displayMessage('Start guessing...');
       score=20; // life를 20으로 초기화
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor = '#222';
    answer = Math.trunc(Math.random()*20)+1;  // 1~20 사이 랜덤 정수
    document.querySelector('.number').style.width='15rem'; //숫자 너비 변경
    document.querySelector('.number').textContent='?'; // '?'에 랜덤숫자 들어감
    
 })