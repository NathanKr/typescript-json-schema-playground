import "./style.css";
import Ajv from "ajv";
// import { personSchema, quizFromServerSchema } from "./schemas";
import personSchema from './schemas/IPerson.schema.json'
import quizFromServerSchema from './schemas/IQuizFromServer.schema.json'
import { personBad1, personBad2, personGood, quizFromServerBad } from "./objects";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `Hello Typescript`;

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
validate(quizFromServerSchema, quizFromServerBad);
validate(personSchema, personBad1);
validate(personSchema, personBad2);

