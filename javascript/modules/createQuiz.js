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
            s += `<div class="answerDiv" id=group${i}>`;
            s +='<div class="paraDiv">';
            s += '<p class="pInfo">';
            s += 'Vælg 1 svarmulighed';
            s += '</p>';
            s += '</div>';
        
        for(let j = 0; j < this.questions[i].possibleAnswers.length; j++) {
            s += `<input type='radio' name='group${i}' class="answerButton" value='${this.questions[i].possibleAnswers[j]}'>`;
            s += '<label>';
            s += this.questions[i].possibleAnswers[j];
            s += '</label>';
        }
            s += '</div>';

        }
        s += '<form action="../html/results.html">';
        s += '<input type="submit" value="Submit" id="submit">';
        s += '</form>';
        
        return s;
    }

    toStringResults() {
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
            s += `<div class="answerDiv" id=group${i}>`;            
        
        for(let j = 0; j < this.questions[i].possibleAnswers.length; j++) {
            //s += `<input type='radio' name='group${i}' class="answerButton" value='${this.questions[i].possibleAnswers[j]}'>`;
            s += '<label>';
            s += this.questions[i].possibleAnswers[j];
            s += '</label>';
        }
            s += '</div>';

        }
        
        return s;

    }
    addQuestion(q) {
        //this adds q arrays to our this.questions.
        this.questions.push(q);
    }
}