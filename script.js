

const quizQuestions = [
    {
        question: "Where do you link your JavaScript document?",
        a: "Anywhere in the HTML document",
        b: "Within the body tags of the HTML document",
        c: "Within the meta tags of the HTML document",
        d: "Within the head tags of the HTML document",
        correct: "b",
    },
    {
        question: "How do you link the JavaScript document into the HTML document?",
        a: "<script> </script>",
        b: "<html> </html>",
        c: "<link href=>",
        d: "<a> </a>",
        correct: "a",
    },
    {
        question: "What is the purpose of JavaScript?",
        a: "To style the page.",
        b: "To add cool effects to elements.",
        c: "To make the website interactive.",
        d: "To add forms.",
        correct: "c",
    },
    {
        question: "JavaScript utilizes the ______ method to access elements with a specific ID?",
        a: "Crystal",
        b: "DOM",
        c: "JSON",
        d: "Console",
        correct: "d",
    },
    {
        question: "How do we code a variable?",
        a: "let()",
        b: ".const",
        c: "var",
        d: "function",
        correct: "c",
    },
    {
        question: "How is algorithm defined?",
        a: "A function.",
        b: "It's Spanish for 'something rhythm'.",
        c: "A variable with an array.",
        d: "A set of steps to complete a task.",
        correct: "d",
    },

];


//Variables that need to be global
 
//buttons 
var startBtn = document.getElementById('startBtn');
var answerBtn = document.getElementById('answerBtn');
var showScoresBtn = document.getElementById('showScoresBtn');
var clearBtn = document.getElementById('clearBtn');
var refreshBtn = document.getElementById('refreshBtn')
var saveBtn = document.getElementById('saveBtn');
var showScoresBtn = document.getElementById('showScoresBtn');
var refreshBtn = document.getElementById('refreshBtn');

//question text content
const answerEl = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')



//divs and sections
var startCard = document.getElementById('startCard');
var gameCard = document. getElementById('gameCard');
var endCard = document.getElementById('endCard');
var announceScore = document.getElementById('announceScore');
var seconds = document.getElementById('seconds');

//other
var questionNumber = 0;
let score = 0;
let currentQuestion = 0;
var intervalID;
var time = 60;

function countdown() {
    time--;
    displayTime();
    if (time < 1) {
        gameOver();
    }
}
 


function displayTime() {
    seconds.innerText = time;
}



function saveScore(event) {
    event.preventDefault();
    highScoreDiv.style.display = "block";
    if (initials.value === "") {
        alert("Please enter your initials!");
        return;
    } 
    
    var userScore = (`${initials.value}, ${score} `);
    localStorage.setItem('savedScores', userScore);
    
    var savedScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores)
    }
    console.log(userScore);
    scoresArray.push(userScore);
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    showScoresBtn.addEventListener('click', addScore);

        }

//checks the answer with the id 
function getSelected() {
    var answer
        answerEl.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }})
            return answer
        }
        
// save score to local 
function saveScore(event) {
    event.preventDefault();
    highScoreDiv.style.display = "block";
    if (initials.value === "") {
        alert("Please enter your initials!");
        return;
    } 
    
    var userScore = (`${initials.value}, ${score} `);
    localStorage.setItem('savedScores', userScore);
    
    var savedScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores)
    }
    console.log(userScore);
    scoresArray.push(userScore);
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    showScoresBtn.addEventListener('click', addScore);

        }



//answer button event listener
answerBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizQuestions[questionNumber].correct) {
            score++
        }
        questionNumber++

        if (questionNumber < quizQuestions.length) {
            startGame() 
        } else {
             gameOver()
            
        }
        
        }
        
    })


    
    




function startGame() {
   
    gameCard.classList.remove("hidden");
    time = quizQuestions.length * 10;
    intervalID = setInterval(countdown, 1000);
    deselectAnswers();
    var currentQuizQuestion = quizQuestions[questionNumber];
       
        question.innerText = currentQuizQuestion.question
        a_text.innerText = currentQuizQuestion.a 
        b_text.innerText = currentQuizQuestion.b 
        c_text.innerText = currentQuizQuestion.c 
        d_text.innerText = currentQuizQuestion.d 
        deselectAnswers()
        getSelected()
       
        
}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
    }




//event listener for start quiz game
startBtn.addEventListener("click", () =>{
    startCard.classList.add('hidden');
    startGame();
})
 
//adds score to the local storage
var i = 0
function addScore() {
    var savedScores = localStorage.getItem("high scores");
    if (savedScores === null) {
        return;
    }
    console.log(savedScores);
    var storedScores = JSON.parse(savedScores);
    for (; i < storedScores.length; i++) {
        var newScoreList = document.createElement("li");
        newScoreList.innerHTML = storedScores[i];
       list.appendChild(newScoreList);
    }

}


// gameover function
function gameOver() {
    gameCard.classList.add('hidden');
   endCard.classList.remove('hidden');
    announceScore.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>`;
    console.log(score);
    scoreForm.style.display = "block";
    saveBtn.addEventListener("click", saveScore);
    
        }


//buttons clear the local memory and disappear some buttons
clearBtn.addEventListener("click", () => {
    localStorage.clear();
    list.style.display = "none";
     disappearbtns();
    })



function disappearbtns( ){
        showScoresBtn.style.display = "none";
        clearBtn.style.display = "none";
        refreshBtn.style.display = "block";
        };




function reload() {
    window.location.reload;
};




//event listeners
saveBtn.addEventListener("click", saveScore);
showScoresBtn.addEventListener("click", addScore);