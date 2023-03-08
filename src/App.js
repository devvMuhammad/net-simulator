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
  const [allMCQs, setAllMCQs] = useState(mcqBank);
  // const [otherMCQs, setOtherMCQs] = useState();
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
      let totalQuestions = 0;
      attemptedMCQs.map((elm) => (totalQuestions += elm.questions.length));
      // console.log(totalQuestions);
      if (totalQuestions === 0) return;
      setMcqArray(attemptedMCQs);
      setSubjectNumber(0);
      setQuestionNumber(0);
      console.log("Hi from below");
    }
    if (dropdownValue === "Reviewable") {
      const reviewableMCQs = mcqArray.map((elm) => {
        return {
          ...elm,
          questions: elm.questions.filter(
            (question) => question.category === "reviewable"
          ),
        };
      });
      let totalQuestions = 0;
      reviewableMCQs.map((elm) => (totalQuestions += elm.questions.length));
      console.log(totalQuestions);
      if (totalQuestions === 0) return;
      setMcqArray(reviewableMCQs);
      setSubjectNumber(0);
      setQuestionNumber(0);
      console.log("Hi from below");
    }
    if (dropdownValue === "Unattempted") {
      const unattemptedMCQs = mcqArray.map((elm) => {
        return {
          ...elm,
          questions: elm.questions.filter(
            (question) => question.category === "unattempted"
          ),
        };
      });
      let totalQuestions = 0;
      unattemptedMCQs.map((elm) => (totalQuestions += elm.questions.length));
      // console.log(totalQuestions);
      if (totalQuestions === 0) return;
      setMcqArray(unattemptedMCQs);
      setSubjectNumber(0);
      setQuestionNumber(0);
      // console.log("Hi from below");
    }
    if (dropdownValue === "All") {
      setSubjectNumber(0);
      setQuestionNumber(0);
      setMcqArray(allMCQs);
    }
  }, [dropdownValue]);
  // console.log(mcqArray);
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
            <Functionalities setDropdownValue={setDropdownValue} />
          </saveContext.Provider>
          <Ending />
        </subjectAndQuestionContext.Provider>
      </mcqContext.Provider>
    </>
  );
}

export default App;
