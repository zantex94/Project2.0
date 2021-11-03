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
        }
        return s;
    }
    addQuestion(q) {
        //this adds q arrays to our this.questions.
        this.questions.push(q);
    }
}