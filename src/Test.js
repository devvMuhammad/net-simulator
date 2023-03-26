/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo, useContext } from "react";
import "./App.css";
import { subjectAndQuestionContext, mcqContext, saveContext } from "./context";
import Ending from "./components/Ending";
import Functionalities from "./components/Functionalities";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import OptionsSection from "./components/OptionsSection";
import SecondSection from "./components/SecondSection";
import testContext from "./testContext";

function Test({ mcqBank }) {
  const [subjectNumber, setSubjectNumber] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [otherQuestionNumber, setOtherQuestionNumber] = useState(1);
  const [outOf, setOutOf] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("All");
  const [allMCQs, setAllMCQs] = useState([...mcqBank]);
  // const [otherMCQs, setOtherMCQs] = useState();
  const [mcqArray, setMcqArray] = useState([...mcqBank]);
  const allMCQsNumber = useMemo(() => {
    return mcqBank.reduce((acc, elm) => acc + elm.questions.length, 0);
  }, [mcqBank]);

  const { testFinished } = useContext(testContext);

  const subjectAndQuestionContextObject = {
    subjectNumber,
    setSubjectNumber,
    questionNumber,
    setQuestionNumber,
    otherQuestionNumber,
    setOtherQuestionNumber,
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
    setMcqArray((prevState) => {
      return prevState.map((subject) => {
        subject.questions.forEach((mcq) => {
          mcq.selectedOption = "";
          mcq.category = "unattempted";
        });
      });
    });
    setQuestionNumber(0);
    setOtherQuestionNumber(1);
    setSubjectNumber(0);
  }, [testFinished]);

  function filterMcqArray(category) {
    let filteredMCQs = mcqArray.reduce((acc, elm) => {
      const filteredQuestions = elm.questions.filter(
        (question) => question.category === category
      );
      if (filteredQuestions.length !== 0) {
        acc.push({ ...elm, questions: filteredQuestions });
      }
      return acc;
    }, []);

    let totalQuestions = 0;
    filteredMCQs.map((elm) => (totalQuestions += elm.questions.length));
    if (totalQuestions === 0) {
      setDropdownValue("All");
      return;
    }
    setMcqArray(filteredMCQs);
    setOutOf(totalQuestions);
    setSubjectNumber(0);
    setQuestionNumber(0);
    setOtherQuestionNumber(1);
  }

  useEffect(() => {
    if (dropdownValue === "Attempted") filterMcqArray("attempted");
    if (dropdownValue === "Reviewable") filterMcqArray("reviewable");
    if (dropdownValue === "Unattempted") filterMcqArray("unattempted");
    if (dropdownValue === "All") {
      setSubjectNumber(0);
      setQuestionNumber(0);
      setOutOf(allMCQsNumber);
      setMcqArray(allMCQs);
    }
  }, [dropdownValue]);

  return (
    <>
      <mcqContext.Provider value={mcqContextObject}>
        <subjectAndQuestionContext.Provider
          value={subjectAndQuestionContextObject}
        >
          <Header />
          <FirstSection dropdownValue={dropdownValue} outOf={outOf} />
          <SecondSection />
          <saveContext.Provider value={saveContextObject}>
            <OptionsSection dropdownValue={dropdownValue} />
            <Functionalities
              setDropdownValue={setDropdownValue}
              dropdownValue={dropdownValue}
              outOf={outOf}
            />
          </saveContext.Provider>
          <Ending />
        </subjectAndQuestionContext.Provider>
      </mcqContext.Provider>
    </>
  );
}

export default Test;
