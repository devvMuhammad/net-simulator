import React, { useContext } from "react";
import "../App.css";
import {
  subjectAndQuestionContext,
  mcqContext,
  dropdownContext,
} from "../context";
import studentImage from "../student-image.jpg";

const FirstSection = ({ outOf }) => {
  const { mcqArray } = useContext(mcqContext);
  const { dropdownValue } = useContext(dropdownContext);
  const { subjectNumber, questionNumber, otherQuestionNumber } = useContext(
    subjectAndQuestionContext
  );

  return (
    <section id="first-section">
      <div className="question">
        <div className="question-number">
          <h4>Question No:</h4>
          <span className="question-number-out-of">
            {" "}
            {dropdownValue === "All"
              ? questionNumber + 1
              : otherQuestionNumber}{" "}
            of{" "}
            {dropdownValue === "All"
              ? mcqArray[subjectNumber].questions.length
              : outOf}
          </span>
        </div>
        <div className="question-statement">
          <span>Question</span>
          <textarea
            readOnly={true}
            className="question-text-area"
            rows="7"
            spellCheck="false"
            value={mcqArray[subjectNumber].questions[questionNumber].question}
          />
        </div>
      </div>
      <div className="image">
        <span className="photograph-span">Photograph</span>
        <img className="student-image" src={studentImage} alt="tasvir" />
      </div>
    </section>
  );
};

export default FirstSection;
