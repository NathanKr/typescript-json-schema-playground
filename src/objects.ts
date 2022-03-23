import IPerson from "./interfaces/IPerson";

export const personBad1: IPerson = {
  // --- not valid : legs > 100
    name: "Jim",
    pets: [{ name: "dog", legs: 111 }],
  };
  
  export const personBad2: IPerson = {
    // --- not valid : name is required. 
    // --- typescript static check understand that there is a number
    // --- however, it will not issue error when this object enter the app boundaries e.g. from the sever
    pets: [{ name: "dog", legs: 11 }],
  };


  export const personGood: IPerson = {
    // --- valid
    name: "Jim",
    age: 33,
    pets: [{ name: "dog", legs: 11 }],
  };
  
  export const quizFromServerBad = {
    // not valid : _id is missing
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

  