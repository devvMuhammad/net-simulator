import { createContext } from "react";

const context = createContext({
  subjectNumber: 0,
  setSubjectNumber: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
  saveEnabled: false,
  setSaveEnabled: () => {},
  optionChecked: false,
  setOptionChecked: () => {},
  mcqArray: [],
  setMcqArray: () => {},
  updateSelectedOption: () => {},
  attemptMCQ: () => {},
  reviewMCQ: () => {},
});

export default context;
