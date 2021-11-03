'use strict'
import {createHeader} from './modules/navigationheader.js';
import {doSomethingInQuiz} from '././showquizz.js';
import {Quiz} from './modules/quiz.js';
import {QuizzQuestions} from './modules/quizquestions.js'
export const $ = function (bar) { return document.getElementById(bar); };
/**test tostring in quizquestions */
let q = new QuizzQuestions("biler", "hvilke biler er af svensk oprindelse?", "volvo");
let a = "Nissan";
let b = "Volvo";
let c = "Ford";
let d = "Toyota";
q.addAnswer(a);
q.addAnswer(b);
q.addAnswer(c);
q.addAnswer(d); 
let div1 = $('quizarea');
console.log(q.toString());
div1.innerHTML = q.toString();

// let b = new Quiz("biler", new Date);
// let a = "Hvad er klokken?";
// let x = "Hvilken ugedag er det?";
// let y = "Hvilken måned er det?";
// b.addQuestion(a);
// b.addQuestion(x);
// b.addQuestion(y);
// let div1 = $('quizarea');
// console.log(q.toString());
// div1.innerHTML = b.toString();





/**test shuffle */
// let a = "Hvad er klokken?";
// let x = "Hvilken ugedag er det?";
// let y = "Hvilken måned er det?";
// let b = new Quiz("biler", new Date);
// b.addQuestion(a);
// b.addQuestion(x);
// b.addQuestion(y);

const init = function () {
    createHeader();
    doSomethingInQuiz();

}
window.addEventListener("load", init);
