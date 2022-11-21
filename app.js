const startBtn = document.querySelector('.startButton');
const basicNum = document.getElementById('basicNum')
const scoreStat = document.querySelector('#score');
const countDown = document.querySelector('#countDown');
const questionContainer = document.getElementById('question-container')
const wrongAlert = document.getElementById('wrongAlert')
const correctAlert = document.getElementById('correctAlert')
const endAlertWin = document.getElementById('endAlertWin')
const endAlertLose = document.getElementById('endAlertLose')
const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')
const q5 = document.getElementById('q5')
const q6 = document.getElementById('q6')
const q7 = document.getElementById('q7')
const q8 = document.getElementById('q8')
const q9 = document.getElementById('q9')
const q10 = document.getElementById('q10')

const source = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
let random = []
let i = 0

const getRanQues = () => {
    let copy = source.slice()
    while(copy.length){
        let ranPosition = Math.floor(Math.random()*copy.length)
        let question = copy.splice(ranPosition,1)[0]
        random.push(question);
    }
}
getRanQues(source);
console.log(random[0].classList);

const correctBtn = document.querySelectorAll('.correctAnswer');
const wrongBtn = document.querySelectorAll('.wrongAnswer');
function addlisteners() {
    correctBtn.forEach(correctAnswer => {
        correctAnswer.addEventListener('click', increaseScore);
    });
    wrongBtn.forEach(wrongAnswer => {
        wrongAnswer.addEventListener('click', wrongMessage);
    });
}

startBtn.addEventListener('click', startGame);
function beginning() {
    addlisteners()
    startBtn.classList.add('hide');
    basicNum.classList.remove('hide');
    random[i].classList.remove('hide');
}

function startGame(){
    beginning();
    interval= setInterval(timer, 1000);
}
function hideMessage(){
    wrongAlert.classList.add('hide') || correctAlert.classList.add('hide')
    addlisteners();
    hideRemove(i);
    i++
}

function wrongMessage(){
    removeListener();
    wrongAlert.classList.remove('hide')
    myTimeout = setTimeout(hideMessage, 1500)
}

function increaseScore() {
    scoreStat.textContent =  Number(scoreStat.textContent)+1
    if (scoreStat.textContent <=10) {
        removeListener();
        correctAlert.classList.remove('hide')
        myTimeout = setTimeout(hideMessage, 1500)
    }
}
    
function hideRemove(i) {
    addlisteners();
    random[i].classList.add("hide");
    if (i + 1 < source.length) {
      random[i + 1].classList.remove("hide");
      clearInterval(interval);
      countDown.textContent = 20;
      interval = setInterval(timer, 1000);
      console.log(i);
      
    }else {
        if (scoreStat.textContent <=5) {
            endAlertLose.classList.remove('hide');
        }
        if(scoreStat.textContent >=6) {
            endAlertWin.classList.remove('hide');
        }
    }
}

console.log(random[9])
function timer() {
    countDown.textContent = Number(countDown.textContent)-1
    if (countDown.textContent == 0){
        clearInterval(interval);
        alert('You LOSE! You took too long');
        hideRemove(i);
        i++
    }
}
    
function removeListener() {
    clearInterval(interval);
    wrongBtn.forEach(wrongAnswer => {
        wrongAnswer.removeEventListener('click', wrongMessage,);
    });
    correctBtn.forEach(correctAnswer => {
        correctAnswer.removeEventListener('click', increaseScore);
    });
}
