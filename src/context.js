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
export const subjectAndQuestionContext = createContext({
  subjectNumber: 0,
  setSubjectNumber: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
});

export const mcqContext = createContext({
  mcqArray: [],
  setMcqArray: () => {},
});

export const saveContext = createContext({
  saveEnabled: false,
  setSaveEnabled: () => {},
});

export default context;
