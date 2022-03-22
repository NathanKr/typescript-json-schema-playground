export const quizFromServerSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    IComponentFactoryItem: {
      properties: {
        name: {
          enum: ["SimpleText"],
          type: "string",
        },
        props: {},
      },
      type: "object",
    },
    QAMode: {
      enum: ["QuizDo", "QuizResultsCorrect", "QuizResultsWrong"],
      type: "string",
    },
    QuizType: {
      enum: [
        "JobInterview",
        "Predefined",
        "RandomReactCategories",
        "ReactCategories",
      ],
      type: "string",
    },
    default_1: {
      properties: {
        categories: {
          $ref: "#/definitions/default_2",
        },
        description: {
          type: "string",
        },
        name: {
          type: "string",
        },
        type: {
          $ref: "#/definitions/QuizType",
        },
      },
      type: "object",
    },
    default_2: {
      properties: {
        Advanced: {
          items: {
            enum: [
              "Accessibility",
              "CodeSplitting",
              "Context",
              "ErrorBoundaries",
              "ForwardingRefs",
              "Fragment",
              "Hoc",
              "IntegratingWithOtherLibraries",
              "JSXInDepth",
              "Portal",
              "Profiler",
              "ReactWithoutEs6React",
              "ReactWithoutJSX",
              "Reconciliation",
              "Ref",
              "RenderProps",
              "StaticTypeChecking",
              "StrictMode",
              "TypeCheckingWithPropsTypes",
              "UncontrolledComponent",
              "WebComponent",
            ],
            type: "string",
          },
          type: "array",
        },
        Basic: {
          items: {
            enum: [
              "AdvancedRendering",
              "Api",
              "ClassComponent",
              "Debugging",
              "Events",
              "Forms",
              "FunctionComponent",
              "Hooks",
              "Project",
              "Props",
              "RenderingElement",
              "State",
              "Style",
            ],
            type: "string",
          },
          type: "array",
        },
        JavaScript: {
          items: {
            enum: ["Destructuring", "map"],
            type: "string",
          },
          type: "array",
        },
      },
      type: "object",
    },
    default_3: {
      properties: {
        answers: {
          properties: {
            correctAnsIndex: {
              type: "number",
            },
            values: {
              items: {
                properties: {
                  cfItems: {
                    items: {
                      $ref: "#/definitions/IComponentFactoryItem",
                    },
                    type: "array",
                  },
                },
                type: "object",
              },
              type: "array",
            },
          },
          type: "object",
        },
        categories: {
          $ref: "#/definitions/default_2",
        },
        question: {
          $ref: "#/definitions/default_4",
        },
      },
      type: "object",
    },
    default_4: {
      properties: {
        mode: {
          $ref: "#/definitions/QAMode",
        },
        value: {
          properties: {
            cfItems: {
              items: {
                $ref: "#/definitions/IComponentFactoryItem",
              },
              type: "array",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
  },
  properties: {
    _id: {
      type: "string",
    },
    head: {
      $ref: "#/definitions/default_1",
    },
    items: {
      items: {
        $ref: "#/definitions/default_3",
      },
      type: "array",
    },
  },
  type: "object",
};

export const personSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    IPet: {
      properties: {
        legs: {
          maximum: 100,
          minimum: 1,
          type: "number",
        },
        name: {
          type: "string",
        },
      },
      type: "object",
    },
  },
  properties: {
    age: {
      type: "number",
    },
    name: {
      type: "string",
    },
    pets: {
      items: {
        $ref: "#/definitions/IPet",
      },
      type: "array",
    },
  },
  type: "object",
};
