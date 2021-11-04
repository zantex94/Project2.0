'use strict'
import {createHeader} from './modules/navigationheader.js';
import {displayQuiz, showResults} from '././showquizz.js';
export const $ = function (bar) { return document.getElementById(bar); };
import { quizOne } from './modules/quiz1Questions.js';
import { quizTwo } from './modules/quiz2Questions.js';

const forside = document.getElementById('forside');
const quiz1 = document.getElementById('quiz1');
const quiz2 = document.getElementById('quiz2');
const results = document.getElementById('results');


const init = function () {
    createHeader();
    if (forside) {
        //DO NOTHING
    }
    // Ghetto løsning implementeret på baggrund af fejl i append på Quiz 2 siden.
    if (quiz1) {
        displayQuiz(quizOne, quiz1);       
        

    }
    if (quiz2) {
        displayQuiz(quizTwo, quiz2);
    }      
}
window.addEventListener("load", init);