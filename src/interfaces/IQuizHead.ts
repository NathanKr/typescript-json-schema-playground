import { QuizType } from "../logic/enums";
import ICategories from "./ICategories";


export default interface IQuizHead{
    name: string;
    description: string;
    type : QuizType;
    categories : ICategories;
}   