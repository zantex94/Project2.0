'use strict'

export class QuizzQuestions{
    constructor(categori, question, correctAnswer){
        this.categori = categori;
        this.question = question;
        this.possibleAnswers = [];
        this.correctAnswer = correctAnswer;
    }
    toString(){
        // tostring quizz quetions
        let s = "";
        s += "<div class='questionDiv'";
        s += "<p class='questionP'>";
        s += this.question;
        s += "</p>";
        s += "</div>";
        s += '<div class="answerDiv">';
        s +='<div class="paraDiv">';
        s += '<p class="pInfo">';
        s += 'Vælg 1 svarmulighed';
        s += '</p>';
        s += '</div>';
        for(let i = 0; i < this.possibleAnswers.length; i++){
            s += '<button class="answerButton">';
            s += '<p>';
            s += this.possibleAnswers[i];
            s += '</p>';
            s += '</button>'
        }
        s += '</div>';
        return s;
    }
    addAnswer(a) {
        this.possibleAnswers.push(a);
    }
}