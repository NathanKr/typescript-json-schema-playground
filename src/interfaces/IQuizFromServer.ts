import IQuizHead from "./IQuizHead";
import IQuizItemFromServer from "./IQuizItemFromServer";

export default interface IQuizFromServer {
  _id : string;
  head : IQuizHead;
  items: IQuizItemFromServer[];
}
