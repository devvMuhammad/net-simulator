/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import context from "../context";
import saveButton from "../images/Save.png";
import saveButtonDisabled from "../images/DisabledSave.png";
import nextButton from "../images/next.png";
import nextButtonDisabled from "../images/nextDisabled.png";
import previousButton from "../images/previousButton.png";
import previousButtonDisabled from "../images/previousDisabled.png";
import lastButton from "../images/last.png";
import firstButton from "../images/First.png";
import helpButton from "../images/help.png";
import nextSectionButton from "../images/NextSection.png";
import nextSectionButtonDisabled from "../images/NextSectionDisabled.png";
import previousSectionButton from "../images/PreviousSection.png";
import previousSectionDisabled from "../images/PreviousSectionDisabled.png";
import reviewButton from "../images/Review.png";
import reviewButtonDisabled from "../images/DisabledReview.png";

const FinalSection = () => {
  //States
  const [nextEnabled, setNextEnabled] = useState(true);
  const [nextSectionEnabled, setNextSectionEnabled] = useState(true);
  const [previousEnabled, setPreviousEnabled] = useState(false);
  const [previousSectionEnabled, setPreviousSectionEnabled] = useState(false);
  //Context
  const {
    questionNumber,
    setQuestionNumber,
    subjectNumber,
    setSubjectNumber,
    mcqArray,
    saveEnabled,
    setSaveEnabled,
    setOptionChecked,
  } = useContext(context);
  //Important constants.
  const currentSubjectMCQsLength = mcqArray[subjectNumber].questions.length;
  const numberOfSubjects = mcqArray.length;
  //UseEffect
  useEffect(() => {
    setPreviousEnabled(
      subjectNumber === 0 && questionNumber === 0 ? false : true
    );
    setNextEnabled(
      subjectNumber === numberOfSubjects - 1 &&
        questionNumber === currentSubjectMCQsLength - 1
        ? false
        : true
    );
    setNextSectionEnabled(
      subjectNumber === numberOfSubjects - 1 ? false : true
    );
    setPreviousSectionEnabled(subjectNumber === 0 ? false : true);
  }, [subjectNumber, questionNumber]);
  // Handler functions.
  const nextHandler = (e) => {
    if (questionNumber === currentSubjectMCQsLength - 1) {
      setSubjectNumber((num) => (num >= numberOfSubjects ? 0 : num + 1)); //Reset for last subject, otherwise increment normally
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber((num) => num + 1);
    setSaveEnabled(false);
    // setOptionChecked(false);
  };

  const prevHandler = (e) => {
    //At first question, the prev button should send you to the previous secion.
    if (questionNumber === 0) {
      setSubjectNumber((num) => (num <= 0 ? 0 : num - 1));
      subjectNumber === 0
        ? setQuestionNumber(0) //For maths, don't go more back. Otherwise, go back one subject.
        : setQuestionNumber(currentSubjectMCQsLength - 1);
      return;
    }
    setQuestionNumber((num) => num - 1);
  };

  const nextSectionHandler = (e) => {
    if (subjectNumber === numberOfSubjects - 1) {
      setSubjectNumber(0); //return to first section.
      return;
    }
    setSubjectNumber((num) => num + 1);
    setQuestionNumber(0);
  };

  const previousSectionHandler = (e) => {
    if (subjectNumber === 0) {
      //Disable the button.
      return;
    }
    setSubjectNumber((num) => num - 1);
    setQuestionNumber(0);
  };

  const firstHandler = (e) => {
    setSubjectNumber(0);
    setQuestionNumber(0);
  };

  const lastHandler = (e) => {
    setSubjectNumber(numberOfSubjects - 1);
    setQuestionNumber(currentSubjectMCQsLength - 1);
  };

  return (
    <section id="final-section">
      <div className="functionalities">
        <div className="dropdown-container">
          <select
            name="status"
            className="dropdown"
            // onChange={dropDownChangeHandler}
            // onClick={dropDownClickHandler}
          >
            <option value="attempted">Attempted</option>
            <option value="reviewable">Reviewable</option>
            <option value="unattempted">Unattempted</option>
          </select>
        </div>
        <div className="buttons-container">
          <div className="buttons-list">
            <input
              type="image"
              src={saveEnabled ? saveButton : saveButtonDisabled}
              alt="save"
              disabled={!nextEnabled}
            />
            <input
              type="image"
              src={nextEnabled ? nextButton : nextButtonDisabled}
              alt="save"
              onClick={nextHandler}
              disabled={!nextEnabled}
            />
            <input
              type="image"
              src={previousEnabled ? previousButton : previousButtonDisabled}
              alt="save"
              onClick={prevHandler}
              disabled={!previousEnabled}
            />
            <input type="image" src={reviewButton} alt="save" />
            <input
              type="image"
              src={
                nextSectionEnabled
                  ? nextSectionButton
                  : nextSectionButtonDisabled
              }
              alt="save"
              onClick={nextSectionHandler}
              disabled={!nextSectionEnabled}
            />
            <input
              type="image"
              src={
                previousSectionEnabled
                  ? previousSectionButton
                  : previousSectionDisabled
              }
              alt="save"
              onClick={previousSectionHandler}
              disabled={!previousSectionEnabled}
            />
            <input
              type="image"
              src={firstButton}
              alt="save"
              onClick={firstHandler}
            />
            <input
              type="image"
              src={lastButton}
              alt="save"
              onClick={lastHandler}
            />
            <input type="image" src={helpButton} alt="save" />
          </div>
        </div>
      </div>
      <div className="finish-test">
        <p className="finishing-paragraph">
          Click here to <span>FINISH</span> your test!
        </p>
      </div>
    </section>
  );
};

export default FinalSection;
