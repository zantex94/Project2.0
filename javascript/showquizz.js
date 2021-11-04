'use strict'
import { Quiz } from './modules/createQuiz.js';
import { quizOne } from './modules/quiz1Questions.js';
import { quizTwo } from './modules/quiz2Questions.js';

const checkedButtons = document.getElementsByClassName('checked');
//const submitButton = document.getElementById('submit');
const answerButton = document.getElementsByClassName('answerButton');

console.log(answerButton.length);

let isTrue = true;
let userAnswers = [];

export function displayQuiz(quiz, where) {    

    where.innerHTML = quiz.toString();
    selectedAnswer();
    const submitButton = document.getElementById('submit');

    console.log(submitButton); 

    submitButton.addEventListener('click', function(e) {
        
        
        if(isTrue) {
            e.preventDefault();
            

            console.log(quiz);

            
            
            let string = JSON.stringify(quiz);
            localStorage.setItem("quiz", string);
            localStorage.setItem('checkedAnswers', userAnswers);
            where.innerHTML = '';
            where.innerHTML = quiz.toStringResults();


            

        } else {
            e.preventDefault();
            alert('Du mangler at svare på et eller flere spørgsmål.');
        }
    })
    
    
    /*const answerButton = document.getElementsByClassName('answerButton');    
    const submitButton = document.getElementById('submit');*/    

    /*for(let i = 0; i < answerButton.length; i++) {
        
        //const checkedAnswers = document.querySelector()
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');
            let checkedAnswer = document.querySelector(`input[name='group${i}']:checked`).value;
            
            console.log(checkedAnswer);
            
            //validate(quiz);
        });     
        //console.log(answerButton[i])
    }

    submitButton.addEventListener('click', function(e) {
        
        if(isTrue) {
            e.preventDefault();
            
            let string = JSON.stringify(quiz);
            localStorage.setItem("quiz", string);
            localStorage.setItem('checkedAnswers', userAnswers);
            

        } else {
            e.preventDefault();
            alert('Du mangler at svare på et eller flere spørgsmål.');
        }
    })*/

    
}

function selectedAnswer() {
    const answerButton = document.getElementsByClassName('answerButton');    
    
    for(let i = 0; i < answerButton.length; i++) {
        
        //const checkedAnswers = document.querySelector()
        answerButton[i].addEventListener('click', function() {
            answerButton[i].classList.toggle('checked');
            /*let checkedAnswer = document.querySelector(`input[name='group${i}']:checked`).value;
            
            console.log(checkedAnswer);*/
            
            //validate(quiz);
        });     
        //console.log(answerButton[i])
    }
}

function saveAnswers(quiz) {
    //let userAnswers = []; 
    console.log(quiz);
    console.log(quiz.questions[0].possibleAnswers)
    for(let i = 0; i <= quiz.questions[i].possibleAnswers.length; i++) {
        userAnswers.push(document.querySelector(`input[name='group${i}']:checked`).value);
    }

    userAnswers.push(checkedAnswer);
    console.log(userAnswers);


}

function validate(quiz) {
    
    let checkedAnswer = [];

    for(let i = 0; i < quiz.questions[i].possibleAnswers.length; i++) {

        //console.log(quiz.questions[i].possibleAnswers)
            
        checkedAnswer.push(document.querySelector(`input[name='group${i}']:checked`).value);
        
        
    }
    console.log(checkedAnswer);
}
    

/*function displayResults(where) {

    let quiz = localStorage.getItem('quiz');
    let object = JSON.parse(quiz);    

    let display = toStringResults(object);    

    where.innerHTML = display;

}*/

/*function toStringResults(o) {
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

}*/

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
        saveAnswers(quizOne)
    }
    if (quiz2) {
        displayQuiz(quizTwo, quiz2);
    }
    /*if (results) {
        displayResults(results);
    }*/


}