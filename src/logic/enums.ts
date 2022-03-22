export enum ComponentFactoryItemName{
  SimpleText = 'SimpleText', 
}


enum QAMode {
  // --- do NOT change string it is used in class name
  QuizDo = "QuizDo",
  QuizResultsCorrect = "QuizResultsCorrect",
  QuizResultsWrong = "QuizResultsWrong",
}

enum QuizType {
  Random = "RandomReactCategories", // e.g.  Basic or Basic.Project && Basic.ClassComponent && Routing
  Categories = "ReactCategories", // like Random but chosen by the user
  Interview = "JobInterview",
  Predefined = "Predefined", // e.g. w3c , quiz @ google , ........
}

enum Difficuly {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Expert = "Expert",
}

// --- currently per QuizItem but latter may have better granularity regarding also Question \ Answer
enum MainCategory {
  JavaScript = "JavaScript",
  Basic = "BasicReactConcept",
  Routing = "Routing",
  Performance = "Performance",
  Advanced = "AdvancedReactConcepts",
  Testing = "Testing",
  Design = "DesignPatterns",
}

// -- relevant to MainCategory.JavaScript
enum SubCategoryJavaScript {
  Map = "map",
  Destructuring = "Destructuring",
}

// -- relevant to MainCategory.Basic
enum SubCategoryBasic {
  Project = "Project",
  Rendering = "RenderingElement",
  ClassComponent = "ClassComponent",
  FunctionComponent = "FunctionComponent",
  Props = "Props",
  State = "State",
  Events = "Events",
  Style = "Style",
  Debugging = "Debugging",
  AdvancedRendering = "AdvancedRendering",
  Forms = "Forms",
  Hooks = "Hooks",
  Api = "Api",
}

// -- relevant to MainCategory.Advanced
enum SubCategoryAdvanced {
  Accessibility = "Accessibility",
  CodeSplitting = "CodeSplitting",
  Context = "Context",
  ErrorBoundaries = "ErrorBoundaries",
  ForwardingRefs = "ForwardingRefs",
  Fragment = "Fragment",
  Hoc = "Hoc",
  Integrating = "IntegratingWithOtherLibraries",
  Jsx = "JSXInDepth",
  Portal = "Portal",
  Profiler = "Profiler",
  ReactWoEs6 = "ReactWithoutEs6React",
  ReactWoJsx = "ReactWithoutJSX",
  Reconciliation = "Reconciliation",
  Ref = "Ref",
  RenderProps = "RenderProps",
  StrictMode = "StrictMode",
  StaticTypeChecking = "StaticTypeChecking",
  TypeCheckingWithPropsTypes = "TypeCheckingWithPropsTypes",
  UncontrolledComponent = "UncontrolledComponent",
  WebComponent = "WebComponent",
}

export {
  QAMode,
  QuizType,
  MainCategory,
  SubCategoryJavaScript,
  SubCategoryBasic,
  SubCategoryAdvanced,
  Difficuly,
};
