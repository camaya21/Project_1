const startBtn = document.querySelector('#startButton');
const scoreStat = document.querySelector('#score');

const wrongBtn = document.querySelectorAll('.wrongAnswer');
wrongBtn.forEach(wrongAnswer => {
    wrongAnswer.addEventListener('click', wrongMessage);
});

const correctBtn = document.querySelectorAll('.correctAnswer');
correctBtn.forEach(correctAnswer => {
    correctAnswer.addEventListener('click', increaseScore)
})

startBtn.addEventListener('click', startGame)
function startGame(){
    if (correctBtn){
    }
    if (wrongBtn){
    }
    // add timer
}

function wrongMessage(){
    alert('WRONGGGG')
}

function increaseScore() {
    scoreStat.textContent =  Number(scoreStat.textContent)+1
    if (scoreStat.textContent== 1) {
        alert('YOU WIN')
    }
}
