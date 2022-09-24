'use strict';

const score0= document.querySelector('#score--0');
// const score1= document.getElementById('#score--0');
const score1= document.querySelector('#score--1');
const diceEl =document.querySelector('.dice');

score0.textContent = 0;
score1.textContent=0;
diceEl.classList.add('hidden'); // hidden class 생성


const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const curScore0 = document.querySelector('#current--0');
const curScore1 = document.querySelector('#current--1');
const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');

let scores, currentScore, playing, activePlayer;

const init = function(){

    scores=[0,0];  // total 점수는 player모두 0점 
    currentScore= 0;
     playing=true; //지금 게임중
    activePlayer=0; // 처음 시작은 player0

    player0.classList.remove('player--winner');   // 승리한 플레이어 배경색 제거하기
    player1.classList.remove('player--winner');   // 승리한 플레이어 배경색 제거하기
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    curScore0.textContent=0;
    curScore1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;


}
init();

const switchPlayer =function(){
    currentScore=0; 
    document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    activePlayer = activePlayer===0 ? 1 :0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}



btnRoll.addEventListener('click',function(){
    if(playing){ // 게임이 끝나지 않았을 경우
        const dice =Math.trunc(Math.random()*6)+1; // 1~6
        // console.log(dice);
    
        diceEl.classList.remove('hidden');
        diceEl.src = `picture/dice-${dice}.png`;
        if(dice!==1){
            currentScore+=dice;
            document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
            // activePlayer에 따라 currentscore를 넣는다.
        }
        else{
         switchPlayer();
        }
    }

})


btnHold.addEventListener('click',function(){
    if(playing){ // 게임이 끝나지 않았을경우
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
   
    if(scores[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing=false;  //게임을 끝낸다.
        diceEl.classList.add('hidden');  // 주사위 이미지 제거
    }
    else{
        switchPlayer(); // 반복되는 부분이 두곳이상 존재할때 따로 함수로 처리하는게 좋음
    }
}
})
btnNew.addEventListener('click',init);
