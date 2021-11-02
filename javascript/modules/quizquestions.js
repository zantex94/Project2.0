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
        let s;

        return s;
    }
    addAnswer(a) {
        this.possibleAnswers.push(a);
    }
}