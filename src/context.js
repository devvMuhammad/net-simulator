import { createContext } from "react";

const context = createContext({
  subjectNumber: 0,
  setSubjectNumber: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
  mcqArray: [],
  saveEnabled: false,
  setSaveEnabled: () => {},
});

export default context;
