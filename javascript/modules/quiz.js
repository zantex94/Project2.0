'use strict'
import { QuizzQuestions } from "./quizquestions";

export class Quiz{
    constructor(name, created, questions){
        this.name = name;
        this.created = created;
        this.questions = questions[QuizzQuestions];

    }
    shuffle(){
        //shuffle array of questions
    }
    toString(){
        //to string array of questions.
    }

}