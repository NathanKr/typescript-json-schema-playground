import { QAMode } from "../logic/enums";
import IQAvalue from "./IQAvalue";

export default interface IQuestion {
  value: IQAvalue;
  mode: QAMode;
}
