const startBtn = document.querySelector('.startButton');
const basicNum = document.getElementById('basicNum')
const scoreStat = document.querySelector('#score');
const countDown = document.querySelector('#countDown');
const questionContainer = document.getElementById('question-container')

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
    
    correctBtn.forEach(correctAnswer => {
        correctAnswer.addEventListener('click', increaseScore);
    });
    wrongBtn.forEach(wrongAnswer => {
        wrongAnswer.addEventListener('click', wrongMessage);
    });
    
    startBtn.addEventListener('click', startGame);
    function beginning() {
        startBtn.classList.add('hide');
        basicNum.classList.remove('hide');
        random[i].classList.remove('hide');
    }
    
    function startGame(){
        beginning();
        interval= setInterval(timer, 1000);
    }
    
    function wrongMessage(){
        alert('WRONGGGG');
        clearInterval(interval);
        hideRemove(i);
        i++
    }
    
    function increaseScore() {
        scoreStat.textContent =  Number(scoreStat.textContent)+1
        if (scoreStat.textContent <=10) {
            alert('GOODJOB');
        }
        clearInterval(interval);
        hideRemove(i);
        i++
    }
    function hideRemove(i){
        random[i].classList.add('hide');
        random[i+1].classList.remove('hide');
        countDown.textContent = 5
        interval= setInterval(timer, 1000);
        console.log(i);
        if (random[i]===random[9]) return
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
    
    //scoreEnd.textContent = scoreStat.textContent
// function removeListener() {
//     //startBtn.removeEventListener('click', startGame);
//     clearInterval(interval);
//     wrongBtn.forEach(wrongAnswer => {
//         wrongAnswer.removeEventListener('click', wrongMessage,);
//     });
//     correctBtn.forEach(correctAnswer => {
//         correctAnswer.removeEventListener('click', increaseScore);
//     });
// }
