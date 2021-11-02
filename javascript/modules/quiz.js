'use strict'

export class Quiz{
    constructor(name, created){
        this.name = name;
        this.created = created;
        this.questions = [];

    }
    shuffle(){
        //shuffle array of questions.
    }
    toString(){
        //to string array of questions.
    }
    addQuestion(q) {
        this.questions.push(q);
    }
}