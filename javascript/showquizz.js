'use strict'
import {Quiz} from "./modules/createQuiz.js";
import {$} from './main.js';
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
// console.log(checkedButtons);


export function displayQuiz(quiz, where) {  
    
    
    where.innerHTML = quiz.toString();
    
    const answerButton = document.getElementsByClassName('answerButton');
    //const currentDiv = document.getElementById(quiz.length);
    //const submitButton = document.getElementById('submit');
    

    for(let i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');    
            
            validate(quiz);
        });
    }

    
}

export function showResults(quiz) {
    console.log(results);
    console.log('Hallo');
    results.innerHTML = quiz.toStringResults();
    submitButton.addEventListener('click', function(e) {
        if (isTrue) {
            
        }
    })
}

function validate(quiz) {
    console.log(`${checkedButtons.length} / ${quiz.questions.length}`);  

    if (checkedButtons.length === quiz.questions.length) {
        isTrue = true;      
    } else {
        isTrue = false;
    }
}

export function dosomething(){

// const forside = document.getElementById('forside');
const quiz1 = document.getElementById('quiz1');
const quiz2 = document.getElementById('quiz2');
if(quiz1){
    displayQuiz(quizOne, quiz1);
}else{
    displayQuiz(quizTwo, quiz2);
}


}