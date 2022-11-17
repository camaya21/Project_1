const startBtn = document.querySelector('#startButton');
const scoreStat = document.querySelector('#score');
const countDown = document.querySelector('#countDown');

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
    interval = setInterval(timer, 1000)
    if (correctBtn){
    }
    if (wrongBtn){
    }
}

function wrongMessage(){
    alert('WRONGGGG')
    wrongBtn.forEach(wrongAnswer => {
        wrongAnswer.removeEventListener('click', wrongMessage);
    });
}

function increaseScore() {
    scoreStat.textContent =  Number(scoreStat.textContent)+1
    if (scoreStat.textContent == 1) {
        alert('YOU WIN')
    }
}

function timer() {
    countDown.textContent = Number(countDown.textContent)-1
    if (countDown.textContent == 0){
        clearInterval(interval)
        return alert('You LOSE! You took too long')
    }
}
