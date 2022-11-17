const startBtn = document.querySelector('.startButton');
const scoreStat = document.querySelector('#score');
const countDown = document.querySelector('#countDown');
const questionContainer = document.getElementById('question-container')

const wrongBtn = document.querySelectorAll('.wrongAnswer');
wrongBtn.forEach(wrongAnswer => {
    wrongAnswer.addEventListener('click', wrongMessage);
});

const correctBtn = document.querySelectorAll('.correctAnswer');
correctBtn.forEach(correctAnswer => {
    correctAnswer.addEventListener('click', increaseScore);
});

startBtn.addEventListener('click', startGame);
function beginning() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide')
}

function startGame(){
    beginning();
    interval= setInterval(timer, 1000);
    correctBtn || wrongBtn;
}

function wrongMessage(){
    alert('WRONGGGG');
    resetGame()
}

function increaseScore() {
    scoreStat.textContent =  Number(scoreStat.textContent)+1
    if (scoreStat.textContent == 1) {
        alert('YOU WIN');
        resetGame()
    }
}

function timer() {
    countDown.textContent = Number(countDown.textContent)-1
    if (countDown.textContent == 0){
        resetGame();
        return alert('You LOSE! You took too long');
    }
}

function resetGame() {
    startBtn.removeEventListener('click', startGame);
    clearInterval(interval);
    wrongBtn.forEach(wrongAnswer => {
        wrongAnswer.removeEventListener('click', wrongMessage,);
    });
    correctBtn.forEach(correctAnswer => {
        correctAnswer.removeEventListener('click', increaseScore);
    });
}
