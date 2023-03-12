/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { mcqContext, saveContext, subjectAndQuestionContext } from "../context";
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
import _ from "lodash";

const Functionalities = ({ setDropdownValue, dropdownValue, outOf }) => {
  //States
  const [nextEnabled, setNextEnabled] = useState(true);
  const [nextSectionEnabled, setNextSectionEnabled] = useState(true);
  const [previousEnabled, setPreviousEnabled] = useState(false);
  const [previousSectionEnabled, setPreviousSectionEnabled] = useState(false);
  const [reviewEnabled, setReviewEnabled] = useState(false);
  const [allDropdownValue, setAllDropdownValue] = useState();
  //Context
  const {
    questionNumber,
    setQuestionNumber,
    subjectNumber,
    setSubjectNumber,
    otherQuestionNumber,
    setOtherQuestionNumber,
  } = useContext(subjectAndQuestionContext);
  const { mcqArray, setMcqArray } = useContext(mcqContext);
  const { saveEnabled, setSaveEnabled } = useContext(saveContext); // saveState enabled in optionsSection
  //Important constants.
  let currentSubjectMCQsLength = mcqArray[subjectNumber].questions.length;
  let numberOfSubjects = mcqArray.length;
  const subjectMCQs = mcqArray.map((elm) => elm.questions.length);
  //UseEffect
  useEffect(() => {
    setPreviousEnabled(
      subjectNumber === 0 && questionNumber === 0 ? false : true
    );

    setNextSectionEnabled(() => {
      if (dropdownValue !== "All") {
        return false;
      } else {
        return subjectNumber === numberOfSubjects - 1 ? false : true;
      }
    });
    setPreviousSectionEnabled(() => {
      if (dropdownValue !== "All") {
        return false;
      } else {
        return subjectNumber === 0 ? false : true;
      }
    });
    setReviewEnabled(false);
  }, [subjectNumber, questionNumber, dropdownValue]);

  useEffect(() => {
    setNextEnabled(() => {
      if (dropdownValue !== "All") {
        //Next button should never be disabled for 'unattem','reviewable' and 'attemepted'
        return true;
      } else {
        return subjectNumber === numberOfSubjects - 1 &&
          questionNumber === currentSubjectMCQsLength - 1
          ? false
          : true;
      }
    });
  }, [subjectNumber, questionNumber, dropdownValue, mcqArray]);
  // Handler functions.
  const nextHandler = () => {
    if (dropdownValue !== "All") {
      if (otherQuestionNumber >= outOf) {
        //Hitting next at last question should send you to 'all'.
        setDropdownValue("All");
        return;
      }
      setOtherQuestionNumber((num) => num + 1);
    }
    if (questionNumber === currentSubjectMCQsLength - 1) {
      setSubjectNumber((num) => (num >= numberOfSubjects ? 0 : num + 1)); //Reset for last subject, otherwise increment normally
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber((num) => num + 1);
  };
  const prevHandler = () => {
    if (dropdownValue !== "All") {
      setOtherQuestionNumber((num) => num - 1); // it has to decrement, no matter what.
    }
    if (questionNumber === 0 && subjectNumber > 0) {
      const previousSubjectMCQsLength =
        mcqArray[subjectNumber - 1].questions.length;
      //At first question, the prev button should send you to the previous secion.
      setSubjectNumber((num) => (num <= 0 ? 0 : num - 1));
      setQuestionNumber(previousSubjectMCQsLength - 1);
      return;
    }
    setQuestionNumber((num) => num - 1);
  };

  const saveHandler = () => {
    console.log("Hi dear!");
    attemptMCQ();
    if (dropdownValue === "Reviewable") {
      setReviewEnabled(false);
      nextHandler();
      return;
    }
    setReviewEnabled(dropdownValue === "Reviewable" ? false : true);
    setSaveEnabled(false);
  };

  const reviewHandler = () => {
    reviewMCQ();
    setReviewEnabled(false);
  };

  const nextSectionHandler = () => {
    if (subjectNumber === numberOfSubjects - 1) {
      setSubjectNumber(0); //return to first section.
      return;
    }
    setSubjectNumber((num) => num + 1);
    setQuestionNumber(0);
  };

  const previousSectionHandler = () => {
    if (subjectNumber === 0) {
      //Disable the button.
      return;
    }
    setSubjectNumber((num) => num - 1);
    setQuestionNumber(0);
  };

  const firstHandler = () => {
    if (dropdownValue !== "All") {
      setOtherQuestionNumber(1);
    }
    setSubjectNumber(0);
    setQuestionNumber(0);
  };

  const lastHandler = () => {
    if (dropdownValue !== "All") {
      setOtherQuestionNumber(outOf);
    }
    setSubjectNumber(numberOfSubjects - 1);
    setQuestionNumber(currentSubjectMCQsLength - 1);
    setAllDropdownValue(outOf);
  };

  const updateQuestionCategory = (category) => {
    return () => {
      setMcqArray((prevState) => {
        const copyOfMcqArray = [...prevState];
        copyOfMcqArray[subjectNumber].questions[questionNumber].category =
          category;
        return copyOfMcqArray;
      });
    };
  };
  const attemptMCQ = updateQuestionCategory("attempted");
  const reviewMCQ = updateQuestionCategory("reviewable");

  const dropdownChangeHandler = (event) => {
    setDropdownValue(event.target.value);
  };

  function convertDropdownToQuestionNumber(value, subjectMCQs) {
    let cumulativeSum = 0;
    const breakpointsArray = subjectMCQs.reduce((acc, curr, i) => {
      cumulativeSum += curr;
      acc.push(cumulativeSum);
      return acc;
    }, []);
    if (value <= breakpointsArray[0]) {
      return [value, 0];
    }
    let result;
    if (
      value > breakpointsArray[breakpointsArray.length - 2] &&
      value <= breakpointsArray[breakpointsArray.length - 1]
    ) {
      result = value - breakpointsArray[breakpointsArray.length - 2];
      return [result, breakpointsArray.length - 1];
    }
    let iteration;
    breakpointsArray.forEach((elm, i) => {
      if (value > breakpointsArray[i] && value <= breakpointsArray[i + 1]) {
        iteration = i + 1;
        result = value - breakpointsArray[i];
      }
    });
    return [result, iteration];
  }

  useEffect(() => {
    setAllDropdownValue(1);
  }, [dropdownValue]);

  useEffect(() => {
    const [properQuestionNumber, iteration] = convertDropdownToQuestionNumber(
      allDropdownValue,
      subjectMCQs
    );
    if (dropdownValue !== "All") setOtherQuestionNumber(allDropdownValue);
    setQuestionNumber(properQuestionNumber - 1);
    setSubjectNumber(iteration);
  }, [allDropdownValue, dropdownValue]);

  const allDropdownChangeHandler = (event) => {
    setAllDropdownValue(event.target.value);
  };

  return (
    <section id="final-section">
      <div className="functionalities">
        <div className="dropdown-container">
          <select
            name="status"
            className="dropdown allDropdown"
            onChange={allDropdownChangeHandler}
            value={allDropdownValue}
          >
            {[...Array(outOf)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <select
            name="status"
            className="dropdown"
            onChange={dropdownChangeHandler}
            value={dropdownValue}
          >
            <option value="All">All</option>
            <option value="Attempted">Attempted</option>
            <option value="Reviewable">Reviewable</option>
            <option value="Unattempted">Unattempted</option>
          </select>
        </div>
        <div className="buttons-container">
          <div className="buttons-list">
            <input
              type="image"
              src={saveEnabled ? saveButton : saveButtonDisabled}
              alt="save"
              onClick={saveHandler}
              disabled={!saveEnabled}
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
            <input
              type="image"
              src={reviewEnabled ? reviewButton : reviewButtonDisabled}
              alt="save"
              onClick={reviewHandler}
              disabled={!reviewEnabled}
            />
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

export default Functionalities;
