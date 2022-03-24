import IPerson from "./interfaces/IPerson";

export const personBadLegs: IPerson = {
  name: "Jim",
  pets: [{ name: "dog", legs: 111 }],
};

export const personBadNameMin: IPerson = {
  name: "",
  pets: [{ name: "dog", legs: 11 }],
};

export const personBadNameMax: IPerson = {
  name: "toolong",
  pets: [{ name: "dog", legs: 11 }],
};

export const personBadPetsMinLen: IPerson = {
  name: "Jim",
  pets: [],
};

export const personBadPetsMaxLen: IPerson = {
  name: "jim",
  pets: [
    { name: "dog", legs: 11 },
    { name: "dog", legs: 11 },
    { name: "dog", legs: 11 },
    { name: "dog", legs: 11 },
    { name: "dog", legs: 11 },
  ],
};

// export const personBad2: IPerson = {
//   // --- not valid : name is required.
//   // --- typescript static check understand that there is a number
//   // --- however, typescript static check will not issue error in run time i.e.
//   // --- when this object enter the app boundaries e.g. from the sever
//   pets: [{ name: "dog", legs: 11 }],
// };

export const personGood: IPerson = {
  // --- valid
  name: "Jim",
  age: 33,
  pets: [{ name: "dog", legs: 11 }],
};

export const quizFromServerGood = {
  _id: "someid",
  head: {
    name: "Quiz1",

    description: "Description1 ---> from public\\data",

    type: "ReactCategories",

    categories: { Basic: ["State", "RenderingElement"] },
  },

  items: [
    {
      categories: {},
      question: {
        mode: "QuizDo",
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
            cfItems: [
              {
                name: "SimpleText",

                props: {
                  text: "creates a new array populated with the results of calling a provided function on every element in the calling array.",
                },
              },
            ],
          },

          {
            cfItems: [
              {
                name: "SimpleText",

                props: {
                  text: "store unique values",
                },
              },
            ],
          },
        ],

        correctAnsIndex: 0,
      },
    },

    {
      categories: {},
      question: {
        mode: "QuizDo",
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
            cfItems: [
              {
                name: "SimpleText",

                props: {
                  text: "no",
                },
              },

              {
                name: "SimpleText",

                props: {
                  text: "yes",
                },
              },
            ],
          },
        ],
        correctAnsIndex: 1,
      },
    },
  ],
};
