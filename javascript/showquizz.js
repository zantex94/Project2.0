'use strict'
import { Quiz } from './modules/createQuiz.js';
import { quizOne } from './modules/quiz1Questions.js';
import { quizTwo } from './modules/quiz2Questions.js';

const checkedButtons = document.getElementsByClassName('checked');
const submitButton = document.getElementById('submit');
const answerButton = document.getElementsByClassName('answerButton');


console.log(quizOne);

let isTrue = true;
let userAnswers = [];

export function displayQuiz(quiz, where) {

    where.innerHTML = quiz.toString();
    
    const answerButton = document.getElementsByClassName('answerButton');    
    const submitButton = document.getElementById('submit');    

    for(let i = 0; i < answerButton.length; i++) {
        
        //const checkedAnswers = document.querySelector()
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');    
            
            validate(quiz);
        });     
        //console.log(answerButton[i])
    }

    submitButton.addEventListener('click', function(e) {
        
        if(isTrue) {
            
            let string = JSON.stringify(quiz);
            localStorage.setItem("quiz", string);
            localStorage.setItem('checkedAnswers', checkedAnswer);
            

        } else {
            e.preventDefault();
            alert('Du mangler at svare på et eller flere spørgsmål.');
        }
    })

    
}

function validate(quiz) {

    /*for(let i = 0; i < answerButton.length; i++) {
        if (answerButton[i].checked) {
            console.log('Hallo')
        }
    }*/

    

    for(let i = 0; i < quiz.questions[i].possibleAnswers.length; i++) {

        //console.log(quiz.questions[i].possibleAnswers)
            
        let checkedAnswer = document.querySelector(`input[name='group${i}']:checked`).value;
        userAnswers.push(checkedAnswer);
        console.log(userAnswers);
    }

    
    //console.log(`${answerButton.checked} / ${quiz.questions.length}`);  

    /*if (answerButton.checked === quiz.questions.length) {
        isTrue = true;      
    } else {
        isTrue = false;
    }*/
}

function displayResults(where) {

    let quiz = localStorage.getItem('quiz');
    let object = JSON.parse(quiz);    

    let display = toStringResults(object);    

    where.innerHTML = display;

}

function toStringResults(o) {
    let s = "";
        
        for(let i = 0; i < o.questions.length; i++){
            s += "<h2>";
            s += "Spørgsmål " + (i + 1) + " ud af " + o.questions.length;
            s += "</h2>";
            s += `<div class='questionDiv'`;
            s += "<p class='questionP'>";
            s += o.questions[i].question;
            s += "</p>";
            s += "</div>";
            s += `<div class="answerDiv" id=group${i}>`;            
        
            for(let j = 0; j < o.questions[i].possibleAnswers.length; j++) {
                //s += `<input type='radio' name='group${i}' class="answerButton" value='${this.questions[i].possibleAnswers[j]}'>`;
                s += '<label>';
                s += o.questions[i].possibleAnswers[j];
                s += '</label>';
            }
            s += '</div>';

        }

        return s;

}

export function doSomething(){

    const results = document.getElementById('results');
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
    if (results) {
        displayResults(results);
    }


}