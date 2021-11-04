'use strict'
import {createHeader} from './modules/navigationheader.js';
import {dosomething} from './showquizz.js';
export const $ = function (bar) { return document.getElementById(bar); };

const init = function () {
    createHeader();
    dosomething();    
}
window.addEventListener("load", init);