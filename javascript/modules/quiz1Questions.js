import { QuizzQuestions } from "./quizquestions.js";
import { Quiz } from "./quiz.js";

export const quizOne = new Quiz ('Sport', new Date);

const question1 = new QuizzQuestions('Sport', 'Hvem vandt EM i fodbold i 1992?', 'Danmark');
question1.addAnswer(['Danmark', 'Frankrig', 'Tyskland', 'Polen']);

const question2 = new QuizzQuestions('Sport', 'Dette er en test?', 'Test');
question2.addAnswer(['Test 1', 'Test 2', 'Test 3', 'Test 4']);

quizOne.addQuestion(question1);
quizOne.addQuestion(question2);