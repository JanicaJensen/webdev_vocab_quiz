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
const submitbutton = document.getElementById('submit')
var questionNumber = 0
var score = 0

//const NO_OF_HIGH_SCORES = 10;
//const HIGH_SCORES = 'highScores';
//const highScoreString = localStorage.getItem(HIGH_SCORES);
//const highScores = JSON.parse(highScoreString) ?? [];





loadQuiz()

function loadQuiz () {
    deselectAnswers()

var currentQuizQuestion = quizQuestions[questionNumber]

//stick the text from variablesabove into the textbox div
    questions.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a 
    b_text.innerText = currentQuizQuestion.b 
    c_text.innerText = currentQuizQuestion.c 
    d_text.innerText = currentQuizQuestion.d 
}
//deselects the answersbefore next question "arrow function"
function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
}




//foreach loop
function getSelected() {
    var answer
    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
/*
function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores); // TODO
      showHighScores(); // TODO
    }
  }
  function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Enter name:');
    const newScore = { score, name };
    
    // 1. Add to list
    highScores.push(newScore);
  
    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);
    
    // 3. Select new list
    highScores.splice(NO_OF_HIGH_SCORES);
    
    // 4. Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  };

  function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
  }

  function gameOver() {
    quiz.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>`
            checkHighScore(account.store)
            saveHighScore()
            showHighScores()
  }
*/

function saveScore() {
    var sScore = confirm("Save score?");
    if (sScore) {
        var savePrompt = prompt("Enter initials:");

    }
}

function gameOver() {
   
    quiz.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>`
    submitbutton.addEventListener("click", saveScore);
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
        
    }
    
)


//attempting to do a timer here

//var sec = 60
//timerDisplay.childNodes[1].textContent = sec;
//timerDisplay.textContent = sec;


//timer


// //copy and paste timer from mini project
// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerDisplay.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
  
//   document.addEventListener("click", function(event) {
//     // If the count is zero, exit function
//     if (timerCount === 0) {
//       return;
//     })

//     startButton.addEventListener("click", startGame);

/*<button onclick="location.reload()">Reload</button> <--this goes under "correct!"*/