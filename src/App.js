/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { subjectAndQuestionContext, mcqContext, saveContext } from "./context";
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
  const [dropdownValue, setDropdownValue] = useState("All");
  const [mcqArray, setMcqArray] = useState(mcqBank);

  const subjectAndQuestionContextObject = {
    subjectNumber,
    setSubjectNumber,
    questionNumber,
    setQuestionNumber,
  };
  const mcqContextObject = {
    mcqArray,
    setMcqArray,
  };
  const saveContextObject = {
    saveEnabled,
    setSaveEnabled,
  };
  useEffect(() => {
    console.log(dropdownValue);
    if (dropdownValue === "Attempted") {
      const attemptedMCQs = mcqArray.map((elm) => {
        return {
          ...elm,
          questions: elm.questions.filter(
            (question) => question.category === "attempted"
          ),
        };
      });
      setMcqArray(attemptedMCQs);
      setSubjectNumber(0);
      setQuestionNumber(0);
    }
    if (dropdownValue === "All") {
      setMcqArray(mcqBank);
    }
  }, [dropdownValue]);
  console.log(mcqArray);
  return (
    <>
      <mcqContext.Provider value={mcqContextObject}>
        <subjectAndQuestionContext.Provider
          value={subjectAndQuestionContextObject}
        >
          <Header />
          <FirstSection />
          <SecondSection />
          <saveContext.Provider value={saveContextObject}>
            <OptionsSection />
            <Functionalities
              dropdownValue={dropdownValue}
              setDropdownValue={setDropdownValue}
            />
          </saveContext.Provider>
          <Ending />
        </subjectAndQuestionContext.Provider>
      </mcqContext.Provider>
    </>
  );
}

export default App;
