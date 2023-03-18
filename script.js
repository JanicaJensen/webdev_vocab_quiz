//objects


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





const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
var submitbutton = document.getElementById('submit')

var list = document.getElementById('list');
var scoreForm = document.getElementById('scoreForm');
var startQuizDiv = document.getElementById('startQuiz');
var timer = document.getElementById('timer');
var timeText =  document.getElementById('timeText');
var timeSec = document.getElementById('timeSec');
var savebtn = document.getElementById('savebtn');
var scoreForm = document.getElementById('scoreForm');
var initials = document.getElementById('initials');
var showScoresBtn = document.getElementById('showScoresBtn');
var questionNumber = 0
var score = 0
var scoreDisplay = (initials.value) ;


var interval;





function getSelected() {
    var answer
    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
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

       

        

 


submitbutton.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizQuestions[questionNumber].correct) {
            score++
        }
        questionNumber++

        if (questionNumber < quizQuestions.length) {
            loadQuiz() 
        } else {
             gameOver()
            
            
        }
        
        }
        
    })








function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
    }




    

    
function startQuiz() {
    
    quiz.style.display = "none";
    submitbutton.innerText = "Start Quiz";
    submitbutton.addEventListener('click', () => {
        startQuizDiv.style.display = "none";
        quiz.style.display = "block";
        
      time = quizQuestions.length * 10;
      intervalId = setInterval(countdown, 1000);

        deselectAnswers()
        submitbutton.innerText = "submit";

var currentQuizQuestion = quizQuestions[questionNumber]

    questions.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a 
    b_text.innerText = currentQuizQuestion.b 
    c_text.innerText = currentQuizQuestion.c 
    d_text.innerText = currentQuizQuestion.d 
    
    getSelected()
    
}


    )}







// timer

// const timerDisplay = 
// function displayTime() {
//   timeDisplay.textContent = time;
// }

// time = quizQuestions.length * 10;
//     intervalID = setInterval(countdown, 1000);

// function countdown() {
//     time--;
//     displayTime();
//     if(time < 1) {
//         gameOver();
//     }
// }

// } else { 
//     setTimeout;
//     if (time >= 10) {
//         time = time -10;
//         timerDisplay();
//     } else {
//         time = 0;
//         timerDisplay();
//         gameOver();


//timer




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


var intervalID;
var time;

function countdown() {
    time--;
    displayTime();
    if (time < 1) {
        gameOver();
    }
}
 
function displayTime() {
    timeSec.innerText = time;
}



startQuiz();

// function countdown() {
//     clearInterval(interval);
//     interval = setInterval( function() {
//         var timer = timeSec.innerHTML; 
//         timer = timer.split(':');
//         var minutes = timer[0];
//         var seconds = timer[1];
//         seconds -= 1;
//         if (minutes < 0) return;
//         else if (seconds < 0 && minutes != 0) {
//             minutes -= 1;
//             seconds = 59;
//         }
//         else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
  
//         timeSec.innerHTML= minutes + ":" + seconds;
  
//         if (minutes == 0 && seconds == 0) clearInterval(interval);
//     }, 1000);
//   }



function gameOver() {
    submitbutton.style.display = "none";
    quiz.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>`;
    console.log(score);
    scoreForm.style.display = "block";
    savebtn.addEventListener("click", saveScore);
    
        }


 





const clearBtn = document.querySelector("#clearBtn");








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
savebtn.addEventListener("click", saveScore);
showScoresBtn.addEventListener("click", addScore);





refreshBtn.addEventListener("click", event => {
    document.getElementById("reload").onclick = function() {
        location.reload(true);
    }
});