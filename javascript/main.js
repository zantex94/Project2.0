'use strict'
import {createHeader} from './modules/navigationheader.js';
import {doSomething} from './showquizz.js';
export const $ = function (bar) { return document.getElementById(bar); };

const init = function () {
    createHeader();
    doSomething();    
}
window.addEventListener("load", init);