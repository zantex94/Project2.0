'use strict'
import {createHeader} from './modules/navigationheader.js';
import {displayQuiz} from '././showquizz.js';
import {Quiz} from "./modules/quiz.js";
import { QuizzQuestions } from "./modules/quizquestions.js";
export const $ = function (bar) { return document.getElementById(bar); };

const question1 = new QuizzQuestions('Sport', 'Hvem vandt EM i fodbold i 1992?', 'Danmark');
question1.addAnswer(['Danmark', 'Frankrig', 'Tyskland', 'Polen']);

const question2 = new QuizzQuestions('Sport', 'Dette er en test?', 'Test');
question2.addAnswer(['Test 1', 'Test 2', 'Test 3', 'Test 4']);

const quizOne = new Quiz ('Sport', new Date);

quizOne.addQuestion(question1);
quizOne.addQuestion(question2);

const quiz1 = document.getElementById('quiz1');

const init = function () {
    createHeader();
    displayQuiz(quizOne, quiz1);
}
window.addEventListener("load", init);