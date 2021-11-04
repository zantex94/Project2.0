import { QuizzQuestions } from "./createQuestions.js";
import { Quiz } from "./createQuiz.js";

export const quizTwo = new Quiz ('Matematik', new Date);

const question1 = new QuizzQuestions('Matematik', 'Bla bla bla bla bla', 'Bla');
question1.addAnswer('Bla');
question1.addAnswer('Bla bla');
question1.addAnswer('Bla bla bla');
question1.addAnswer('Bla');

const question2 = new QuizzQuestions('Matematik', 'Dette er en test?', 'Test');
question2.addAnswer('Test 1');
question2.addAnswer('Test 2');
question2.addAnswer('Test 3');
question2.addAnswer('Test 4');

quizTwo.addQuestion(question1);
quizTwo.addQuestion(question2);