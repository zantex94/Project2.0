import { QuizzQuestions } from "./createQuestions.js";
import { Quiz } from "./createQuiz.js";

export const quizOne = new Quiz ('Sport', new Date);

const question1 = new QuizzQuestions('Sport', 'Hvem vandt EM i fodbold i 1992?', 0);
question1.addAnswer('Danmark');
question1.addAnswer('Polen');
question1.addAnswer('Tyskland');
question1.addAnswer('Frankrig');

const question2 = new QuizzQuestions('Sport', 'Dette er en test?', 3);
question2.addAnswer('Test 1');
question2.addAnswer('Test 2');
question2.addAnswer('Test 3');
question2.addAnswer('Test 4');

quizOne.addQuestion(question1);
quizOne.addQuestion(question2);