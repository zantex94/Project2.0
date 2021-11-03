'use strict'

export function displayQuiz(quiz, where) {
    const quizTitle = document.getElementById('quizTitle');    
  
    quizTitle.innerHTML = quiz.name;        

    for (let i = 0; i < quiz.questions.length; i++) {
        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');

        h2.appendChild(document.createTextNode(`${i + 1} / ${quiz.questions.length}`));
        h3.appendChild(document.createTextNode(`Spørgsmål ${i + 1}: ${quiz.questions[i].question}`));        

        where.append(h2, h3);

        quiz.questions[i].possibleAnswers[0].forEach(element => {
            const button = document.createElement('button');

            button.appendChild(document.createTextNode(element));

            where.appendChild(button);
        });
    }

    /*while ((!false) Alle svar ikke er checked) {
        const submit = document.createElement('button');

        submit.appendChild(document.createTextNode(element));

        where.appendChild(submit);
    }*/
}