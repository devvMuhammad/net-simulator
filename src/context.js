import { createContext } from "react";

const context = createContext({
  subjectNumber: 0,
  setSubjectNumber: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
  mcqArray: [],
  saveEnabled: false,
  setSaveEnabled: () => {},
  optionChecked: false,
  setOptionChecked: () => {},
});

export default context;
