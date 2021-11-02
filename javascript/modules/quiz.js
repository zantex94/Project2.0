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
    }
    addQuestion(q) {
        //this adds q arrays to our this.questions.
        this.questions.push(q);
    }
}