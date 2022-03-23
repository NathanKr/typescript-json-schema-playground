import IAnswer from "./IAnswer";
import ICategories from "./ICategories";
import IQuestion from "./IQuestion";

export default interface IQuizItemFromServer {
  categories: ICategories;
  question: IQuestion;
  answers: { values: IAnswer[]; correctAnsIndex: number };
}
