'use strict'
import {$} from './../main.js';
import { quizOne } from './quiz1Questions.js';
import { quizTwo } from './quiz2Questions.js';


export function createHeader() {
    
    let head = $('navigationHeader');
    head.setAttribute("class", "navigationBar");
    let d1 = document.createElement("div");
    let l1 = document.createElement("li");
    let a1 = document.createElement("a");
    let l2 = document.createElement("li");
    let a2 = document.createElement("a");
    let l3 = document.createElement("li");
    let a3 = document.createElement("a");

    d1.setAttribute("class", "nav-box");
   

    l1.setAttribute("class", "navigationList");
    a1.setAttribute("class", "navigationText");
    a1.setAttribute("href", "forside.html");
    a1.innerHTML = "Forside";
    l1.appendChild(a1);

    l2.setAttribute("class", "navigationList");
    a2.setAttribute("class", "navigationText");
    a2.setAttribute("href", "quizz1.html");
    a2.innerHTML = "Quiz 1: " + quizOne.name;
    l2.appendChild(a2);

    l3.setAttribute("class", "navigationList");
    a3.setAttribute("class", "navigationText");
    a3.setAttribute("href", "quizz2.html");
    a3.innerHTML = "Quiz 2: " + quizTwo.name;
    l3.appendChild(a3);

    d1.appendChild(l1);
    d1.appendChild(l2);
    d1.appendChild(l3);
    head.appendChild(d1);

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.navigationBar > li > a');
    const menuLength = menuItem.length;

    //console.log(menuItem);

    for (let i = 0; i < menuLength; i++) {

        if (menuItem[i].href === currentLocation) {

            menuItem[i].classList.add('active');

        }

    }

}
