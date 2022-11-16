const startBtn = document.querySelector('#startButton')
const scoreStat = document.querySelector('#score')
const wrongBtn = document.querySelector('.wrongAnswer')
const correctBtn = document.querySelector('.correctAnswer')

startBtn.addEventListener('click', startGame)


function startGame(){
   correctBtn.addEventListener('click', increaseScore) || wrongBtn.addEventListener('click', wrongMessage)
    //wrongBtn.addEventListener('click', wrongMessage)
// startBtn would start the timer for each questions but still need to add timer
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