'use strict'
import { quizOne } from './modules/quiz1Questions.js';
import { quizTwo } from './modules/quiz2Questions.js';
// for handle localstorage.
// localStorage.setItem("player",JSON.stringify(person[0]));

//this one connects and handle all classes and puts it on the html.
// const displayQuiz = function (quiz, where)

const checkedButtons = document.getElementsByClassName('checked');
const submitButton = document.getElementById('submit');
const results = document.getElementById('results');

let isTrue = false;

export function displayQuiz(quiz, where) {

    where.innerHTML = quiz.toString();
    
    const answerButton = document.getElementsByClassName('answerButton');    
    const submitButton = document.getElementById('submit');    

    for(let i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');    
            
            validate(quiz);
        });
    }

    
}

function validate(quiz) {
    console.log(`${checkedButtons.length} / ${quiz.questions.length}`);  

    if (checkedButtons.length === quiz.questions.length) {
        isTrue = true;      
    } else {
        isTrue = false;
    }
}

export function doSomething(){

    const index = document.getElementById('index');
    const quiz1 = document.getElementById('quiz1');
    const quiz2 = document.getElementById('quiz2');
    if (index) {
        // DO NOTHING
    }
    if (quiz1) {
        displayQuiz(quizOne, quiz1);
    }
    if (quiz2) {
        displayQuiz(quizTwo, quiz2);
    }


}