import React, { useContext } from "react";
import "../App.css";
import context from "../context";
import studentImage from "../student-image.jpg";

const FirstSection = () => {
  const { subjectNumber, questionNumber, mcqArray } = useContext(context);
  return (
    <section id="first-section">
      <div className="question">
        <div className="question-number">
          <h4>Question No:</h4>
          <span className="question-number-out-of">
            {" "}
            {questionNumber + 1} of {mcqArray[subjectNumber].questions.length}
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
