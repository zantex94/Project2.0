import { QuizzQuestions } from "./quizquestions.js";
import { Quiz } from "./quiz.js";

export const quizTwo = new Quiz ('Matematik', new Date);

const question1 = new QuizzQuestions('Matematik', 'Bla bla bla bla bla', 'Bla');
question1.addAnswer(['Bla', 'Bla bla bla', 'Bla bla', 'Bla bla bla bla bla']);

const question2 = new QuizzQuestions('Matematik', 'Dette er en test?', 'Test');
question2.addAnswer(['Test 5', 'Test 6', 'Test 7', 'Test 8']);

quizTwo.addQuestion(question1);
quizTwo.addQuestion(question2);