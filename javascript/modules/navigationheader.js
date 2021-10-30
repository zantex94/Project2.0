'use strict'
import {$} from './../main.js';
export function createHeader() {
    let head = $('navigationHeader');
    head.setAttribute("class", "navigationBar");
    let l1 = document.createElement("li");
    let a1 = document.createElement("a");
    let l2 = document.createElement("li");
    let a2 = document.createElement("a");
    let l3 = document.createElement("li");
    let a3 = document.createElement("a");


    l1.setAttribute("class", "navigationList");
    a1.setAttribute("class", "navigationText");
    a1.setAttribute("href", "forside.html");
    a1.innerHTML = "Forside";
    l1.appendChild(a1);


    l2.setAttribute("class", "navigationList");
    a2.setAttribute("class", "navigationText");
    a2.setAttribute("href", "quizz1.html");
    a2.innerHTML = "quiz 1";
    l2.appendChild(a2);

    l3.setAttribute("class", "navigationList");
    a3.setAttribute("class", "navigationText");
    a3.setAttribute("href", "quizz2.html");
    a3.innerHTML = "quiz 2";
    l3.appendChild(a3);

    head.appendChild(l1);
    head.appendChild(l2);
    head.appendChild(l3);

}