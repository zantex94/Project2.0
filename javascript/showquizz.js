'use strict'
import {Quiz} from "./modules/createQuiz.js";
import {$} from './main.js';
import { quizOne } from "./modules/quiz1Questions.js";
// for handle localstorage.
// localStorage.setItem("player",JSON.stringify(person[0]));

//this one connects and handle all classes and puts it on the html.
// const displayQuiz = function (quiz, where)

const checkedButtons = document.getElementsByClassName('checked');

let isTrue = false;
console.log(checkedButtons);


export function displayQuiz(quiz, where) {  
    
    
    where.innerHTML = quiz.toString();
    
    const answerButton = document.getElementsByClassName('answerButton');
    const currentDiv = document.getElementById(quiz.length);
    const submitButton = document.getElementById('submit');
    

    for(let i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');
            //console.log(checkedButtons.length);
            //console.log(checkedButtons);
            
            validate(quiz);
        });
    }
    
    submitButton.addEventListener('click', function(e) {
        
        if (isTrue) {
            
        } else {
            e.preventDefault();
            alert('Du mangler at udfylde alle spørgsmål.')
        }
    });

    
}





function validate(quiz) {
    console.log(`${checkedButtons.length} / ${quiz.questions.length}`);  

    if (checkedButtons.length === quiz.questions.length) {
        isTrue = true;      
    } else {
        isTrue = false;
    }

}