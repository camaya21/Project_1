const startBtn = document.querySelector('.startButton');
const scoreStat = document.querySelector('#score');
const countDown = document.querySelector('#countDown');
const questionContainer = document.getElementById('question-container')

const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('.q3')
const q4 = document.getElementById('.q4')
// const q5 = document.querySelector('.q5')
// const q6 = document.querySelector('.q6')
// const q7 = document.querySelector('.q7')
// const q8 = document.querySelector('.q8')
// const q9 = document.querySelector('.q9')
// const q10 = document.querySelector('.q10') q3, q4, q5, q6, q7, q8, q9, q10

let myArray = [q1, q2, q3, q4];
let i = 0

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
    myArray[i].classList.remove('hide')
    i+=1
}

function startGame(){
    beginning();
    interval= setInterval(timer, 1000);
    correctBtn || wrongBtn
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
