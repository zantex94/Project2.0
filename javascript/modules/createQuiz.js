'use strict'

export class Quiz{
    constructor(name, created){
        this.name = name;
        this.created = created;
        this.questions = [];

    }
    shuffle(){
        // shuffle questions
        this.questions.sort(() => Math.random() - 0.5);
    }
    toString(){
        //to string array of questions.
        let s = "";
        
        for(let i = 0; i < this.questions.length; i++){
            s += "<h2>";
            s += "Spørgsmål " + (i + 1) + " ud af " + this.questions.length;
            s += "</h2>";
            s += `<div class='questionDiv'`;
            s += "<p class='questionP'>";
            s += this.questions[i].question;
            s += "</p>";
            s += "</div>";
            s += `<div class="answerDiv" id=${i}>`;
            s +='<div class="paraDiv">';
            s += '<p class="pInfo">';
            s += 'Vælg 1 svarmulighed';
            s += '</p>';
            s += '</div>';
        /*this.questions[i].possibleAnswers.forEach(element => {
            s += `<button class="answerButton" id=${element}>`;
            s += '<p>';
            s += element;
            s += '</p>';
            s += '</button>'            
        });*/
        for(let j = 0; j < this.questions[i].possibleAnswers.length; j++) {
            s += `<button class="answerButton" id=${j}>`;
            s += '<p>';
            s += this.questions[i].possibleAnswers[j];
            s += '</p>';
            s += '</button>';
        }
        
        /*for(let i = 0; i < this.questions.possibleAnswers.length; i++){
            s += '<button class="answerButton">';
            s += '<p>';
            s += this.possibleAnswers[i];
            s += '</p>';
            s += '</button>'
        }*/
            s += '</div>';

        }
        s += '<form action="../html/results.html">';
        s += '<input type="submit" value="Submit" id="submit">';
        s += '</form>';
        
        return s;
    }
    addQuestion(q) {
        //this adds q arrays to our this.questions.
        this.questions.push(q);
    }
}