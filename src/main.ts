import "./style.css";
import Ajv from "ajv";
import IPerson from "./interfaces/IPerson";
// import { personSchema, quizFromServerSchema } from "./schemas";
import personSchema from './schemas/IPerson.schema.json'
import quizFromServerSchema from './schemas/IQuizFromServer.schema.json'

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
const personNotValid: IPerson = {
  name: "Jim",
  pets: [{ name: "dog", legs: 111 }],
};

const personValid: IPerson = {
  name: "Jim",
  age: 33,
  pets: [{ name: "dog", legs: 11 }],
};

const quizFromServer = {
  head: {
    name: "Quiz1",

    description: "Description1 ---> from public\\data",

    type: "ReactCategories",

    categories: { Basic: ["State", "RenderingElement"] },
  },

  items: [
    {
      question: {
        value: {
          cfItems: [
            {
              name: "SimpleText",

              props: { text: "What is map function used for" },
            },
          ],
        },
      },

      answers: {
        values: [
          {
            value: {
              cfItems: [
                {
                  name: "SimpleText",

                  props: {
                    text: "creates a new array populated with the results of calling a provided function on every element in the calling array.",
                  },
                },
              ],
            },
          },

          {
            value: {
              cfItems: [
                {
                  name: "SimpleText",

                  props: {
                    text: "store unique values",
                  },
                },
              ],
            },
          },
        ],

        correctAnsIndex: 0,
      },
    },

    {
      question: {
        value: {
          cfItems: [
            {
              name: "SimpleText",

              props: {
                text: "Is it possible to use state from click event handler",
              },
            },
          ],
        },
      },

      answers: {
        values: [
          {
            value: {
              cfItems: [
                [
                  {
                    name: "SimpleText",

                    props: {
                      text: "no",
                    },
                  },
                ],

                [
                  {
                    name: "SimpleText",

                    props: {
                      text: "yes",
                    },
                  },
                ],
              ],
            },
          },
        ],
        correctAnsIndex: 1,
      },
    },
  ],
};

validate(quizFromServerSchema, quizFromServer);
validate(personSchema, personNotValid);
validate(personSchema, personValid);
