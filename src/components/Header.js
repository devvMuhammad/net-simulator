import React, { useContext } from "react";
import "../App.css";
import { mcqContext, subjectAndQuestionContext } from "../context";

const Header = () => {
  const { subjectNumber } = useContext(subjectAndQuestionContext);
  const { mcqArray } = useContext(mcqContext);

  return (
    <header>
      <p className="subject">{mcqArray[subjectNumber].subject}</p>
      <p className="test-type">
        Engineering/Computer Science/BS Mathematics (With Chemistry)
      </p>
      <p className="net-demo">
        <span className="studentID">STUDENTID</span>
        <span className="studentName">(NAME)</span>
      </p>
    </header>
  );
};

export default Header;
