import "./style.css";
import Ajv from "ajv";
// import { personSchema, quizFromServerSchema } from "./schemas";
import personSchema from "./schemas/IPerson.schema.json";
import quizFromServerSchema from "./schemas/IQuizFromServer.schema.json";
import {
  personBadLegs,
  personBadNameMax,
  personBadNameMin,
  personBadPetsMaxLen,
  personBadPetsMinLen,
  personGood,
  quizFromServerGood,
} from "./objects";
import IPerson from "./interfaces/IPerson";

const app = document.querySelector<HTMLDivElement>("#app")!;

// --- todo nath obj should be interface
function validate(schema: object, obj: any): void {
  const valid = ajv.validate(schema, obj);
  if (valid) {
    app.innerHTML += "<p>valid</p>";
  } else {
    app.innerHTML += "<p>not valid , check errors in the console</p>";
    console.log(ajv.errors);
  }
}

const ajv = new Ajv();
validate(personSchema, personGood);
validate(quizFromServerSchema, quizFromServerGood);
const personsBad: IPerson[] = [
  personBadLegs,
  personBadNameMin,
  personBadNameMax,
  personBadPetsMinLen,
  personBadPetsMaxLen
];
personsBad.forEach((person) => {
  validate(personSchema, person);
});
