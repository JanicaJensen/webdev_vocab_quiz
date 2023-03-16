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

var scoreList = document.getElementById('scoreList');
var highScores = document.getElementById('highScores');
var scoreForm = document.getElementById('scoreForm');
var questionNumber = 0
var score = 0

function getSelected() {
    var answer
    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


function saveScore() {
    var sScore = confirm("Save score?");
    if (sScore) {
        var savePrompt = prompt("Enter initials:");

    }
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




function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
    }

function startQuiz() {
    quiz.style.display = "none";
    submitbutton.innerText = "Start Quiz";
    submitbutton.addEventListener('click', () => {
        quiz.style.display = "block";
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

startQuiz();






// function loadQuiz () {
//     quizDiv.style.display = "block";
//     deselectAnswers()

// var currentQuizQuestion = quizQuestions[questionNumber]

// //stick the text from variablesabove into the textbox div
//     questions.innerText = currentQuizQuestion.question
//     a_text.innerText = currentQuizQuestion.a 
//     b_text.innerText = currentQuizQuestion.b 
//     c_text.innerText = currentQuizQuestion.c 
//     d_text.innerText = currentQuizQuestion.d 
// }
// //deselects the answersbefore next question "arrow function"
// function deselectAnswers() {
//     answers.forEach(answerEl => answerEl.checked = false)
// }








// loadQuiz()





//foreach loop
// function getSelected() {
//     var answer
//     answers.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })

//     return answer
// }


// function saveScore() {
//     var sScore = confirm("Save score?");
//     if (sScore) {
//         var savePrompt = prompt("Enter initials:");

//     }
// }

function gameOver() {
   
    quiz.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>`
    submitbutton.addEventListener("click", saveScore);
        }
   
        
    


// submitbutton.addEventListener('click', () => {
//     const answer = getSelected()
//     if (answer) {
//         if (answer === quizQuestions[questionNumber].correct) {
//             score++
//         }
//         questionNumber++

//         if (questionNumber < quizQuestions.length) {
//             loadQuiz() 
//         } else {
//              gameOver()
            
            
//         }
        
//         }
        
//     }
    
// )


