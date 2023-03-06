/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import {
  subjectAndQuestionContext,
  mcqContext,
  saveAndOptionContext,
} from "./context";
import Ending from "./components/Ending";
import Functionalities from "./components/Functionalities";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import OptionsSection from "./components/OptionsSection";
import SecondSection from "./components/SecondSection";
import mcqBank from "./mcqArray";

function App() {
  const [subjectNumber, setSubjectNumber] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [optionChecked, setOptionChecked] = useState(false);
  const [mcqArray, setMcqArray] = useState(mcqBank);

  // const contextObject = {
  //   subjectNumber,
  //   setSubjectNumber,
  //   questionNumber,
  //   setQuestionNumber,
  //   saveEnabled,
  //   setSaveEnabled,
  //   mcqArray,
  //   setMcqArray,
  //   updateSelectedOption,
  //   attemptMCQ,
  //   reviewMCQ,
  // };
  const subjectAndQuestionContextObject = {
    subjectNumber,
    setSubjectNumber,
    questionNumber,
    setQuestionNumber,
  };
  const mcqContextObject = {
    mcqArray: mcqBank,
    setMcqArray,
  };
  const saveAndOptionContextObject = {
    saveEnabled,
    setSaveEnabled,
    optionChecked,
    setOptionChecked,
  };
  // const mainActionsContext = {
  //   updateSelectedOption,
  //   attemptMCQ,
  //   reviewMCQ,
  // };
  return (
    <>
      <mcqContext.Provider value={mcqContextObject}>
        <subjectAndQuestionContext.Provider
          value={subjectAndQuestionContextObject}
        >
          <Header />
          <FirstSection />
          <SecondSection />
          <saveAndOptionContext.Provider value={saveAndOptionContextObject}>
            <OptionsSection />
            <Functionalities />
          </saveAndOptionContext.Provider>
          <Ending />
        </subjectAndQuestionContext.Provider>
      </mcqContext.Provider>
    </>
  );
}

export default App;
