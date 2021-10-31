'use strict'
import {createHeader} from './modules/navigationheader.js';
import {doSomethingInQuiz} from '././showquizz.js';
export const $ = function (bar) { return document.getElementById(bar); };
const init = function () {
    createHeader();
    doSomethingInQuiz();
}
window.addEventListener("load", init);
